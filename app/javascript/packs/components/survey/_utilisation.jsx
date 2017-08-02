import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q2-1', 'q2-2', 'q2-3', 'q2-4', 'q2-5', 'q2-6', 'q2-7', 'q2-8', 'q2-9', 'q2-10', 'q2-11', 'q2-12', 'q2-13', 'q2-14']

export default class Utilisation extends Component {
  constructor(props) {
    super(props);
    this.state = { showFixed: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if(this.refs.map.getBoundingClientRect().top < 0) {
        this.setState({ showFixed: true });
      } else {
        this.setState({ showFixed: false });
      }
    })
  }

  render() {
    const commentQuestion = this.props.questions.find(question => question.question_number === 'q2-comment');
    const commentIndex = this.props.questions.indexOf(commentQuestion);

    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='row'>
          <div className='col s12 l6'>
            <div className='info'>
              <div className='icons flex flex-col'>
                <img width='100%' src={require(`../../images/icon-immediat.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-bati-na.svg`)} />
              </div>
              <div className='content'>
                <h2 className='margin-top-0'>Thématique 1 - Usage Immédiat</h2>

                <p>
                  De part sa position privilégié en plein centre ville et sa dimension patrimoniale, la réutilisation immédiate de l’ancien site de l’hôpital Gaston-Bourret permettra d’insuffler une nouvelle vie à l’entrée nord et d’amorcer sa vision urbaine future, sans avoir à enclencher des travaux d’envergure.
                </p>

                <p>
                  L’intégration d’une grande diversité de programmes, ponctués d’espaces d’exposition et de production artistique contemporaines et alternatives, transformeront l’ancien centre hospitalier territorial en une destination dynamique et attrayante. La majorité des structures et mobiliers déployés dans les espaces extérieurs, dont toutes les plantes, sera conçue afin d’être reutilisée dans les phases suivantes du projet.
                </p>

                <h3>1.2 Usage temporaire du parking et du terrain vague adjacent</h3>

                <p>
                  Enclavé entre le mur de soutènement de l’ancien hôpital et la voie express 1, le parking Gaston-Bourret est peu utilisé aujourd’hui. Le manque d’ombrage et de verdure ainsi que la surface en asphalte qui capte la chaleur, le rendent peu hospitalier. Cependant, grâce à divers mobiliers urbains, à des auvents, à l’introduction de végétation et à l’impulsion d’événements culturels ponctuels, le parking peut devenir très rapidement non seulement un espace public à l’excellent confort thermique, mais aussi un lieu dynamique où diverses cultures urbaines peuvent se rencontrer et s’exprimer. Nous proposons de placer, de manière provisoire, le terminus de bus (réseau RAÏ et Karuia) actuellement sur le site du Port Moselle, sur le terrain vague à l’ouest du parking de l’ancien CHT Gaston-Bourret. Le parking de bus pour croisièristes temporaire sera quant à lui placé juste au nord de la voie express 1.
                </p>
              </div>
            </div>

            <div className='questions'>
              <h4>Notez les differents programmes que nous proposons! Donnez nous votre avis sur chacun!</h4>

              <img
                className={`width-100-pct hide-on-large-only fixed-map ${this.state.showFixed ? '' : 'hide' }`}
                src={require(`../../images/q2-map-immediat-2.png`)}
                alt='Utilisation map'
              />

              <img
                ref='map'
                className='width-100-pct margin-bottom-25 hide-on-large-only'
                src={require(`../../images/q2-map-immediat-2.png`)}
                alt='Utilisation map'
              />

              {
                this.props.questions.map((question, i) => {
                  if(VALID_QUESTION_NUMBERS.includes(question.question_number)) {
                    return(
                      <div className='question' key={question.id}>
                        <div className='flex align-items-center padding-top-20 padding-bottom-20'>
                          <img src={question.url} className='height-15 scale' />
                          <h5 className='padding-left-15 bold margin-0' dangerouslySetInnerHTML={{__html: question.body}}></h5>
                        </div>
                        <div className='ratings'>
                          <img src={require('../../images/hatewithpassion.svg')} />
                          <img src={require('../../images/dislike.svg')} />
                          <img src={require('../../images/indifferent.svg')} />
                          <img src={require('../../images/like.svg')} />
                          <img src={require('../../images/loveit.svg')} />
                        </div>
                        <input name={`user[answers_attributes][${i}][question_id]`} value={question.id} type='hidden' />
                        <input name={`user[answers_attributes][${i}][body]`} type='range' step={1} min={0} max={4} defaultValue={2} className='width-100-pct max-width-400' />
                      </div>
                    )
                  }
                })
              }

              {
                this.props.questions.length > 0 &&
                <div className='padding-top-20 max-width-400'>
                  <h5 className='padding-bottom-20 bold margin-0'>Comment</h5>
                  <input name={`user[answers_attributes][${commentIndex}][question_id]`} value={commentQuestion.id} type='hidden' />
                  <textarea name={`user[answers_attributes][${commentIndex}][body]`} />
                </div>
              }

              <div className='padding-top-25'>
                <a href='#' data-theme='circulation' onClick={this.props.changeTheme} className='btn'>question suivante</a>
              </div>
            </div>
          </div>
          <div className='col s12 l6 relative hide-on-med-and-down'>
            <img
              className='map'
              src={require(`../../images/q2-map-immediat-2.png`)}
              alt='Utilisation map'
            />
          </div>
        </div>

      </div>
    )
  }
}
