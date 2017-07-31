import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './header'

export default class Landing extends Component {
  render() {
    return(
      <div className='container'>
        <Header />

        <a href='https://www.noumea.nc' className='block margin-bottom-25 margin-top-25'>
          <img
            src={require('../images/logo-noumea-m.jpg')}
            alt='Ville De Noumea'
            className='height-80 block margin-center object-fit-contain'
          />
        </a>
        
        <h3 className='center-align margin-0'>ENTRÉE NORD</h3>

        <p className='max-width-400 margin-center center-align padding-25'>
          Un projet collaboratif de concertation citoyenne pour la nouvelle entrée nord du centre-ville de Nouméa
        </p>

        <div className='flex justify-center video-wrapper'>
          <iframe src='https://www.youtube.com/embed/irNSpO3uNl0?rel=0&amp;controls=0&amp;showinfo=0' frameBorder='0' allowFullScreen></iframe>
        </div>

        <div className='row padding-top-50'>
          <div className='col no-pad m4 s12 offset-m1'>
            <h3 className='center-align padding-bottom-10 max-width-475 margin-center'>VISION POUR L'ENTRÉE NORD</h3>
            <h5 className='center-align max-width-475 margin-center'>Proposition de scénario d'aménagement</h5>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              L’entrée nord du centre ville de Nouméa est une zone caractérisée par l'ancien Centre Hospitalier Territorial Gaston-Bourret, son parking et la voie express #1. C’est actuellement un no man’s land, coupé du littoral et du centre ville pourtant si proches, qui marque la baie de la Grande Rade d'un aspect désertique, vide et fantôme... Une baie jusque là délaissée, alors que son panorama est la première image de Nouméa que perçoivent la plupart des visiteurs. Une baie ignorée alors qu’elle est adjacente à deux sources majeurs de l’économie néo-caledonienne: la Société Le Nickel et le Port Autonome de la Nouvelle Calédonie.
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Et si cela changeait? Quel serait l'impact sur l'entrée nord et ses environs immédiats? Sur Nouméa et ses habitants? Enfin, sur la Nouvelle-Calédonie?
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Nous proposons de developper une vision partagée pour l’entrée nord en tant que passerelle autant physique que symbolique: reliant le coeur de ville à la mer, les croisiéristes et touristes à la culture néo-calédonienne, et les populations nouméennes entre elles.
            </p>

            <p className='max-width-475 margin-center padding-top-20 sm-padding-left-20 sm-padding-right-20'>
              Ces efforts seront menés par l’architecte urbaniste Aziza Chaouni, accompagnée de la SCET et de toutes les parties prenantes concernées par le projet.
            </p>
          </div>
          <div className='col no-pad m6 s12 offset-m1 sm-padding-top-25'>
            <div className='themes padding-20 flex justify-center flex-col'>
              <h4 className='white-color center-align'>Thématiques</h4>
              <img
                src={require('../images/theme-immediat-m.svg')}
                alt='Usage immédiat du CHT Gaston-Bourret et de son parking: Prenez part à la première étape de la transformation de l’entrée nord !'
              />
              <img
                src={require('../images/theme-circulations-m.svg')}
                alt='Circulations: Donnez votre avis sur notre proposition de reorganisation des flux véhicules, piétons, bicyclettes, bus, néobus et petit train autour de l’entrée nord ! '
              />
              <img
                src={require('../images/theme-public-m.svg')}
                alt='Espaces publics et espaces verts: Proposez des espaces publics et espaces verts qui auront la capacité d’améliorer votre qualité de vie !'
              />
              <img
                src={require('../images/theme-bati-m.svg')}
                alt='Bâti: Partagez vos opinions au sujet des bâtiments neufs ou à rénover que nous suggérons pour l’entrée nord ! '
              />
            </div>
          </div>
        </div>

        <h3 className='center-align'>À propos du projet de concertation citoyenne</h3>

        <img
          src={require(`../images/timeline-desktop.svg`)}
          className='padding-top-20 block margin-center object-fit-contain max-width-100-pct width-600 sm-padding-20'
          alt='L'engagement civique est crucial. Vous pouvez donner votre avis sur l'avenir de votre ville durant des consultations publiques ou bien en utilisant ce site web initié par la municipalité de Nouméa.'
        />

        <div className='center-align padding-top-50'>
          <a href='/guide' className='btn'>Guide D'Utilisation</a>
        </div>


        <div className='line'></div>

        <h4 className='center-align'>Avec le soutien</h4>



        <a href='http://www.noumeaport.nc'>
          <img
            src={require('../images/logo-panc.svg')}
            alt='Port Autonome'
            className='height-100 block margin-center'
          />
        </a>

        <div className='line'></div>

        <h4 className='center-align'>Les partenaires</h4>

        <div className='flex justify-center padding-bottom-50 sm-flex-col align-items-center'>
          <a href='http://www.azizachaouniprojects.com/'>
            <img
              src={require(`../images/logo-acp.svg`)}
              className='height-60 margin-left-20 margin-right-20'
            />
          </a>
          <a href='http://www.caissedesdepots.fr/'>
            <img
              src={require(`../images/logo-scet.png`)}
              className='height-60 margin-left-20 margin-right-20'
            />
          </a>
          <a href='https://milieu.io/'>
            <img
              src={require(`../images/logo-milieu.svg`)}
              className='height-60 margin-left-20 margin-right-20'
            />
          </a>
        </div>

      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const landing = document.querySelector('#landing');
  landing && render(<Landing/>, landing)
})
