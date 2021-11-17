import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Header from '../src/Header'
import styles from '../styles/Login.module.css'
const Login = () => {
    const form = useRef(null)
    const [error, setError] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        const email = data.get('email')
        const password = data.get('password')
        const dataApi = await fetch("http://localhost:9101/api/v1/auth/login", {
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
        })
        const response = await dataApi.json()
        if(response.token){
            document.cookie = `token=${response.token}, expires=${response.expire_in}`
            document.cookie = `usuario =${email}`
            window.location.href = "/"
        } else {
            setError(true)
        }

    }
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <img src="/logo.png" />

                <h1>Entrar</h1>
                <form ref={form} onSubmit={(e) => submit(e)}>
                    <label>Email</label>
                    <input type="email" placeholder="email" name='email'/>
                    <label>Senha</label>

                    <input type="password" placeholder="Password" name='password'/>
                    {error && (<p>Email ou senha inválidos, tente novamente!</p>)}
                    <input type="submit" value="Entrar" />
                </form>
                <Link href="/register">
                    <a>
                        Registre-se
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Login
