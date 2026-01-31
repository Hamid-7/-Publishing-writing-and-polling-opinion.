const fetch = require("node-fetch"); // للتأكد أن fetch موجود

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const chatId = body.message.chat.id;
  const text = body.message.text;

  // ضع توكن البوت هنا مباشرة (Netlify مجاني)
  const TOKEN = "7989742461:AAEuctvJylZYO9VGwvin6ZyIpJwTtxvJ4Vg";

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "🤖 البوت مربوط مع Netlify ويعمل ✅\nرسالتك: " + text
    })
  });

  return {
    statusCode: 200,
    body: "ok",
  };
};
