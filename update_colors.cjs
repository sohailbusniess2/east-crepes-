const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace text-blue-950, text-blue-900, text-blue-800 with text-blue-400
content = content.replace(/text-blue-950/g, 'text-blue-400');
content = content.replace(/text-blue-900/g, 'text-blue-400');
content = content.replace(/text-blue-800/g, 'text-blue-400');

fs.writeFileSync('src/App.tsx', content);
console.log('Colors updated');
