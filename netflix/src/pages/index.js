import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Home() {
  return (
    <body className='home'>
      <div className='home__filter'>
          <div className='home__title'>
              <p>Films, Séries TV et bien plus en illimité</p>
          </div>
          <div className='home__form'>
            <form>
            <Input 
                name="email"
                id="email"
                type="email"
                classes="form__input"
                required={true}
                placeholder="Adresse e-mail"
                handleChange={() => {}}
               />
               <Button type="button" classes="btn btn__color-red" function={() => console.log("Commencer")} title="Commencer" />
            </form>
          </div>
      </div>
    </body>
  )
}
