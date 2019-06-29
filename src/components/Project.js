import React from 'react'

const Project = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='my-name'>
          <span className='line' />
          <h3>My latest work</h3>
        </div>
        <div className='flex-wrapper project'>
          <div className='blend'>
            <h1>Projects</h1>
          </div>
          <section>
            <div className='project-label'>
              <div className='text'>
                Music player
                <span className='line' />
              </div>
            </div>
            <div className='project-img'>
              <img src='assets/mint-preview.png' alt='' />
            </div>
            <div className='project-desc'>
              <div className=''>
                <span className='line' />
                <h4>Desktop Application.</h4>
              </div>
              <h1>Mint Player.</h1>
              <p>
                Mint is multi platform music player application Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Itaque, id!
              </p>
              <a href='/#' className='link-btn'>
                Explore
              </a>
            </div>
          </section>
          <section>
            <div className='project-label'>
              <div className='text'>
                Event Planner
                <span className='line' />
              </div>
            </div>
            <div className='project-img' />
            <div className='project-desc'>
              <div className=''>
                <span className='line' />
                <h4>Desktop Application.</h4>
              </div>
              <h1>Daily Plannr.</h1>
              <p>
                Mint is multi platform music player application Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Itaque, id!
              </p>
              <a href='/#' className='link-btn'>
                Explore
              </a>
            </div>
          </section>
          <section>
            <div className='project-label'>
              <div className='text'>
                Javascript Plugin
                <span className='line' />
              </div>
            </div>
            <div className='project-img' />
            <div className='project-desc'>
              <div className=''>
                <span className='line' />
                <h4>Web Development.</h4>
              </div>
              <h1>Hinter.js</h1>
              <p>
                Mint is multi platform music player application Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Itaque, id!
              </p>
              <a href='/#' className='link-btn'>
                Explore
              </a>
              <a href='/#' className='link-btn'>
                Demo
              </a>
            </div>
          </section>
          <section>
            <div className='project-label'>
              <div className='text'>
                Shopping Cart
                <span className='line' />
              </div>
            </div>
            <div className='project-img' />
            <div className='project-desc'>
              <div className=''>
                <span className='line' />
                <h4>Personal Work.</h4>
              </div>
              <h1>Website name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                voluptas dignissimos, quidem veritatis beatae animi nisi
                placeat. Ab, sunt optio.
              </p>
              <a href='/#' className='link-btn'>
                Explore
              </a>
              <a href='/#' className='link-btn'>
                Demo
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Project
