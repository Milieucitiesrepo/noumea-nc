import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q2-1', 'q2-2', 'q2-3', 'q2-4', 'q2-5', 'q2-6', 'q2-7', 'q2-8', 'q2-9', 'q2-10', 'q2-11', 'q2-12', 'q2-13', 'q2-14']

export default class Utilisation extends Component {
  constructor(props) {
    super(props);
    this.state = { mapTop: window.scrollY }

    window.addEventListener('scroll', e => {
      this.setState({ mapTop: window.scrollY })
    });
  }

  render() {
    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='info'>
              <div className='icons flex flex-col'>
                <img width='100%' src={require(`../../images/icon-immediat.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-bati-na.svg`)} />
              </div>
              <div className='content'>
                <h1 className='margin-top-0'>1-2 Utilisation Temporaire du Parking de L’anlien CHT Gaston-Bourret</h1>

                <p>
                  Coincé entre le mur de soutènement de l’ancien hôpital et la voie express 1, le parking Gaston-Bourret est peu utilisé. Son manque d’ombrage et de verdure ainsi que sa surface en asphalte qui capte la chaleur, le rendent peu hospitalier. Cependant, grâce à divers mobiliers urbains, à des auvents, à l’introduction de végétation et à l’impulse d’événements culturels ponctuels, le parking peut devenir très rapidement non seulement un espace publique à l’excellent confort thermique, mais aussi un lieu dynamique où diverses cultures urbaines peuvent de rencontrer et s’exprimer. Nous proposons de placer, de manière provisoire, le terminus de bus (réseau RAI et bus Karai) présentement localisé sur le site du Port Moselle, ainsi qu'un parking sur le terrain vague à l’ouest du parking de l’ancien CHT Gaston-Bourret.
                </p>

                <h3>Notez les differents programmes que nous proposons! Donnez nous votre avis sur chacun!</h3>

                <img
                  className='width-100-pct margin-bottom-25 hide-on-med-and-up'
                  style={{top: this.state.mapTop}}
                  src={require(`../../images/q2-map-immediat-2.png`)}
                  alt='Utilisation map'
                />

                {
                  this.props.questions.map((question, i) => {
                    if(VALID_QUESTION_NUMBERS.includes(question.question_number)) {
                      return(
                        <div className='question' key={question.id}>
                          <div className='flex align-items-center padding-top-20 padding-bottom-20'>
                            <img src={question.url} className='height-15' />
                            <h5 className='padding-left-15 bold margin-0' dangerouslySetInnerHTML={{__html: question.body}}></h5>
                          </div>
                          <input name={`user[answers_attributes][${i}][question_id]`} value={question.id} type='hidden' />
                          <input name={`user[answers_attributes][${i}][body]`} type='range' step={1} min={0} max={4} defaultValue={2} className='width-100-pct max-width-300' />
                        </div>
                      )
                    }
                  })
                }

                <div className='padding-top-25'>
                  <a href='#' data-theme='circulation' onClick={this.props.changeTheme} className='btn'>La prochaine question</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col s12 m6 relative hide-on-small-only'>
            <img
              ref='map'
              className='map'
              style={{top: this.state.mapTop}}
              src={require(`../../images/q2-map-immediat-2.png`)}
              alt='Utilisation map'
            />
          </div>
        </div>

      </div>
    )
  }
}
