const jwt = require('jsonwebtoken');
const Token = require('./Models/Token');
require('dotenv').config();

const refresh = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const refreshToken = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const tokenDocument = await Token.findOne({ token: refreshToken });

    if (!tokenDocument) {
      return res.status(403).json({ message: 'Invalid Refresh Token' });
    }
    const accessToken = jwt.sign(
      { userId: decoded.userId, email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    res.json({ accessToken });
  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = refresh;
