import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q5-1', 'q5-2', 'q5-3', 'q5-4', 'q5-5', 'q5-6', 'q5-7', 'q5-8', 'q5-9']

export default class Bati extends Component {
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
    const commentQuestion = this.props.questions.find(question => question.question_number === 'q5-comment');
    const commentIndex = this.props.questions.indexOf(commentQuestion);

    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='row'>
          <div className='col s12 l6'>
            <div className='info'>
              <div className='icons flex flex-col'>
                <img width='70%' src={require(`../../images/icon-immediat-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
                <img width='100%' className='margin-top-15' src={require(`../../images/icon-bati.svg`)} />

              </div>
              <div className='content'>
                <h2 className='margin-top-0'>Thématique 4 - Bâti</h2>

                <p>
                  Une fois l’entrée nord re-aménagée, de manière temporaire puis de manière définitive, la partie nord du centre-ville s’en verra totalement transformée et deviendra un lieu de résidence et de loisir prisé. Nous proposons que l’ancien CHT Gaston Bourret devienne une cité de l’innovations et de la création, couplée à des bureaux et à des logements. Les batîments historiques de l'ancien seront sauvegardés et réhabilités. Les ilots urbains entre la quai Ferry et l’ancien CHT seront restructurés afin de promouvoir une diversité programmatique et le retrait des parkings en surface.
                </p>

              </div>
            </div>
            <div className="questions">
              <h4>Que pensez vous de la programmation des espaces bâtits que nous proposons?</h4>

              <img
                className={`width-100-pct hide-on-large-only fixed-map ${this.state.showFixed ? '' : 'hide' }`}
                src={require('../../images/q5-map-bati.png')}
                alt='Bati map'
              />

              <img
                ref='map'
                className='width-100-pct margin-bottom-25 hide-on-large-only'
                src={require('../../images/q5-map-bati.png')}
                alt='Bati map'
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
                <a href='#' data-theme='demographic' onClick={this.props.changeTheme} className='btn'>VALIDER</a>
              </div>
            </div>
          </div>
          <div className='col s12 l6 relative hide-on-med-and-down'>
            <img
              className='map'
              src={require('../../images/q5-map-bati.png')}
              alt='Bati map'
            />
          </div>
        </div>

      </div>
    )
  }
}
