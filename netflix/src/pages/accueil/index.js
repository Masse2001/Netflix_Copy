import react from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TitlePage from "../../components/TitlePage";

const Index = () => {



    return (
        <body className="page__register">
            <TitlePage title="Inscription"/>
            <form  className="page__register__form" onSubmit={(e)=> submitRegister(e)} >
            <Input
                label="Prénom"
                name="firstName"
                id="firstName"
                type="text"
                classes="form__input"
                required={true}
                placeholder="Veuillez saisir votre prénom"
                handleChange={()=>{}}
            />
            <Input
                label="Nom"
                name="LastName"
                id="LastName"
                type="text"
                classes="form__input"
                required={true}
                placeholder="Veuillez saisir votre nom"
                handleChange={()=>{}}
            />
            <Input
                label="Email"
                name="email"
                id="email"
                type="email"
                classes="form__input"
                required={true}
                placeholder="Veuillez saisir votre email"
                handleChange={()=>{}}
            />
            <Button title="VALIDER" classes="btn btn__color-red" type="submit"/>
            </form>
        </body>
    )
};
export default Index;