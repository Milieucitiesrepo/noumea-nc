import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return(
      <div>
        <div className='line'></div>

        <h4 className='center-align'>Avec le soutien</h4>

        <a href='http://www.noumeaport.nc'>
          <img
            src={require('../images/logo-panc.svg')}
            alt='Port Autonome'
            className='height-100 block margin-center'
          />
        </a>

        <div className='line'></div>

        <h4 className='center-align'>Partenaires</h4>

        <div className='flex justify-center padding-bottom-50 sm-flex-col align-items-center'>
          <a href='http://www.azizachaouniprojects.com/'>
            <img
              src={require(`../images/logo-acp.svg`)}
              className='height-80 margin-left-20 margin-right-20'
            />
          </a>
          <a href='https://www.scet.fr/'>
            <img
              src={require(`../images/logo-scet.png`)}
              className='height-80 margin-left-20 margin-right-20'
            />
          </a>
          <a href='https://milieu.io/'>
            <img
              src={require(`../images/logo-milieu.svg`)}
              className='height-80 margin-left-20 margin-right-20'
            />
          </a>
        </div>
      </div>
    )
  }
}
