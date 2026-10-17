const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Category Name
content = content.replace(
  /<h4 className="text-2xl font-black mb-8 text-blue-950 border-b border-pink-200 pb-4 uppercase tracking-wide">/g,
  '<h4 className="text-2xl font-black mb-8 text-blue-500 border-b border-pink-200 pb-4 uppercase tracking-wide">'
);

// Item Name
content = content.replace(
  /<h5 className="font-black text-lg text-blue-900 group-hover:text-pink-500 transition-colors flex items-center gap-2">/g,
  '<h5 className="font-black text-lg text-blue-500 group-hover:text-pink-500 transition-colors flex items-center gap-2">'
);

// Item Description
content = content.replace(
  /<p className="text-blue-800 font-black mt-2 leading-relaxed text-sm">/g,
  '<p className="text-blue-400 font-black mt-2 leading-relaxed text-sm">'
);

// Menu section title
content = content.replace(
  /<h2 className="text-5xl font-black mb-6 text-white tracking-tight drop-shadow-md">Our Menu<\/h2>/g,
  '<h2 className="text-5xl font-black mb-6 text-blue-500 tracking-tight drop-shadow-md">Our Menu</h2>'
);

// Menu section subtitle
content = content.replace(
  /<p className="text-pink-50 max-w-2xl mx-auto font-black drop-shadow">/g,
  '<p className="text-blue-500 max-w-2xl mx-auto font-black drop-shadow">'
);

// Menu section category titles
content = content.replace(
  /<h3 className="text-4xl font-black mb-3 text-white tracking-tight drop-shadow-md">/g,
  '<h3 className="text-4xl font-black mb-3 text-blue-500 tracking-tight drop-shadow-md">'
);

// Note: "Note" text
content = content.replace(
  /<p className="text-pink-100 font-black uppercase tracking-wider text-sm drop-shadow">/g,
  '<p className="text-blue-400 font-black uppercase tracking-wider text-sm drop-shadow">'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Menu text updated to baby blue');
