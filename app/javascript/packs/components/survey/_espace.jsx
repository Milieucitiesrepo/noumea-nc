import React, { Component } from 'react'
import SurveyEntry from './_survey_entry'
const VALID_QUESTION_NUMBERS = ['q4-1', 'q4-2', 'q4-3', 'q4-4', 'q4-5', 'q4-6', 'q4-7', 'q4-8', 'q4-9', 'q4-10', 'q4-11', 'q4-12', 'q4-13']

export default class Espace extends Component {
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
    const commentQuestion = this.props.questions.find(question => question.question_number === 'q4-comment');
    const commentIndex = this.props.questions.indexOf(commentQuestion);

    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='row'>
          <div className='col s12 l6'>
            <div className='info'>
              <div className='icons flex flex-col'>
                <img width='70%' src={require(`../../images/icon-immediat-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
                <img width='100%' className='margin-top-15' src={require(`../../images/icon-public.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-bati-na.svg`)} />

              </div>
              <div className='content'>
                <h2 className='margin-top-0'>Thématique 3 - espaces publics/ espaces verts</h2>

                <p>
                  Notre vision pour l’Entrée Nord vise à valoriser le foncier en le désenclavant, en l’ouvrant non seulement vers le littoral mais aussi vers les quatre espaces publics clefs, desquels elle deviendra le cœur battant.
                </p>

                <p>
                  En effet, l’Entrée Nord se trouve à la croisée des quatre espaces publics majeurs du centre-ville: un existant - la Place des Cocotiers, un en cours de développement - le Quai Ferry, et deux nouveaux espaces verts que nous souhaitons créer:
                </p>

                <ol>
                  <li>Le parc en terrasse SLN, qui comprendra des espaces de détente, une voie cyclable et des allées piétonnes.</li>
                  <li>Le parc linéaire avenue James Cook, qui comprendra la gare maritime des îles et un nouveau musée maritime avec pavillons flottants.</li>
                </ol>

                <p>
                  Nous proposons que l’Entrée Nord devienne le fil conducteur reliant ces quatre espacespublics. Pour ce faire, nous souhaitons lui donner une identité unique: celle d’un jardin botanique vivant représentant les diverses essences végétales et agricoles caractéristiques des populations qui les ont apportées avec elles au gré de leurs migrations vers la Nouvelle Calédonie, et qui contribuent aujourd'hui à sa richesse culturelle.
                </p>
              </div>
            </div>
            <div className="questions">
              <h4>3.1 Que pensez-vous de l’emplacement et des identités de chaque espace vert/espace public que nous proposons?</h4>

              <img
                className={`width-100-pct hide-on-large-only fixed-map ${this.state.showFixed ? '' : 'hide' }`}
                src={require('../../images/q4-map-public.png')}
                alt='Espace map'
              />

              <img
                ref='map'
                className='width-100-pct margin-bottom-25 hide-on-large-only'
                src={require('../../images/q4-map-public.png')}
                alt='Espace map'
              />

              {
                this.props.questions.map((question, i) => {
                  if(VALID_QUESTION_NUMBERS.includes(question.question_number)) {
                    return(
                      <SurveyEntry question={question} i={i} key={question.id} />
                    )
                  }
                })
              }

              {
                this.props.questions.length > 0 &&
                <div className='padding-top-20 max-width-400'>
                  <h5 className='padding-bottom-20 bold margin-0'>Commentaires</h5>
                  <input name={`user[answers_attributes][${commentIndex}][question_id]`} value={commentQuestion.id} type='hidden' />
                  <textarea name={`user[answers_attributes][${commentIndex}][body]`} />
                </div>
              }

              <div className='padding-top-25'>
                <a href='#' data-theme='bati' onClick={this.props.changeTheme} className='btn'>question suivante</a>
              </div>
            </div>
          </div>
          <div className='col s12 l6 relative hide-on-med-and-down'>
            <img
              className='map'
              src={require('../../images/q4-map-public.png')}
              alt='Espace map'
            />
          </div>
        </div>

      </div>
    )
  }
}
