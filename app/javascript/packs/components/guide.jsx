import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './_header'
import Footer from './_footer'
import Share from './_share'

export default class Guide extends Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <Share />

        <div className="line"></div>

        <h1 className='center-align margin-0'>Guide d’utilisation</h1>

        <p className='margin-center max-width-650 padding-25'>
          L'engagement civique est crucial. Vous pouvez donner votre avis sur l'avenir de votre ville durant des consultations publiques ou bien en utilisant ce site web initié par la Ville de Nouméa. Votre participation peut influencer les futurs aménagements de votre ville, et en l'occurence la vision urbaine de l'Entrée Nord.
        </p>

        <p className='margin-center max-width-650 padding-25'>
          Participez à la municipalité ou dans votre maison de quartier à l'exposition sur l'aménagement de l'Entrée Nord. L'exposition a été conçue pour être interactive, vous pourrez y donner votre avis en dessinant directement sur une carte. Cliquez ici pour le calendrier de l'exposition. Votre avis sera de suite envoyés au site web.
        </p>

        <img
          src={require(`../images/utilisation-desktop.svg`)}
          className='hide-on-small-only padding-top-20 block margin-center object-fit-contain max-width-100-pct width-600'
          alt="Utilisez le site web suivant pour donner votre opinion sur la vision urbaine de l'entrée nord, organisée en 4 thématiques. Les commentaires et avis sont analysés et représentés graphiquement afin de faciliter leur lecture et une meilleure prise de décision pour l'amélioration de Nouméa. Partagez ce site de concertation sur les réseaux sociaux Envoyez un message directement à l'architecte urbaniste"
        />

        <img
          src={require(`../images/utilisation-mobile.svg`)}
          className='hide-on-med-and-up block object-fit-contain width-100-pct padding-20'
          alt="Utilisez le site web suivant pour donner votre opinion sur la vision urbaine de l'entrée nord, organisée en 4 thématiques. Les commentaires et avis sont analysés et représentés graphiquement afin de faciliter leur lecture et une meilleure prise de décision pour l'amélioration de Nouméa. Partagez ce site de concertation sur les réseaux sociaux Envoyez un message directement à l'architecte urbaniste"
        />

        <div className='center-align padding-top-50'>
          <a href='/participez' className='btn'>Participez maintenant!</a>
        </div>

        <Footer />

        <header className='hide-on-med-and-up'>
          <a href='/' className='header-item width-25-pct'>Info</a>
          <a href='/guide' className='header-item width-50-pct'>Guide d’utilisation</a>
          <a href='/participez' className='header-item width-25-pct'>Participer</a>
        </header>
      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const guide = document.querySelector('#guide');
  guide && render(<Guide/>, guide)
})
