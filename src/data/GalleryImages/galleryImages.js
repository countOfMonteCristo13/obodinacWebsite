import { images } from './images';
import { smallImages } from './smallImages';

const galleryImages = {
  klimatizacija: {
    Sve: [],
    Split: [
      { full: images.split1, blur: smallImages.split1_small },
      { full: images.split2, blur: smallImages.split2_small },
      { full: images.split3, blur: smallImages.split3_small },
    ],
    Centralni: [
      { full: images.centralni1, blur: smallImages.centralni1_small },
      { full: images.centralni2, blur: smallImages.centralni2_small },
      { full: images.centralni3, blur: smallImages.centralni3_small },
      { full: images.centralni4, blur: smallImages.centralni4_small },
      { full: images.centralni5, blur: smallImages.centralni5_small },
      { full: images.centralni6, blur: smallImages.centralni6_small },
      { full: images.centralni7, blur: smallImages.centralni7_small },
      { full: images.centralni8, blur: smallImages.centralni8_small },
      { full: images.centralni9, blur: smallImages.centralni9_small },
    ],
    Kanalski: [
      { full: images.kanalski1, blur: smallImages.kanalski1_small },
      { full: images.kanalski2, blur: smallImages.kanalski2_small },
      { full: images.kanalski3, blur: smallImages.kanalski3_small },
    ],
    Multi: [],
  },

  grejanje: {
    Sve: [],
    Radijator: [
      { full: images.radijator1, blur: smallImages.radijator1_small },
      { full: images.radijator2, blur: smallImages.radijator2_small },
      { full: images.radijator3, blur: smallImages.radijator3_small },
      { full: images.radijator4, blur: smallImages.radijator4_small },
      { full: images.radijator5, blur: smallImages.radijator5_small },
      { full: images.radijator6, blur: smallImages.radijator6_small },
    ],
    Podno: [
      { full: images.podnoGrejanje1, blur: smallImages.podnoGrejanje1_small },
      { full: images.podnoGrejanje2, blur: smallImages.podnoGrejanje2_small },
      { full: images.podnoGrejanje3, blur: smallImages.podnoGrejanje3_small },
      { full: images.podnoGrejanje4, blur: smallImages.podnoGrejanje4_small },
      { full: images.podnoGrejanje5, blur: smallImages.podnoGrejanje5_small },
      { full: images.podnoGrejanje6, blur: smallImages.podnoGrejanje6_small },
      { full: images.podnoGrejanje7, blur: smallImages.podnoGrejanje7_small },
      { full: images.podnoGrejanje8, blur: smallImages.podnoGrejanje8_small },
      { full: images.podnoGrejanje9, blur: smallImages.podnoGrejanje9_small },
    ],
  },

  ventilacija: {
    Sve: [],
    Mehanička: [
      { full: images.ventilacija1, blur: smallImages.ventilacija1_small },
      { full: images.ventilacija2, blur: smallImages.ventilacija2_small },
    ],
    Rekuperatorska: [
      { full: images.ventilacija3, blur: smallImages.ventilacija3_small },
      { full: images.ventilacija4, blur: smallImages.ventilacija4_small },
    ],
  },

  kernovanjeImages: {
    Sve: [
      { full: images.kernovanje1, blur: smallImages.kernovanje1_small },
      { full: images.kernovanje2, blur: smallImages.kernovanje2_small },
      { full: images.kernovanje3, blur: smallImages.kernovanje3_small },
      { full: images.kernovanje4, blur: smallImages.kernovanje4_small },
      { full: images.kernovanje5, blur: smallImages.kernovanje5_small },
      { full: images.kernovanje6, blur: smallImages.kernovanje6_small },
      { full: images.kernovanje7, blur: smallImages.kernovanje7_small },
      { full: images.kernovanje8, blur: smallImages.kernovanje8_small },
      { full: images.kernovanje9, blur: smallImages.kernovanje9_small },
      { full: images.kernovanje10, blur: smallImages.kernovanje10_small },
    ],
  },
  servisKlimaImages: {
    Sve: [
      { full: images.servisKlime1, blur: smallImages.servisKlime1_small },
      { full: images.servisKlime2, blur: smallImages.servisKlime2_small },
      { full: images.servisKlime3, blur: smallImages.servisKlime3_small },
    ],
  },
};

const computeSveCategory = categoryObject => {
  const sveCategory = Object.values(categoryObject).flat();
  return sveCategory;
};

galleryImages.klimatizacija.Sve = computeSveCategory(galleryImages.klimatizacija);
galleryImages.grejanje.Sve = computeSveCategory(galleryImages.grejanje);
galleryImages.ventilacija.Sve = computeSveCategory(galleryImages.ventilacija);

export default galleryImages;
