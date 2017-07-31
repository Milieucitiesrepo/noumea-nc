import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './header'
import Footer from './footer'

export default class Guide extends Component {
  render() {
    return(
      <div className='container'>
        <Header />

        <div className="line"></div>

        <h3 className='center-align margin-0'>Guide d’utilisation</h3>

        <p className='margin-center max-width-650 center-align padding-25'>
          Votre participation peut influencer les futurs aménagements de votre ville, et en l’occurence la vision urbaine de l’entrée nord. La période de concertation grâce à ce site web se déroulera du 31 Juillet à fin Octobre.
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
