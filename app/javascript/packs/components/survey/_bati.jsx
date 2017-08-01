import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q5-1', 'q5-2', 'q5-3', 'q5-4', 'q5-5', 'q5-6', 'q5-7', 'q5-8', 'q5-9']

export default class Bati extends Component {
  constructor(props) {
    super(props);
    this.state = { mapTop: window.scrollY }

    window.addEventListener('scroll', e => {
      this.setState({ mapTop: window.scrollY })
    });
  }

  render() {
    const commentQuestion = this.props.questions.find(question => question.question_number === 'q5-comment');
    const commentIndex = this.props.questions.indexOf(commentQuestion);

    return(
      <div className={this.props.hide ? 'hide' : '' }>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='info'>
              <div className='icons flex flex-col'>
                <img width='70%' src={require(`../../images/icon-immediat-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-circulations-na.svg`)} />
                <img width='70%' className='margin-top-15' src={require(`../../images/icon-public-na.svg`)} />
                <img width='100%' className='margin-top-15' src={require(`../../images/icon-bati.svg`)} />

              </div>
              <div className='content'>
                <h1 className='margin-top-0'>Thématique 4 - Bâti</h1>

                <p>
                  Une fois l’entrée nord re-aménagée, de manière temporaire puis de manière définitive, la partie nord du centre ville s’en verra totalement transformée et deviendra un lieu de residence et de loisir prisé. Donc, l’aménagement des enveloppes et des programmations du bâtit doit être calibré avec finesse afin de mettre en valeur et rehausser les espaces publiques et les espaces verts proposés. Le bâtit doit aussi contribuer à établir une nouvelle identité de la ville de Nouméa, dont la facade avant et le skyline sont actuellement dominés par la tour Beef. Enfin, le bâtit doit être pensé de manière bioclimatique afin qu’il contribue au confort thermique autant de ses alentours que de ses intérieurs, en privilégiant les techniques de ventilation et de déshumidication passives.
                </p>

                <p>
                  Ainsi, nous avons proposé des bâtiments nouveaux ainsi que des bâtiments réhabilités.
                </p>

                <h3>Que pensez vous de la programmation des espaces bâtits que nous proposons?</h3>

                <img
                  className='width-100-pct margin-bottom-25 hide-on-med-and-up'
                  style={{top: this.state.mapTop}}
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
                          <input name={`user[answers_attributes][${i}][question_id]`} value={question.id} type='hidden' />
                          <input name={`user[answers_attributes][${i}][body]`} type='range' step={1} min={0} max={4} defaultValue={2} className='width-100-pct max-width-300' />
                        </div>
                      )
                    }
                  })
                }

                {
                  this.props.questions.length > 0 &&
                  <div className='padding-top-20 max-width-300'>
                    <h5 className='padding-bottom-20 bold margin-0'>Comment</h5>
                    <input name={`user[answers_attributes][${commentIndex}][question_id]`} value={commentQuestion.id} type='hidden' />
                    <textarea name={`user[answers_attributes][${commentIndex}][body]`} />
                  </div>
                }

                <div className='padding-top-25'>
                  <a href='#' data-theme='demographic' onClick={this.props.changeTheme} className='btn'>Done</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col s12 m6 relative hide-on-small-only'>
            <img
              ref='map'
              className='map'
              style={{top: this.state.mapTop}}
              src={require('../../images/q5-map-bati.png')}
              alt='Bati map'
            />
          </div>
        </div>

      </div>
    )
  }
}
