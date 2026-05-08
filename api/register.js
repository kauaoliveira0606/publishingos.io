module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { first_name, last_name, email, phone, phone_country } = req.body || {};

  if (!first_name || !last_name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.webinarjam_api_key;
  const webinarId = process.env.webinarjam_webinar_id;

  if (!apiKey || !webinarId) {
    return res.status(500).json({ error: 'Missing API config. Check environment variables in Vercel.' });
  }

  try {
    // Step 1: get schedule_id automatically from webinar details
    const detailsRes = await fetch('https://api.webinarjam.com/webinarjam/webinar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ api_key: apiKey, webinar_id: webinarId }).toString(),
    });
    const details = await detailsRes.json();
    if (details.status !== 'success') {
      return res.status(400).json({ error: 'Could not fetch webinar details: ' + JSON.stringify(details) });
    }
    const scheduleId = details.webinar.schedules[0].schedule;

    // Step 2: register the attendee
    const params = new URLSearchParams();
    params.append('api_key', apiKey);
    params.append('webinar_id', webinarId);
    params.append('schedule', scheduleId);
    params.append('first_name', first_name);
    params.append('last_name', last_name);
    params.append('email', email);
    if (phone) {
      const countryCode = (phone_country || '+1').replace('+', '');
      const digits = phone.replace(/\D/g, '');
      params.append('phone', '+' + countryCode + digits);
    }

    const regRes = await fetch('https://api.webinarjam.com/webinarjam/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const text = await regRes.text();
    let data;
    try { data = JSON.parse(text); } catch { return res.status(500).json({ error: 'Invalid response: ' + text }); }

    if (data.status === 'success') {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: JSON.stringify(data) });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Error: ' + err.message });
  }
};
