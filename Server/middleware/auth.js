// middleware/auth.js

const predefinedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGVjNWVhNzJmZTg3MDhlNDExMDEzZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MTY3OTQ4MTEsImV4cCI6MTcxNjc5ODQxMX0.WmmMquchJPTykhUnZsnoUnTZBRVl4VwCRkkq1kW2qE4';

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Check if token matches the predefined token
  if (token === predefinedToken) {
    // Manually set user data
    req.user = {
      id: '665463a71b7216b02c8111f0', // Example user ID
      name: 'dhruv' // Example username
    };
    next();
  } else {
    // Token does not match the predefined token
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};

