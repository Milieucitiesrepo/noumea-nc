import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Landing extends Component {
  render() {
    return(
      <div className='container'>
        <header>
          <a href='#' className='header-item'>Info</a>
          <a href='#' className='header-item'>Guide D'Utilisation</a>
          <a href='#' className='header-item'>Partcipez</a>
        </header>

        <div className='logos'>
          <a href='https://www.noumea.nc'>
            <img src={require('../images/logo-noumea-m.jpg')} alt='Ville De Noumea' />
          </a>
          <a href='http://www.province-sud.nc/'>
            <img src={require('../images/logo-provincesud.png')} alt='Province Sud' />
          </a>
          <a href='https://gouv.nc/'>
            <img src={require('../images/logo-nc.png')} alt='Nouvelle Caledonie' />
          </a>
        </div>

        <h4 className='center-align'>ENTRÉE NORD</h4>

        <p className='max-width-400 margin-center center-align padding-25'>
          Un projet collaboratif de concertation citoyenne pour la nouvelle entrée nord du centre-ville de Nouméa
        </p>

        <div className='flex justify-center'>
          <iframe className='max-width-600 width-100-pct height-400 padding-20' src='https://www.youtube.com/embed/irNSpO3uNl0?rel=0&amp;controls=0&amp;showinfo=0' frameBorder='0' allowFullScreen></iframe>
        </div>

      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Landing />,
    document.body.appendChild(document.createElement('div')),
  )
})
