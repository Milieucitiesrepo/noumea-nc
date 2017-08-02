import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q1-1', 'q1-2', 'q1-3', 'q1-4', 'q1-5', 'q1-6', 'q1-7', 'q1-8', 'q1-9', 'q1-10', 'q1-11']

export default class Usage extends Component {
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
    const commentQuestion = this.props.questions.find(question => question.question_number === 'q1-comment');
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
                  De part sa position privilégiée en plein centre-ville et sa dimension patrimoniale, la réutilisation immédiate du site de l’ancien CHT Gaston-Bourret permettra d’insuffler une nouvelle vie à l’entrée nord et d’amorcer sa vision urbaine future, sans avoir à enclencher des travaux d’envergure. L’intégration d’une grande diversité de programmes, ponctués d’espaces d’exposition et de production artistique contemporaines et alternatives, transformeront l’ancien complexe hospitalier en une destination dynamique et attrayante. La majorité des structures et mobilier déployés dans les espaces extérieurs, dont toute la végétation, sera conçue afin d’être réutilisée dans les phases suivantes du projet.
                </p>

                <p>
                  L’intégration d’une grande diversité de programmes, ponctués d’espaces d’exposition et de production artistique contemporaines et alternatives, transformeront l’ancien centre hospitalier territorial en une destination dynamique et attrayante. La majorité des structures et mobiliers déployés dans les espaces extérieurs, dont toutes les plantes, sera conçue afin d’être reutilisée dans les phases suivantes du projet.
                </p>

                <h3>1.1 Usage Immédiat de l'ancien complexe Gaston-Bourret</h3>

                <p>
                  Le site de l’ancien CHT Gaston-Bourret est composé de vingt-six bâtiments, dont trois sont voués à la démolition, et un, en préfabriqué, au démantèlement. Nous proposons que les bâtiments à haute valeur patrimoniale ne soient pas utilisés durant la phase temporaire, durant laquelle ils subiront une expertise à des fins de restauration. A l’opposé, les autres bâtiments recevront selon leur état des programmes adéquats.
                </p>

              </div>
            </div>

            <div className='questions'>
              <h4>Notez les differents programmes que nous proposons!</h4>

              <img
                className={`width-100-pct hide-on-large-only fixed-map ${this.state.showFixed ? '' : 'hide' }`}
                src={require(`../../images/q1-map-immediat-1.png`)}
                alt='Usage map'
              />

              <img
                ref='map'
                className='width-100-pct margin-bottom-25 hide-on-large-only'
                src={require(`../../images/q1-map-immediat-1.png`)}
                alt='Usage map'
              />

              {
                this.props.questions.map((question, i) => {
                  if(VALID_QUESTION_NUMBERS.includes(question.question_number)) {
                    return(
                      <div key={question.id}>
                        <div className='flex align-items-center padding-top-20 padding-bottom-20'>
                          <img src={question.url} className='height-15' />
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
                <a href='#' data-theme='utilisation' onClick={this.props.changeTheme} className='btn'>question suivante</a>
              </div>
            </div>
          </div>
          <div className='col s12 l6 relative hide-on-med-and-down'>
            <img
              className='map'
              src={require(`../../images/q1-map-immediat-1.png`)}
              alt='Usage map'
            />
          </div>
        </div>

      </div>
    )
  }
}
