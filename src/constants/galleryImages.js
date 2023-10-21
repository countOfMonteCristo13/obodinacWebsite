import images from './images'



//Klimatizacija

// const splitImages = {
//     split1:images.split5,
//     split2:images.split6,
//     split3:images.split7,
// }

// const multiImages = {

// }

// const centralneImages = {
//     centralna1:images.centralni1,
//     centralna2:images.centralni2,
//     centralna3:images.centralni3,
//     centralna4:images.centralni4,
//     centralna5:images.centralni5,
//     centralna6:images.centralni6,
//     centralna7:images.centralni7,
//     centralna8:images.centralni8,
//     centralna9:images.centralni9,
// }

// const kanalskeImages = {
//     kanalski1:images.kanalski1,
//     kanalski2:images.kanalski2,
//     kanalski3:images.kanalski3,
// }


const klimatizacija = {
    Split: [images.split5, images.split6, images.split7],
    Centralni: [images.centralni1, images.centralni2, images.centralni3, images.centralni4, images.centralni5, images.centralni6, images.centralni7, images.centralni8, images.centralni9],
    Kanalske: [images.kanalski1, images.kanalski2, images.kanalski3],
    Multi:[],
    Sve: []
  };




//Grejanje

// const radijatoriImages = {
//     radijator1:images.radijator1,
//     radijator2:images.radijator2,
//     radijator3:images.radijator3,
//     radijator4:images.radijator4,
//     radijator5:images.radijator5,
//     radijator6:images.radijator6,
// }

// const podnoImages = {
//     podno1:images.podnoGrejanje1,
//     podno2:images.podnoGrejanje2,
//     podno3:images.podnoGrejanje3,
//     podno4:images.podnoGrejanje4,
//     podno5:images.podnoGrejanje5,
//     podno6:images.podnoGrejanje6,
//     podno7:images.podnoGrejanje7,
//     podno8:images.podnoGrejanje8,
//     podno9:images.podnoGrejanje9,
// }

const grejanje = {
    Radijator:[images.radijator1,images.radijator2,images.radijator3,images.radijator4,images.radijator5,images.radijator6],
    Podno:[images.podnoGrejanje1,images.podnoGrejanje2,images.podnoGrejanje3,images.podnoGrejanje4,images.podnoGrejanje5,images.podnoGrejanje6,images.podnoGrejanje7,images.podnoGrejanje8,images.podnoGrejanje9],
    Sve:[]
}

//Ventilacija

// const ventilacijaImages = {
//     ventilacija1:images.ventilacija1,
//     ventilacija2:images.ventilacija2,
//     ventilacija3:images.ventilacija3,
//     ventilacija4:images.ventilacija4,
//     ventilacija5:images.ventilacija5,
//     ventilacija6:images.ventilacija6,
//     ventilacija7:images.ventilacija7,
//     ventilacija8:images.ventilacija8,
//     ventilacija9:images.ventilacija9,
// }

const ventilacija = {
    Mehanička:[images.ventilacija1,images.ventilacija2],
    Rekuperator:[images.ventilacija3,images.ventilacija4],
    Sve:[]
}

//Kernovanje

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
]

//Servis klima uredjaja

const servisKlimaImages = [
    images.servisKlime1,
    images.servisKlime2,
    images.servisKlime3,
]


const computeSveCategory = (categoryObject) => {
    const sveCategory = Object.values(categoryObject).flat();
    return sveCategory;
  };
  
  klimatizacija.Sve = computeSveCategory(klimatizacija);
  grejanje.Sve = computeSveCategory(grejanje);
  ventilacija.Sve = computeSveCategory(ventilacija);


export {grejanje,klimatizacija,ventilacija,servisKlimaImages,kernovanjeImages}

