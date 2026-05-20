import React from 'react';

// Heart with slow animation
export function HeartIcon({ className = "w-4 h-4 text-amber-base animate-twinkle" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Ceramic traditional stewing pot (garnek gliniany)
// With built-in animated steam wisps
export function CeramicPot({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className="relative inline-block">
      {/* Animated steam wisps */}
      <div className="absolute -top-12 left-0 right-0 flex justify-around px-4 pointer-events-none">
        <svg className="w-3 h-10 text-amber-light/40 animate-steam-1" viewBox="0 0 10 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M5,25 Q1,20 5,15 T5,5" />
        </svg>
        <svg className="w-3 h-10 text-amber-light/35 animate-steam-2" viewBox="0 0 10 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M5,25 Q8,18 3,12 T5,2" />
        </svg>
        <svg className="w-3 h-10 text-amber-light/30 animate-steam-3" viewBox="0 0 10 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3,28 Q1,22 5,14 T2,4" />
        </svg>
      </div>

      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pot body shadow/dark background */}
        <path d="M20 40C20 35 25 32 50 32C75 32 80 35 80 40C80 42 75 48 75 65C75 80 65 85 50 85C35 85 25 80 25 65C25 48 20 42 20 40Z" fill="var(--red-earth)" opacity="0.15" />
        {/* Pot body main */}
        <path d="M24 42C24 38 30 35 50 35C70 35 76 38 76 42C76 45 72 50 72 65C72 78 62 82 50 82C38 82 28 78 28 65C28 50 24 45 24 42Z" fill="var(--red-earth)" stroke="var(--brown-mid)" strokeWidth="2.5" />
        {/* Highlights */}
        <path d="M32 46C32 46 40 40 50 40C60 40 68 46 68 46" stroke="var(--amber-light)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        {/* Rustic belly stripe */}
        <path d="M26 56C28 60 38 62 50 62C62 62 72 60 74 56" stroke="var(--amber-light)" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
        <path d="M27 61C29 65 38 67 50 67C62 67 71 65 73 61" stroke="var(--amber)" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        {/* Pot collar / rim */}
        <ellipse cx="50" cy="35" rx="26" ry="5" fill="var(--red-earth)" stroke="var(--brown-mid)" strokeWidth="2.5" />
        <ellipse cx="50" cy="35" rx="18" ry="2.5" fill="var(--bg-dark)" />
        {/* Lid knob */}
        <path d="M47 28C47 25 53 25 53 28L50 31Z" fill="var(--amber)" stroke="var(--brown-mid)" strokeWidth="1.5" />
        {/* Pot handles */}
        <path d="M24 48C18 48 18 58 25 58" stroke="var(--brown-mid)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M76 48C82 48 82 58 75 58" stroke="var(--brown-mid)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Heart detail on center of clay pot */}
        <path d="M50 54C50.5 52.5 52 51.5 53.5 52C54.5 52.5 54.5 53.5 53.5 55L50 58.5L46.5 55C45.5 53.5 45.5 52.5 46.5 52C48 51.5 49.5 52.5 50 54Z" fill="var(--amber)" opacity="0.9" />
      </svg>
    </div>
  );
}

// Crossed rolling pin and wooden spoon (Wałek i łyżka)
export function RollingPinAndSpoon({ className = "w-32 h-20" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wooden Spoon (diagonal from top-left to bottom-right) */}
      <g stroke="var(--brown-light)" strokeWidth="2" strokeLinecap="round">
        {/* Handle */}
        <line x1="25" y1="20" x2="85" y2="65" stroke="var(--brown-mid)" strokeWidth="4" />
        {/* Spoon head */}
        <ellipse cx="22" cy="18" rx="8" ry="12" transform="rotate(-30 22 18)" fill="var(--brown-light)" stroke="var(--brown-mid)" strokeWidth="2" />
        {/* Bowl reflection */}
        <path d="M18 13C16 15 16 19 19 21" stroke="var(--cream)" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Rolling Pin (diagonal from bottom-left to top-right) */}
      <g stroke="var(--brown-mid)" strokeWidth="2" strokeLinecap="round">
        {/* Left handle */}
        <path d="M15 65L25 58" stroke="var(--brown-mid)" strokeWidth="5" />
        <circle cx="13" cy="66" r="3" fill="var(--brown-mid)" />
        {/* Main cylinder */}
        <rect x="23" y="15" width="16" height="60" rx="3" transform="rotate(45 23 15)" fill="var(--brown-pale)" stroke="var(--brown-mid)" strokeWidth="2" />
        {/* Right handle */}
        <path d="M85 22L95 15" stroke="var(--brown-mid)" strokeWidth="5" />
        <circle cx="97" cy="14" r="3" fill="var(--brown-mid)" />
      </g>

      {/* Tied ribbon or small string */}
      <circle cx="53" cy="41" r="2.5" fill="var(--red-earth)" />
      <path d="M53 41C50 38 45 42 47 45C49 48 53 41 53 41Z" fill="var(--red-earth)" />
      <path d="M53 41C56 38 61 42 59 45C57 48 53 41 53 41Z" fill="var(--red-earth)" />
    </svg>
  );
}

// Elegant rye or wheat stalk (Kłos zboża) represents natural, honest Polish flour
export function WheatStalk({ className = "w-10 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Root/Stem */}
      <path d="M20 95C20 60 20 40 20 15" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Symmetrical golden grains */}
      {/* Left grains */}
      <path d="M20 20C12 18 10 11 20 12" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="15" y1="15" x2="8" y2="10" stroke="var(--amber)" strokeWidth="1" />
      
      <path d="M20 32C11 30 9 23 20 24" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="14" y1="27" x2="6" y2="20" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 44C11 42 9 35 20 36" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="14" y1="39" x2="6" y2="32" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 56C11 54 9 47 20 48" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="14" y1="51" x2="6" y2="44" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 68C12 66 10 59 20 60" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="15" y1="63" x2="8" y2="56" stroke="var(--amber)" strokeWidth="1" />

      {/* Right grains */}
      <path d="M20 20C28 18 30 11 20 12" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="25" y1="15" x2="32" y2="10" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 32C29 30 31 23 20 24" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="26" y1="27" x2="34" y2="20" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 44C29 42 31 35 20 36" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="26" y1="39" x2="34" y2="32" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 56C29 54 31 47 20 48" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="26" y1="51" x2="34" y2="44" stroke="var(--amber)" strokeWidth="1" />

      <path d="M20 68C28 66 30 59 20 60" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="25" y1="63" x2="32" y2="56" stroke="var(--amber)" strokeWidth="1" />

      {/* Top tip */}
      <path d="M20 12C16 5 24 5 20 12" fill="var(--amber-light)" stroke="var(--amber)" strokeWidth="1" />
      <line x1="20" y1="6" x2="20" y2="1" stroke="var(--amber)" strokeWidth="1.2" />
    </svg>
  );
}

// Apple SVG (gentle bob animation) - represents fresh local apples for Szarlotka
export function AppleDecor({ className = "w-16 h-16 animate-bob" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Apple body */}
      <path d="M30 46C24 46 15 42 15 31C15 20 23 18 28 20C29 20.5 30 21 30 21C30 21 31 20.5 32 20C37 18 45 20 45 31C45 42 36 46 30 46Z" fill="var(--red-earth)" stroke="var(--brown)" strokeWidth="2" />
      {/* Cheek shine */}
      <path d="M20 28C18 31 18 36 21 38" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Leaf and stem */}
      <path d="M30 20C30 15 33 13 35 12" stroke="var(--brown-mid)" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 12C41 12 41 18 35 18C33 18 33 16 35 12Z" fill="var(--green-herb)" stroke="var(--brown)" strokeWidth="1" />
    </svg>
  );
}

// Large wooden folk spoon (very slow stir rotation animation)
export function WoodenSpoon({ className = "w-16 h-48 animate-stir" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Handle */}
      <path d="M20 110C20 80 18 50 20 35" stroke="var(--brown)" strokeWidth="4.5" strokeLinecap="round" />
      {/* Handle detailed folk carvings/lines */}
      <path d="M20 95L24 93M20 85L16 83M20 75L24 73M20 65L16 63" stroke="var(--brown-mid)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Heart cutout or detail in handle end */}
      <circle cx="20" cy="103" r="3" fill="var(--amber-light)" />
      
      {/* Spoon Bowl */}
      <ellipse cx="20" cy="24" rx="11" ry="16" fill="var(--brown-light)" stroke="var(--brown)" strokeWidth="2" />
      <path d="M15 16C12 19 12 28 17 31" stroke="var(--cream)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      
      {/* Little warm reflection in spoon center */}
      <ellipse cx="23" cy="24" rx="3" ry="5" fill="var(--amber-light)" opacity="0.25" />
    </svg>
  );
}

// Herb sprigs / Gałązka koperku lub pietruszki (gentle sway animation)
export function HerbSprig({ className = "w-12 h-16 animate-sway", color = "var(--green-herb)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 65C25 45 25 35 25 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Branches & small organic leaves */}
      <path d="M25 50C18 45 14 38 11 41C8 44 14 48 25 50Z" fill={color} opacity="0.9" />
      <path d="M25 45C32 40 36 33 39 36C42 39 36 43 25 45Z" fill={color} opacity="0.9" />
      
      <path d="M25 35C15 30 12 22 9 26C6 30 15 33 25 35Z" fill={color} opacity="0.95" />
      <path d="M25 30C35 25 38 17 41 21C44 25 35 28 25 30Z" fill={color} opacity="0.95" />

      <path d="M25 20C20 14 18 8 15 11C12 14 18 17 25 20Z" fill={color} />
      <path d="M25 17C30 11 32 5 35 8C38 11 32 14 25 17Z" fill={color} />

      {/* Tender leaf tip */}
      <path d="M25 15C25 7 28 5 25 5C22 5 25 7 25 15Z" fill={color} />
    </svg>
  );
}

// Simple clock face showing dinner time (14:00 - dinner's ready!)
export function AntiqueClock({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clock outline */}
      <circle cx="30" cy="30" r="26" fill="var(--bg-section)" stroke="var(--brown-mid)" strokeWidth="2.5" />
      <circle cx="30" cy="30" r="22" stroke="var(--brown-mid)" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
      
      {/* Roman/simple numerals details */}
      <circle cx="30" cy="11" r="1.5" fill="var(--brown)" />
      <circle cx="49" cy="30" r="1.5" fill="var(--brown)" />
      <circle cx="30" cy="49" r="1.5" fill="var(--brown)" />
      <circle cx="11" cy="30" r="1.5" fill="var(--brown)" />

      {/* Clock hands showing 14:00 (Perfect Polish Obiady hour!) */}
      {/* Hour hand */}
      <line x1="30" y1="30" x2="41" y2="24" stroke="var(--brown)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="30" y1="30" x2="30" y2="14" stroke="var(--brown)" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Center cap */}
      <circle cx="30" cy="30" r="3.5" fill="var(--amber)" stroke="var(--brown)" strokeWidth="1" />
    </svg>
  );
}

// Folk embroidered flower motif
export function FolkFlower({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center yellow dot */}
      <circle cx="15" cy="15" r="3" fill="var(--amber)" stroke="var(--brown-mid)" strokeWidth="1" />
      
      {/* Symmetrical heart-shaped petals */}
      <path d="M15 12C12 7 18 7 15 12Z" fill="var(--red-earth)" stroke="var(--brown)" strokeWidth="0.8" />
      <path d="M15 18C12 23 18 23 15 18Z" fill="var(--red-earth)" stroke="var(--brown)" strokeWidth="0.8" />
      <path d="M12 15C7 12 7 18 12 15Z" fill="var(--red-earth)" stroke="var(--brown)" strokeWidth="0.8" />
      <path d="M18 15C23 12 23 18 18 15Z" fill="var(--red-earth)" stroke="var(--brown)" strokeWidth="0.8" />

      {/* Tiny diagonal leaves */}
      <path d="M11 11L7 7" stroke="var(--green-herb)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 19L23 23" stroke="var(--green-herb)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 11L23 7" stroke="var(--green-herb)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 19L7 23" stroke="var(--green-herb)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Mason glass jar with ribbon (Słoik z konfiturą) representing бабусин spiżarnia
export function MasonJar({ className = "w-16 h-22" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jar body */}
      <path d="M15 25C15 22 17 20 20 20H40C43 20 45 22 45 25V65C45 71 40 75 35 75H25C20 75 15 71 15 65V25Z" fill="var(--amber-pale)" fillOpacity="0.3" stroke="var(--brown-mid)" strokeWidth="2" />
      {/* Inside ingredients / preserves (delicious strawberry or cherry jam red color!) */}
      <path d="M17 38V64C17 69 21 73 25 73H35C39 73 43 69 43 64V38C43 38 35 41 30 38C25 35 17 38 17 38Z" fill="var(--red-earth)" fillOpacity="0.85" stroke="var(--brown)" strokeWidth="1" />
      
      {/* Paper cover lid */}
      <path d="M14 17C14 15 16 11 30 11C44 11 46 15 46 17L44 21C42 21 40 23 30 22C20 22 18 21 16 21L14 17Z" fill="var(--cream)" stroke="var(--brown)" strokeWidth="1.5" />
      {/* Fabric ribbon tied around lid */}
      <path d="M14 20C20 21 40 21 46 20" stroke="var(--amber)" strokeWidth="2.5" />
      {/* Bow ribbon hanging */}
      <path d="M43 20C47 22 49 26 45 28C43 29 42 24 43 20Z" fill="var(--amber)" />
      
      {/* Heart detail stamp labels (handmade stamp) */}
      <rect x="23" y="45" width="14" height="14" rx="1.5" fill="var(--cream-base)" stroke="var(--brown-mid)" strokeWidth="0.8" />
      <path d="M30 49C30.2 48.2 30.8 47.8 31.4 48C31.8 48.2 31.8 48.6 31.4 49.3L30 51L28.6 49.3C28.2 48.6 28.2 48.2 28.6 48C29.2 47.8 29.8 48.2 30 49Z" fill="var(--red-earth)" />
      
      {/* Glass shine reflections */}
      <path d="M19 28V34M41 28V45" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// Grandmother's Apron (Fartuch kuchenny z falbankami)
export function GrandmotherApron({ className = "w-24 h-28" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck loop string */}
      <path d="M30 25C30 5 50 5 50 25" stroke="var(--brown-mid)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      
      {/* Waist straps strings */}
      <path d="M10 50C1 52 3 60 18 52" stroke="var(--brown-mid)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M70 50C79 52 77 60 62 52" stroke="var(--brown-mid)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Main apron fabric */}
      {/* Top bib */}
      <path d="M30 25H50L54 48H26L30 25Z" fill="var(--cream)" stroke="var(--brown)" strokeWidth="2" />
      {/* Red cross stitch border on bib top */}
      <line x1="32" y1="28" x2="48" y2="28" stroke="var(--red-earth)" strokeWidth="1.5" strokeDasharray="2 2" />
      
      {/* Bottom skirt */}
      <path d="M26 48H54L64 85H16L26 48Z" fill="var(--cream)" stroke="var(--brown)" strokeWidth="2" />

      {/* Ruffles (falbanki) around side of skirt */}
      <path d="M16 85C19 88 23 88 26 85C29 88 33 88 36 85C39 88 43 88 46 85C49 88 53 88 56 85C59 88 63 88 66 85" stroke="var(--amber)" strokeWidth="1.5" fill="none" />
      
      {/* Large central handy pocket with lace design */}
      <path d="M30 60H50V75C50 78 48 80 45 80H35C32 80 30 78 30 75V60Z" fill="var(--bg-section)" stroke="var(--brown-mid)" strokeWidth="1.5" />
      {/* Folk flower motif printed on pocket */}
      <circle cx="40" cy="70" r="2" fill="var(--red-earth)" />
      <circle cx="36" cy="70" r="1.5" fill="var(--amber)" />
      <circle cx="44" cy="70" r="1.5" fill="var(--amber)" />
      <circle cx="40" cy="66" r="1.5" fill="var(--amber)" />
      <circle cx="40" cy="74" r="1.5" fill="var(--amber)" />
    </svg>
  );
}
