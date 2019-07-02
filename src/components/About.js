import React from 'react'

const About = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='my-name'>
          <span className='line' />
          <h3>A little about me</h3>
        </div>
        <div className='flex-wrapper about'>
          <div className='blend'>
            <h1>About Me</h1>
          </div>

          <div className='about-cover'>
            <img src='assets/images/j.jpeg' alt='img' />
          </div>
          <div className='about-text'>
            <h1>
              Hi there,
              <br />
              I'm Joshua Nwosu.
            </h1>
            <div className='about-skill'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, perferendis? Eos dolore facilis magnam? Sequi culpa
                nihil iste nam? Aspernatur, dolores iure at ad unde explicabo
                libero illo itaque nemo praesentium, fugiat veniam eligendi
                laudantium voluptates ducimus asperiores sint quia sunt.
                Expedita aliquid saepe quaerat quidem aspernatur velit possimus
                quibusdam, eum illo.
              </p>
              <ul>
                <li>Javascript (Es2015, Es6+)</li>
                <li>React</li>
                <li>Vue</li>
                <li>Node.js</li>
                <li>HTML &nbsp; (S)CSS</li>
                <li>Express</li>
                <li>Typescript</li>
                <li>Redux</li>
                <li>Vuex</li>
                <li>Mongodb</li>
                <li>GraphQL</li>
                <li>Python</li>
                <li>Kotlin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
