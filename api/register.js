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
    const response = await fetch('https://api.webinarjam.com/webinarjam/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        webinar_id: webinarId,
        first_name,
        last_name,
        email,
        phone: phone || '',
      }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      return res.status(200).json({ success: true, live_room_url: data.user?.live_room_url });
    } else {
      return res.status(400).json({ error: data.message || 'Registration failed' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
