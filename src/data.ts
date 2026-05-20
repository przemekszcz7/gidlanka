export interface OpeningHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

export interface EventOffer {
  id: string;
  title: string;
  description: string;
  iconName: 'cross' | 'church' | 'ribbon' | 'sparkles' | 'building' | 'bus';
}

export const OPENING_HOURS: OpeningHours[] = [
  { day: 'Poniedziałek', hours: '12:00 - 18:00' },
  { day: 'Wtorek', hours: '12:00 - 18:00' },
  { day: 'Środa', hours: '12:00 - 18:00' },
  { day: 'Czwartek', hours: '12:00 - 18:00' },
  { day: 'Piątek', hours: '12:00 - 20:00' },
  { day: 'Sobota', hours: '12:00 - 21:00' },
  { day: 'Niedziela', hours: '12:00 - 20:00' }
];

export const MAIN_REVIEWS = [
  {
    author: "Przemysław S.",
    rating: 5,
    date: "Opinia z Facebooka",
    content: "Bardzo polecam Gidlanke -obiady jak u Babci. Jedzenie godne polecenia. Zamówiłem zupę Zalewajkę. Babkę ziemniaczaną z grzybami. Smaczna i mega sycąca z kawałkami kiełbasy w środku, a na deser ciasto Szarlotkę. Lokal przejrzysty, miło można spędzić tam czas. Jeśli jesteś w okolicach Gidel woj. łódzkie, to sprawdź fajną miejscówkę. Bardzo polecam.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    author: "Katarzyna W.",
    rating: 5,
    date: "Opinia ze słoika wspomnień",
    content: "Zupa zalewajka smakuje dokładnie jak ta, którą gotowała moja babcia na piecu kaflowym. Domowy kompot i miła atmosfera sprawiają, że wracamy tu w prawie każdą niedzielę po spacerze w Gidlach.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    author: "Marek K.",
    rating: 5,
    date: "Poleca na Facebooku",
    content: "Prawdziwe domowe posiłki, świeże i dobrze doprawione. Babka ziemniaczana z sosem grzybowym to absolutne arcydzieło! Porcje są ogromne, a obsługa niezwykle życzliwa i uśmiechnięta.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export const SPECIALTIES = [
  {
    name: "Zupa Zalewajka Gidelska",
    description: "Tradycyjna, gęsta, na domowym zakwasie, z leśnymi grzybami i rumianą kiełbasą.",
    badge: "Kultowa",
    price: "Babcina cena"
  },
  {
    name: "Babka Ziemniaczana z Grzybami",
    description: "Mega sycąca, chrupiąca z wierzchu, z kawałkami boczku i kiełbaski lub sosem leśnym.",
    badge: "Polecana",
    price: "Z pieca"
  },
  {
    name: "Szarlotka na Ciepło",
    description: "Domowe ciasto z kwaśnych gidelskich jabłek z cynamonowym sercem i kruszonką.",
    badge: "Słodki Deser",
    price: "Domowy wypiek"
  }
];

export const EVENTS_OFFER: EventOffer[] = [
  {
    id: 'chrzciny',
    title: 'Chrzciny',
    description: 'Pierwsze wielkie święto Twojego maleństwa. Zapewniamy spokojną i ciepłą, rodzinną atmosferę oraz tradycyjne, delikatne potrawy, które posmakują każdemu pokoleniu.',
    iconName: 'church'
  },
  {
    id: 'komunie',
    title: 'Komunie',
    description: 'Wyjątkowy dzień Pierwszej Komunii Świętej zasługuje na uroczystą oprawę. Przygotujemy pyszny obiad rodzeństwa, rodziców i dziadków w klimatycznych biesiadnych progach.',
    iconName: 'sparkles'
  },
  {
    id: 'konsolacje',
    title: 'Konsolacje',
    description: 'W tych trudnych chwilach odejścia bliskiej osoby bierzemy na siebie trud przygotowania spokojnego, godnego poczęstunku dla rodziny i przyjaciół na placu Dominikańskim.',
    iconName: 'ribbon'
  },
  {
    id: 'imprezy',
    title: 'Imprezy rodzinne & okolicznościowe',
    description: 'Jubileusze, urodziny, imieniny czy spotkania po latach. Świętuj chwile bliskości przy stołach zastawionych uciechami tradycyjnej polskiej kuchni.',
    iconName: 'cross'
  },
  {
    id: 'wycieczki',
    title: 'Obsługa wycieczek & grup',
    description: 'Położenie w historycznym sercu Gidel sprawia, że jesteśmy idealnym przystankiem na obiad dla grup zorganizowanych i wycieczek. Wymagana wcześniejsza rezerwacja.',
    iconName: 'bus'
  },
  {
    id: 'firmy',
    title: 'Oferta dla firm & pracowników',
    description: 'Organizujesz posiłki regeneracyjne dla swojej załogi? Dostarczamy świeże, pożywne zestawy obiadowe bezpośrednio do firm na terenie Gidel i okolic.',
    iconName: 'building'
  }
];

export const CONTACT_INFO = {
  address: "Plac Dominikański 7, 97-540 Gidle",
  phone1: "792 733 915",
  phone2: "794 903 451",
  facebookUrl: "https://www.facebook.com/profile.php?id=61563227526360",
  reviewsUrl: "https://www.facebook.com/profile.php?id=61563227526360&sk=reviews",
  mapsIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.763735798683!2d19.4657458770518!3d50.96507235017649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471753e30ced40e5%3A0xadab572ce25c23ff!2splac%20Dominika%C5%84ski%207%2C%2097-540%20Gidle!5e0!3m2!1spl!2spl!4v1779269389587!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
};
