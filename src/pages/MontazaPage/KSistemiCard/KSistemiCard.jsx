import React from 'react'
import { Link } from 'react-router-dom'

const KSistemiCard = ({ sistem }) => {
    return (
        <Link to={sistem.url} className='sistemi__klima-card'>
            <div className='sistemi__klima-card__img'>
                <img src={sistem.img} alt={sistem.title} />
            </div>
            <div className='sistemi__klima-card__title'>
                {sistem.title}
            </div>
        </Link>
    )
}

export default KSistemiCard
