const navbarDropdownLinks = [
  {
    id: 'montaža',
    urlUsluge: '/usluge/montaža-klima-uređaja',
    urlGalerija: '/galerija/montaža-klima-uređaja',
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
    urlUsluge: '/usluge/servis-klima-uređaja',
    urlGalerija: '/galerija/servis-klima-uređaja',
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
    urlUsluge: '/usluge/polovni-klima-uređaji',
    urlGalerija: '/galerija/polovni-klima-uređaji',
    title: 'Polovni klima uređaji',
    dropdown: false,
    options: [],
  },
  {
    id: 'grejanje',
    urlUsluge: '/usluge/grejanje',
    urlGalerija: '/galerija/grejanje',
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
    urlUsluge: '/usluge/ventilacija',
    urlGalerija: '/galerija/ventilacija',
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
    urlUsluge: '/usluge/dijamantsko-bušenje-rupa',
    urlGalerija: '/galerija/dijamantsko-bušenje-rupa',
    title: 'Dijamantsko bušenje rupa',
    dropdown: false,
    options: [],
  },
];

export default navbarDropdownLinks;
