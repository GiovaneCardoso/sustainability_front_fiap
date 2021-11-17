import React, { useRef } from 'react'
import Link from 'next/link'
import Header from '../src/Header'
import styles from '../styles/Login.module.css'
const Login = () => {
    const form = useRef(null)

    const submit = (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        const name = data.get('user')
        const password = data.get('password')
        console.log(name,password)

    }
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <img src="/logo.png" />

                <h1>Entrar</h1>
                <form ref={form} onSubmit={(e) => submit(e)}>
                    <label>Usuário</label>
                    <input type="text" placeholder="Username" name='user'/>
                    <label>Senha</label>

                    <input type="password" placeholder="Password" name='password'/>
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
