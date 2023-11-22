import images from '../../../data/Images/images';
import texts from '../../../data/Texts/texts';

export const ventilationTypes = {
  mehaničkaVentilacija: {
    title: 'Mehanička ventilacija',
    text: texts.textTypePages.ventD,
    img: images.vent,
    galleryUrl: '/galerija/ventilacija',
  },
  rekuperatorskaVentilacija: {
    title: 'Rekuperatorska ventilacija',
    text: texts.textTypePages.recuperatorD,
    img: images.rekuperator,
    galleryUrl: '/galerija/ventilacija',
  },
};
