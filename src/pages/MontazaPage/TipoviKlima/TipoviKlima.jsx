import React from 'react'
import './tipoviKlima.css'
import CardFlip from '../../../utils/CardFlip/CardFlip'
import { images } from '../../../data'

const TipoviKlima = () => {
    return (
        <>
            <div className='tipovi__klima-headtext flex__center'>
                <h2>Tipovi unutrašnjih jedinica</h2>
            </div>
            <div className='tipovi__klima section__padding'>
                <div className='tipovi__klima-cards'>
                    <CardFlip imageF={images.unutrasnjaKlima} imageB={images.unutrasnjaKlimaP} opis="Zidna" klasa='zidna' />
                    <CardFlip imageF={images.plafonskaKlima} imageB={images.plafonskaKlimaP} opis="Plafonska" klasa='plafonska' />
                    <CardFlip imageF={images.parapetnaKlima} imageB={images.podplafonskaKlimaP} opis="Podplafonska" klasa='podplafonska' />
                    <CardFlip imageF={images.kanalskaKlima} imageB={images.kanalskaKlimaP} opis="Kanalska" klasa='kanalska' />
                    <CardFlip imageF={images.parapetnaKlima} imageB={images.parapetnaKlimaP} opis="Parapetna" klasa='parapetna' />
                </div>
            </div>
        </>
    )
}

export default TipoviKlima
