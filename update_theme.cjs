const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  // Text colors (darker for readability)
  [/text-blue-950/g, 'text-slate-800'],
  [/text-blue-900/g, 'text-slate-700'],
  [/text-blue-800/g, 'text-slate-600'],
  [/text-pink-800/g, 'text-slate-700'],
  [/text-pink-700/g, 'text-pink-500'],
  [/text-pink-600/g, 'text-pink-500'],
  [/text-pink-500/g, 'text-pink-400'],
  [/text-blue-700/g, 'text-sky-600'],
  [/text-blue-600/g, 'text-sky-500'],
  
  // Backgrounds & Gradients
  [/bg-pink-600/g, 'bg-pink-400'],
  [/bg-pink-500/g, 'bg-pink-300'],
  [/bg-blue-600/g, 'bg-sky-300'],
  [/bg-blue-700/g, 'bg-sky-400'],
  [/bg-blue-900/g, 'bg-sky-200'],
  [/bg-blue-950/g, 'bg-slate-800'],
  
  [/from-pink-500/g, 'from-pink-300'],
  [/via-pink-600/g, 'via-pink-400'],
  [/to-pink-500/g, 'to-pink-300'],
  [/to-pink-600/g, 'to-pink-400'],
  [/to-pink-700/g, 'to-pink-500'],
  
  [/from-blue-600/g, 'from-sky-300'],
  [/via-blue-600/g, 'via-sky-400'],
  [/to-blue-600/g, 'to-sky-300'],
  [/to-blue-500/g, 'to-sky-300'],
  
  [/from-pink-400/g, 'from-pink-200'],
  [/via-pink-300/g, 'via-pink-200'],
  [/to-blue-400/g, 'to-sky-200'],
  
  [/from-sky-300/g, 'from-sky-200'],
  [/via-blue-300/g, 'via-sky-200'],
  
  [/from-purple-500/g, 'from-pink-300'],
  [/via-purple-500/g, 'via-sky-300'],
  [/via-purple-600/g, 'via-sky-400'],
  
  // Borders
  [/border-pink-200/g, 'border-pink-200'],
  [/border-blue-200/g, 'border-sky-200'],
  [/border-blue-100/g, 'border-sky-100'],
  [/border-blue-900/g, 'border-slate-700'],
  [/border-blue-700/g, 'border-sky-300'],
  
  // Hover states
  [/hover:bg-pink-600/g, 'hover:bg-pink-400'],
  [/hover:bg-pink-700/g, 'hover:bg-pink-500'],
  [/hover:bg-blue-700/g, 'hover:bg-sky-400'],
  [/hover:text-pink-700/g, 'hover:text-pink-500'],
  [/hover:text-pink-600/g, 'hover:text-pink-500'],
  [/hover:text-pink-500/g, 'hover:text-pink-400'],
  [/hover:bg-blue-50/g, 'hover:bg-sky-50'],
  
  // Selection
  [/selection:bg-pink-300/g, 'selection:bg-pink-200'],
  
  // Misc
  [/text-blue-50/g, 'text-sky-50'],
  [/text-blue-100/g, 'text-sky-100'],
  [/text-blue-200/g, 'text-sky-200'],
  [/text-blue-300/g, 'text-sky-300'],
  [/text-blue-400/g, 'text-sky-400'],
  [/bg-blue-50/g, 'bg-sky-50'],
  [/bg-blue-100/g, 'bg-sky-100'],
  [/bg-blue-200/g, 'bg-sky-200'],
  [/bg-blue-300/g, 'bg-sky-300'],
  [/bg-blue-400/g, 'bg-sky-400'],
  [/bg-blue-500/g, 'bg-sky-300'],
];

for (const [regex, replacement] of replacements) {
  content = content.replace(regex, replacement);
}

// Ensure text on baby pink/blue buttons is readable
content = content.replace(/bg-pink-300 hover:bg-pink-400 text-white/g, 'bg-pink-300 hover:bg-pink-400 text-slate-800');
content = content.replace(/bg-sky-300 hover:bg-sky-400 text-white/g, 'bg-sky-300 hover:bg-sky-400 text-slate-800');
content = content.replace(/text-white px-8 py-4 rounded-full font-black/g, 'text-slate-800 px-8 py-4 rounded-full font-black');
content = content.replace(/text-white text-center/g, 'text-slate-800 text-center');

fs.writeFileSync('src/App.tsx', content);
console.log('Theme updated');
