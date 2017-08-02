import React, { Component } from 'react'

export default class Share extends Component {
  render() {
    const url = encodeURIComponent(location.origin);

    return(
      <div className='share-social'>
        <h6 className='bold margin-0'>Partager</h6>
        <a href={`https://twitter.com/intent/tweet?url=${url}`} className='icon'>
          <img src={require('../images/share-twt.svg')} alt='Share Twitter'/>
        </a>
        <h6 className='bold margin-0'>Tweeter</h6>
        <a href={`http://www.facebook.com/sharer/sharer.php?u=${url}`} className='icon'>
          <img src={require('../images/share-fb.svg')} alt='Share Facebook'/>
        </a>
        <h6 className='bold margin-0'>Envoyer à architecte urbaniste</h6>
        <a href='mailto:ac@azizachaouniprojects.com' className='icon scale'>
          <img src={require('../images/email-message-planner.svg')} alt='Email Noumea'/>
        </a>
      </div>
    )
  }
}
