import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q3-1', 'q3-2', 'q3-3', 'q3-4', 'q3-5', 'q3-6', 'q3-7', 'q3-8', 'q3-9', 'q3-10']

export default class Circulation extends Component {
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
                <img width='70%' src={require(`../../images/icon-immediat-na.svg`)} />
                <img width='100%' className='margin-top-15' src={require(`../../images/icon-circulations.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-bati-na.svg`)} />
              </div>
              <div className='content'>
                <h1 className='margin-top-0'>Thématique 2 - Circulations</h1>

                <p>
                  La voie express 1 et la voie camion SLN longeant le front de mer contribuent à couper l’entrée nord u littoral et de la Grande Rade. Cette coupure est accentuée par le fait que le complexe hospitalier est surélevé de 5 m par rapport au niveau de l’entrée nord, ses murs de soutènement au est et ouest, empêchant tout accès piéton. Afin de remédier à l’isolement de l’entrée nord nous avons proposé trois strategies principales:
                </p>

                <ul>
                  <li>Le déplacement de la voie express #1 vers le périmètre nord de l’ancien complexe hospitalier.</li>
                  <li>Le déplacement de la voie camion SLN sur la voie express #1 selon un horaire prédéfini (hors heure de pointe)</li>
                  <li>La création d’une large passerelle végétalisée qui mènerait de l’ancien complexe hospitalier vers le nouveau front de mer et son parc botanique.</li>
                  <li>Le renforcement de l’axe piéton nord-sud menant de la place des Cocotiers vers le front de mer.</li>
                </ul>

                <h3>Notez les differents modes de circulations que nous proposons + donnez nous votre avis sur chacun!</h3>

                <img
                  className='width-100-pct margin-bottom-25 hide-on-med-and-up'
                  style={{top: this.state.mapTop}}
                  src={require(`../../images/q3-map-circulations.png`)}
                  alt='Circulations map'
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
                  <a href='#' data-theme='espace' onClick={this.props.changeTheme} className='btn'>La prochaine question</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col s12 m6 relative hide-on-small-only'>
            <img
              ref='map'
              className='map'
              style={{top: this.state.mapTop}}
              src={require(`../../images/q3-map-circulations.png`)}
              alt='Circulations map'
            />
          </div>
        </div>

      </div>
    )
  }
}
