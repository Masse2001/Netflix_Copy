import { useState } from "react"
import Input from "../../components/Input"
import TitlePage from "../../components/TitlePage"
import Button from "../../components/Button"
import Link from "next/link";

const Index = () => {
    const [user, setUser] = useState({
        email: '', // required
        password: '', // required
        username: '' // optional
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setUser({...user, [e.target.name] : e.target.value})
    }

    return (
        <div className="page__form">
            <TitlePage title="Inscription"/>
            <form className='page__form__register' onSubmit={e => handleSubmit(e)}>
                <Input
                    label="Prénom:"
                    name="firstName"
                    id="firstName"
                    type="text"
                    classes="form__input"
                    required={true}
                    placeholder="Veuillez saisir votre prénom"
                    value={user.firstname}
                    handleChange={e => handleChange(e)}
                />
                <Input
                    label="Nom:"
                    name="lastName"
                    id="lastName"
                    type="text"
                    classes="form__input"
                    required={true}
                    placeholder="Veuillez saisir votre Nom"
                    value={user.lastname}
                    handleChange={e => handleChange(e)}
                />
                <Input
                    label="Email:"
                    name="email"
                    id="email"
                    type="email"
                    classes="form__input"
                    required={true}
                    placeholder="Veuillez saisir votre email"
                    value={user.email}
                    handleChange={e => handleChange(e)}
                />
                <Input
                    label="Mot de passe:"
                    name="password"
                    id="password"
                    type="text"
                    classes="form__input"
                    required={true}
                    placeholder="Veuillez saisir votre mot de passe"
                    value={user.password}
                    handleChange={e => handleChange(e)}
                />
                <Button title="VALIDER" classes="btn btn__color-red" type="submit"/>
            </form>
            <div className="message">
                <p>J'ai déjà un compte ?</p>
                <Link href="/login">
                    <a className="nav__link">S'identidier</a>
                </Link>
            </div>
        </div>
    )
}

export default Index