import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Heart, Menu, Minus,
  Plus, Search, ShoppingBag, Sparkles, Star, Truck, X, MessageCircle,
  ShieldCheck, RotateCcw, UserRound, Instagram, Facebook, Music2, Check,
  SlidersHorizontal
} from "lucide-react";
import "./styles.css";

const WA_NUMBER = "923262665203"; // Change this placeholder number before launch.

const img = (id, w=900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

const products = [
  {id:1,name:"Burgundy Grace 2-Piece",category:"Casual",style:"Casual",type:"2-Piece",price:3290,salePrice:2890,sizes:["S","M","L","XL"],colors:["Burgundy","Ivory"],fabric:"Premium lawn with soft cotton trouser",stock:7,newArrival:true,featured:true,bestseller:true,
    desc:"A graceful burgundy shirt and trouser set with refined detailing for everyday polish.", images:[img("1529139574466-a303027c1d8b"),img("1539008835657-7e9a8e7a5d1a"),img("1544441893-675973e31985")]},
  {id:2,name:"Ivory Bloom 3-Piece",category:"Casual",style:"Casual",type:"3-Piece",price:4290,salePrice:null,sizes:["S","M","L"],colors:["Ivory","Rose"],fabric:"Airy lawn, voile dupatta",stock:11,newArrival:true,featured:true,
    desc:"An ivory floral ensemble with an easy silhouette and a soft printed dupatta.", images:[img("1483985988355-763728e1935b"),img("1496747611176-843222e1e57c"),img("1529139574466-a303027c1d8b")]},
  {id:3,name:"Everyday Elegance Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:2990,salePrice:2590,sizes:["S","M","L","XL"],colors:["Chocolate","Cream"],fabric:"Textured cotton blend",stock:9,featured:true,bestseller:true,
    desc:"A modern two-piece co-ord made for office days, coffee runs and relaxed evenings.", images:[img("1485968579580-b6d095142e6e"),img("1506629905607-d9e29b8f7d5a"),img("1515886657613-9f3515b0c78f")]},
  {id:4,name:"Mahogany Embroidered Suit",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4990,salePrice:4490,sizes:["S","M","L"],colors:["Mahogany","Black"],fabric:"Lawn with embroidered organza details",stock:5,newArrival:true,featured:true,
    desc:"Deep mahogany tones and restrained embroidery for polished dinners and gatherings.", images:[img("1515886657613-9f3515b0c78f"),img("1485968579580-b6d095142e6e"),img("1529139574466-a303027c1d8b")]},
  {id:5,name:"Classic Chiffon Edit",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4690,salePrice:null,sizes:["S","M","L","XL"],colors:["Cream","Burgundy"],fabric:"Chiffon dupatta with premium lawn",stock:12,newArrival:true,
    desc:"A clean, feminine three-piece with a flowing chiffon dupatta and delicate finish.", images:[img("1496747611176-843222e1e57c"),img("1483985988355-763728e1935b"),img("1515372039744-b8f02a3ae446")]},
  {id:6,name:"Rosewood Semi-Formal",category:"Semi-Formal",style:"Semi-Formal",type:"2-Piece",price:3890,salePrice:3490,sizes:["S","M","L"],colors:["Rosewood","Ivory"],fabric:"Soft cotton satin blend",stock:6,bestseller:true,
    desc:"A rich rosewood set with a tailored neckline and effortless drape.", images:[img("1515372039744-b8f02a3ae446"),img("1539008835657-7e9a8e7a5d1a"),img("1496747611176-843222e1e57c")]},
  {id:7,name:"Velvet Evening Look",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:5490,salePrice:4990,sizes:["S","M","L"],colors:["Burgundy","Chocolate"],fabric:"Velvet shirt with chiffon dupatta",stock:4,featured:true,
    desc:"A sophisticated velvet look for winter dinners, festive evenings and intimate celebrations.", images:[img("1515886657613-9f3515b0c78f"),img("1515372039744-b8f02a3ae446"),img("1544441893-675973e31985")]},
  {id:8,name:"Mehndi Glow 3-Piece",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:4890,salePrice:null,sizes:["S","M","L","XL"],colors:["Mehndi","Cream"],fabric:"Lawn with printed chiffon dupatta",stock:8,newArrival:true,
    desc:"Fresh festive colour and graceful print for mehndi dinners and wedding guest dressing.", images:[img("1506629905607-d9e29b8f7d5a"),img("1529139574466-a303027c1d8b"),img("1483985988355-763728e1935b")]},
  {id:9,name:"Quiet Luxury 2-Piece",category:"Casual",style:"Casual",type:"2-Piece",price:2790,salePrice:null,sizes:["S","M","L"],colors:["Cream","Chocolate"],fabric:"Premium cotton",stock:15,
    desc:"Clean lines, a soft palette and an easy fit for understated everyday dressing.", images:[img("1509631179647-0177331691ae"),img("1515886657613-9f3515b0c78f")]},
  {id:10,name:"Burgundy Muse Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:3190,salePrice:null,sizes:["S","M","L","XL"],colors:["Burgundy","Cream"],fabric:"Textured crepe",stock:10,newArrival:true,
    desc:"A confident burgundy co-ord with a contemporary cut and understated finish.", images:[img("1490481651871-ab68de25d43d"),img("1539008835657-7e9a8e7a5d1a")]},
  {id:11,name:"Pearl Garden Suit",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4590,salePrice:null,sizes:["S","M","L"],colors:["Ivory","Sage"],fabric:"Lawn with embroidered neckline",stock:9,
    desc:"Soft ivory and garden-inspired details for daytime lunches and work gatherings.", images:[img("1512436991641-6745cdb1723f"),img("1496747611176-843222e1e57c")]},
  {id:12,name:"Chandni Festive Edit",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:5790,salePrice:5190,sizes:["S","M","L"],colors:["Ivory","Gold"],fabric:"Silk-blend shirt with organza dupatta",stock:3,bestseller:true,
    desc:"An elegant festive set with subtle sheen, designed to photograph beautifully.", images:[img("1529139574466-a303027c1d8b"),img("1515886657613-9f3515b0c78f"),img("1515372039744-b8f02a3ae446")]},
  {id:13,name:"Mocha Everyday Set",category:"Casual",style:"Casual",type:"2-Piece",price:2490,salePrice:null,sizes:["S","M","L","XL"],colors:["Mocha","Cream"],fabric:"Cotton lawn",stock:13,
    desc:"A warm mocha set with a relaxed silhouette and clean everyday appeal.", images:[img("1485968579580-b6d095142e6e"),img("1506629905607-d9e29b8f7d5a")]},
  {id:14,name:"Blush Dusk 3-Piece",category:"Casual",style:"Casual",type:"3-Piece",price:3990,salePrice:3690,sizes:["S","M","L"],colors:["Blush","Burgundy"],fabric:"Lawn and chiffon",stock:6,newArrival:true,
    desc:"A feminine blush palette with a deep border detail and floaty chiffon dupatta.", images:[img("1515886657613-9f3515b0c78f"),img("1496747611176-843222e1e57c")]},
  {id:15,name:"Sienna Workwear Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:2890,salePrice:null,sizes:["S","M","L"],colors:["Sienna","Cream"],fabric:"Cotton blend",stock:14,
    desc:"A refined workwear co-ord with practical comfort from desk to dinner.", images:[img("1509631179647-0177331691ae"),img("1515372039744-b8f02a3ae446")]},
  {id:16,name:"Noor Wedding Guest Suit",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:4990,salePrice:4590,sizes:["S","M","L","XL"],colors:["Burgundy","Champagne"],fabric:"Lawn with chiffon dupatta",stock:5,featured:true,
    desc:"A graceful wedding guest ensemble in a deep romantic palette with delicate accents.", images:[img("1512436991641-6745cdb1723f"),img("1529139574466-a303027c1d8b")]},
  {id:17,name:"Cocoa Line 2-Piece",category:"Casual",style:"Casual",type:"2-Piece",price:2690,salePrice:null,sizes:["S","M","L"],colors:["Cocoa","Ivory"],fabric:"Cotton lawn",stock:17,
    desc:"Minimal cocoa stripes with a flattering straight cut for everyday ease.", images:[img("1515372039744-b8f02a3ae446"),img("1506629905607-d9e29b8f7d5a")]},
  {id:18,name:"Maroon Evening 3-Piece",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:5190,salePrice:null,sizes:["S","M","L"],colors:["Maroon","Black"],fabric:"Velvet and chiffon",stock:4,bestseller:true,
    desc:"A rich maroon evening look balanced with a soft chiffon dupatta.", images:[img("1515886657613-9f3515b0c78f"),img("1539008835657-7e9a8e7a5d1a")]},
  {id:19,name:"Soft Petal Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:2990,salePrice:2790,sizes:["S","M","L"],colors:["Petal","Cream"],fabric:"Textured cotton",stock:8,
    desc:"A softly structured co-ord with a subtle feminine palette.", images:[img("1490481651871-ab68de25d43d"),img("1512436991641-6745cdb1723f")]},
  {id:20,name:"Ivory Drape Semi-Formal",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4790,salePrice:null,sizes:["S","M","L"],colors:["Ivory","Burgundy"],fabric:"Lawn and organza",stock:7,newArrival:true,
    desc:"A quiet ivory statement with refined neckline detailing and an organza accent.", images:[img("1483985988355-763728e1935b"),img("1512436991641-6745cdb1723f")]},
  {id:21,name:"Mauve Monday 2-Piece",category:"Casual",style:"Casual",type:"2-Piece",price:2590,salePrice:null,sizes:["S","M","L","XL"],colors:["Mauve","Ivory"],fabric:"Cotton lawn",stock:16,
    desc:"Soft mauve and an easy silhouette for effortless weekday dressing.", images:[img("1515372039744-b8f02a3ae446"),img("1496747611176-843222e1e57c")]},
  {id:22,name:"Garnet Bloom Suit",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4390,salePrice:3990,sizes:["S","M","L"],colors:["Garnet","Cream"],fabric:"Printed lawn and chiffon",stock:5,bestseller:true,
    desc:"A rich garnet print with a graceful dupatta for polished occasions.", images:[img("1515886657613-9f3515b0c78f"),img("1529139574466-a303027c1d8b")]},
  {id:23,name:"Champagne Night Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:3390,salePrice:null,sizes:["S","M","L"],colors:["Champagne","Chocolate"],fabric:"Crepe blend",stock:6,
    desc:"Subtle champagne tones for a modern dinner-ready co-ord.", images:[img("1509631179647-0177331691ae"),img("1515886657613-9f3515b0c78f")]},
  {id:24,name:"Rani Rose Festive Suit",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:5490,salePrice:4990,sizes:["S","M","L"],colors:["Rose","Burgundy"],fabric:"Lawn, chiffon and organza",stock:3,newArrival:true,
    desc:"A refined festive floral with a romantic rose palette.", images:[img("1496747611176-843222e1e57c"),img("1512436991641-6745cdb1723f")]},
  {id:25,name:"Olive Quiet Edit",category:"Casual",style:"Casual",type:"2-Piece",price:2390,salePrice:null,sizes:["S","M","L","XL"],colors:["Olive","Cream"],fabric:"Cotton lawn",stock:18,
    desc:"An understated olive set with soft texture and a clean finish.", images:[img("1512436991641-6745cdb1723f"),img("1506629905607-d9e29b8f7d5a")]},
  {id:26,name:"Chocolate Muse Suit",category:"Semi-Formal",style:"Semi-Formal",type:"3-Piece",price:4690,salePrice:4290,sizes:["S","M","L"],colors:["Chocolate","Champagne"],fabric:"Lawn and chiffon",stock:7,
    desc:"Chocolate brown with champagne accents — sophisticated without trying too hard.", images:[img("1483985988355-763728e1935b"),img("1515372039744-b8f02a3ae446")]},
  {id:27,name:"Burgundy Weekend Co-ord",category:"Co-ords",style:"Co-ords",type:"Co-ord",price:3090,salePrice:null,sizes:["S","M","L","XL"],colors:["Burgundy","Black"],fabric:"Textured cotton",stock:11,
    desc:"A rich weekend uniform that moves comfortably from brunch to evening.", images:[img("1490481651871-ab68de25d43d"),img("1509631179647-0177331691ae")]},
  {id:28,name:"Pearl Mehndi 3-Piece",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:4890,salePrice:4490,sizes:["S","M","L"],colors:["Pearl","Mehndi"],fabric:"Printed lawn and chiffon",stock:6,
    desc:"Fresh festive tones with a delicate border, ideal for daytime celebrations.", images:[img("1512436991641-6745cdb1723f"),img("1496747611176-843222e1e57c")]},
  {id:29,name:"Classic Cream 2-Piece",category:"Casual",style:"Casual",type:"2-Piece",price:2290,salePrice:null,sizes:["S","M","L","XL"],colors:["Cream","Cocoa"],fabric:"Cotton lawn",stock:20,
    desc:"The wardrobe essential: a versatile cream set with a polished straight silhouette.", images:[img("1483985988355-763728e1935b"),img("1515886657613-9f3515b0c78f")]},
  {id:30,name:"Deep Rose Dinner Suit",category:"Party & Wedding",style:"Party & Wedding",type:"3-Piece",price:5290,salePrice:4790,sizes:["S","M","L"],colors:["Deep Rose","Ivory"],fabric:"Velvet and chiffon",stock:5,bestseller:true,
    desc:"A deep rose evening suit designed for intimate dinners and elegant celebrations.", images:[img("1515372039744-b8f02a3ae446"),img("1515886657613-9f3515b0c78f")]}
];

const styles = [
  {title:"CASUAL",text:"Effortless everyday elegance",image:img("1506629905607-d9e29b8f7d5a")},
  {title:"SEMI-FORMAL",text:"Polished looks for work and gatherings",image:img("1515372039744-b8f02a3ae446")},
  {title:"PARTY & WEDDING",text:"Make every occasion memorable",image:img("1515886657613-9f3515b0c78f")},
  {title:"CO-ORDS",text:"Modern Pakistani style, made easy",image:img("1490481651871-ab68de25d43d")}
];

const reviews = [
  ["Beautiful fabric and exactly like the pictures.","Verified Customer"],
  ["Very elegant suit. Delivery was quick.","Verified Customer"],
  ["The fit and finishing felt much more expensive than the price.","Verified Customer"],
  ["Loved the colour. WhatsApp support was genuinely helpful.","Verified Customer"]
];

const money = n => `PKR ${n.toLocaleString("en-PK")}`;

function App(){
  const [page,setPage] = useState("home");
  const [selected,setSelected] = useState(null);
  const [cart,setCart] = useState([]);
  const [wishlist,setWishlist] = useState([]);
  const [search,setSearch] = useState("");
  const [mobileSearch,setMobileSearch] = useState(false);
  const [toast,setToast] = useState("");
  const [filterOpen,setFilterOpen] = useState(false);
  const [filters,setFilters] = useState({category:"All",price:"All",size:"All",color:"All",style:"All",sort:"Featured"});
  const [checkoutDone,setCheckoutDone] = useState(false);

  const showToast = (t) => { setToast(t); setTimeout(()=>setToast(""),2200); };

  const openProduct = p => { setSelected(p); setPage("product"); window.scrollTo({top:0,behavior:"smooth"}); };
  const addToCart = (p, size=p.sizes[1] || p.sizes[0]) => {
    setCart(c => {
      const found = c.find(x=>x.id===p.id && x.size===size);
      if(found) return c.map(x=>x.id===p.id && x.size===size ? {...x,qty:x.qty+1}:x);
      return [...c,{...p,size,qty:1}];
    });
    showToast(`${p.name} added to cart`);
  };
  const toggleWish = p => {
    setWishlist(w => w.includes(p.id)?w.filter(id=>id!==p.id):[...w,p.id]);
    showToast(wishlist.includes(p.id)?"Removed from wishlist":"Saved to wishlist");
  };

  const filtered = useMemo(()=>{
    let list=[...products];
    if(filters.category!=="All") list=list.filter(p=>p.category===filters.category);
    if(filters.style!=="All") list=list.filter(p=>p.style===filters.style);
    if(filters.size!=="All") list=list.filter(p=>p.sizes.includes(filters.size));
    if(filters.color!=="All") list=list.filter(p=>p.colors.includes(filters.color));
    if(filters.price!=="All") list=list.filter(p=>{
      const price=p.salePrice||p.price;
      if(filters.price==="Under PKR 2,500") return price<2500;
      if(filters.price==="PKR 2,500–3,500") return price>=2500&&price<=3500;
      if(filters.price==="PKR 3,500–5,000") return price>3500&&price<=5000;
      return price>5000;
    });
    if(search.trim()) {
      const q=search.toLowerCase();
      list=list.filter(p=>(p.name+" "+p.category+" "+p.style+" "+p.fabric).toLowerCase().includes(q));
    }
    if(filters.sort==="Price: Low to High") list.sort((a,b)=>(a.salePrice||a.price)-(b.salePrice||b.price));
    if(filters.sort==="Price: High to Low") list.sort((a,b)=>(b.salePrice||b.price)-(a.salePrice||a.price));
    if(filters.sort==="Newest") list.sort((a,b)=>Number(b.newArrival)-Number(a.newArrival));
    return list;
  },[filters,search]);

  const cartTotal=cart.reduce((s,x)=>s+(x.salePrice||x.price)*x.qty,0);
  const delivery=cartTotal>=6000?0:(cart.length?250:0);

  const whatsapp = (p, size=p?.sizes?.[1]||p?.sizes?.[0], qty=1) => {
    const text = p ? `Assalam o Alaikum! I'd like to order:%0A%0AProduct: ${p.name}%0ASize: ${size}%0AQuantity: ${qty}%0APrice: ${money(p.salePrice||p.price)}%0A%0APlease confirm availability.` : `Assalam o Alaikum! I'd like help with my order.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`,"_blank");
  };

  return <div className="app">
    <Header page={page} setPage={setPage} cartCount={cart.reduce((s,x)=>s+x.qty,0)} wishlistCount={wishlist.length} search={search} setSearch={setSearch} mobileSearch={mobileSearch} setMobileSearch={setMobileSearch}/>
    {page==="home" && <Home openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist} setPage={setPage} setFilters={setFilters} />}
    {page==="shop" && <Shop products={filtered} filters={filters} setFilters={setFilters} filterOpen={filterOpen} setFilterOpen={setFilterOpen} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist} search={search}/>}
    {page==="product" && selected && <Product p={selected} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist} whatsapp={whatsapp} openProduct={openProduct}/>}
    {page==="cart" && <Cart cart={cart} setCart={setCart} total={cartTotal} delivery={delivery} setPage={setPage} openProduct={openProduct}/>}
    {page==="checkout" && <Checkout cart={cart} total={cartTotal} delivery={delivery} setPage={setPage} setCart={setCart} done={checkoutDone} setDone={setCheckoutDone}/>}
    {page==="account" && <Account wishlist={wishlist} products={products} openProduct={openProduct}/>}
    {page==="about" && <About setPage={setPage}/>}
    {page==="faq" && <FAQ/>}
    {page==="size" && <SizeGuide/>}
    {page==="delivery" && <Policy title="Delivery Information" text="We dispatch orders across Pakistan after WhatsApp confirmation. Delivery usually takes 2–5 working days depending on destination. Free delivery applies to orders of PKR 6,000 or more."/>}
    {page==="exchange" && <Policy title="Exchange Policy" text="We offer an easy exchange window for eligible unworn items. Please contact us on WhatsApp within 7 days of delivery. Items must be returned with original tags and packaging."/>}
    {page==="privacy" && <Policy title="Privacy Policy" text="We only collect information needed to process your order and provide customer support. Your contact details are not sold to third parties."/>}
    {page==="terms" && <Policy title="Terms & Conditions" text="Product colours may vary slightly by screen. Orders are confirmed by WhatsApp before dispatch. Prices and availability may change as collections are updated."/>}
    <Footer setPage={setPage}/>
    <a className="wa-float" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={20}/><span>Order on WhatsApp</span></a>
    <MobileNav page={page} setPage={setPage} cartCount={cart.reduce((s,x)=>s+x.qty,0)} setMobileSearch={setMobileSearch}/>
    {toast && <div className="toast"><Check size={16}/>{toast}</div>}
  </div>
}

function Header({page,setPage,cartCount,wishlistCount,search,setSearch,mobileSearch,setMobileSearch}){
  return <header className="header">
    <div className="topbar">Complimentary delivery on orders over PKR 6,000 <span>•</span> Cash on Delivery nationwide</div>
    <div className="nav container">
      <button className="icon-btn mobile-only" onClick={()=>setMobileSearch(v=>!v)} aria-label="Search"><Search size={20}/></button>
      <button className="brand" onClick={()=>{setPage("home");window.scrollTo({top:0})}}><span>NOOR</span><small>& CO.</small></button>
      <nav className="desktop-nav">
        {["New Arrivals","Casual","Semi-Formal","Party & Wedding","Co-ords","Sale"].map(x=><button key={x} onClick={()=>{setPage("shop");}}>{x}</button>)}
      </nav>
      <div className="nav-actions">
        <div className="search desktop-search"><Search size={17}/><input value={search} onChange={e=>{setSearch(e.target.value);setPage("shop")}} placeholder="Search styles..." /></div>
        <button className="icon-btn" onClick={()=>setPage("account")} aria-label="Account"><UserRound size={20}/></button>
        <button className="icon-btn" onClick={()=>setPage("cart")} aria-label="Cart"><ShoppingBag size={20}/><b className="count">{cartCount}</b></button>
      </div>
    </div>
    {mobileSearch && <div className="mobile-search"><Search size={17}/><input autoFocus value={search} onChange={e=>{setSearch(e.target.value);setPage("shop")}} placeholder="Search styles..." /></div>}
  </header>
}

function Home({openProduct,addToCart,toggleWish,wishlist,setPage,setFilters}){
  const featured=products.filter(p=>p.featured).slice(0,8);
  const newArr=products.filter(p=>p.newArrival).slice(0,8);
  const best=products.filter(p=>p.bestseller).slice(0,6);
  const goCategory=(c)=>{setFilters(f=>({...f,category:c}));setPage("shop");window.scrollTo({top:0})};
  return <main>
    <section className="hero container">
      <div className="hero-copy">
        <span className="eyebrow">THE NEW PAKISTANI EDIT</span>
        <h1>Affordable<br/><em>Elegance,</em> Made for You</h1>
        <p>Discover elegant Pakistani women's wear designed for everyday confidence, office style and special occasions.</p>
        <div className="hero-actions"><button className="btn primary" onClick={()=>{setPage("shop");setFilters(f=>({...f,sort:"Newest"}));}}>SHOP NEW ARRIVALS <ArrowRight size={17}/></button><button className="btn ghost" onClick={()=>document.getElementById("categories")?.scrollIntoView({behavior:"smooth"})}>EXPLORE COLLECTION</button></div>
        <div className="hero-note"><Sparkles size={16}/> Thoughtful details. Wearable silhouettes. Fair prices.</div>
      </div>
      <div className="hero-image">
        <img src={img("1490481651871-ab68de25d43d",1200)} alt="Elegant Pakistani-inspired fashion editorial placeholder"/>
        <div className="hero-tag"><small>NEW SEASON</small><strong>Quietly<br/>confident.</strong></div>
      </div>
    </section>

    <TrustBar/>
    <section className="section container" id="categories">
      <SectionHeading kicker="SHOP THE EDIT" title="Shop by Category" sub="Find the pieces that fit your day, your plans and your personal style."/>
      <div className="category-grid">
        {["New Arrivals","Casual Edit","Semi-Formal","Party & Wedding","2-Piece","3-Piece","Co-ords","Sale"].map((x,i)=><button className="category-card" key={x} onClick={()=>goCategory(x==="Casual Edit"?"Casual":x==="New Arrivals"?"All":x==="Sale"?"All":x)}><span>0{i+1}</span><strong>{x}</strong><ArrowRight size={18}/></button>)}
      </div>
    </section>

    <section className="section soft">
      <div className="container"><SectionHeading kicker="CURATED FOR YOU" title="Featured Pieces" sub="Our edit of easy-to-wear Pakistani silhouettes, priced for real life." align="center"/>
      <ProductGrid list={featured} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist}/></div>
    </section>

    <section className="section container">
      <SectionHeading kicker="JUST IN" title="New Arrivals" sub="Fresh styles. Timeless elegance."/>
      <ProductGrid list={newArr} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist}/>
      <div className="center"><button className="text-btn" onClick={()=>{setPage("shop");setFilters(f=>({...f,sort:"Newest"}))}}>View all new arrivals <ArrowRight size={16}/></button></div>
    </section>

    <section className="section soft">
      <div className="container"><SectionHeading kicker="OUR BEST LOVED" title="Best Sellers" sub="The pieces customers keep coming back to." align="center"/>
      <ProductGrid list={best} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist}/></div>
    </section>

    <section className="section container">
      <SectionHeading kicker="DRESS YOUR WAY" title="Shop by Style" sub="Four easy directions for your wardrobe."/>
      <div className="style-grid">{styles.map(s=><div className="style-card" key={s.title}><img src={s.image} alt="Fashion placeholder"/><div className="style-overlay"><span>{s.title}</span><h3>{s.text}</h3><button onClick={()=>{goCategory(s.title==="PARTY & WEDDING"?"Party & Wedding":s.title==="CO-ORDS"?"Co-ords":s.title[0]+s.title.slice(1).toLowerCase())}}>SHOP THE STYLE <ArrowRight size={16}/></button></div></div>)}</div>
    </section>

    <section className="section bundle">
      <div className="container"><div className="bundle-head"><div><span className="eyebrow">STYLE IT TOGETHER</span><h2>Complete the Look</h2><p>Save more when you complete the look.</p></div><button className="btn ghost" onClick={()=>setPage("shop")}>SHOP ACCESSORIES <ArrowRight size={16}/></button></div>
      <div className="bundle-grid"><Bundle title="Complete Look" text="Dress + Hijab/Scarf + Jewellery" image={img("1515886657613-9f3515b0c78f")}/><Bundle title="Wedding Guest Look" text="Dress + Dupatta + Accessories" image={img("1515372039744-b8f02a3ae446")}/></div></div>
    </section>

    <section className="section container"><SectionHeading kicker="WHY NOOR" title="Thoughtful fashion, without the fuss." align="center"/><TrustBar full/></section>

    <section className="section soft"><div className="container"><SectionHeading kicker="REAL PEOPLE, REAL FEEDBACK" title="Kind words from our customers" align="center"/><div className="review-grid">{reviews.map(([r,n])=><div className="review" key={r}><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="currentColor"/>)}</div><p>“{r}”</p><small><Check size={13}/> {n}</small></div>)}</div></div></section>

    <InstagramSection/>
    <section className="whatsapp-cta"><div className="container"><div><span className="eyebrow">NEED A LITTLE HELP?</span><h2>Chat with us before you order.</h2><p>Need help choosing your size, colour or occasion? Our team is one WhatsApp away.</p></div><a className="btn light" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> ORDER ON WHATSAPP</a></div></section>
  </main>
}

function TrustBar({full=false}){return <div className={`trust ${full?"trust-full":""}`}><div className="container trust-inner">{[["COD","Cash on Delivery",Truck],["QC","Quality Checked Products",ShieldCheck],["EX","Easy Exchange",RotateCcw],["FAST","Fast Response",MessageCircle],["PAK","Nationwide Delivery",Truck]].map(([a,b,I])=><div key={a}><I size={18}/><span><b>{a}</b>{b}</span></div>)}</div></div>}

function SectionHeading({kicker,title,sub,align=""}){return <div className={`section-head ${align}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{sub&&<p>{sub}</p>}</div>}

function ProductGrid({list,openProduct,addToCart,toggleWish,wishlist}){return <div className="product-grid">{list.map(p=><ProductCard key={p.id} p={p} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wish={wishlist.includes(p.id)}/>)}</div>}

function ProductCard({p,openProduct,addToCart,toggleWish,wish}){const price=p.salePrice||p.price;return <article className="product-card">
  <div className="product-media" onClick={()=>openProduct(p)}><img src={p.images[0]} alt={p.name} loading="lazy"/>{p.salePrice&&<span className="sale">SALE</span>}<button className={`heart ${wish?"active":""}`} onClick={e=>{e.stopPropagation();toggleWish(p)}}><Heart size={18} fill={wish?"currentColor":"none"}/></button><button className="quick" onClick={e=>{e.stopPropagation();openProduct(p)}}>QUICK VIEW</button></div>
  <div className="product-info"><div className="product-top"><h3 onClick={()=>openProduct(p)}>{p.name}</h3><div className="price">{money(price)} {p.salePrice&&<del>{money(p.price)}</del>}</div></div><p>{p.desc}</p><div className="sizes"><span>Sizes</span>{p.sizes.map(s=><i key={s}>{s}</i>)}</div><button className="add" onClick={()=>addToCart(p)}><ShoppingBag size={16}/> ADD TO CART</button></div>
</article>}

function Bundle({title,text,image}){return <div className="bundle-card"><img src={image} alt="Bundle placeholder" loading="lazy"/><div><span>{title}</span><h3>{text}</h3><button className="text-btn">Explore <ArrowRight size={15}/></button></div></div>}

function InstagramSection(){const photos=[img("1490481651871-ab68de25d43d",500),img("1483985988355-763728e1935b",500),img("1515886657613-9f3515b0c78f",500),img("1515372039744-b8f02a3ae446",500),img("1496747611176-843222e1e57c",500),img("1509631179647-0177331691ae",500)];return <section className="section container"><SectionHeading kicker="@NOORANDCO" title="Follow Our Style" sub="Daily outfit inspiration, new drops and styling notes." align="center"/><div className="insta-grid">{photos.map((x,i)=><div key={i}><img src={x} alt="Instagram-style fashion placeholder" loading="lazy"/><span><Instagram size={18}/></span></div>)}</div><div className="center"><button className="btn ghost"><Instagram size={17}/> FOLLOW US ON INSTAGRAM</button></div></section>}

function Shop({products: list,filters,setFilters,filterOpen,setFilterOpen,openProduct,addToCart,toggleWish,wishlist,search}) {
  const categories=["All","Casual","Semi-Formal","Party & Wedding","Co-ords"];
  const price=["All","Under PKR 2,500","PKR 2,500–3,500","PKR 3,500–5,000","PKR 5,000+"];
  const sizes=["All","S","M","L","XL"];
  const colors=["All","Burgundy","Ivory","Cream","Chocolate","Rose","Black","Mehndi"];
  return <main><section className="shop-hero"><div className="container"><span className="eyebrow">THE COLLECTION</span><h1>Shop the Edit</h1><p>Modern Pakistani wear, thoughtfully priced from PKR 2,000–5,000.</p></div></section>
    <div className="container shop-wrap">
      <div className="shop-toolbar"><button className="filter-toggle" onClick={()=>setFilterOpen(v=>!v)}><SlidersHorizontal size={17}/> FILTERS</button><span>{list.length} styles</span><select value={filters.sort} onChange={e=>setFilters(f=>({...f,sort:e.target.value}))}><option>Featured</option><option>Newest</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div>
      <div className={`shop-content ${filterOpen?"open":""}`}><aside className="filters"><Filter title="Category" values={categories} value={filters.category} set={v=>setFilters(f=>({...f,category:v}))}/><Filter title="Price" values={price} value={filters.price} set={v=>setFilters(f=>({...f,price:v}))}/><Filter title="Size" values={sizes} value={filters.size} set={v=>setFilters(f=>({...f,size:v}))}/><Filter title="Color" values={colors} value={filters.color} set={v=>setFilters(f=>({...f,color:v}))}/><button className="clear" onClick={()=>setFilters({category:"All",price:"All",size:"All",color:"All",style:"All",sort:"Featured"})}>Clear all</button></aside><div><div className="active-filters">{search&&<span>Search: {search} <X size={13}/></span>}{filters.category!=="All"&&<span>{filters.category}</span>}</div><ProductGrid list={list} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist}/>{!list.length&&<div className="empty"><Search size={35}/><h3>No styles found</h3><p>Try a different search or filter.</p></div>}</div></div>
    </div>
  </main>
}
function Filter({title,values,value,set}){return <div className="filter-group"><h4>{title}</h4>{values.map(v=><button className={v===value?"selected":""} key={v} onClick={()=>set(v)}>{v}{v===value&&<Check size={14}/>}</button>)}</div>}

function Product({p,addToCart,toggleWish,wishlist,whatsapp,openProduct}) {
  const [size,setSize]=useState(p.sizes[1]||p.sizes[0]); const [qty,setQty]=useState(1); const [active,setActive]=useState(0);
  const price=p.salePrice||p.price;
  return <main className="product-page"><div className="container"><div className="breadcrumbs">Home / {p.category} / {p.name}</div><div className="product-detail">
    <div className="gallery"><div className="gallery-main"><img src={p.images[active]} alt={p.name}/>{p.salePrice&&<span className="sale">SALE</span>}</div><div className="thumbs">{p.images.map((x,i)=><button className={i===active?"on":""} key={x} onClick={()=>setActive(i)}><img src={x} alt="Product view"/></button>)}</div><div className="video-note"><Sparkles size={16}/><span><b>Prefer video?</b> Ask us on WhatsApp for a quick product video before ordering.</span></div></div>
    <div className="detail-copy"><div className="detail-kicker">{p.category} · {p.type}</div><h1>{p.name}</h1><div className="rating"><span className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="currentColor"/>)}</span> 4.9 · 18 reviews</div><div className="detail-price">{money(price)} {p.salePrice&&<del>{money(p.price)}</del>}</div><p className="lead">{p.desc}</p>
      <div className="cod"><Check size={17}/><div><b>Cash on Delivery Available</b><span>Nationwide delivery · 2–5 working days</span></div></div>
      <div className="selector"><label>Colour</label><div className="pills">{p.colors.map(c=><button key={c}>{c}</button>)}</div></div>
      <div className="selector"><label>Size <button className="size-link" onClick={()=>alert("Size guide: S 34–36, M 38–40, L 42–44, XL 46–48 chest (inches). Please compare with a favourite garment for best fit.")}>SIZE GUIDE</button></label><div className="pills">{p.sizes.map(s=><button className={s===size?"active":""} key={s} onClick={()=>setSize(s)}>{s}</button>)}</div></div>
      <div className="buy-row"><div className="qty"><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={15}/></button><span>{qty}</span><button onClick={()=>setQty(qty+1)}><Plus size={15}/></button></div><button className="btn primary grow" onClick={()=>{for(let i=0;i<qty;i++)addToCart(p,size)}}><ShoppingBag size={17}/> ADD TO CART</button><button className="heart large" onClick={()=>toggleWish(p)}><Heart size={19} fill={wishlist.includes(p.id)?"currentColor":"none"}/></button></div>
      <button className="btn buy" onClick={()=>whatsapp(p,size,qty)}>BUY NOW <ArrowRight size={17}/></button>
      <a className="wa-product" href={`https://wa.me/${WA_NUMBER}?text=Assalam%20o%20Alaikum!%20I%27d%20like%20to%20order%20${encodeURIComponent(p.name)}%20-%20Size%20${size}%20-%20Qty%20${qty}%20-%20${encodeURIComponent(money(price))}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Order</a>
      <div className="accordions"><details open><summary>Fabric & details <ChevronDown size={17}/></summary><p>{p.fabric}. Designed with an easy Pakistani fit and thoughtful finishing. Product photos are representative placeholders and can be replaced with your final campaign photography.</p></details><details><summary>Delivery & exchange <ChevronDown size={17}/></summary><p>COD nationwide. Orders are confirmed on WhatsApp before dispatch. Eligible unworn items can be exchanged within 7 days.</p></details><details><summary>Styling suggestions <ChevronDown size={17}/></summary><p>Pair with minimal gold-toned jewellery, a tonal scarf and neutral khussas. For evening wear, add a structured bag and low heels.</p></details></div>
      <p className="help">Need help choosing your size? <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">Chat with us on WhatsApp.</a></p>
    </div></div>
    <section className="section"><SectionHeading kicker="YOU MAY ALSO LIKE" title="Complete the mood" align="center"/><ProductGrid list={products.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,4)} openProduct={openProduct} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist}/></section>
  </div></main>
}

function Cart({cart,setCart,total,delivery,setPage,openProduct}) {
  const update=(item,d)=>setCart(c=>c.map(x=>x.id===item.id&&x.size===item.size?{...x,qty:Math.max(1,x.qty+d)}:x));
  return <main><div className="container narrow"><div className="page-title"><span className="eyebrow">YOUR EDIT</span><h1>Shopping Bag</h1><p>{cart.length?`${cart.reduce((s,x)=>s+x.qty,0)} item(s) ready for checkout.`:"Your bag is currently empty."}</p></div>{!cart.length?<div className="empty"><ShoppingBag size={40}/><h3>Nothing here yet</h3><p>Explore our collection and save your favourites.</p><button className="btn primary" onClick={()=>setPage("shop")}>SHOP THE COLLECTION</button></div>:<div className="cart-layout"><div className="cart-items">{cart.map(x=><div className="cart-item" key={`${x.id}-${x.size}`}><img src={x.images[0]} alt={x.name} onClick={()=>openProduct(x)}/><div><h3>{x.name}</h3><span>Size {x.size}</span><b>{money(x.salePrice||x.price)}</b><button className="remove" onClick={()=>setCart(c=>c.filter(i=>!(i.id===x.id&&i.size===x.size)))}>Remove</button></div><div className="qty"><button onClick={()=>update(x,-1)}><Minus size={14}/></button><span>{x.qty}</span><button onClick={()=>update(x,1)}><Plus size={14}/></button></div></div>)}</div><aside className="summary"><h3>Order Summary</h3><div><span>Subtotal</span><b>{money(total)}</b></div><div><span>Delivery</span><b>{delivery?money(delivery):"FREE"}</b></div><hr/><div className="total"><span>Total</span><b>{money(total+delivery)}</b></div><div className="summary-note"><Truck size={16}/> Free delivery on orders over PKR 6,000.</div><button className="btn primary full" onClick={()=>setPage("checkout")}>PROCEED TO CHECKOUT <ArrowRight size={17}/></button><button className="continue" onClick={()=>setPage("shop")}>Continue shopping</button></aside></div>}</div></main>
}

function Checkout({cart,total,delivery,setPage,setCart,done,setDone}) {
  const [form,setForm]=useState({name:"",mobile:"",whatsapp:"",city:"",address:"",notes:""});
  const valid=form.name&&form.mobile&&form.city&&form.address&&cart.length;
  if(done) return <main><div className="success container"><div className="success-icon"><Check size={30}/></div><span className="eyebrow">ORDER CONFIRMED</span><h1>Thank you for your order!</h1><p>Your order has been received. Our team will contact you on WhatsApp to confirm your order.</p><div className="success-card"><b>Cash on Delivery</b><span>{money(total+delivery)} · {form.city}</span></div><button className="btn primary" onClick={()=>{setDone(false);setPage("home")}}>CONTINUE SHOPPING</button></div></main>;
  const field=(key,label,placeholder,required=true)=><label className="field"><span>{label}{required&&" *"}</span><input value={form[key]} required={required} onChange={e=>setForm({...form,[key]:e.target.value})} placeholder={placeholder}/></label>;
  return <main><div className="container checkout"><div className="page-title"><span className="eyebrow">SECURE CHECKOUT</span><h1>Complete your order</h1><p>Simple COD checkout, built for Pakistan.</p></div><div className="checkout-grid"><form className="checkout-form" onSubmit={e=>{e.preventDefault();if(valid){setDone(true);setCart([]);}}}><h3>Delivery details</h3>{field("name","Full Name","Your full name")}{field("mobile","Mobile Number","03XX XXXXXXX")}{field("whatsapp","WhatsApp Number","03XX XXXXXXX",false)}<div className="two">{field("city","City","Karachi")}{field("address","Complete Address","House / street / area")}</div><label className="field"><span>Order Notes</span><textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Any delivery or sizing notes?"/></label><div className="payment"><div><Check size={18}/><div><b>Cash on Delivery Available</b><span>Pay when your order arrives.</span></div></div></div><button className="btn primary full" disabled={!valid}>PLACE COD ORDER <ArrowRight size={17}/></button><p className="form-note">By placing your order, you agree to our exchange and delivery policies.</p></form><aside className="summary"><h3>Order Summary</h3>{cart.map(x=><div className="mini-line" key={`${x.id}-${x.size}`}><img src={x.images[0]} alt=""/><span>{x.name}<small>Size {x.size} · Qty {x.qty}</small></span><b>{money((x.salePrice||x.price)*x.qty)}</b></div>)}<hr/><div><span>Subtotal</span><b>{money(total)}</b></div><div><span>Delivery</span><b>{delivery?money(delivery):"FREE"}</b></div><div className="total"><span>Total</span><b>{money(total+delivery)}</b></div></aside></div></div></main>
}

function Account({wishlist,products,openProduct}){return <main><div className="container narrow"><div className="page-title"><span className="eyebrow">YOUR SPACE</span><h1>Account</h1><p>Save favourites here while you shop.</p></div><div className="account-card"><UserRound size={25}/><h3>Welcome to Noor & Co.</h3><p>Guest accounts are ready for a future customer database integration.</p></div><SectionHeading kicker="SAVED FOR LATER" title={`${wishlist.length} Wishlist ${wishlist.length===1?"item":"items"}`}/>{wishlist.length?<ProductGrid list={products.filter(p=>wishlist.includes(p.id))} openProduct={openProduct} addToCart={()=>{}} toggleWish={()=>{}} wishlist={wishlist}/>:<div className="empty compact"><Heart size={30}/><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it.</p></div>}</div></main>}

function About({setPage}){return <main><section className="about-hero"><div className="container"><span className="eyebrow">OUR POINT OF VIEW</span><h1>Pakistani elegance,<br/><em>without the markup.</em></h1><p>We believe beautiful clothing should feel special without feeling out of reach. Noor & Co. is imagined as a modern Pakistani fashion label for women who want polished everyday pieces, considered occasion wear and honest pricing.</p></div></section><div className="container section about-grid"><div><span className="eyebrow">DESIGNED FOR REAL LIFE</span><h2>From office mornings to wedding evenings.</h2></div><div><p>Our edit sits between everyday practicality and occasion dressing: breathable fabrics, graceful silhouettes and colours that work beyond one season.</p><p>Every piece is presented with clear pricing, COD convenience and responsive WhatsApp support.</p><button className="btn primary" onClick={()=>setPage("shop")}>SHOP THE EDIT <ArrowRight size={17}/></button></div></div></main>}

function FAQ(){const qs=[["Do you offer Cash on Delivery?","Yes. COD is available nationwide in Pakistan. Orders are confirmed on WhatsApp before dispatch."],["How long does delivery take?","Most orders arrive within 2–5 working days after confirmation."],["Can I exchange an item?","Eligible unworn items can be exchanged within 7 days. Please contact us on WhatsApp first."],["How do I choose my size?","Use the size guide on the product page, or message us on WhatsApp with your measurements."],["Can I see a video before ordering?","Yes. Ask our team on WhatsApp for a quick product video."]];return <main><div className="container narrow page"><div className="page-title"><span className="eyebrow">HELP CENTRE</span><h1>FAQs</h1><p>Simple answers before you order.</p></div><div className="faq">{qs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></main>}

function SizeGuide(){return <main><div className="container narrow page"><div className="page-title"><span className="eyebrow">FIT NOTES</span><h1>Size Guide</h1><p>Use the chart as a starting point. For a closer fit, compare with a favourite garment.</p></div><div className="size-table"><div><b>Size</b><b>Chest</b><b>Waist</b><b>Hip</b></div>{[["S","34–36","28–30","36–38"],["M","38–40","32–34","40–42"],["L","42–44","36–38","44–46"],["XL","46–48","40–42","48–50"]].map(r=><div key={r[0]}>{r.map((x,i)=><span key={i}>{x}"</span>)}</div>)}</div><p className="help">Need help choosing your size? Chat with us on WhatsApp.</p></div></main>}

function Policy({title,text}){return <main><div className="container narrow page"><div className="page-title"><span className="eyebrow">NOOR & CO.</span><h1>{title}</h1></div><div className="policy"><p>{text}</p><h3>Questions?</h3><p>Our customer care team is available on WhatsApp for order and policy support.</p></div></div></main>}

function Footer({setPage}){const go=p=>{setPage(p);window.scrollTo({top:0})};return <footer><div className="container footer-grid"><div><button className="brand footer-brand" onClick={()=>go("home")}><span>NOOR</span><small>& CO.</small></button><p>Affordable luxury + Pakistani elegance.<br/>Thoughtful pieces for the way you live.</p><div className="socials"><a href="#"><Instagram size={17}/></a><a href="#"><Facebook size={17}/></a><a href="#"><Music2 size={17}/></a><a href={`https://wa.me/${WA_NUMBER}`}><MessageCircle size={17}/></a></div></div><FooterCol title="Shop" links={[["New Arrivals","shop"],["Casual","shop"],["Semi-Formal","shop"],["Party & Wedding","shop"],["2-Piece","shop"],["3-Piece","shop"],["Sale","shop"]]} go={go}/><FooterCol title="Customer Care" links={[["Contact Us","home"],["Size Guide","size"],["Delivery Information","delivery"],["Exchange Policy","exchange"],["FAQs","faq"]]} go={go}/><FooterCol title="Company" links={[["About Us","about"],["Privacy Policy","privacy"],["Terms & Conditions","terms"]]} go={go}/></div><div className="container footer-bottom"><span>© 2026 Noor & Co. All rights reserved.</span><span>Made for Pakistan · PKR · COD</span></div></footer>}
function FooterCol({title,links,go}){return <div><h4>{title}</h4>{links.map(([x,p])=><button key={x} onClick={()=>go(p)}>{x}</button>)}</div>}

function MobileNav({page,setPage,cartCount,setMobileSearch}){return <nav className="mobile-nav"><button className={page==="home"?"on":""} onClick={()=>setPage("home")}><span>⌂</span>Home</button><button className={page==="shop"?"on":""} onClick={()=>setPage("shop")}><Search size={19}/>Shop</button><button onClick={()=>{setPage("cart");setMobileSearch(false)}}><ShoppingBag size={19}/><b>{cartCount}</b>Cart</button><button onClick={()=>window.open(`https://wa.me/${WA_NUMBER}`,"_blank")}><MessageCircle size={19}/>WhatsApp</button><button className={page==="account"?"on":""} onClick={()=>setPage("account")}><UserRound size={19}/>Account</button></nav>}

createRoot(document.getElementById("root")).render(<App/>);
