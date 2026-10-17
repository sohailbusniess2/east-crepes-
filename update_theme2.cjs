const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  // Make text bolder
  [/font-medium/g, 'font-bold'],
  [/font-bold/g, 'font-extrabold'],
  [/font-extrabold/g, 'font-black'],
  
  // Text colors to dark blue/pink for contrast while staying in theme
  [/text-slate-800/g, 'text-blue-950'],
  [/text-slate-700/g, 'text-blue-900'],
  [/text-slate-600/g, 'text-blue-800'],
  
  // Backgrounds to baby pink/blue
  [/bg-sky-400/g, 'bg-blue-300'],
  [/bg-sky-300/g, 'bg-blue-200'],
  [/bg-sky-200/g, 'bg-blue-100'],
  [/bg-sky-100/g, 'bg-blue-50'],
  [/bg-sky-50/g, 'bg-blue-50'],
  
  [/text-sky-600/g, 'text-blue-600'],
  [/text-sky-500/g, 'text-blue-500'],
  [/text-sky-400/g, 'text-blue-400'],
  [/text-sky-300/g, 'text-blue-300'],
  [/text-sky-200/g, 'text-blue-200'],
  [/text-sky-100/g, 'text-blue-100'],
  [/text-sky-50/g, 'text-blue-50'],
  
  [/border-sky-300/g, 'border-blue-300'],
  [/border-sky-200/g, 'border-blue-200'],
  [/border-sky-100/g, 'border-blue-100'],
  
  [/from-sky-300/g, 'from-blue-300'],
  [/via-sky-400/g, 'via-blue-400'],
  [/via-sky-300/g, 'via-blue-300'],
  [/via-sky-200/g, 'via-blue-200'],
  [/to-sky-300/g, 'to-blue-300'],
  [/to-sky-200/g, 'to-blue-200'],
  
  // Ensure pinks are baby pink
  [/bg-pink-400/g, 'bg-pink-300'],
  [/bg-pink-500/g, 'bg-pink-400'],
  [/text-pink-400/g, 'text-pink-500'],
  [/hover:text-pink-400/g, 'hover:text-pink-500'],
  [/hover:bg-pink-400/g, 'hover:bg-pink-300'],
  
  [/bg-slate-800/g, 'bg-blue-950'],
  [/border-slate-700/g, 'border-blue-900'],
];

for (const [regex, replacement] of replacements) {
  content = content.replace(regex, replacement);
}

fs.writeFileSync('src/App.tsx', content);
console.log('Theme updated 2');
