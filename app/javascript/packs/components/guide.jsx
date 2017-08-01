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

        <p className='margin-center max-width-650 center-align padding-25'>
          Votre participation peut influencer les futurs aménagements de votre ville, et en l’occurence la vision urbaine de l’entrée nord. Grâce à ce site web la concertation se déroulera d’août à octobre.
        </p>

        <img
          src={require(`../images/utilisation-desktop.svg`)}
          className='hide-on-small-only padding-top-20 block margin-center object-fit-contain max-width-100-pct width-600'
        />

        <img
          src={require(`../images/utilisation-mobile.svg`)}
          className='hide-on-med-and-up block object-fit-contain width-100-pct padding-20'
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
