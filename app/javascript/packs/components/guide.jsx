import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './header'

export default class Guide extends Component {
  render() {
    return(
      <div className='container'>
        <Header />
        
      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const guide = document.querySelector('#guide');
  guide && render(<Guide/>, guide)
})
