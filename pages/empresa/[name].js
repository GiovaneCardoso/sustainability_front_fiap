import React, { useState, useEffect } from 'react'
import Header from '../../src/Header'
import styles from '../../styles/Company.module.css'
import { useRouter } from 'next/router'

const Company = () => {
    const [companies, setCompanies] = useState();
    const router = useRouter()
    const { name } = router.query

    useEffect(async () => {
        const data = await fetch(`http://localhost:9101/api/v1/company/${name}`).then(res => res.json())
        setCompanies(data)
    }, [name])
    return (
        <>
        <Header />
        <div className={styles.company_container}>
            <img src={`/${companies?.fantasy_name?.toLowerCase()}.png`} />
            <h1>Sobre a {companies?.fantasy_name}</h1>
            <p>{companies?.description}</p>
            <h3>Onde comprar?</h3>
            <span>Website</span>
            <h3>Informações</h3>
            <span>CNPJ: {companies?.cnpj}</span>
            <h3>Contato</h3>
            <span>Email: {companies?.email}</span>
            <span>Celular: {companies?.phone} - {companies?.contact_name}</span>
        </div>
        </>
    )
}

export default Company
