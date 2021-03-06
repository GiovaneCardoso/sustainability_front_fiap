import React from 'react'
import Link from 'next/link'

const Brands = ({image, name, isBrand, id}) => {
    return (
        <div>
            <Link  href={!isBrand ? `/brands/${name.toLowerCase()}` : `/empresa/${id}`}>
                <a>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </a>
            </Link>
        </div>
    ) 
}

export default Brands
