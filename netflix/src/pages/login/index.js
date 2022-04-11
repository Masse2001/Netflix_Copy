import react from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TitlePage from "../../components/TitlePage";
import { useState, useRouter } from "react";
import Link from "next/link";

// Vérifier la navigation entre les pages
//vérifier que mon logiciel enregistre bien mes donées.

const Index = () => {

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })
    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data.user);
            router.push('/movies')
        })
    }
    return (
        <div className="page__form">
            <TitlePage title="Connexion"/>
            <form  className="page__form__login" onSubmit={e => handleSubmit(e)} >
            <Input
                label="Email"
                name="email"
                id="email"
                type="email"
                classes="form__input"
                required={true}
                placeholder="Veuillez saisir votre email"
                handleChange={e => handleChange(e)}
            />
            <Input
                label="Mot de passe"
                name="Password"
                id="Password"
                type="text"
                classes="form__input"
                required={true}
                placeholder="Veuillez saisir votre mot de passe"
                handleChange={e => handleChange(e)}
            />
            <Button title="VALIDER" classes="btn btn__color-red" type="submit"/>
            </form>
            <div className="message">
                <p>Je n'ai pas encore decompte ?</p>
                <Link href="/register">
                    <a className="nav__link">S'incrire</a>
                </Link>
            </div>
        </div>
    )
};
export default Index;