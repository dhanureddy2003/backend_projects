// const crypto = require('crypto');
import crypto from 'crypto'
// Generate a random secret of specified length (e.g., 64 characters)
const generateSecret = (length) => {
    return crypto.randomBytes(length).toString('hex');
};

// Generate access token secret
const accessTokenSecret = generateSecret(32); // 32 bytes = 256 bits
console.log('Access Token Secret:', accessTokenSecret);

// Generate refresh token secret
const refreshTokenSecret = generateSecret(32); // 32 bytes = 256 bits
console.log('Refresh Token Secret:', refreshTokenSecret);
