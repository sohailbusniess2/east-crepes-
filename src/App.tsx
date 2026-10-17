import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, ExternalLink, Instagram, Utensils, Facebook, Home, Heart, Sparkles, Flame, Star } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  badge?: string;
  popular?: boolean;
}

interface MenuSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  note: string;
  accent: 'pink' | 'blue' | 'purple';
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    id: "classic",
    number: "1",
    title: "Classic",
    subtitle: "Served as your choice of warm Crepe or fluffy Dutch mini pancakes",
    note: "*All served with vanilla ice cream & fresh sweet strawberries",
    accent: "pink",
    items: [
      { 
        name: "Sth East Classic", 
        price: "$15.50", 
        desc: "Our beloved house classic crepe or Dutch pancakes served with signature chocolate drizzles, fresh strawberries & vanilla ice cream.",
        badge: "Classic" 
      },
      { 
        name: "Nutella", 
        price: "$17.50", 
        desc: "Filled and drizzled with warm melted Nutella, topped with fresh strawberries and dusting of sweet icing sugar.",
        badge: "Most Popular",
        popular: true
      },
      { 
        name: "Biscoff", 
        price: "$17.50", 
        desc: "Layered with velvety Lotus Biscoff spread, topped with crunchy biscuit crumble and a warm Biscoff drizzle." 
      },
      { 
        name: "Cookies & Cream", 
        price: "$17.50", 
        desc: "Drizzled with smooth Belgian white chocolate sauce and loaded with crunchy crushed Oreo biscuit crumbs." 
      },
      { 
        name: "Kinder Bueno", 
        price: "$17.50", 
        desc: "Filled with luscious hazelnut Bueno cream, finished with crushed hazelnut wafer pieces and chocolate sauce." 
      },
      { 
        name: "Strawberry Shortcake", 
        price: "$17.50", 
        desc: "Topped with strawberry cream sauce, melted white chocolate, and crunchy shortbread biscuit crumble.",
        badge: "New" 
      },
      { 
        name: "Lemon & Sugar", 
        price: "$16.50", 
        desc: "Classic warm crepe or Dutch pancakes dusted with sweet sugar and freshly squeezed zesty lemon juice." 
      },
      { 
        name: "Oreo", 
        price: "$17.50", 
        desc: "Stuffed and topped with crushed Oreos, drizzled with warm white chocolate and signature Oreo sauce." 
      },
      { 
        name: "Maple Syrup", 
        price: "$16.50", 
        desc: "Warm golden pancakes or crepe drenched in pure sweet maple syrup, icing sugar and fresh strawberries." 
      },
    ]
  },
  {
    id: "premium",
    number: "2",
    title: "Premium",
    subtitle: "Served as your choice of warm Crepe or fluffy Dutch mini pancakes",
    note: "*All served with vanilla ice cream & fresh sweet strawberries",
    accent: "blue",
    items: [
      { 
        name: "Viral Dubai Special", 
        price: "$20.50", 
        desc: "Our viral sensation: crispy roasted kataifi pistachio filling, drizzled with Nutella, pistachio sauce, white chocolate & chopped roasted pistachios.",
        badge: "Viral Best Seller",
        popular: true 
      },
      { 
        name: "Sth East Special", 
        price: "$19.50", 
        desc: "Loaded with Nutella and Bueno hazelnut sauce, topped with crushed Bueno pieces and Oreo white chocolate drizzle.",
        badge: "Signature" 
      },
      { 
        name: "KitKat", 
        price: "$18.50", 
        desc: "Melted KitKat chocolate sauce, crunchy wafer KitKat pieces, fresh sweet strawberries and vanilla ice cream." 
      },
      { 
        name: "Sth East Trio", 
        price: "$20.50", 
        desc: "An indulgent three-way drizzle of Belgian milk chocolate, white chocolate, and rich hazelnut sauce with fresh strawberries & ice cream.",
        badge: "Fan Favorite" 
      },
    ]
  },
  {
    id: "crunch",
    number: "3",
    title: "Crunch Series",
    subtitle: "Crispy roasted kataifi folded with signature sweet creams & sauces",
    note: "*Served with fresh strawberries & velvety vanilla ice cream",
    accent: "pink",
    items: [
      { 
        name: "Biscoff Crunch", 
        price: "$19.50", 
        desc: "Filled with crispy roasted kataifi blended with velvety Lotus Biscoff sauce, strawberries & vanilla ice cream.",
        badge: "Crunch" 
      },
      { 
        name: "Bueno Crunch", 
        price: "$19.50", 
        desc: "Filled with crunchy toasted kataifi blended with creamy Kinder Bueno hazelnut cream, strawberries & vanilla ice cream.",
        badge: "Crunch" 
      },
      { 
        name: "Nutella Crunch", 
        price: "$19.50", 
        desc: "Filled with crispy roasted kataifi folded through warm Nutella sauce, fresh strawberries & vanilla ice cream.",
        badge: "Crunch" 
      },
    ]
  },
  {
    id: "strawberry-cups",
    number: "4",
    title: "Strawberry Cups",
    subtitle: "Fresh sweet strawberries drenched in decadent gourmet sauces",
    note: "*Chilled cups served fresh with generous toppings",
    accent: "purple",
    items: [
      { 
        name: "Nutella Strawberry Cup", 
        price: "$14.50", 
        desc: "Cup filled with fresh juicy sweet strawberries generously drenched in warm, melted Nutella sauce.",
        badge: "Customer Favorite",
        popular: true 
      },
      { 
        name: "Dubai Strawberry Cup", 
        price: "$16.50", 
        desc: "Fresh sweet strawberries layered with crispy roasted kataifi pistachio mix, drizzled with lush pistachio sauce & warm Nutella.",
        badge: "Viral Hit",
        popular: true 
      },
    ]
  },
  {
    id: "ice-cream-cups",
    number: "5",
    title: "Ice Cream Cups",
    subtitle: "Creamy vanilla ice cream loaded with gourmet swirls and toppings",
    note: "*Served chilled with thick indulgent layers",
    accent: "blue",
    items: [
      { 
        name: "Oreo Swirl", 
        price: "$7.99", 
        desc: "Creamy vanilla ice cream topped and layered with rich Oreo sauce and crunchy crushed Oreo crumbs." 
      },
      { 
        name: "Nutella Swirl", 
        price: "$7.99", 
        desc: "Creamy vanilla ice cream generously drizzled and swirled with warm hazelnut Nutella sauce." 
      },
      { 
        name: "Biscoff Swirl", 
        price: "$7.99", 
        desc: "Creamy vanilla ice cream topped and layered with Lotus Biscoff spread and crunchy biscuit crumble." 
      },
      { 
        name: "Dubai Swirl", 
        price: "$10.99", 
        desc: "Velvety vanilla ice cream swirled with rich pistachio cream, warm Nutella drizzle & crispy roasted kataifi mix.",
        badge: "Viral" 
      },
    ]
  },
  {
    id: "drinks",
    number: "6",
    title: "Thick Shakes & Refreshments",
    subtitle: "Thick creamy shakes and hot or cold beverages",
    note: "*Made fresh to order",
    accent: "pink",
    items: [
      { 
        name: "Thick Shakes", 
        price: "$6.99", 
        desc: "Available in: Cookies & Cream, Caramel, Blue Heaven, Biscoff, Vanilla, Chocolate, or Strawberry." 
      },
      { 
        name: "Fresh Brewed Tea", 
        price: "$3.50", 
        desc: "Warm comforting cup of freshly brewed hot tea." 
      },
      { 
        name: "Spring Water", 
        price: "$3.50", 
        desc: "Chilled bottled spring water." 
      },
    ]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedSections = activeCategory === 'all'
    ? menuSections
    : menuSections.filter(s => s.id === activeCategory);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 font-sans text-blue-400 selection:bg-pink-200 selection:text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center">
        <div className="flex-1">
          <a href="#home" className="text-2xl font-black tracking-tighter text-pink-500 inline-flex items-center gap-2 hover:text-pink-500 transition-colors -ml-4 md:-ml-16 lg:-ml-24">
            <Utensils className="w-8 h-8 text-pink-500" />
            Sth East Crepes
          </a>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-8 font-black uppercase tracking-wider text-sm">
          <a href="#home" className="ml-4 text-blue-400 hover:text-blue-500 hover:-translate-y-0.5 transform transition-all">Home</a>
          <a href="#about" className="text-pink-400 hover:text-pink-500 hover:-translate-y-0.5 transform transition-all">About</a>
          <a href="#menu" className="text-blue-400 hover:text-blue-500 hover:-translate-y-0.5 transform transition-all">Menu</a>
          <a href="#locations" className="text-pink-400 hover:text-pink-500 hover:-translate-y-0.5 transform transition-all">Locations</a>
          <a href="#events" className="text-blue-400 hover:text-blue-500 hover:-translate-y-0.5 transform transition-all">Events</a>
          <a href="#feedback" className="text-pink-400 hover:text-pink-500 hover:-translate-y-0.5 transform transition-all">Feedback</a>
          <a href="#gallery" className="text-blue-400 hover:text-blue-500 hover:-translate-y-0.5 transform transition-all">Gallery</a>
        </div>
        <div className="flex-1 flex justify-end">
          <a 
            href="https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg?srsltid=AfmBOopQ6bAvcqEK5znHga8R3rbgsdyLCd2OlzIfdcxlYqhH0mgRfvAA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-300 hover:bg-blue-400 text-white px-6 py-2.5 rounded-full font-black transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] hover:-translate-y-0.5 flex items-center gap-2 text-sm uppercase tracking-wide translate-x-4 md:translate-x-8"
          >
            Order Now <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 relative">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
            whileHover={{ scale: 1.05 }}
            className="relative inline-flex items-center justify-center mb-8 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
            <div className="relative inline-flex items-center bg-white px-6 py-3 rounded-full text-sm md:text-base font-black tracking-widest uppercase shadow-2xl border-2 border-white/80">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-sm pr-1">
                Melbourne's Late Night Dessert Spot
              </span>
              <div className="flex items-center">
                <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="relative z-10">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500 drop-shadow-md" />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.3 }} className="-ml-1.5 relative z-0">
                  <Heart className="w-5 h-5 text-blue-500 fill-blue-500 drop-shadow-md" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
            className="text-6xl md:text-8xl font-black leading-tight mb-6 text-blue-400 tracking-tighter"
          >
            Delicious Crepes, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
              Made with Love.
            </span>
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
            className="text-xl md:text-2xl text-blue-400 mb-10 max-w-2xl leading-relaxed font-black"
          >
            Experience the best crepes in the South East. Whether you're craving something sweet like Nutella and strawberries, or a hearty crepe, we've got you covered.
          </motion.p>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg?srsltid=AfmBOopQ6bAvcqEK5znHga8R3rbgsdyLCd2OlzIfdcxlYqhH0mgRfvAA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-pink-50 text-pink-400 border-2 border-pink-300 hover:border-pink-400 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              Order on Uber Eats <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="#menu" 
              className="bg-white hover:bg-blue-50 text-blue-400 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 shadow border border-blue-200 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] hover:-translate-y-1 flex items-center justify-center uppercase tracking-wide"
            >
              View Menu
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -25, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }
          }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
          <img 
            src="https://tb-static.uber.com/prod/image-proc/processed_images/2d90245caf290051434b039ee59512f2/492abbfd79da0fd117a23fd2a6cf3df9.jpeg" 
            alt="Delicious Crepe" 
            className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-6 -mt-8 md:-mt-16 relative z-20 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {[
            { title: "Our Story", link: "#about", icon: "📖" },
            { title: "Our Menu", link: "#menu", icon: "🥞" },
            { title: "Locations", link: "#locations", icon: "📍" },
            { title: "Events", link: "#events", icon: "🚚" },
            { title: "Feedback", link: "#feedback", icon: "⭐" },
            { title: "Gallery", link: "#gallery", icon: "📸" },
          ].map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ y: -15, scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-pink-100 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 text-center group flex flex-col items-center gap-3"
            >
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className={`text-lg md:text-xl font-black ${idx % 2 === 0 ? 'text-pink-400 group-hover:text-pink-500' : 'text-blue-400 group-hover:text-blue-500'} transition-colors`}>{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-6 py-12 md:py-20 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-pink-100 via-white to-blue-100 rounded-3xl p-8 md:p-16 shadow-xl border border-pink-200 relative flex flex-col md:flex-row items-center gap-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/50 rounded-bl-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/50 rounded-tr-full -z-10"></div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } } }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient tracking-tight">Our Story</h2>
            <div className="space-y-6 text-lg text-blue-400 font-black leading-relaxed">
              <p>
                It all started with a simple dream and a food truck. We hit the streets of Melbourne, serving up fresh, warm crepes to late-night dessert lovers. The response was overwhelming, and our little food truck quickly built a loyal following.
              </p>
              <p>
                Thanks to your incredible support, we traded our wheels for brick-and-mortar, opening our permanent stores in Hallam and Oakleigh. Now, we have a place to call home where you can enjoy our signature sweet treats every week.
              </p>
              <p>
                But we haven't forgotten our roots! We still love hitting the road. Today, alongside our stores, we bring the Sth East Crepes experience to you with our full Dessert Truck and Pancake Cart hire for private events, weddings, and festivals.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 100, rotate: 15 }, visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", stiffness: 80 } } }}
            className="flex-1 w-full"
          >
            <img 
              src="https://tb-static.uber.com/prod/image-proc/processed_images/c52c1f2ec69697406ea0949be109432f/bc9c318a9c96996e2d990faf2b0c65f6.jpeg" 
              alt="Sth East Crepes Story" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-video animate-float"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <div className="relative z-20">
        {/* Top Drip (Hero dripping into Menu) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none text-blue-50 z-10">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-current">
            <path d="M0,0 L1000,0 L1000,20 Q980,80 950,20 Q920,100 880,20 Q850,70 820,20 Q780,110 750,20 Q720,60 680,20 Q650,90 620,20 Q580,40 550,20 Q520,100 480,20 Q450,60 420,20 Q380,110 350,20 Q320,50 280,20 Q250,80 220,20 Q180,40 150,20 Q120,100 80,20 Q50,60 20,20 L0,20 Z" />
          </svg>
        </div>

        <section id="menu" className="py-32 bg-gradient-to-br from-pink-200 via-pink-200 to-blue-200 relative overflow-hidden">
          {/* Floating Background Effects */}
          <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-40 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none hidden md:block"></motion.div>
          <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute bottom-40 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl pointer-events-none hidden md:block"></motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"></motion.div>

          <div className="container mx-auto px-6 relative z-20">
            {/* Menu Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient tracking-tight drop-shadow-md">Our Menu</h2>
              <p className="text-xl text-blue-400 max-w-2xl mx-auto font-black drop-shadow">
                Explore our full dessert range — made fresh to order and 100% Halal
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-5xl mx-auto px-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2.5 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-pink-500 text-white shadow-pink-300/50 scale-105'
                    : 'bg-white/80 text-blue-500 hover:bg-white hover:text-pink-500 border border-pink-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> All Menu
              </button>
              {menuSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveCategory(sec.id)}
                  className={`px-5 py-2.5 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer ${
                    activeCategory === sec.id
                      ? 'bg-pink-500 text-white shadow-pink-300/50 scale-105'
                      : 'bg-white/80 text-blue-500 hover:bg-white hover:text-pink-500 border border-pink-100'
                  }`}
                >
                  <span className="opacity-70 font-black">{sec.number}.</span> {sec.title}
                </button>
              ))}
            </div>

            <div className="space-y-20 max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {displayedSections.map((section) => (
                  <motion.div 
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/45 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-pink-200/90 relative overflow-hidden"
                  >
                    {/* Section Header */}
                    <div className="text-center mb-10 pb-6 border-b border-pink-200/60 relative">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 text-pink-500 font-black text-xs md:text-sm tracking-wider uppercase mb-3 shadow-xs border border-pink-200">
                        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                        Menu Category {section.number}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-blue-500 tracking-tight drop-shadow-sm mb-2 flex items-center justify-center gap-3">
                        <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-pink-500 text-white inline-flex items-center justify-center text-base md:text-xl font-black shadow-sm shrink-0">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </h3>
                      {section.subtitle && (
                        <p className="text-blue-400 font-bold text-sm md:text-base max-w-xl mx-auto mb-2">
                          {section.subtitle}
                        </p>
                      )}
                      {section.note && (
                        <p className="text-pink-500 font-black uppercase tracking-wider text-xs md:text-sm inline-block px-3 py-1 bg-pink-50 rounded-lg border border-pink-100">
                          {section.note}
                        </p>
                      )}
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {section.items.map((item) => (
                        <motion.a 
                          key={item.name} 
                          whileHover={{ scale: 1.02, y: -3 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          href="https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg?srsltid=AfmBOopQ6bAvcqEK5znHga8R3rbgsdyLCd2OlzIfdcxlYqhH0mgRfvAA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col justify-between p-5 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 border border-pink-100 shadow-sm hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] group"
                        >
                          <div>
                            <div className="flex justify-between items-start gap-3 mb-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <h5 className="font-black text-lg md:text-xl text-blue-500 group-hover:text-pink-500 transition-colors">
                                  {item.name}
                                </h5>
                                {item.badge && (
                                  <span className={`text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                    item.popular 
                                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm'
                                      : 'bg-pink-100 text-pink-600 border border-pink-200'
                                  }`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="font-black text-lg md:text-xl text-pink-500 whitespace-nowrap bg-pink-50/90 border border-pink-200 px-3 py-1 rounded-xl shadow-xs group-hover:bg-pink-400 group-hover:text-white transition-colors">
                                {item.price}
                              </div>
                            </div>
                            {item.desc && (
                              <p className="text-blue-400 font-bold leading-relaxed text-sm">
                                {item.desc}
                              </p>
                            )}
                          </div>
                          
                          <div className="mt-3 pt-3 border-t border-pink-50 flex items-center justify-between text-xs font-black text-blue-400 group-hover:text-pink-500 transition-colors">
                            <span className="uppercase tracking-wider">Order on Uber Eats</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="text-center mt-20">
               <a 
                href="https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg?srsltid=AfmBOopQ6bAvcqEK5znHga8R3rbgsdyLCd2OlzIfdcxlYqhH0mgRfvAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-white hover:bg-pink-50 text-pink-400 border-2 border-pink-300 hover:border-pink-400 px-10 py-4 rounded-full font-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 items-center gap-3 text-lg uppercase tracking-wide"
              >
                Order Full Menu on Uber Eats <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Drip (Menu dripping into Locations) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-blue-300 translate-y-[99%] z-10">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-current">
            <path d="M0,0 L1000,0 L1000,20 Q980,80 950,20 Q920,100 880,20 Q850,70 820,20 Q780,110 750,20 Q720,60 680,20 Q650,90 620,20 Q580,40 550,20 Q520,100 480,20 Q450,60 420,20 Q380,110 350,20 Q320,50 280,20 Q250,80 220,20 Q180,40 150,20 Q120,100 80,20 Q50,60 20,20 L0,20 Z" />
          </svg>
        </div>
      </div>

      {/* Locations & Hours Section */}
      <div className="relative z-10">
        <section id="locations" className="py-32 bg-gradient-to-br from-sky-200 via-blue-200 to-blue-200 relative">
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient tracking-tight drop-shadow-md">Our Locations</h2>
              <p className="text-xl text-pink-400 max-w-2xl mx-auto font-black drop-shadow">
                Visit us at Hallam, Oakleigh, or Dandenong. We can't wait to serve you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Hallam Location */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-200 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <div>
                  <h3 className="text-3xl font-black mb-8 text-blue-400 tracking-tight">Hallam</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-blue-400 mb-2 uppercase tracking-wider text-sm">Address</h4>
                        <p className="text-blue-400 font-black leading-relaxed text-lg mb-2">
                          34 Hallam S Rd<br/>
                          Hallam VIC 3803
                        </p>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=34+Hallam+S+Rd,+Hallam+VIC+3803"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-pink-500 font-black hover:text-pink-600 transition-colors text-base sm:text-lg uppercase tracking-wide mt-1"
                        >
                          Get Directions <span aria-hidden="true" className="text-xl">&rarr;</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="w-full">
                        <h4 className="font-black text-blue-400 mb-3 uppercase tracking-wider text-sm">Opening Hours</h4>
                        <ul className="text-blue-400 font-black space-y-2 text-lg">
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Mon - Thu:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Fri - Sat:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 12:30 am</span></li>
                          <li className="flex justify-between gap-4"><span>Sunday:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Oakleigh Location */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.15, type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-200 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <div>
                  <h3 className="text-3xl font-black mb-8 text-blue-400 tracking-tight">Oakleigh</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-blue-400 mb-2 uppercase tracking-wider text-sm">Address</h4>
                        <p className="text-blue-400 font-black leading-relaxed text-lg mb-2">
                          1434 Dandenong Rd<br/>
                          Oakleigh VIC 3166
                        </p>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=1434+Dandenong+Rd,+Oakleigh+VIC+3166"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-pink-500 font-black hover:text-pink-600 transition-colors text-base sm:text-lg uppercase tracking-wide mt-1"
                        >
                          Get Directions <span aria-hidden="true" className="text-xl">&rarr;</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="w-full">
                        <h4 className="font-black text-blue-400 mb-3 uppercase tracking-wider text-sm">Opening Hours</h4>
                        <ul className="text-blue-400 font-black space-y-2 text-lg">
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Mon - Thu:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Fri - Sat:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 12:30 am</span></li>
                          <li className="flex justify-between gap-4"><span>Sunday:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dandenong Location */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-200 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-black text-blue-400 tracking-tight">Dandenong</h3>
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      New
                    </span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-blue-400 mb-2 uppercase tracking-wider text-sm">Address</h4>
                        <p className="text-blue-400 font-black leading-relaxed text-lg mb-2">
                          158C Princes Hwy<br/>
                          Dandenong VIC 3175
                        </p>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=158C+Princes+Hwy,+Dandenong+VIC+3175"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-pink-500 font-black hover:text-pink-500 transition-colors text-base sm:text-lg uppercase tracking-wide mt-1"
                        >
                          Get Directions <span aria-hidden="true" className="text-xl">&rarr;</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-white/60 p-3.5 rounded-2xl text-blue-600 shrink-0 shadow-sm">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="w-full">
                        <h4 className="font-black text-blue-400 mb-3 uppercase tracking-wider text-sm">Opening Hours</h4>
                        <ul className="text-blue-400 font-black space-y-2 text-lg">
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Mon - Thu:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                          <li className="flex justify-between gap-4 border-b border-blue-200/50 pb-2"><span>Fri - Sat:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 12:30 am</span></li>
                          <li className="flex justify-between gap-4"><span>Sunday:</span> <span className="font-black text-blue-400 text-right">6:30 pm – 11:00 pm</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Events Options */}
            <div id="events" className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 scroll-mt-32">
              {/* Dessert Truck Hire */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                className="bg-gradient-to-r from-pink-300 via-pink-400 to-blue-300 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group text-blue-400 text-center border border-white/20 flex flex-col h-full hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-tr-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                
                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight drop-shadow-md">Full Dessert Truck Hire 🚚</h3>
                
                <div className="space-y-4 mb-10 flex-grow flex flex-col justify-center">
                  <p className="text-lg md:text-xl font-black text-white/95 drop-shadow-sm">
                    Includes our full menu (crepes, strawberry cups, and signature items)
                  </p>
                  <p className="text-lg md:text-xl font-black text-white/95 drop-shadow-sm">
                    Perfect for large events, festivals, and corporate bookings
                  </p>
                </div>
                
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=stheastcrepes@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center bg-white text-pink-500 hover:bg-pink-50 px-4 py-3 md:px-6 md:py-4 rounded-full font-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 items-center gap-2 text-sm md:text-base w-full sm:w-auto mx-auto"
                >
                  📩 stheastcrepes@gmail.com
                </a>
              </motion.div>

              {/* Pancake Cart Hire */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                className="bg-gradient-to-r from-sky-200 via-pink-400 to-pink-300 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group text-blue-400 text-center border border-white/20 flex flex-col h-full hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-tr-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                
                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight drop-shadow-md">Pancake Cart Hire 🥞</h3>
                
                <div className="space-y-4 mb-10 flex-grow flex flex-col justify-center">
                  <p className="text-lg md:text-xl font-black text-white/95 drop-shadow-sm">
                    Perfect for birthdays, engagements, weddings, and private events
                  </p>
                  <div className="bg-white/10 rounded-2xl p-5 text-left inline-block mx-auto w-full max-w-sm">
                    <ul className="space-y-3 text-base md:text-lg font-black text-white/95 drop-shadow-sm">
                      <li className="flex items-start gap-3"><span className="text-pink-200">✓</span> 4-hour service</li>
                      <li className="flex items-start gap-3"><span className="text-pink-200">✓</span> Unlimited pancakes</li>
                      <li className="flex items-start gap-3"><span className="text-pink-200">✓</span> Up to 5 topping options</li>
                    </ul>
                    <p className="text-sm font-black text-white/80 mt-3 pl-8 italic leading-relaxed">
                      (e.g. Biscoff, Bueno, Nutella, Dubai Special, Maple with strawberries)
                    </p>
                  </div>
                </div>
                
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=stheastcrepes@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center bg-white text-blue-500 hover:bg-blue-50 px-4 py-3 md:px-6 md:py-4 rounded-full font-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 items-center gap-2 text-sm md:text-base w-full sm:w-auto mx-auto"
                >
                  📩 stheastcrepes@gmail.com
                </a>
              </motion.div>
            </div>

            {/* Feedback / Review Section */}
            <div id="feedback" className="mt-16 max-w-4xl mx-auto scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center border border-blue-100 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 to-blue-300"></div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-gradient tracking-tight">How did we do? ⭐</h3>
                <p className="text-lg text-blue-400 mb-8 max-w-2xl mx-auto font-black">
                  We'd love to hear about your experience! Leave us a review on Google and let us know what you loved.
                </p>
                
                <div className="flex flex-col items-center gap-6">
                  <div className="flex gap-2 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.svg 
                        key={star} 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: star * 0.2 }}
                        className="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center">
                    <a 
                      href="https://www.google.com/search?sca_esv=2eb1beb0bd5e5e34&sxsrf=ANbL-n66KGECf6Ix2QGMngSPpaM0LsK6Vg:1774911038050&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOf661HBamtPiVNiyL1xVht1kVm7sM6s1A-ac1ly3TAKNMoVas9umxR3CW_t4gcg2wGQfAKH781g4rsxOUsqzUAY0anC-8vL3yUiymdncjoDN8-MCZg%3D%3D&q=Sth+East+Crepes+%28Hallam%29+Reviews&sa=X&ved=2ahUKEwiv8Ljv2siTAxU2yzgGHThdKcsQ0bkNegQILhAF&biw=1366&bih=607&safe=active&ssui=on#lrd=0x6ad6116c3956ec5b:0x3cb93ab923f5a770,3,,,,"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-200 hover:bg-blue-300 text-blue-400 px-6 py-4 rounded-full font-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-base md:text-lg uppercase tracking-wide w-full sm:w-auto"
                    >
                      Review Hallam
                    </a>
                    <a 
                      href="https://www.google.com/search?sca_esv=2eb1beb0bd5e5e34&sxsrf=ANbL-n6krR0GwcLdC_cJYifT4tAlv0P-fA:1774910951320&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVIoENk7mu98FhuNhG53uBVRGZZxIwGBow6iIaAV0BVQTzOFNdHFwlTuYvPdRKimhDTSvkkUgjqA9wPc0RXIjDlj-tyd4Sp6BXhKKy7P_MjtxVjf9w%3D%3D&q=Sth+East+Crepes+%28Oakleigh%29+Reviews&sa=X&ved=2ahUKEwjhqovG2siTAxUozjgGHfP2Fg8Q0bkNegQIMxAF&cshid=1774910971757585&biw=1366&bih=607&safe=active&ssui=on#lrd=0x6ad66b6113b7a59d:0xf6adaffb33b4addf,3,,,,"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-300 hover:bg-pink-300 text-white px-6 py-4 rounded-full font-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-base md:text-lg uppercase tracking-wide w-full sm:w-auto"
                    >
                      Review Oakleigh
                    </a>
                    <a 
                      href="https://www.google.com/search?q=Sth+East+Crepes+Dandenong+Reviews"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-300 hover:bg-blue-400 text-white px-6 py-4 rounded-full font-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-base md:text-lg uppercase tracking-wide w-full sm:w-auto"
                    >
                      Review Dandenong
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Drip (Locations dripping into Footer) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-blue-400 translate-y-[99%] z-10">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-current">
            <path d="M0,0 L1000,0 L1000,20 Q980,80 950,20 Q920,100 880,20 Q850,70 820,20 Q780,110 750,20 Q720,60 680,20 Q650,90 620,20 Q580,40 550,20 Q520,100 480,20 Q450,60 420,20 Q380,110 350,20 Q320,50 280,20 Q250,80 220,20 Q180,40 150,20 Q120,100 80,20 Q50,60 20,20 L0,20 Z" />
          </svg>
        </div>
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-20 bg-blue-50 py-12 md:py-20 pt-24 md:pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient tracking-tight">Our Creations</h2>
            <p className="text-xl text-pink-400 font-black">A sneak peek at what we're serving up.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "https://tb-static.uber.com/prod/image-proc/processed_images/2d90245caf290051434b039ee59512f2/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
            "https://tb-static.uber.com/prod/image-proc/processed_images/c52c1f2ec69697406ea0949be109432f/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
            "https://tb-static.uber.com/prod/image-proc/processed_images/9468b1c5cf922df92eba5c13ea3d381b/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
            "https://tb-static.uber.com/prod/image-proc/processed_images/cb1a8f8b9746e6e68fe56c35239ddb84/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
            "https://tb-static.uber.com/prod/image-proc/processed_images/9716d9b65a35b51468072b6efa85ca61/70aa2a4db7f990373ca9c376323e3dea.jpeg",
            "https://tb-static.uber.com/prod/image-proc/processed_images/b747e65370d3a643e828fcc92c02adc1/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 150, damping: 12 }}
              whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
              className="overflow-hidden rounded-2xl shadow-md border-4 border-white group relative hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-shadow duration-300"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover aspect-square transform transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        </div>

        {/* Bottom Drip (Gallery dripping into Footer) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-blue-50 translate-y-[99%] z-10">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-current">
            <path d="M0,0 L1000,0 L1000,20 Q980,80 950,20 Q920,100 880,20 Q850,70 820,20 Q780,110 750,20 Q720,60 680,20 Q650,90 620,20 Q580,40 550,20 Q520,100 480,20 Q450,60 420,20 Q380,110 350,20 Q320,50 280,20 Q250,80 220,20 Q180,40 150,20 Q120,100 80,20 Q50,60 20,20 L0,20 Z" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white pt-24 md:pt-32 pb-16 relative z-0">
        <div className="container mx-auto px-6 mb-16 border-b border-blue-900 pb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tight">Show Us Your Sweets! 📸</h3>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto font-black mb-8">
            Follow us on Instagram and TikTok, and tag <span className="text-pink-500 font-black">@stheastcrepes</span> when you get your crepes to be featured on our page!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://www.instagram.com/stheastcrepes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-r from-pink-300 via-blue-300 to-pink-400 hover:from-pink-600 hover:via-blue-400 hover:to-pink-500 text-blue-400 px-8 py-4 rounded-full font-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 items-center gap-3 text-lg uppercase tracking-wide w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6" /> Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@stheastcrepes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-blue-400 px-8 py-4 rounded-full font-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 items-center gap-3 text-lg uppercase tracking-wide border border-blue-300 w-full sm:w-auto justify-center"
            >
              <TikTokIcon className="w-6 h-6" /> TikTok
            </a>
          </div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-2xl font-black text-pink-500 tracking-tighter">
            <Utensils className="w-8 h-8" />
            Sth East Crepes
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/stheastcrepes/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors hover:scale-110 transform">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@stheastcrepes" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors hover:scale-110 transform">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="text-blue-300 font-black text-center md:text-left">
            &copy; {new Date().getFullYear()} Sth East Crepes. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Home Button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-4 bg-pink-300 text-white p-4 rounded-full shadow-2xl hover:bg-pink-300 hover:scale-110 transition-all z-50 flex items-center justify-center border-2 border-white"
        aria-label="Back to top"
      >
        <Home className="w-6 h-6" />
      </a>
    </div>
  );
}
