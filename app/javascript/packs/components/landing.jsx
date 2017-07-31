import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Landing extends Component {
  render() {
    return(
      <div className='container'>
        <h1>Woirking?</h1>
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
