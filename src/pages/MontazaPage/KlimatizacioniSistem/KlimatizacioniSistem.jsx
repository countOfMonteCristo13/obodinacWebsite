import React, { useEffect } from 'react'
import './klimatizacioniSistem.css'
import {NavbarSection,OffersSection} from '../../../components'
import {ScrollUp,ContactUsButton,BlueLine,CardFlip} from '../../../utils'
import TipoviKlima from '../TipoviKlima/TipoviKlima';
import { images } from '../../../data';

const KlimatizacioniSistem = ({ sistem }) => {

    const currentSistem = sistem.title;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ScrollUp image={images.upArrow} />
            <div className='slide-enterance1'>
                <NavbarSection activeLink='nav__offers' />
                <div className='headtext flex__center'>
                    <h2>{sistem.title}</h2>
                </div>
                <BlueLine />
                <OffersSection description={sistem.text} alt={sistem.title} image={sistem.img} />
                {currentSistem !== 'Kanalski Sistem' ?
                    <TipoviKlima />
                    :
                    <>
                        <div className='tipovi__klima-headtext flex__center'>
                            <h2>Unutrašnja jedinica</h2>
                        </div>
                        <div className='flex__center section__padding'>
                            <CardFlip imageF={images.kanalskaKlima} imageB={images.kanalskaKlimaP} opis="Kanalska" klasa='kanalska' />
                        </div>
                    </>
                }
                <BlueLine />
                <ContactUsButton />
            </div>
        </>
    )
}

export default KlimatizacioniSistem
