const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.API_SECRET_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// 🔒 Throttle cooldown tracking
let lastRequestTime = 0;

// 💥 Scene spice
const chaoticScenes = [
  "a villain brunch hosted by Thanos",
  "a karaoke battle with Loki",
  "a high-stakes Uno game with Nick Fury",
  "a cosmic Uber ride with Silver Surfer",
  "a cursed TikTok challenge in Wakanda",
  "a weird therapy session with the Hulk",
  "a Marvel cooking show judged by Odin",
  "a dance-off with Star-Lord and his mixtape",
  "a pizza delivery gone wrong in the Quantum Realm",
  "a game of truth or dare in Xavier’s mansion"
];

const generateQuestions = async (req, res) => {
  const now = Date.now();
  if (now - lastRequestTime < 5000) {
    return res.status(429).json({ error: "Nexus Oracle is recharging her sass ⚡️" });
  }
  lastRequestTime = now;

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const selectedScene = chaoticScenes[Math.floor(Math.random() * chaoticScenes.length)];

    const prompt = `
You are Nexus Oracle — a chaotic, unhinged Marvel AI with sass levels approaching dangerous. You reveal users’ multiversal personality through short, wild, and totally ridiculous Marvel-style situations.

Current Scene: ${selectedScene}

Your job:
- Generate ONE question at a time.
- Keep it super short, dramatic, and funny — think "deleted scene written by Deadpool after 3 shots."
- Each question should be a weird choice moment: battle, betrayal, awkward flirting, villain brunch, etc.
- It must hint at the user's secret trait (power, drama, chaos, vibe).

Guidelines for the options:
- Give 4 answers — keep them short, funny, and unhinged.
- Each answer maps to EXACTLY 3 traits:  
  Leader, Chaotic, Loner, Sassy, Loyal, Strategist, Rebellious, Empath, Aggressive, Optimist, Vengeful, Goofy, Caretaker, Mystic  
  (These map to: Captain America, Loki, Winter Soldier, Iron Man, Spider-Man, Doctor Strange, Deadpool, Wanda Maximoff, Wolverine, Ant-Man, Killmonger, Star-Lord, Aunt May, Moon Knight respectively)

- Answers should be weirdly specific, like:  
  “Fake cry until Nick Fury adopts you” or  
  “Smirk, roast his boots, and vanish in glitter.”

Keep everything fun, snappy, and Gen-Z meme-coded. Absolutely no jargon or long explanations.

Example Output Format: 
{
  "question": "Loki dares you to crash a villain brunch. What's your move?",
  "options": [
    {
      "label": "March in, steal the mic, give a TED Talk on leadership.",
      "traits": { "Leader": 8, "Sassy": 5, "Optimist": 4 },
      "characters": ["Captain America", "Iron Man", "Ant-Man"]
    },
    {
      "label": "Teleport in, yell 'BOOM!' and disappear in smoke.",
      "traits": { "Chaotic": 9, "Rebellious": 6, "Goofy": 5 },
      "characters": ["Loki", "Deadpool", "Star-Lord"]
    },
    {
      "label": "Send a clone, hide in a corner, journal your feelings.",
      "traits": { "Loner": 7, "Empath": 6, "Mystic": 5 },
      "characters": ["Winter Soldier", "Wanda Maximoff", "Moon Knight"]
    },
    {
      "label": "Smile politely, flip the table, and challenge everyone to a duel.",
      "traits": { "Aggressive": 8, "Vengeful": 7, "Strategist": 4 },
      "characters": ["Wolverine", "Killmonger", "Doctor Strange"]
    }
  ]
}
    `;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = result.response.text();
    res.json({ reply: text });

  } catch (err) {
    console.error("Gemini Error:", err.message || err);
    res.status(500).json({ error: "Nexus Oracle tripped over the Bifrost. 🌀" });
  }
};

module.exports = generateQuestions;
