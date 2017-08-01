import React, { Component } from 'react'
import { render } from 'react-dom'
import SurveyIntro from './_intro'
import SurveyUsage from './_usage'
import SurveyUtilisation from './_utilisation'
import SurveyCirculation from './_circulation'
import SurveyEspace from './_espace'
import SurveyBati from './_bati'
import SurveyDemographic from './_demographic'
import 'whatwg-fetch'

export default class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'intro', questions: [] };
    this.changeTheme = (theme) => this._changeTheme(theme);
    this.handleSubmit = (e) => this._handleSubmit(e);
  }

  componentDidMount() {
    fetch('/questions.json')
    .then(response => response.json())
    .then(questions => this.setState({ questions }))
    .catch(err => console.error('Failed to get questions: ', err))
  }

  _changeTheme(e) {
    e.preventDefault();
    this.setState({ theme: e.currentTarget.dataset.theme });
    window.scrollTo(0, 0);
  }

  _handleSubmit(e) {
    e.preventDefault();

    fetch('/users', {
      method: 'POST',
      body: new FormData(this.refs.form)
    }).then(() => {
      alert('Thank you for completing the survey!');
      Turbolinks.visit('/');
    })
  }

  render() {
    const { questions, theme } = this.state;

    return(
      <div>
        <header className='hide-on-small-only padding-bottom-25'>
          <a href='/' className='header-item'>Info</a>
          <a href='/guide' className='header-item'>Guide D'Utilisation</a>
          <a href='/participez' className='header-item'>Partcipez</a>
        </header>

        <form ref='form'>
          <SurveyIntro changeTheme={this.changeTheme} hide={theme !== 'intro'} />
          <SurveyUsage changeTheme={this.changeTheme} questions={questions} hide={theme !== 'usage'} />
          <SurveyUtilisation changeTheme={this.changeTheme} questions={questions} hide={theme !== 'utilisation'} />
          <SurveyCirculation changeTheme={this.changeTheme} questions={questions} hide={theme !== 'circulation'} />
          <SurveyEspace changeTheme={this.changeTheme} questions={questions} hide={theme !== 'espace'} />
          <SurveyBati changeTheme={this.changeTheme} questions={questions} hide={theme !== 'bati'} />
          <SurveyDemographic changeTheme={this.changeTheme} onSubmit={this.handleSubmit} questions={questions} hide={theme !== 'demographic'} />
        </form>

      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const participez = document.querySelector('#participez');
  participez && render(<Survey/>, participez)
})
