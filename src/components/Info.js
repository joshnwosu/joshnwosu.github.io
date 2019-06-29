import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='flex-wrapper info'>
          <div className='title'>
            <div className='my-name'>
              <span className='line' />
              <h3>@iamjoshnwosu</h3>
            </div>
            <div className='move'>
              <div className='label'>
                <h1>Software Engineer.</h1>
              </div>

              <div className='desc'>
                <p>
                  Software engineer based in Lagos, Nigeria who loves to create
                  attractive experience for the web. Working as a developer
                  since 2014 and had the opportunity to work and collaborate
                  with different teams and companies.
                </p>
              </div>

              <div className='resume link-btn'>
                <a href='#/'>Resume.</a>
              </div>
            </div>
          </div>
          {/* <div className='title-img'>
            <img src='assets/images/111.png' alt='' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Info
