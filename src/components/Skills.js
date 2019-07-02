import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Skills = () => {
  const [options] = useState({
    options: {
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    }
  })
  useEffect(() => {}, [])
  return (
    <div>
      <div className='wrapper'>
        <div className='my-name'>
          <span className='line' />
          <h3>Skills & Technologies.</h3>
        </div>
        <div className='flex-wrapper skills'>
          {/* <div className='blend'>
            <h1>Skills & Technologies</h1>
          </div> */}
          {/* <OwlCarousel className='sliders' {...options.options}>
            <div className='item'>
              <img src='assets/skills/javascript.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/redux.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/react.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/htmlncss.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/node.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/python.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/php.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/vue.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/wordpress.png' alt='' />
            </div>
            <div className='item'>
              <img src='assets/skills/mongodb.png' alt='' />
            </div>
          </OwlCarousel> */}
          <OwlCarousel className='sliders' {...options.options}>
            <div className='item'>
              <h3>Javascript</h3>
            </div>
            <div className='item'>
              <h3>ReactJS</h3>
            </div>
            <div className='item'>
              <h3>VueJS</h3>
            </div>
            <div className='item'>
              <h3>Html / (S)CSS</h3>
            </div>
            <div className='item'>
              <h3>NodeJS</h3>
            </div>
            <div className='item'>
              <h3>Express</h3>
            </div>
            <div className='item'>
              <h3>Python</h3>
            </div>
            <div className='item'>
              <h3>Php</h3>
            </div>
            <div className='item'>
              <h3>Vuex</h3>
            </div>
            <div className='item'>
              <h3>Redux</h3>
            </div>
            <div className='item'>
              <h3>Mongodb</h3>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default Skills
