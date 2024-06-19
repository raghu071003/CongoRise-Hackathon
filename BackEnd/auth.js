const jwt = require('jsonwebtoken');
const Token = require('./models/Token.js');
require('dotenv').config();
const Users = require('./Models/userSchema.js')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const accessToken = jwt.sign({id:user.id,email:user.email}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN});
        const refreshToken = jwt.sign({id:user.id,email:user.email}, process.env.JWT_SECRET);
        const tokenDocument = new Token({ token: refreshToken, userId: user.id });
        await tokenDocument.save();
        res.json({ accessToken, refreshToken ,message: "Login Successful", user: user });
      } else {
        res.status(401).send('Username or password incorrect');
      }
    }
    else {
      res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (e) {
    console.error(e);
  }
    
};

const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    await Token.findOneAndDelete({ token });
    res.status(200).send('Logout successful');
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const refresh = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).send('Refresh Token required');

  const tokenDocument = await Token.findOne({ token });

  if (!tokenDocument) return res.status(403).send('Invalid Refresh Token');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');

    const accessToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ accessToken });
  });
};

module.exports = { login, logout, refresh };
