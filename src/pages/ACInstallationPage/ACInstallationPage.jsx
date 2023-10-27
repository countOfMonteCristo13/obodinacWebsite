import React, { useEffect } from 'react'
import {NavbarSection} from '../../components'
import {ScrollUp,TypeCard} from '../../utils'
import { images,texts } from '../../data'

import './aCInstallationPage.css'
import IndoorUnitTypes from './IndoorUnitTypes/IndoorUnitTypes'

const ACInstallationPage = () => {

    const acTypes = [
        {
            img: images.klimaUredjajKartica,
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
                        {texts.textOfferPagesSubHeading.acD}
                    </p>
                </div>
                <div className='sistemi__klima-headtext flex__center'>
                    <h2>Klimatizacioni sistemi</h2>
                </div>
                <div className='sistemi__klima section__padding'>
                    <div className='sistemi__klima-cards'>
                        {
                            acTypes.map((sistem) => (
                                <TypeCard sistem={sistem} key={sistem.title} />
                            ))
                        }
                    </div>
                </div>
                <IndoorUnitTypes />
            </div>
        </>
    )
}

export default ACInstallationPage
