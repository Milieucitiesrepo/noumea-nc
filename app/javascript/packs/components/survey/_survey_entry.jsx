import React, { Component } from 'react'

export default class SurveyEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 2 }
    this.handleChange = (e) => this._handleChange(e);
    this.handleRatingClick = (e) => this._handleRatingClick(e);
  }

  _handleRatingClick(e) {
    this.setState({ rating: parseInt(e.currentTarget.dataset.rating) });
  }

  _handleChange(e) {
    this.setState({ rating: e.currentTarget.value });
  }

  render() {
    const { question, i } = this.props;
    const { rating } = this.state;

    return(
      <div className='question' key={question.id}>
        <div className='flex align-items-center padding-top-20 padding-bottom-20'>
          <img src={question.url} className='height-15' />
          <h5 className='padding-left-15 bold margin-0' dangerouslySetInnerHTML={{__html: question.body}}></h5>
        </div>
        <div className='ratings'>
          <img src={require('../../images/hatewithpassion.svg')} onClick={this.handleRatingClick} data-rating='0' />
          <img src={require('../../images/dislike.svg')} onClick={this.handleRatingClick} data-rating='1' />
          <img src={require('../../images/indifferent.svg')} onClick={this.handleRatingClick} data-rating='2' />
          <img src={require('../../images/like.svg')} onClick={this.handleRatingClick} data-rating='3' />
          <img src={require('../../images/loveit.svg')} onClick={this.handleRatingClick} data-rating='4' />
        </div>
        <input name={`user[answers_attributes][${i}][question_id]`} value={question.id} type='hidden' />
        <input name={`user[answers_attributes][${i}][body]`} type='range' step={1} min={0} max={4} value={rating} onChange={this.handleChange} className='width-100-pct max-width-400' />
      </div>
    )
  }
}
