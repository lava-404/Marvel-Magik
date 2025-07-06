const Users = require('../Models/Users');

const googleAuth = async (req, res) => {
  const { email, name } = req.body;

  try {
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(200).json("User exists, Login Successful");
    }

    // Optional: store name, profile, etc. Password is omitted for Google Auth
    const user = await Users.create({ email, name });

    res.status(200).json("Signup Successful");
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = googleAuth;
