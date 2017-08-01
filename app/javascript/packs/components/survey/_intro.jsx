import React, { Component } from 'react'

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='info'>
          <div className='icons flex flex-col'>
            <img width='100%' src={require(`../../images/icon-immediat.svg`)} />
            <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
            <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
            <img width='70%' className='margin-top-15' src={require(`../../images/icon-bati-na.svg`)} />
          </div>
          <div className='content'>
            <h1 className='margin-top-0'>Thématique 1 - Usage Immédiat</h1>

            <p>
              De part sa position privilégié en plein centre ville et sa dimension patrimoniale, la réutilisation immédiate de l’ancien site de l’hôpital Gaston-Bourret permettra d’insuffler une nouvelle vie à l’entrée nord et d’amorcer sa vision urbaine future, sans avoir à enclencher des travaux d’envergure.
            </p>

            <p>
              L’intégration d’une grande diversité de programmes, ponctués d’espaces d’exposition et de production artistique contemporaines et alternatives, transformeront l’ancien centre hospitalier territorial en une destination dynamique et attrayante. La majorité des structures et mobiliers déployés dans les espaces extérieurs, dont toutes les plantes, sera conçue afin d’être reutilisée dans les phases suivantes du projet.
            </p>

            <div className='padding-top-25'>
              <a href='#' data-theme='usage' onClick={this.props.changeTheme} className='btn'>Commencer</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
