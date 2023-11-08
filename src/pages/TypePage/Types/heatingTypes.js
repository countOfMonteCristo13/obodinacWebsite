import images from '../../../data/Images/images';
import texts from '../../../data/Texts/texts';

export const heatingTypes = {
  radijatorskoGrejanje: {
    title: 'Radijatorsko grejanje',
    text: texts.textTypePages.radiatorD,
    img: images.radiator,
  },
  podnoGrejanje: {
    title: 'Podno grejanje',
    text: texts.textTypePages.floorHeatingD,
    img: images.podnoGrejanje,
  },
};
