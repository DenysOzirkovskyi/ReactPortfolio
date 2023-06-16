import { useEffect, useState } from 'react'
import {

  faCss3,
  faGitAlt,
  faHtml5,
  faShopify,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Photo from "../../assets/images/Photo.jpg"

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
console.log(entry)
if(entry.isIntersecting){
  entry.target.classList.add('show');
}

  });
});


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page"id='containerAbotPage'>
       

        <div className="hidden" id='text-zone2'>
       

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            
          </h1>
         
          <p>
          Hi, I'm Denis, I'm a developer from Ukraine .
          </p>
          <p align="LEFT">
          I am a student of Lviv Polytechnic National University .
          </p>
          <p>
          And I am enjoyed to create websites and would help you with pleasure !
          </p>
        </div>

        <div className='myImage'>
       </div>

       <div className="text-zone3 hidden">
       <h1>
         <AnimatedLetters
           letterClass={letterClass}
           strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
           idx={16}
         />
         
       </h1>
       <p>
           HTML, CSS, SCSS ,
          </p>
          <p align="LEFT">
            JS, react js, Shopify liquid, Git
          </p>
          <p>
           Photoshop, Figma
          </p>
       </div>
       

      
    
       
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faShopify} color="#7AA951" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
