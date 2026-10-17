const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Quick Links
content = content.replace(
  /\{\[\s*\{\s*title:\s*"Our Story".*?\]\.map\(\(item,\s*idx\)\s*=>\s*\(\s*<motion\.a[\s\S]*?<\/motion\.a>\s*\)\)/,
  `{[
            { title: "Our Story", link: "#about", icon: "📖", color: "pink" },
            { title: "Our Menu", link: "#menu", icon: "🥞", color: "blue" },
            { title: "Locations", link: "#locations", icon: "📍", color: "pink" },
            { title: "Events", link: "#events", icon: "🚚", color: "blue" },
            { title: "Feedback", link: "#feedback", icon: "⭐", color: "pink" },
            { title: "Gallery", link: "#gallery", icon: "📸", color: "blue" },
          ].map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={\`bg-white/90 backdrop-blur-md hover:bg-white p-6 rounded-3xl shadow-lg border \${item.color === 'pink' ? 'border-pink-200' : 'border-blue-200'} hover:shadow-xl hover:-translate-y-2 transition-all text-center group flex flex-col items-center gap-3\`}
            >
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className={\`text-lg md:text-xl font-black \${item.color === 'pink' ? 'text-pink-400 group-hover:text-pink-500' : 'text-blue-400 group-hover:text-blue-500'} transition-colors\`}>{item.title}</h3>
            </motion.a>
          ))`
);

// 2. Section Headings
content = content.replace(
  /<h2 className="text-4xl md:text-5xl font-black mb-8 text-blue-950 tracking-tight">Our Story<\/h2>/g,
  '<h2 className="text-4xl md:text-5xl font-black mb-8 text-pink-400 tracking-tight">Our Story</h2>'
);

content = content.replace(
  /<h2 className="text-5xl font-black mb-6 text-white tracking-tight drop-shadow-md">Our Locations<\/h2>/g,
  '<h2 className="text-5xl font-black mb-6 text-pink-400 tracking-tight drop-shadow-md">Our Locations</h2>'
);

// We need to check if there's a "Book Us For Your Event" header. Let's just replace "How did we do" and "Our Creations" first.
content = content.replace(
  /<h3 className="text-3xl md:text-4xl font-black mb-4 text-blue-950 tracking-tight">How did we do\? ⭐<\/h3>/g,
  '<h3 className="text-3xl md:text-4xl font-black mb-4 text-blue-400 tracking-tight">How did we do? ⭐</h3>'
);

content = content.replace(
  /<h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-950 tracking-tight">Our Creations<\/h2>/g,
  '<h2 className="text-4xl md:text-5xl font-black mb-4 text-pink-400 tracking-tight">Our Creations</h2>'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Headings updated');
