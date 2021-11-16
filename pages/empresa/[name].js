import React from 'react'
import Header from '../../src/Header'
import styles from '../../styles/Company.module.css'

const Company = () => {
    return (
        <>
        <Header />
        <div className={styles.company_container}>
            <img src="/empresa1.png" />
            <h1>YVY é o novo jeito de limpar a casa!</h1>
            <h3>Sobre a YVY</h3>
            <p>A sabedoria Guarani nos conta de uma terra sem males, onde há comunhão entre o homem e a natureza. É nesse lugar que nos inspiramos para criar YVY, uma nova forma de limpar a casa, mais simples, com a máxima eficiência e o mínimo de impacto no planeta. Uma resposta dos novos tempos para um modelo que se esgotou.</p>
            <h3>Onde comprar?</h3>
            <span>Website</span>
            <h3>Informações</h3>
            <span>CNPJ: 0001</span>
            <h3>Contato</h3>
            <span>Email: asd@asd.com</span>
            <span>Celular: 11942092222</span>
        </div>
        </>
    )
}

export default Company
