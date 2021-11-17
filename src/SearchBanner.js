import React from 'react'
import Link from 'next/link'

const SearchBanner = ({name, description, contact, total_visitants, index}) => {
    return (
        <div>
            {/* <Header /> */}
            <Link href={`/empresa/${index}`}>
                <a>
                    <img src={`/${name}.png`} alt={name} />
                    <h2>{name}</h2>
                    <h2>{description}</h2>
                    <h3>Número de visitantes: {total_visitants}</h3>
                    <h4>Contato: {contact}</h4>

                    <span>Saiba mais</span>
                </a>
            </Link>
        </div>
    )
}

export default SearchBanner
