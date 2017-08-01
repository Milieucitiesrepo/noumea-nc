import React, { Component } from 'react'
const VALID_QUESTION_NUMBERS = ['q1-1', 'q1-2', 'q1-3', 'q1-4', 'q1-5', 'q1-6', 'q1-7', 'q1-8', 'q1-9', 'q1-10', 'q1-11']

export default class Usage extends Component {
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
                <h1 className='margin-top-0'>1-1 Usage Immédiat de l'ancien complexe Gaston-Bourret</h1>

                <p>
                  L’ancien site de l’hôpital Gaston-Bourret est composé de 26 bâtiments, dont trois sont voués à la démolition, et un, en préfabriqué, au démantèlement. Nous proposons que les bâtiments à haute valeur patrimoniale ne soit pas utilisés durant la phase temporaire, durant laquelle ils subiront une expertise à des fins de restauration. A l’opposé, les autres bâtiments recevront selon leur état des programmes adéquats.
                </p>

                <h3>Notez les differents programmes que nous proposons!</h3>

                <img
                  className='width-100-pct margin-bottom-25 hide-on-med-and-up'
                  style={{top: this.state.mapTop}}
                  src={require(`../../images/q1-map-immediat-1.png`)}
                  alt='Usage map'
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
                  <a href='#' data-theme='utilisation' onClick={this.props.changeTheme} className='btn'>La prochaine question</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col s12 m6 relative hide-on-small-only'>
            <img
              ref='map'
              className='map'
              style={{top: this.state.mapTop}}
              src={require(`../../images/q1-map-immediat-1.png`)}
              alt='Usage map'
            />
          </div>
        </div>

      </div>
    )
  }
}
