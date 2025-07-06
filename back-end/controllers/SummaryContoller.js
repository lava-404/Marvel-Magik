const { GoogleGenerativeAI } = require("@google/generative-ai")
require('dotenv').config();

const apiKey = process.env.API_SECRET_SUMMARY_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const createSummary = async (req, res) => {

  const { mainChar, first, second, third } = req.body; 

  const model = genAI.getGenerativeModel({
    model: "models/gemini-1.5-flash"
  })

  const prompt = `You are a sharp-tongued, charming narrator from a secret agency like S.H.I.E.L.D. or TVA.

                  The user's personality most closely matches ${mainChar} with a match percentage of ${first.percentage}%.

                  The next two closest matches are ${second.char} (${second.percentage}%) and ${third.char} (${third.percentage}%).

                  Create a short, intriguing, sassy, and personality-rich summary for a user based on their Marvel character alignment.

                  Tone:

                  Clever and mysterious

                  Encouraging and intriguing

                  A little sassy, with dramatic flair

                  Marvel-esque humor and voice

                  The summary should:

                  Be under 100 words

                  Start with something like: “Psych profile loaded.” or “Variant signature detected.”

                  Mention the top hero traits (with flair, not plain listing)

                  End with a cryptic or dramatic punchline like: “This universe isn’t ready for you.” or “The timelines just got interesting.”

                  Format the output like a classified report from an agency like S.H.I.E.L.D. or TVA. Include an opening line like “Subject profile analysis complete.”

                  Be creative with how the percentages reflect on the person — e.g., “With 34% Captain America, you carry a noble heart wrapped in vintage sarcasm...”

                  End with a cryptic line like “The Multiverse watches. Choose your timeline wisely.”`

  const summary = await model.generateContent(prompt);

  const text = summary.response.text();
    res.json({ reply: text });
}

module.exports = createSummary