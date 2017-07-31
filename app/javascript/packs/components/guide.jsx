import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './header'
import Footer from './footer'

export default class Guide extends Component {
  render() {
    return(
      <div className='container'>
        <Header />

        <h3 className='center-align margin-0'>Guide d’utilisation</h3>

        <p className='margin-center max-width-650 center-align padding-25'>
          Participez à la municipalité ou dans votre maison de quartier à l'exposition sur l'aménagement de l'entrée nord. L'exposition a été conçue pour être interactive, vous pourrez y donner votre avis en dessinant directement sur une carte.
        </p>

        <img
          src={require(`../images/utilisation-desktop.svg`)}
          className='padding-top-20 block margin-center object-fit-contain max-width-100-pct width-600 sm-padding-20'
        />

        <div className='center-align padding-top-50'>
          <a href='/participez' className='btn'>Participez maintenant!</a>
        </div>

        <Footer />

      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const guide = document.querySelector('#guide');
  guide && render(<Guide/>, guide)
})
