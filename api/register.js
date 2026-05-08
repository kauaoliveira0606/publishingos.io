export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { first_name, last_name, email, phone } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.webinarjam_api_key;
  const webinarId = process.env.webinarjam_webinar_id;

  try {
    const params = new URLSearchParams();
    params.append('api_key', apiKey);
    params.append('webinar_id', webinarId);
    params.append('first_name', first_name);
    params.append('last_name', last_name);
    params.append('email', email);
    if (phone) params.append('phone', phone);

    const response = await fetch('https://api.webinarjam.com/webinarjam/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.status === 'success') {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: JSON.stringify(data) });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
