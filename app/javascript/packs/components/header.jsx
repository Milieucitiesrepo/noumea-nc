import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Header extends Component {
  render() {
    return(
      <div>
        <header className='hide-on-small-only'>
          <a href='/' className='header-item'>Info</a>
          <a href='/guide' className='header-item'>Guide D'Utilisation</a>
          <a href='/participez' className='header-item'>Partcipez</a>
        </header>

        <a href='https://www.noumea.nc' className='block margin-bottom-25 margin-top-25'>
          <img
            src={require('../images/logo-noumea-m.jpg')}
            alt='Ville De Noumea'
            className='height-80 block margin-center object-fit-contain'
          />
        </a>

        <h3 className='center-align margin-0'>ENTRÉE NORD</h3>

        <p className='max-width-400 margin-center center-align padding-25'>
          Un projet collaboratif de concertation citoyenne pour la nouvelle entrée nord du centre-ville de Nouméa
        </p>
      </div>
    )
  }
}
