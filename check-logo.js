import fs from 'fs';
const stats = fs.statSync('./public/logo.jpg');
console.log('Size:', stats.size);
