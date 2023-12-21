export const mobileNavbarLinks = {
  Home: {
    url: '/',
    id: 'nav__home-menu',
    title: 'Početna',
  },
  AboutUs: {
    url: '/o-nama',
    id: 'nav__about-menu',
    title: 'O nama',
  },
  Offers: {
    url: '#',
    id: 'nav__offers-menu',
    title: 'Usluge',
  },
  Gallery: {
    url: '#',
    id: 'nav__gallery-menu',
    title: 'Galerija',
  },
  FAQ: {
    url: '/najčešća-pitanja',
    id: 'nav__faq-menu',
    title: 'Najčešća pitanja',
  },
  Contact: {
    url: '/kontakt',
    id: 'nav__contact-menu',
    title: 'Kontakt',
  },
};

export const galleryNavbarLinks = [
  {
    id: 'montaža',
    url: '/galerija/montaža-klima-uređaja',
    title: 'Montaža klima uređaja',
  },
  {
    id: 'servis',
    url: '/galerija/servis-klima-uređaja',
    title: 'Servis klima uređaja',
  },
  {
    id: 'grejanje',
    url: '/galerija/grejanje',
    title: 'Grejanje',
  },
  {
    id: 'ventilacija',
    url: '/galerija/ventilacija',
    title: 'Ventilacija',
  },
  {
    id: 'kernovanje',
    url: '/galerija/dijamantsko-bušenje-rupa',
    title: 'Dijamantsko bušenje rupa',
  },
];

export const offersNavbarLinks = [
  {
    id: 'montaža',
    url: '/usluge/montaža-klima-uređaja',
    title: 'Montaža klima uređaja',
    dropdown: true,
    options: [
      {
        id: 'split-sistem',
        url: '/usluge/montaža-klima-uređaja/split-sistem',
        title: 'Split sistem',
      },
      {
        id: 'multi-sistem',
        url: '/usluge/montaža-klima-uređaja/multi-sistem',
        title: 'Multi sistem',
      },
      {
        id: 'centralni-sistem',
        url: '/usluge/montaža-klima-uređaja/centralni-sistem',
        title: 'Centralni (VRF) sistem',
      },
      {
        id: 'kanalski-sistem',
        url: '/usluge/montaža-klima-uređaja/kanalski-sistem',
        title: 'Kanalski sistem',
      },
    ],
  },
  {
    id: 'servis',
    url: '/usluge/servis-klima-uređaja',
    title: 'Servis klima uređaja',
    dropdown: true,
    options: [
      {
        id: 'čišćenje-klime',
        url: '/usluge/servis-klima-uređaja/čišćenje-klima-uređaja',
        title: 'Čišćenje klima uređaja',
      },
      {
        id: 'popravka-elektronike',
        url: '/usluge/servis-klima-uređaja/popravka-elektronike',
        title: 'Popravka elektronike',
      },
      {
        id: 'punjenje/dopuna-freona',
        url: '/usluge/servis-klima-uređaja/freon',
        title: 'Punjenje/Dopuna freona',
      },
      {
        id: 'zamena-kondezatora',
        url: '/usluge/servis-klima-uređaja/zamena-kondezatora',
        title: 'Zamena kondezatora',
      },
    ],
  },
  {
    id: 'polovne',
    url: '/usluge/polovni-klima-uređaji',
    title: 'Polovni klima uređaji',
    dropdown: false,
    options: [],
  },
  {
    id: 'grejanje',
    url: '/usluge/grejanje',
    title: 'Grejanje',
    dropdown: true,
    options: [
      {
        id: 'radijatorsko-grejanje',
        url: '/usluge/grejanje/radijatorsko-grejanje',
        title: 'Radijatorsko grejanje',
      },
      {
        id: 'podno-grejanje',
        url: '/usluge/grejanje/podno-grejanje',
        title: 'Podno grejanje',
      },
    ],
  },
  {
    id: 'ventilacija',
    url: '/usluge/ventilacija',
    title: 'Ventilacija',
    dropdown: true,
    options: [
      {
        id: 'mehanička-ventilacija',
        url: '/usluge/ventilacija/mehanička-ventilacija',
        title: 'Mehanička-ventilacija',
      },
      {
        id: 'rekuperatorska-ventilacija',
        url: '/usluge/ventilacija/rekuperatorska-ventilacija',
        title: 'Rekuperatorska ventilacija',
      },
    ],
  },
  {
    id: 'kernovanje',
    url: '/usluge/dijamantsko-bušenje-rupa',
    title: 'Dijamantsko bušenje rupa',
    dropdown: false,
    options: [],
  },
];
