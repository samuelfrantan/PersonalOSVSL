export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone } = req.body || {};
  if (!name || !email || !phone) return res.status(400).json({ error: 'Missing fields' });

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

  const message = `🔥 New AI OS Lead\n\n👤 ${name}\n📧 ${email}\n📱 ${phone}\n\n⚡ Follow up within 24hrs`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });
  } catch (err) {
    // A Telegram hiccup must never surface as a failed submission to the lead.
    console.error('Telegram notify failed:', err);
  }

  return res.status(200).json({ ok: true });
}
