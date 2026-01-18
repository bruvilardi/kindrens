import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, ShoppingCart, ArrowLeft, Heart, ShieldCheck, Smile } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

// Data structure for each flavor
const PRODUCT_DATA: Record<number, {
  name: string;
  subName: string;
  description: string;
  image: string;
  hoverImage: string;
  heroBackground: string;
  accentColor: string;
  accentClass: string;
  bgClass: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefitsList: { title: string; desc: string }[];
  ingredients: string;
  steps: { title: string; desc: string }[];
  supplementFacts: { name: string; val: string; dv: string; isSubItem?: boolean }[];
}> = {
  1: {
    name: "Strawberry Gummies",
    subName: "Growth Support",
    description: "Supports Healthy Growth & Development",
    image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604621/frascomorando_avmnvi.png",
    hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/Gemini_Generated_Image_igfey3igfey3igfe_u7gk6n.png",
    heroBackground: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768606402/Ativo_21_2x_nx52ia.png",
    accentColor: "#F28C8C",
    accentClass: "text-accent-salmon",
    bgClass: "bg-accent-salmon/10",
    benefit1: "Kid-Approved Taste",
    benefit2: "Clean Ingredients",
    benefit3: "Supports Growth",
    benefitsList: [
      { title: "Supports Bone Health", desc: "Rich in Vitamin D and Calcium." },
      { title: "Immune Boost", desc: "High potency Vitamin C and Zinc." },
      { title: "Brain Function", desc: "Essential B-Vitamins for cognitive development." }
    ],
    ingredients: "Glucose Syrup, Sugar, Water, Pectin, Citric Acid, Sodium Citrate, Natural Strawberry Flavor, Black Carrot Juice Concentrate (color), Carnauba Wax.",
    steps: [
      { title: "Pop a Gummy", desc: "Our Strawberry Gummies will impress with their delicious taste." },
      { title: "Absorb Nutrients", desc: "Absorb the nutrients instantly with our bioavailable formula." },
      { title: "Grow & Thrive", desc: "Watch them grow healthy and strong with daily essential vitamins." }
    ],
    supplementFacts: [
      { name: "Calories", val: "20", dv: "" },
      { name: "Total Carbohydrate", val: "5 g", dv: "2%†" },
      { name: "Total Sugars", val: "4 g", dv: "**" },
      { name: "Includes 4g Added Sugars", val: "", dv: "8%†", isSubItem: true },
      { name: "Vitamin A (as Retinyl Palmitate)", val: "300 mcg", dv: "33%" },
      { name: "Vitamin C (as Ascorbic Acid)", val: "20 mg", dv: "22%" },
      { name: "Vitamin D3 (as Cholecalciferol)", val: "15 mcg (600 IU)", dv: "75%" },
      { name: "Vitamin E (as dl-Alpha Tocopheryl)", val: "7.5 mg", dv: "50%" },
      { name: "Vitamin B6 (as Pyridoxine HCl)", val: "0.7 mg", dv: "41%" },
      { name: "Folate (as Folic Acid)", val: "200 mcg DFE", dv: "50%" },
      { name: "Vitamin B12 (as Cyanocobalamin)", val: "2.5 mcg", dv: "104%" },
      { name: "Biotin", val: "30 mcg", dv: "100%" },
      { name: "Iodine (as Potassium Iodide)", val: "40 mcg", dv: "27%" },
      { name: "Zinc (as Zinc Citrate)", val: "2 mg", dv: "18%" },
    ]
  },
  2: {
    name: "Grape Gummies",
    subName: "Sleep & Calm",
    description: "Promotes Restful Sleep & Relaxation",
    image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/frascouva_f9z51t.png",
    hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768604620/Gemini_Generated_Image_g4uj2gg4uj2gg4uj_w3zedt.png",
    heroBackground: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624737/Ativo_25_2x_wlca9z.png",
    accentColor: "#BFA6D9",
    accentClass: "text-accent-purple",
    bgClass: "bg-accent-purple/10",
    benefit1: "Dreamy Flavor",
    benefit2: "Melatonin Free",
    benefit3: "Calming Effect",
    benefitsList: [
      { title: "Restful Sleep", desc: "Formulated with Magnesium and Chamomile." },
      { title: "Bedtime Routine", desc: "Helps wind down after a busy day of play." },
      { title: "Wake Up Refreshed", desc: "Gentle support without grogginess." }
    ],
    ingredients: "Glucose Syrup, Sugar, Water, Pectin, Citric Acid, Sodium Citrate, Natural Grape Flavor, Fruit and Vegetable Juice (Color), Coconut Oil, Carnauba Wax. Usage Warning: For occasional sleeplessness. Take 30 minutes before bedtime.",
    steps: [
      { title: "Take Before Bed", desc: "Enjoy a Grape Gummy 30 minutes before bedtime." },
      { title: "Relax & Unwind", desc: "Natural ingredients help calm the active mind." },
      { title: "Sleep Soundly", desc: "Support a full night of restorative sleep." }
    ],
    supplementFacts: [
      { name: "Calories", val: "20", dv: "" },
      { name: "Total Carbohydrate", val: "5 g", dv: "2%†" },
      { name: "Total Sugars", val: "4 g", dv: "**" },
      { name: "Includes 4g Added Sugars", val: "", dv: "8%†", isSubItem: true },
      { name: "Melatonin", val: "1 mg", dv: "**" },
      { name: "Chamomile Extract", val: "10 mg", dv: "**" },
      { name: "Lemon Balm Extract", val: "10 mg", dv: "**" },
    ]
  },
  3: {
    name: "Lemon Gummies",
    subName: "Immunity Shield",
    description: "Daily Defense for Active Kids",
    image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624625/frascolimao_icj9to.png",
    hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624625/Gemini_Generated_Image_lahrmklahrmklahr_kxzarv.png",
    heroBackground: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624746/Ativo_26_2x_w22jdy.png",
    accentColor: "#f2c50c",
    accentClass: "text-yellow-500", 
    bgClass: "bg-accent-lemon/20",
    benefit1: "Zesty Taste",
    benefit2: "High Vitamin C",
    benefit3: "Flu Fighter",
    benefitsList: [
      { title: "Super Immunity", desc: "Packed with Vitamin C and Elderberry." },
      { title: "Antioxidant Rich", desc: "Protects cells from damage." },
      { title: "Energy Support", desc: "Keeps them playing all day long." }
    ],
    ingredients: "Glucose Syrup, Sugar, Algal Oil (Source of Omega-3), Water, Pectin, Citric Acid, Sodium Citrate, Natural Lemon Flavor, Turmeric Extract (color), Sunflower Oil, Carnauba Wax.",
    steps: [
      { title: "Morning Boost", desc: "Start the day with a burst of Lemon goodness." },
      { title: "Build Defense", desc: "Strengthen the immune system naturally." },
      { title: "Play All Day", desc: "Stay protected while exploring the world." }
    ],
    supplementFacts: [
      { name: "Calories", val: "25", dv: "" },
      { name: "Total Fat", val: "0.5 g", dv: "<1%†" },
      { name: "Total Carbohydrate", val: "4 g", dv: "1%†" },
      { name: "Total Sugars", val: "3 g", dv: "**" },
      { name: "Includes 3g Added Sugars", val: "", dv: "6%†", isSubItem: true },
      { name: "Total Omega-3 Oil (from Algae)", val: "200 mg", dv: "**" },
      { name: "Docosahexaenoic Acid (DHA)", val: "50 mg", dv: "**", isSubItem: true },
      { name: "Alpha-Linolenic Acid (ALA)", val: "20 mg", dv: "**", isSubItem: true },
      { name: "Choline", val: "10 mg", dv: "2%" },
    ]
  },
  4: {
    name: "Orange Gummies",
    subName: "Daily Multivitamin",
    description: "Complete Nutrition for Every Day",
    image: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768603848/frascolaranja_rtiyc7.png",
    hoverImage: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768603848/Gemini_Generated_Image_35kw1m35kw1m35kw_su6d3b.png",
    heroBackground: "https://res.cloudinary.com/drvtrbeky/image/upload/v1768624996/Ativo_27_2x_pl8lxv.png",
    accentColor: "#F4B084",
    accentClass: "text-accent-orange",
    bgClass: "bg-accent-orange/10",
    benefit1: "Citrus Punch",
    benefit2: "12 Essential Vits",
    benefit3: "Total Health",
    benefitsList: [
      { title: "Complete Balance", desc: "A to Z vitamins for overall wellness." },
      { title: "Eye Health", desc: "Vitamin A to support developing vision." },
      { title: "Cell Health", desc: "Essential nutrients for healthy cell growth." }
    ],
    ingredients: "Glucose Syrup, Sugar, Water, Pectin, Sodium Citrate, Natural Orange Flavor, Citric Acid, Annatto Extract (color), Carnauba Wax.",
    steps: [
      { title: "Daily Habit", desc: "Make nutrition fun with one gummy a day." },
      { title: "Fill the Gaps", desc: "Cover nutritional bases for picky eaters." },
      { title: "Happy Kid", desc: "Fuel their adventures with balanced energy." }
    ],
    supplementFacts: [
      { name: "Calories", val: "20", dv: "" },
      { name: "Total Carbohydrate", val: "5 g", dv: "2%†" },
      { name: "Total Sugars", val: "4 g", dv: "**" },
      { name: "Includes 4g Added Sugars", val: "", dv: "8%†", isSubItem: true },
      { name: "Vitamin C (as Ascorbic Acid)", val: "120 mg", dv: "133%" },
      { name: "Zinc (as Zinc Citrate)", val: "3 mg", dv: "27%" },
      { name: "Echinacea Extract", val: "25 mg", dv: "**" },
    ]
  }
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients'>('details');

  // Load product data based on ID, fallback to Strawberry if not found
  const product = PRODUCT_DATA[productId] || PRODUCT_DATA[1];

  const [currentImage, setCurrentImage] = useState(product.image);

  // Scroll to top when product changes and reset image
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImage(product.image);
  }, [productId, product.image]);

  const faqs = [
    { question: `What is in ${product.name}?`, answer: `${product.name} contains a blend of organic ingredients specifically formulated to support healthy development in children.` },
    { question: "How does Kildren's absorb Nutrients?", answer: "Our gummies are formulated with bioavailable ingredients that are easily broken down and absorbed by the digestive system, ensuring maximum nutrient uptake." },
    { question: "How long until I see results?", answer: "Most parents report seeing positive changes in energy and general well-being within 3-4 weeks of consistent daily use." },
    { question: "Is it safe for children with allergies?", answer: "Our gummies are free from common allergens like gluten, dairy, and nuts. However, please review the ingredient list and consult your pediatrician." }
  ];

  return (
    <div className="w-full bg-cream min-h-screen animate-fade-in">
      
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button 
          onClick={onBack}
          className="flex items-center text-primary-text font-bold hover:opacity-70 transition-opacity"
          style={{ color: product.accentColor }} 
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Shop
        </button>
      </div>

      {/* Product Hero */}
      <section className="relative w-full py-12 md:py-20 pb-16 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src={product.heroBackground} 
             alt="Background Pattern" 
             className="w-full h-full object-cover object-top"
           />
           <div className="absolute inset-0 bg-cream/30 md:bg-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-8">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square flex items-center justify-center bg-white/50 rounded-[40px] border-[3px] border-primary-text shadow-xl mb-6 backdrop-blur-sm">
               <img 
                 src={currentImage} 
                 alt={product.name} 
                 className="w-3/4 h-3/4 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
               <div 
                 className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-bold rotate-12 shadow-lg border-[3px] border-primary-text"
                 style={{ backgroundColor: product.accentColor }}
               >
                 <div className="text-center leading-tight">
                   <span className="text-xl md:text-2xl block">30</span>
                   <span className="text-xs md:text-sm">Gummies</span>
                 </div>
               </div>
            </div>
            
            {/* Thumbs */}
            <div className="flex space-x-4">
                <button 
                  onClick={() => setCurrentImage(product.image)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-[3px] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all hover:scale-105 ${currentImage === product.image ? '' : 'border-primary-text/10'}`} 
                  style={{ borderColor: currentImage === product.image ? product.accentColor : undefined }}
                >
                    <img src={product.image} alt="Thumb 1" className="w-10 md:w-12 h-auto" />
                </button>
                <button 
                  onClick={() => setCurrentImage(product.hoverImage)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-[3px] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all hover:scale-105 ${currentImage === product.hoverImage ? '' : 'border-primary-text/10'}`}
                  style={{ borderColor: currentImage === product.hoverImage ? product.accentColor : undefined }}
                >
                    <img src={product.hoverImage} alt="Thumb 2" className="w-10 md:w-12 h-auto" />
                </button>
            </div>
          </div>

          {/* Right: Sales Copy */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-primary-text/60 text-sm font-bold ml-2">(1,204 Reviews)</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-2">{product.name}</h1>
              <p className="text-lg md:text-xl text-primary-text/70 font-medium">{product.description}</p>
            </div>

            {/* Price & Toggle */}
            <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-3xl shadow-sm border-[3px] border-primary-text space-y-6 text-left">
              
              <div className="flex flex-col space-y-3">
                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border-[3px] cursor-pointer transition-all ${isSubscribe ? 'bg-opacity-10' : 'border-primary-text'}`}
                  style={{ 
                    borderColor: '#3f2217',
                    backgroundColor: isSubscribe ? `${product.accentColor}10` : 'transparent' 
                  }}
                  onClick={() => setIsSubscribe(true)}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center border-primary-text`}>
                        {isSubscribe && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.accentColor }} />}
                    </div>
                    <div>
                        <span className="font-bold block text-primary-text text-sm md:text-base">Subscribe & Save</span>
                        <span className="text-xs font-bold" style={{ color: product.accentColor }}>Save 15%</span>
                    </div>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-primary-text">$21.24</span>
                </label>

                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border-[3px] cursor-pointer transition-all ${!isSubscribe ? 'bg-opacity-10' : 'border-primary-text'}`}
                  style={{ 
                    borderColor: '#3f2217',
                    backgroundColor: !isSubscribe ? `${product.accentColor}10` : 'transparent' 
                  }}
                  onClick={() => setIsSubscribe(false)}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center border-primary-text`}>
                        {!isSubscribe && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.accentColor }} />}
                    </div>
                    <span className="font-bold text-primary-text text-sm md:text-base">One-time Purchase</span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-primary-text">$24.99</span>
                </label>
              </div>

              <button 
                className="w-full text-primary-text border-[3px] border-primary-text text-lg md:text-xl font-bold py-4 rounded-full shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 hover:brightness-110"
                style={{ backgroundColor: product.accentColor }}
              >
                Add to Cart <ShoppingCart className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap justify-center gap-4 md:space-x-8 text-primary-text/70 text-sm font-bold">
                 <div className="flex flex-col items-center">
                    <div className="bg-accent-green/30 p-2 rounded-full mb-1 border-2 border-primary-text"><ShieldCheck size={20}/></div>
                    <span>Non-GMO</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-accent-lemon/30 p-2 rounded-full mb-1 border-2 border-primary-text"><Heart size={20}/></div>
                    <span>Vegan</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-accent-blue/30 p-2 rounded-full mb-1 border-2 border-primary-text"><Smile size={20}/></div>
                    <span>Sugar-Free</span>
                 </div>
              </div>
            </div>

            <div className="text-xs md:text-sm text-primary-text/60 leading-relaxed text-center md:text-left">
              * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-32 bg-[#fffbf6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-text mb-12 md:mb-16">How It Works</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 border-t-2 border-dashed border-primary-text/20 z-0"></div>

              {product.steps.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                   <div 
                     className="w-24 h-24 bg-white border-[3px] border-primary-text rounded-full flex items-center justify-center text-3xl font-bold shadow-md mb-6"
                     style={{ color: product.accentColor }}
                   >
                     {idx + 1}
                   </div>
                   <h3 className="text-xl font-bold text-primary-text mb-2">{item.title}</h3>
                   <p className="text-primary-text/70 max-w-xs">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Product Details & Supplement Facts */}
      <section className={`py-16 md:py-32 ${product.bgClass}`}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Supplement Facts Table */}
            <div className="bg-white p-6 border-[3px] border-primary-text rounded-xl shadow-[4px_4px_0px_0px_rgba(63,34,23,1)]">
                <h3 className="text-2xl font-bold border-b-2 border-primary-text pb-2 mb-4">Supplement Facts</h3>
                <div className="text-sm font-bold flex justify-between mb-1">
                    <span>Serving Size: 2 Gummies</span>
                </div>
                <div className="text-sm font-bold flex justify-between border-b-[3px] border-primary-text pb-2 mb-2">
                    <span>Servings Per Container: 30</span>
                </div>
                
                <div className="flex justify-between text-xs font-bold border-b border-primary-text pb-1 mb-1">
                    <span>Amount Per Serving</span>
                    <span>%Daily Value</span>
                </div>

                {/* Table Rows - Dynamic */}
                {product.supplementFacts.map((row, i) => (
                    <div key={i} className={`flex justify-between text-sm py-1 border-b border-primary-text/10 ${row.isSubItem ? 'pl-4' : ''}`}>
                        <span>{row.name}</span>
                        <span className="font-medium text-right ml-2 min-w-[30px]">{row.val} {row.dv && <span className="text-[10px] ml-1 text-primary-text/60">({row.dv})</span>}</span>
                    </div>
                ))}
                 <div className="text-[10px] pt-2 text-primary-text/60">
                    † Percent Daily Values are based on a 2,000 calorie diet.
                    <br/>
                    ** Daily Value not established.
                </div>
            </div>

            {/* Info Tabs */}
            <div>
                 <div className="flex space-x-4 border-b-2 border-primary-text/10 mb-6 overflow-x-auto">
                    <button 
                        onClick={() => setActiveTab('details')}
                        className={`pb-2 font-bold text-lg transition-colors whitespace-nowrap ${activeTab === 'details' ? 'border-b-4' : 'text-primary-text/40'}`}
                        style={{ borderColor: activeTab === 'details' ? product.accentColor : 'transparent', color: activeTab === 'details' ? product.accentColor : undefined }}
                    >
                        Product Details
                    </button>
                    <button 
                         onClick={() => setActiveTab('ingredients')}
                        className={`pb-2 font-bold text-lg transition-colors whitespace-nowrap ${activeTab === 'ingredients' ? 'border-b-4' : 'text-primary-text/40'}`}
                        style={{ borderColor: activeTab === 'ingredients' ? product.accentColor : 'transparent', color: activeTab === 'ingredients' ? product.accentColor : undefined }}
                    >
                        Ingredients
                    </button>
                 </div>

                 <div className="prose text-primary-text/80">
                    {activeTab === 'details' ? (
                        <div className="space-y-4 animate-fade-in">
                            <p>Give your child the boost they need with <strong>Kildren's {product.name}</strong>. Specially formulated to bridge nutritional gaps and {product.description.toLowerCase()}.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {product.benefitsList.map((item, i) => (
                                  <li key={i}><strong>{item.title}:</strong> {item.desc}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="space-y-4 animate-fade-in">
                            <p><strong>Other Ingredients:</strong> {product.ingredients}</p>
                            <p className="text-sm italic">Free from: Gluten, Dairy, Soy, Peanuts, and Artificial Flavors.</p>
                        </div>
                    )}
                 </div>
            </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-text mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-[3px] border-primary-text rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
                        <button 
                            className="w-full px-6 py-4 flex items-center justify-between bg-cream/50 text-left font-bold text-primary-text hover:bg-cream transition-colors"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            {faq.question}
                            {openFaq === index ? <ChevronUp className="w-5 h-5" style={{color: product.accentColor}} /> : <ChevronDown className="w-5 h-5 text-primary-text/50" />}
                        </button>
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${openFaq === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                        >
                            <p className="text-primary-text/70 leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;