import React, { useEffect } from 'react'
import {NavbarSection} from '../../components'
import {ScrollUp,ContactUsButton,BlueLine} from '../../utils'
import { images } from '../../data'

import './aCInstallationPage.css'
import ACSystemsCard from './ACSystemsCard/ACSystemsCard'
import IndoorUnitTypes from './IndoorUnitTypes/IndoorUnitTypes'

const ACInstallationPage = () => {

    const kSistemi = [
        {
            img: images.klimaUredjajFooter,
            title: 'Split sistem',
            url: '/usluge/montaža-klima-uređaja/split-sistem'
        },
        {
            img: images.multiSistemKartica,
            title: 'Multi sistem',
            url: '/usluge/montaža-klima-uređaja/multi-sistem'
        },
        {
            img: images.centralniSistemKartica,
            title: 'Centralni (VRF) sistem',
            url: '/usluge/montaža-klima-uređaja/centralni-sistem'
        },
        {
            img: images.kanalskiSistemKartica,
            title: 'Kanalski sistem',
            url: '/usluge/montaža-klima-uređaja/kanalski-sistem'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <ScrollUp image={images.upArrow} />
            <div className='slide-enterance1'>
                <NavbarSection activeLink="nav__offers" />
                <div className='headtext flex__center'>
                    <h2>Montaža klima uredjaja</h2>
                    <p>
                        Klimatizacija je proces kontrolisanja temperature, vlažnosti i kvaliteta vazduha u zatvorenim prostorima
                        radi postizanja udobnosti i optimalnih uslova za život, rad ili skladištenje uz pomoć rashladnih fluida
                        kao što su freon ili toplotna pumpa. Naša kompanija vrši montažu klimatizacionih sistema kao što su
                        split, multi, kanalski i VRF. U slučaju split, multi i VRF sistema postoje različiti tipovi unutrašnjih jedinica
                        koje možete da izaberete u skladu sa vašim potrebama, dok se za kanalski sistem koristi kanalska unutrašnja jedinica.
                    </p>
                </div>
                <div className='sistemi__klima-headtext flex__center'>
                    <h2>Klimatizacioni sistemi</h2>
                </div>
                <div className='sistemi__klima section__padding'>
                    <div className='sistemi__klima-cards'>
                        {
                            kSistemi.map((sistem) => (
                                <ACSystemsCard sistem={sistem} key={sistem.title} />
                            ))
                        }
                    </div>
                </div>
                <IndoorUnitTypes />
                <BlueLine />
                <ContactUsButton />
            </div>
        </>
    )
}

export default ACInstallationPage
