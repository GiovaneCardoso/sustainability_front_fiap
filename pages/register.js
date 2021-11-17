import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Header from '../src/Header'
const Register = () => {
    const form = useRef(null)
    const [userCreated, setUserCreated] = useState(false)
    const submit = async (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        const name = data.get('name')
        const phone = data.get('phone')
        const email = data.get('email')
        const password = data.get('password')
        const dataApi = await fetch(`http://localhost:9101/api/v1/auth/login/create`, {
            body: JSON.stringify({
                name,
                phone,
                email,
                password
            }),
            headers: {
                "content-type": "Application/json"
            },
            method: "POST"
        })
        const response = await dataApi.json()
        if(response.id) {
            setUserCreated(true)
            setTimeout(()=> {
                window.location.href = "/login"
            }, 2000)
        }
    }
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <img src="/logo.png" />
                <h1>Cadastro</h1>
                <form onSubmit={(e)=> submit(e)} ref={form}>
                    <label>Nome</label>
                    <input type="text" placeholder="Nome"  id="name" name="name"/>
                    <label>Telefone</label>
                    <input type="text" placeholder="Telefone" id="phone" name="phone" />
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" />
                    <label>Senha</label>

                    <input type="password" placeholder="Senha" name="password"/>
                    {userCreated && (<p>Usuário criado com sucesso!</p>)}
                    <input type="submit"  className={styles.go_to} value="Cadastrar" />
                </form>
                <Link href="/login">
                    <a className={styles.go_to2}>
                        Fazer login
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Register
