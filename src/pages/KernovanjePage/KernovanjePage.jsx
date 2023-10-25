import React, { useEffect } from 'react'
import { images,texts } from '../../data'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import BlueLine from '../../components/BlueLine/BlueLine'
import OffersSection from '../../components/OffersSection/OffersSection'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'
import KSistemiCard from '../MontazaPage/KSistemiCard/KSistemiCard'

const KernovanjePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const kSistemi = [
        {
            img: images.burgija102,
            title: 'Ø 102',
            url: '#'
        },
        {
            img: images.burgija112,
            title: 'Ø 112',
            url: '#'
        },
        {
            img: images.burgija162,
            title: 'Ø 162',
            url: '#'
        },
        {
            img: images.burgija202,
            title: 'Ø 202',
            url: '#'
        },
        {
            img: images.burgija252,
            title: 'Ø 252',
            url: '#'
        },


    ]
    return (
        <>
            <ScrollUp image={images.upArrow} />
            <div className='slide-enterance1'>
                <NavbarSection activeLink='nav__offers' />
                <div className='headtext flex__center'>
                    <h2>Dijamantsko bušenje rupa</h2>
                </div>
                <BlueLine />
                <OffersSection description={texts.tekstDodatno.dijamatnskoD} alt='Dijamantsko bušenje rupa' image={images.kirnerica} />
                <div className='sistemi__klima-headtext flex__center'>
                    <h2>Prečnici burgija</h2>
                </div>
                <div className='sistemi__klima section__padding'>
                    <div className='sistemi__klima-cards'>
                        {
                            kSistemi.map((sistem) => (
                                <KSistemiCard sistem={sistem} key={sistem.title} />
                            ))
                        }
                    </div>
                </div>
                <BlueLine />
                <KontaktDugme />

            </div>
        </>
    )
}

export default KernovanjePage
