import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Header extends Component {
  render() {
    return(
      <header>
        <a href='/' className='header-item'>Info</a>
        <a href='/guide' className='header-item'>Guide D'Utilisation</a>
        <a href='/participez' className='header-item'>Partcipez</a>
      </header>
    )
  }
}
