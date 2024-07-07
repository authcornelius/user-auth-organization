const crypto = require('crypto');

// Generate a symmetric key (e.g., AES-256)
const symmetricKey = crypto.randomBytes(32); // 32 bytes for AES-256
console.log(symmetricKey.toString('hex'));

