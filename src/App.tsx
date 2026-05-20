import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  Facebook, 
  MessageSquare, 
  Users, 
  Briefcase, 
  Calendar, 
  Star, 
  ExternalLink,
  ChevronRight,
  Coffee,
  CheckCircle,
  X,
  Sparkles
} from 'lucide-react';
import { 
  OPENING_HOURS, 
  MAIN_REVIEWS, 
  SPECIALTIES, 
  EVENTS_OFFER, 
  CONTACT_INFO 
} from './data';
import { 
  HeartIcon, 
  CeramicPot, 
  RollingPinAndSpoon, 
  WheatStalk, 
  AppleDecor, 
  WoodenSpoon, 
  HerbSprig, 
  AntiqueClock, 
  FolkFlower, 
  MasonJar, 
  GrandmotherApron 
} from './components/SvgDecorations';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Obiad rodzinny',
    date: '',
    message: ''
  });
  
  const [todayDay, setTodayDay] = useState('');

  useEffect(() => {
    // Determine current day in Polish
    const dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const currentDay = dayNames[new Date().getDay()];
    setTodayDay(currentDay);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setBookingStep('success');
  };

  const resetBookingForm = () => {
    setFormData({
      name: '',
      phone: '',
      eventType: 'Obiad rodzinny',
      date: '',
      message: ''
    });
    setBookingStep('form');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg text-text-base flex flex-col relative overflow-hidden wood-grain-light selection:bg-amber-pale selection:text-brown-base">
      
      {/* SECTION 1: Traditional Linen Decorative Header & Navigation */}
      <nav id="header-nav" className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b-2 border-amber-light/30 shadow-sm">
        {/* Cozy Announcement Banner */}
        <div className="bg-brown-base text-cream-base text-xs py-2 px-4 text-center font-mono-recipe tracking-wide flex items-center justify-center gap-2 relative overflow-hidden">
          <HeartIcon className="w-3 h-3 text-amber-light animate-pulse" />
          <span>Domowe jedzenie, które smakuje jak u Babci • Gidle, Plac Dominikański 7</span>
          <span className="hidden md:inline">• Zamawianie na miejscu i na wynos!</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Proud Logo Heritage */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-light rounded-full blur-xs group-hover:blur-md transition-all"></div>
                <img 
                  id="gidlanka-logo"
                  src="https://i.ibb.co/Z67922k0/677936084-122095746440440917-4909636310474572900-n.jpg" 
                  alt="Gidlanka Logo" 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-2 border-amber-base object-cover relative z-10 scale-95 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="text-left">
                <span className="block font-serif-display text-xl font-extrabold tracking-tight text-brown-base leading-tight">
                  Gidlanka
                </span>
                <span className="block font-serif-story text-xs italic text-amber-base tracking-wide leading-none">
                  Obiady jak u Babci
                </span>
              </div>
            </a>

            {/* Substantive Polish Navigation */}
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 leading-none">
              <a href="#o-nas" className="px-3 py-2 text-sm font-serif-story font-medium hover:text-amber-base rounded-md transition-all">O nas</a>
              <a href="#oferta" className="px-3 py-2 text-sm font-serif-story font-medium hover:text-amber-base rounded-md transition-all">Uroczystości</a>
              <a href="#opinie" className="px-3 py-2 text-sm font-serif-story font-medium hover:text-amber-base rounded-md transition-all">Opinie</a>
              <a href="#godziny" className="px-3 py-2 text-sm font-serif-story font-medium hover:text-amber-base rounded-md transition-all">Godziny i Kontakt</a>
              
              <button 
                id="rezerwacja-btn-nav"
                onClick={() => setIsModalOpen(true)}
                className="ml-2 bg-amber-base hover:bg-amber-light text-cream-base hover:text-brown-base px-4 py-1.5 rounded-full font-mono-recipe text-xs font-bold transition-all duration-300 shadow-xs border border-brown-base/10"
              >
                ZAREZERWUJ / ZAMÓW
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 2: Hero Section (Wood Grain Dark + Warm Candlelight Glow) */}
      <section id="hero" className="wood-grain-dark candlelight-glow text-cream-base py-16 px-4 relative overflow-hidden border-b-4 border-amber-base">
        {/* Floating background decorations */}
        <div className="absolute top-8 left-8 opacity-25 hidden lg:block transform -rotate-12">
          <MasonJar className="w-16 h-22 text-amber-pink" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-20 hidden lg:block transform rotate-12">
          <GrandmotherApron className="w-20 h-24" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-15 hidden xl:block">
          <WheatStalk className="w-10 h-24" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:py-8">
          
          {/* Hero text */}
          <div className="flex-1 text-center md:text-left">
            {/* Traditional rotated badge */}
            <div className="inline-block animate-wobble-load mb-6">
              <span className="bg-amber-base text-brown-base font-handwritten text-lg font-bold px-4 py-1 rounded-full border border-cream-base/30 shadow-md inline-flex items-center gap-1.5 -rotate-5">
                <HeartIcon className="w-4 h-4 text-red-earth fill-current" />
                Gotowane z Miłością
              </span>
            </div>

            <p className="font-mono-recipe text-amber-light text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-1">
              <span>—</span> Domowe obiady w sercu Gidel <span>—</span>
            </p>

            <h1 className="font-serif-display font-extrabold text-cream-base leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
              Gidlanka
            </h1>
            <h2 className="font-serif-story italic text-amber-light text-2xl md:text-3xl mb-6">
              Smak, który przywraca najmilsze wspomnienia z dzieciństwa
            </h2>

            <p className="font-serif-story text-text-pale text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Szukasz smacznego, domowego jedzenia przygotowanego z sercem? Zapraszamy do <strong className="text-cream-base">Gidlanki w Gidlach</strong> na codziennie świeże obiady na miejscu i na wynos. Poczuj aromat prawdziwej, staropolskiej gościnności.
            </p>

            {/* Quick interactive parameters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <a 
                href="#oferta" 
                className="bg-amber-base hover:bg-amber-light text-brown-base font-mono-recipe text-sm font-bold px-6 py-3 rounded-md transition-all shadow-lg hover:shadow-amber-light/20 inline-flex items-center gap-2 border border-brown-base/20"
              >
                Poznaj Naszą Ofertę
                <ChevronRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent hover:bg-cream/10 text-cream-base border border-cream-base/30 font-mono-recipe text-sm px-6 py-3 rounded-md transition-all inline-flex items-center gap-2"
              >
                Zamów Dodatki / Catering
              </button>
            </div>

            {/* Facebook direct actions */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono-recipe text-amber-light/90">
              <a 
                href={CONTACT_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-cream-base flex items-center gap-1.5 underline underline-offset-4"
              >
                <Facebook className="w-4 h-4" />
                Nasz Profil na Facebooku
              </a>
              <span className="opacity-50">•</span>
              <a 
                href={CONTACT_INFO.reviewsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-cream-base flex items-center gap-1.5 underline underline-offset-4"
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                Recenzje Gości
              </a>
            </div>
          </div>

          {/* Hero Animated Miniature Stove Illustration */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-amber-light/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="bg-bg-card-dark rounded-2xl border border-border-dark p-6 shadow-2xl relative z-10 w-full max-w-sm text-center wood-grain-dark transition-all duration-300">
              <div className="absolute top-2.5 right-4 text-[10px] font-mono-recipe text-amber-light/40">Gidle, Plac Dominikański 7</div>
              
              {/* Cozy pot with stove smoke animation */}
              <div className="mb-4 flex justify-center -mt-14">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-base/10 rounded-full blur-md"></div>
                  <CeramicPot className="w-28 h-28 relative z-10" />
                </div>
              </div>

              <div className="bg-brown-base/50 border border-amber/20 rounded-lg p-3 text-xs flex items-center gap-2.5 justify-center">
                <Clock className="w-4 h-4 text-amber-light animate-pulse" />
                <span className="font-mono-recipe text-cream-base">Dziś serwujemy: {OPENING_HOURS.find(h => h.day === todayDay)?.hours || '12:00 - 18:00'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section divider embroidery border strip */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-50 select-none">
          <div className="embroidery-divider-dark"></div>
        </div>
      </section>

      {/* SECTION 3: Cozy Storytelling / Introduction */}
      <section id="o-nas" className="py-20 px-4 linen-wood-light relative border-b border-border">
        {/* Floating herbal sprigs background */}
        <div className="absolute top-20 right-10 opacity-30 transform rotate-45 pointer-events-none">
          <HerbSprig className="w-16 h-20 text-green-herb" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-35 transform -rotate-12 pointer-events-none">
          <HerbSprig className="w-14 h-18 text-green-herb" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-15 pointer-events-none">
          <FolkFlower className="w-12 h-12" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Storytelling message as handwriting recipe card */}
            <div className="flex-1 w-full flex justify-center order-2 lg:order-1">
              <div className="recipe-card-container w-full max-w-lg p-10 select-none">
                <div className="flex items-center justify-between border-b pb-4 mb-6 border-amber/30">
                  <span className="font-mono-recipe text-xs text-text-muted">PRZEPIS NA DOBRY DZIEŃ</span>
                  <AwardIcon className="w-5 h-5 text-amber-base" />
                </div>
                
                <h3 className="font-serif-display text-2xl font-extrabold text-brown-base mb-4 italic">
                  „Sercem przygotowane...”
                </h3>
                
                <p className="font-handwritten text-2xl text-brown-base leading-relaxed mb-6">
                  U nas w Gidlach czas płynie wolniej. Każdy rosół uwarzony jest na wiejskiej kurce, na wolnym ogniu, z ręcznie uprawianymi ziołami. Nasza kultowa Zalewajka Gidelska pachnie prawdziwym czosnkiem i domowym boczkiem. Chcemy, aby każdy, kto przekroczy próg Gidlanki, poczuł się bezpieczny, ugoszczony i ukochany.
                </p>

                <div className="border-t border-dashed border-amber/40 pt-4 flex items-center justify-between">
                  <div>
                    <span className="block font-serif-story text-sm text-text-muted leading-none">Ciepło i troska,</span>
                    <span className="font-handwritten text-xl text-brown-base font-bold">Twoja Babcia Gidlanka</span>
                  </div>
                  <AppleDecor className="w-12 h-12" />
                </div>
              </div>
            </div>

            {/* Core textual parameters */}
            <div className="flex-1 order-1 lg:order-2">
              <p className="font-mono-recipe text-amber-base text-xs font-bold uppercase tracking-widest mb-3">
                — SZLACHETNA TRADYCJA
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl font-extrabold text-brown-base mb-6 tracking-tight leading-tight">
                Domowe obiady jak u Babci w sercu Gidel!
              </h2>
              
              <p className="font-serif-story text-text-muted text-base md:text-lg mb-8 leading-relaxed">
                Zapraszamy serdecznie mieszkańców oraz pielgrzymów odwiedzających Sanktuarium w Gidlach. Jesteśmy tuż obok, na Placu Dominikańskim 7. Dbamy o to, aby potrawy były zawsze świeże, podawane prosto z ognia, z rzetelnymi porcjami, które nasycą nawet najbardziej głodnego podróżnika.
              </p>

              {/* Three key pillars */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-light/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-amber-base" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-lg font-bold text-brown-base">Codziennie świeże menu</h4>
                    <p className="font-serif-story text-sm text-text-muted">Zupy gospodarskie, pierogi własnego wyrobu, chrupiące placki ziemniaczane i klasyczne kotlety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-amber-light/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-amber-base" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-lg font-bold text-brown-base">Na miejscu i na wynos</h4>
                    <p className="font-serif-story text-sm text-text-muted">Zjedz u nas w czystym, schludnym wnętrzu lub zabierz pachnący obiad w bezpiecznym opakowaniu do domu.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-amber-light/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-amber-base" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-lg font-bold text-brown-base font-medium">Bieżąca Gwarancja Świeżości</h4>
                    <p className="font-serif-story text-sm text-text-muted">Nie idziemy na kompromisy. To nie są półprodukty. Gotujemy od zera z darów ziemi województwa łódzkiego.</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 flex flex-wrap gap-4">
                <a 
                  href="tel:794903451" 
                  className="bg-brown-base hover:bg-brown-mid text-cream-base font-mono-recipe text-sm font-bold px-5 py-3 rounded-md transition-all flex items-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4 text-amber-light" />
                  Zadzwoń: 794 903 451
                </a>
                <a 
                  href="#godziny" 
                  className="bg-transparent hover:bg-brown-base/5 text-brown-base border border-brown-base/25 font-mono-recipe text-sm px-5 py-3 rounded-md transition-all flex items-center gap-2"
                >
                  Jak dojechać?
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Events Catering Offering (Linen Texture) */}
      <section id="oferta" className="py-20 px-4 linen-texture relative border-b border-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-recipe text-amber-base text-xs font-bold uppercase tracking-widest block mb-2">— RODZINNE CHWILE WSPÓLNOTY</span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-extrabold text-brown-base tracking-tight mb-4">Organizujemy z Sercem</h2>
            <p className="font-serif-story text-text-muted text-base">Organizujemy kameralne przyjęcia rodzinne, spotkania okolicznościowe i zaopatrzenie dla firm. Oddaj przygotowania w pewne ręce.</p>
            <div className="w-24 h-1 border-t-2 border-brown-base mx-auto mt-4"></div>
          </div>

          {/* Offer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_OFFER.map((offer) => (
              <div key={offer.id} className="g-card-light p-8 flex flex-col justify-between select-none">
                <div>
                  <div className="bg-amber-light/20 p-3 rounded-xl inline-block mb-6 border border-amber/10">
                    {offer.iconName === 'church' && <MapPin className="w-6 h-6 text-amber-base" />}
                    {offer.iconName === 'sparkles' && <Sparkles className="w-6 h-6 text-amber-base" />}
                    {offer.iconName === 'ribbon' && <Heart className="w-6 h-6 text-amber-base fill-current" />}
                    {offer.iconName === 'cross' && <Calendar className="w-6 h-6 text-amber-base" />}
                    {offer.iconName === 'bus' && <Users className="w-6 h-6 text-amber-base" />}
                    {offer.iconName === 'building' && <Briefcase className="w-6 h-6 text-amber-base" />}
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-brown-base tracking-tight mb-3">
                    {offer.title}
                  </h3>
                  
                  <p className="font-serif-story text-text-muted text-sm leading-relaxed mb-6">
                    {offer.description}
                  </p>
                </div>

                <div className="border-t border-amber/12 pt-4 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono-recipe text-amber-base font-bold uppercase tracking-wider">REZERWACJA TELEFONICZNA</span>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, eventType: offer.title }));
                      setIsModalOpen(true);
                    }}
                    className="text-brown-base hover:text-amber-base font-serif-story text-sm font-bold inline-flex items-center gap-1 transition-all"
                  >
                    Zapytaj
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-serif-story text-base text-text-muted mb-4">
              Masz pytania dotyczące dopasowania menu pod indywidualną dietę lub budżet?
            </p>
            <a 
              href="tel:792733915" 
              className="inline-flex items-center gap-2 bg-amber-base hover:bg-amber-light text-brown-base font-mono-recipe text-sm font-bold px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 text-brown-base" />
              Uzgodnij szczegóły: 792 733 915
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 6: Testimonials and Verified Facebook Pin Reviews */}
      <section id="opinie" className="py-20 px-4 wood-grain-light relative border-b border-border">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-15 pointer-events-none">
          <AntiqueClock className="w-16 h-16" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
          <MasonJar className="w-14 h-20" />
        </div>

        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-recipe text-amber-base text-xs font-bold uppercase tracking-widest block mb-2">— SŁOIKI PEŁNE SYMPATII</span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-extrabold text-brown-base tracking-tight mb-4">Co Mówią Nasi Goście</h2>
            <p className="font-serif-story text-text-muted text-base">Dobre słowo to najlepsza rekomendacja, która napędza nas codziennie do rzetelnej pracy przy biesiadnym stole.</p>
            <div className="w-24 h-1 border-t-2 border-amber-base mx-auto mt-4"></div>
          </div>

          {/* Primary exact review highlighted with premium pride */}
          <div className="max-w-4xl mx-auto bg-cream rounded-2xl border-2 border-double border-amber-base p-8 md:p-12 mb-4 shadow-xl relative select-none">
            {/* Stamp watermark */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-brown-base/10 border border-amber/30 text-[10px] font-mono-recipe text-brown-base px-3 py-1.5 rounded-full transform rotate-12 flex items-center gap-1">
              <Facebook className="w-3" />
              Recenzja Zweryfikowana
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-amber-light/20 flex items-center justify-center border-2 border-amber-base">
                <span className="font-serif-display font-black text-xl text-brown-base">PS</span>
              </div>
              <div>
                <h4 className="font-serif-display text-lg font-bold text-brown-base">Przemysław S.</h4>
                <div className="flex gap-1 text-amber-base my-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-base" />
                  ))}
                </div>
                <span className="text-[11px] font-mono-recipe text-text-muted uppercase tracking-widest">Opinia o Gidlance z FB opiniowej</span>
              </div>
            </div>

            {/* Exact review text required by user */}
            <blockquote className="font-serif-story text-base md:text-lg text-brown-base leading-relaxed mb-6 italic pl-4 border-l-4 border-amber-base">
              „Bardzo polecam Gidlanke -obiady jak u Babci. Jedzenie godne polecenia. Zamówiłem zupę Zalewajkę. Babkę ziemniaczaną z grzybami. Smaczna i mega sycąca z kawałkami kiełbasy w środku, a na deser ciasto Szarlotkę. Lokal przejrzysty, miło można spędzić tam czas. Jeśli jesteś w okolicach Gidel woj. łódzkie, to sprawdź fajną miejscówkę. Bardzo polecam.”
            </blockquote>

            <div className="border-t border-dashed border-amber/30 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
              <div className="flex gap-3">
                <a 
                  href={CONTACT_INFO.reviewsUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-amber-base hover:bg-amber-light text-brown-base font-mono-recipe text-xs font-bold px-4 py-2 rounded-md transition-all flex items-center gap-1.5"
                >
                  Zobacz opinie na Facebooku
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Prompt to leave feedback */}
          <div className="mt-8 text-center">
            <a 
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-brown-base hover:text-amber-base font-mono-recipe text-xs font-bold uppercase tracking-wider underline underline-offset-4"
            >
              <Facebook className="font-bold w-4 h-4 text-blue-800" />
              Zostaw swoją opinię na naszym Facebooku!
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: Opening Hours & Direct Contact Table */}
      <section id="godziny" className="py-20 px-4 linen-wood-light relative border-b border-amber-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Opening Hours Board styled like a warm wooden panel in a Polish kitchen */}
            <div className="bg-brown-base text-cream-base rounded-2xl p-8 shadow-xl relative overflow-hidden wood-grain-dark">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <AntiqueClock className="w-32 h-32 text-cream" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-amber-base/20 text-amber-light font-mono-recipe text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-amber/20">
                  <Clock className="w-3.5 h-3.5" />
                  Godziny Otwarcia
                </div>

                <h2 className="font-serif-display text-3xl font-extrabold text-cream-base mb-2">Zapraszamy Codziennie</h2>
                <p className="font-serif-story text-text-pale text-sm mb-6">Zaplanuj wizytę. Gotujemy z szacunkiem do Twojego apetytu.</p>
                
                <div className="space-y-3.5 border-t border-dashed border-border-dark pt-6">
                  {OPENING_HOURS.map((oh) => {
                    const isToday = oh.day === todayDay;
                    return (
                      <div 
                        key={oh.day} 
                        className={`flex justify-between items-center py-1.5 px-3 rounded-lg transition-all ${
                          isToday 
                            ? 'bg-amber-base text-brown-base font-bold shadow-md scale-[1.02]' 
                            : 'hover:bg-cream-base/5'
                        }`}
                      >
                        <span className="font-serif-story text-base flex items-center gap-1.5">
                          {oh.day}
                          {isToday && (
                            <span className="text-[10px] font-mono-recipe bg-brown-base text-amber-light px-1.5 py-0.5 rounded-full uppercase">
                              Dziś
                            </span>
                          )}
                        </span>
                        <span className="font-mono-recipe text-sm tracking-wide">{oh.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct Contact coordinates with phone options */}
            <div className="lg:pl-6 select-none">
              <span className="font-mono-recipe text-amber-base text-xs font-bold uppercase tracking-widest block mb-2">— ZAPYTAJ LUB ZAMÓW NA WYNOS</span>
              <h2 className="font-serif-display text-4xl font-extrabold text-brown-base mb-4">Zadzwoń do Gidlanki</h2>
              
              <p className="font-serif-story text-text-muted text-base mb-8 leading-relaxed">
                Przyjmujemy również zamówienia telefoniczne z odbiorem osobistym na konkretną godzinę. Chcesz zjeść ciepły obiad po powrocie z pracy? Zadzwoń, a zapakujemy go świeżego dla Ciebie i Twojej rodziny.
              </p>

              {/* Clean retro visual cards for contact phone lines */}
              <div className="space-y-4 mb-4">
                <a 
                  href="tel:794903451" 
                  className="block bg-bg-section/80 hover:bg-bg-warm p-5 rounded-xl border border-border hover:border-amber-base transition-all group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-base text-cream-base p-3 rounded-xl group-hover:bg-brown-base transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-mono-recipe text-text-muted uppercase tracking-wider">LINIA PIERWSZA</span>
                        <span className="font-serif-display text-2xl font-black text-brown-base tracking-tight leading-none">794 903 451</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono-recipe text-amber-base font-bold uppercase tracking-widest group-hover:underline">Zadźwoń teraz</span>
                  </div>
                </a>

                <a 
                  href="tel:792733915" 
                  className="block bg-bg-section/80 hover:bg-bg-warm p-5 rounded-xl border border-border hover:border-amber-base transition-all group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-light text-brown-base p-3 rounded-xl group-hover:bg-brown-base group-hover:text-cream-base transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-mono-recipe text-text-muted uppercase tracking-wider">LINIA DRUGA / FIRMY & CATERING</span>
                        <span className="font-serif-display text-2xl font-black text-brown-base tracking-tight leading-none">792 733 915</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono-recipe text-amber-base font-bold uppercase tracking-widest group-hover:underline">Zadźwoń teraz</span>
                  </div>
                </a>
              </div>

              {/* Physical Address description */}
              <div className="bg-bg-warm/40 border border-border p-5 rounded-xl flex items-start gap-4 text-left">
                <div className="mt-1 bg-brown-base/15 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-brown-base" />
                </div>
                <div>
                  <h4 className="font-serif-display text-lg font-bold text-brown-base mb-1">Gdzie nas znajdziesz?</h4>
                  <p className="font-serif-story text-sm text-text-muted">
                    Plac Dominikański 7, Gidle (97-540)<br />
                    Zaraz przy parkingu i głównym skwerze klasztornym. Możliwość zaparkowania tuż pod lokalem na czas odbioru zamówień.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Interactive Map iframe & Footer */}
      <section id="lokalizacja" className="w-full relative bg-bg-dark text-cream-base">
        <div className="w-full h-[450px] relative z-10 border-t-4 border-amber-base border-b-2">
          {/* Exact iframe embedded map provided by user instructions */}
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: CONTACT_INFO.mapsIframe }} 
          />
        </div>

        {/* Footer info panels */}
        <footer className="wood-grain-dark text-cream-base py-16 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 overflow-hidden select-none opacity-20">
            <div className="embroidery-divider-dark"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
            
            {/* Column 1: Heritage brand */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.ibb.co/Z67922k0/677936084-122095746440440917-4909636310474572900-n.jpg" 
                  alt="Gidlanka Logo"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-amber"
                />
                <span className="font-serif-display text-xl font-bold tracking-tight text-cream-base">Gidlanka</span>
              </div>
              <p className="font-serif-story text-text-pale text-xs leading-relaxed max-w-xs mb-6">
                Szukasz smacznego, domowego jedzenia przygotowanego z sercem? Zapraszamy do Gidlanka Obiady Jak u Babci codziennie świeże obiady na miejscu i na wynos.
              </p>
              
              <div className="flex gap-3">
                <a 
                  href={CONTACT_INFO.facebookUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-cream-base/10 hover:bg-amber-base p-2 rounded-full text-cream-base hover:text-brown-base transition-all"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={CONTACT_INFO.reviewsUrl}
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-cream-base/10 hover:bg-amber-base p-2 rounded-full text-cream-base hover:text-brown-base transition-all"
                  aria-label="Facebook Reviews"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Offerings shortcuts list */}
            <div className="text-center md:text-left">
              <h4 className="font-mono-recipe text-amber-light text-xs font-bold uppercase tracking-widest mb-4">CO ORGANIZUJEMY</h4>
              <ul className="space-y-2 font-serif-story text-text-pale text-xs">
                <li>• Chrzciny oraz Komunie Święte w Gidlach</li>
                <li>• Konsolacje dla grona najbliższych</li>
                <li>• Imprezy rodzinne i okolicznościowe</li>
                <li>• Obsługa grup zorganizowanych i wycieczek</li>
                <li>• Obiady dla pracowników (Oferta dla firm)</li>
              </ul>
            </div>

            {/* Column 3: Contact quick table */}
            <div className="text-center md:text-left">
              <h4 className="font-mono-recipe text-amber-light text-xs font-bold uppercase tracking-widest mb-4">SZCZEGÓŁY KONTAKTU</h4>
              <p className="font-serif-story text-text-pale text-xs mb-2">
                Plac Dominikański 7, 97-540 Gidle
              </p>
              <p className="font-mono-recipe text-amber-light text-xs font-bold mb-4">
                Tel: 792 733 915 | 794 903 451
              </p>
              <p className="font-serif-story text-[11px] text-text-pale/60">
                Prawa zastrzeżone © {new Date().getFullYear()} Gidlanka S.C.<br />
                Domowe obiady przygotowane najszczerzej z serca.
              </p>
            </div>

          </div>

          <div className="text-center mt-12 border-t border-border-dark pt-6 text-[11px] font-mono-recipe text-text-pale/40 max-w-7xl mx-auto">
            <span>Zaprojektowane w duchu tradycji i miłości do domowej kuchni.</span>
          </div>
        </footer>
      </section>

      {/* MODAL / BOTTOM SHEET: Interactive Booking Letter Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-darker/70 backdrop-blur-xs select-none animate-fade-in">
          <div className="relative w-full max-w-lg bg-cream rounded-2xl border-2 border-amber-light shadow-2xl p-8 transform rotate-0 scale-100 transition-all select-none border-t-4 border-t-amber-base">
            
            {/* Close button */}
            <button 
              onClick={resetBookingForm}
              className="absolute top-4 right-4 text-text-muted hover:text-brown-base p-1.5 hover:bg-brown-base/5 rounded-full transition-all"
            >
              ✕
            </button>

            {bookingStep === 'form' ? (
              <form onSubmit={handleBookingSubmit} className="space-y-5 text-left">
                <div className="text-center border-b border-dashed border-amber/30 pb-4 mb-2">
                  <span className="font-handwritten text-3xl text-brown-base block">Napisz list do Babci</span>
                  <span className="font-mono-recipe text-[10px] text-text-muted uppercase tracking-widest">Zapytanie o obiad, catering lub rezerwację</span>
                </div>

                <div>
                  <label className="block font-mono-recipe text-xs text-text-muted uppercase tracking-wider mb-1">Twoje Imię i Nazwisko *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Np. Jan Kowalski"
                    className="w-full bg-bg-section border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-base font-serif-story"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-recipe text-xs text-text-muted uppercase tracking-wider mb-1">Numer Telefonu *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Np. 794 903 451"
                      className="w-full bg-bg-section border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-base font-mono-recipe"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-recipe text-xs text-text-muted uppercase tracking-wider mb-1">Rodzaj Okoliczności</label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-bg-section border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-base font-serif-story"
                    >
                      <option value="Obiad rodzinny">Pojedynczy obiad</option>
                      <option value="Obiad dla firmy">Zestawy dla firm</option>
                      <option value="Obsługa wycieczki">Grupa zorganizowana</option>
                      <option value="Chrzciny">Chrzciny</option>
                      <option value="Komunie">Komunie</option>
                      <option value="Konsolacje">Konsolacje</option>
                      <option value="Inna uroczystość">Inna impreza rodzinna</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono-recipe text-xs text-text-muted uppercase tracking-wider mb-1">Planowana Data (Opcjonalnie)</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-bg-section border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-base font-mono-recipe"
                  />
                </div>

                <div>
                  <label className="block font-mono-recipe text-xs text-text-muted uppercase tracking-wider mb-1">Dodatkowe szczegóły / życzenia potraw</label>
                  <textarea 
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Np. O której godzinie dowóz? Ile porcji zupy zalewajki przygotować? Czy doliczyć ciasto szarlotkę?"
                    className="w-full bg-bg-section border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-base font-serif-story"
                  />
                </div>

                <div className="bg-bg-warm/50 border border-border-amber rounded-lg p-3 text-xs text-text-muted font-serif-story italic">
                  * Po wysłaniu zapytania, skontaktujemy się z Tobą telefonicznie w celu potwierdzenia dokładnej ceny, godziny oraz dań dnia. Bardzo dziękujemy!
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={resetBookingForm}
                    className="px-4 py-2 text-sm font-mono-recipe text-text-muted hover:text-brown-base"
                  >
                    Anuluj
                  </button>
                  <button 
                    type="submit"
                    className="bg-brown-base hover:bg-brown-mid text-cream-base font-mono-recipe text-sm font-bold px-5 py-2 rounded-md transition-all shadow-md"
                  >
                    Wyślij zapytanie
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 bg-green-herb/10 text-green-herb rounded-full flex items-center justify-center mx-auto border-2 border-green-herb">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h3 className="font-serif-display text-2xl font-extrabold text-brown-base">
                  Wiadomość dotarła do Babci!
                </h3>
                
                <p className="font-serif-story text-text-muted text-base">
                  Dziękujemy, <span className="font-bold text-brown-base">{formData.name}</span>. Twoje zgłoszenie w sprawie <span className="italic">"{formData.eventType}"</span> zostało zapisane. Nasz telefon zadzwoni niebawem, aby omówić najsmaczniejszy jadłospis!
                </p>

                <div className="bg-amber-pale/30 border border-dashed border-amber rounded-lg p-4 font-handwritten text-2xl text-brown-base">
                  „Cieszymy się na Twoje odwiedziny. Babcia zaczyna już rozpalać pod garnkiem!”
                </div>

                <div className="pt-4">
                  <button 
                    onClick={resetBookingForm}
                    className="bg-brown-base hover:bg-brown-mid text-cream-base font-mono-recipe text-xs font-bold px-6 py-2.5 rounded-full transition-all"
                  >
                    Rozumiem i czekam
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

// Simple legacy icon components fallback for compile/import safety
function AwardIcon({ className = "w-5 h-5 text-amber-base" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
