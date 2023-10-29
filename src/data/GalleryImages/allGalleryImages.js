import { images } from '..';

const klimatizacija = {
  Split: [images.split5, images.split6, images.split7],
  Centralni: [
    images.centralni1,
    images.centralni2,
    images.centralni3,
    images.centralni4,
    images.centralni5,
    images.centralni6,
    images.centralni7,
    images.centralni8,
    images.centralni9,
  ],
  Kanalske: [images.kanalski1, images.kanalski2, images.kanalski3],
  Multi: [],
  Sve: [],
};

const grejanje = {
  Radijator: [
    images.radijator1,
    images.radijator2,
    images.radijator3,
    images.radijator4,
    images.radijator5,
    images.radijator6,
  ],
  Podno: [
    images.podnoGrejanje1,
    images.podnoGrejanje2,
    images.podnoGrejanje3,
    images.podnoGrejanje4,
    images.podnoGrejanje5,
    images.podnoGrejanje6,
    images.podnoGrejanje7,
    images.podnoGrejanje8,
    images.podnoGrejanje9,
  ],
  Sve: [],
};

const ventilacija = {
  Mehanička: [images.ventilacija1, images.ventilacija2],
  Rekuperator: [images.ventilacija3, images.ventilacija4],
  Sve: [],
};

const kernovanjeImages = [
  images.kernovanje1,
  images.kernovanje2,
  images.kernovanje3,
  images.kernovanje4,
  images.kernovanje5,
  images.kernovanje6,
  images.kernovanje7,
  images.kernovanje8,
  images.kernovanje9,
  images.kernovanje10,
];

const servisKlimaImages = [images.servisKlime1, images.servisKlime2, images.servisKlime3];

const computeSveCategory = categoryObject => {
  const sveCategory = Object.values(categoryObject).flat();
  return sveCategory;
};

klimatizacija.Sve = computeSveCategory(klimatizacija);
grejanje.Sve = computeSveCategory(grejanje);
ventilacija.Sve = computeSveCategory(ventilacija);

export { grejanje, klimatizacija, ventilacija, servisKlimaImages, kernovanjeImages };
