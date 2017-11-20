import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './_header'
import Footer from './_footer'
import Share from './_share'

export default class Landing extends Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <Share />

        <div className='flex justify-center video-wrapper'>
          <iframe src='https://www.youtube.com/embed/z0-Vo7SaSUg?rel=0&amp;showinfo=0' frameBorder='0' allowFullScreen></iframe>
        </div>

        <div className='row padding-top-50'>
          <div className='col no-pad m4 s12 offset-m1'>
            <h1 className='center-align padding-bottom-10 max-width-475 margin-center'>VISION POUR L’ENTRÉE NORD</h1>
            <h3 className='center-align max-width-475 margin-center'>Proposition du scénario d’aménagement</h3>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              L’Entrée Nord du centre-ville de Nouméa est une zone caractérisée par l’ancien Centre Hospitalier Territorial Gaston-Bourret, son parking et la voie express #1. C’est actuellement un no man’s land, coupé du littoral et du centre-ville pourtant si proches, qui marque la baie de la Grande Rade d’un aspect désertique, vide et fantôme... Une baie jusque là délaissée, alors que son panorama est la première image de Nouméa que perçoivent la plupart des visiteurs. Une baie ignorée alors qu’elle est adjacente à deux sources majeurs de l’économie néo-caledonienne: la Société Le Nickel et le Port Autonome de la Nouvelle Calédonie.
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Et si cela changeait? Quel serait l’impact sur l’Entrée Nord et ses environs immédiats? Sur Nouméa et ses habitants? Enfin, sur la Nouvelle-Calédonie?
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Nous proposons de developper une vision partagée pour l’Entrée Nord en tant que passerelle autant physique que symbolique: reliant le coeur de ville à la mer, les croisiéristes et touristes à la culture néo-calédonienne, et les populations nouméennes entre elles.
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Ces efforts seront menés par l’architecte urbaniste Aziza Chaouni, accompagnée de la SCET et de toutes les parties prenantes concernées par le projet.
            </p>
          </div>
          <div className='col no-pad m6 s12 offset-m1 sm-padding-top-25'>
            <div className='themes padding-bottom-50 padding-right-20 padding-left-20 flex justify-center flex-col align-items-center'>
              <h1 className='white-color center-align'>Thématiques</h1>
              <img
                src={require('../images/theme-immediat-m.svg')}
                alt='Usage immédiat du CHT Gaston-Bourret et de son parking: Prenez part à la première étape de la transformation de l’Entrée Nord !'
              />
              <img
                src={require('../images/theme-circulations-m.svg')}
                className='margin-top-10'
                alt='Circulations : Donnez votre avis sur notre proposition de reorganisation des flux véhicules, piétons, vélos, bus, néobus et petit train autour de l’Entrée Nord ! '
              />
              <img
                src={require('../images/theme-public-m.svg')}
                className='margin-top-10'
                alt='Espaces publics et espaces verts : Proposez des espaces publics et espaces verts qui auront la capacité d’améliorer votre qualité de vie !'
              />
              <img
                src={require('../images/theme-bati-m.svg')}
                className='margin-top-10'
                alt='Bâti : Partagez vos opinions au sujet des bâtiments neufs ou à réhabiliter que nous suggérons pour l’Entrée Nord !'
              />

            <a href='https://medium.com/entr%C3%A9e-nord-ville-de-noum%C3%A9a' className='header-item'>Workshops et expo</a>
            </div>
          </div>
        </div>

        <h1 className='center-align'>À PROPOS DE LA CONCERTATION</h1>

        <p className='padding-right-20 padding-left-20 margin-0 hide-on-med-and-up'>
          Votre participation peut influencer les futurs aménagements de votre ville, et en l'occurence la vision urbaine de l'entrée nord. Grâce à ce site web la concertation se déroulera d’août à octobre.
        </p>

        <p className='padding-top-20 padding-right-20 padding-left-20 margin-0 hide-on-med-and-up'>
          L'engagement civique est crucial. Vous pouvez donner votre avis sur l'avenir de votre ville durant des consultations publiques ou bien en utilisant ce site web initié par la Ville de Nouméa.
        </p>

        <p className='padding-20 margin-0 hide-on-med-and-up'>
          L’exposition aura lieu à la salle d’honneur de l’Hòtel de Ville de Nouméa le 30 octobre 2017 de 17:00 à 19:00, et du mardi 31 octobre au 2 novembre de 12:00 à 19:00. L’exposition aura lieu le 30 octobre 2017 de 17:00 à 19:00, et du mardi 31 octobre au 2 novembre de 12:00 à 19:00.
        </p>

        <img
          src={require(`../images/timeline-desktop.svg`)}
          className='hide-on-small-only padding-top-20 block margin-center object-fit-contain max-width-100-pct width-900'
          alt="Votre participation peut influencer les futurs aménagements de votre ville, et en l'occurence la vision urbaine de l'entrée nord. Grâce à ce site web la concertation se déroulera d’août à octobre. L'engagement civique est crucial. Vous pouvez donner votre avis sur l'avenir de votre ville durant des consultations publiques ou bien en utilisant ce site web initié par la Ville de Nouméa. Le calendrier de l'exposition sera bientôt affiché. Vous pourrez y laisser votre avis, qui sera immédiatement transmis au site web."
        />

        <img
          src={require(`../images/timeline-mobile.svg`)}
          className='hide-on-med-and-up block object-fit-contain width-100-pct padding-20'
          alt="L'engagement civique est crucial. Vous pouvez donner votre avis sur l'avenir de votre ville durant des consultations publiques ou bien en utilisant ce site web initié par la municipalité de Nouméa."
        />

        <div className='center-align padding-top-50'>
          <a href='https://medium.com/entr%C3%A9e-nord-ville-de-noum%C3%A9a' className='btn-link'>Info sur workshops et expo</a>
          <a href='/guide' className='btn'>Guide D'Utilisation</a>
        </div>

        <Footer />

        <header className='hide-on-med-and-up'>
          <a href='/' className='header-item width-25-pct'>Info</a>
          <a href='/guide' className='header-item width-50-pct'>Guide d’utilisation</a>
          <a href='https://medium.com/entr%C3%A9e-nord-ville-de-noum%C3%A9a' className='header-item'>Workshops et expo</a>
        </header>
      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const landing = document.querySelector('#landing');
  landing && render(<Landing/>, landing)
})
