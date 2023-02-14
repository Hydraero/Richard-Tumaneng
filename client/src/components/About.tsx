import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about-me' className="h-full md:h-screen">
        <div className="font-robotomono">
          <h1 className="py-12 text-4xl">
            {/* Line Div */}
            <div className="relative flex my-0 items-center">
              <div className="ml-5 md:ml-96 flex-grow border-t border-gray-300"></div>
              <span className="flex mx-3 md:mx-4 text-gray-500">About Me</span>
              <div className="mr-5 md:mr-96 flex-grow border-t border-gray-300"></div>
            </div>  
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className='mx-3 md:mx-48 my-0 md:my-10 mb-24 md:mb-0 basis-1/2 text-center md:text-left'
            x-intersect="$el.classList.add('animate-slide-in-left')">
              <p>
                I'm a Software Engineer and Full Stack Web developer with 4+ years of experience.
                I graduated with a BS in Software Engineering from San Jose State University.
                I specialize in web development, mobile app development, and database design. I'm passionate about creating innovative solutions to complex problems and strive to stay up-to-date on the latest technologies.
              </p>
            </div>
            <div className="mx-3 md:mx-12 md:basis-1/2 text-center">
              <h1 className="text-gray-500 text-xl">
                What I do
              </h1>
              
            </div>

          </div>
          <h1>
            <div className="relative flex py-5 items-center">
              <div className="mx-5 md:mx-96 flex-grow border-t border-gray-300"></div>
            </div>  
          </h1>
        </div>

        <div>

        </div>

        <></>
      </section>
  )
}

export default About