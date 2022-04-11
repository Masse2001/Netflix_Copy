import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/Input'
import Button from '../components/Button'
import moviesSevices from '../services/movies.sevices'

export default function Home() {
 
  function search(title){
    return  moviesSevices.getMovie(title).then((data)=>{
            console.log(data.results);
            console.log("Commencer");
            setMovies(data.results);
            })
            .catch(err=>console.log(err))
  }

  return (
    <body className='home'>
      <div className='home__filter'>
          <div className='home__title'>
              <p>Films, Séries TV et bien plus en illimité</p>
          </div>
          <div className='home__form'>
            <form>
            <Input 
                name="text"
                id="text"
                type="text"
                classes="form__input"
                required={true}
                placeholder="Adresse e-mail"
                handleChange={() => title=this.value}
               />
               <Button type="button" classes="btn btn__color-red" function={() => search(title)} title="Commencer" />
            </form>
          </div>
      </div>
    </body>
  )
}
