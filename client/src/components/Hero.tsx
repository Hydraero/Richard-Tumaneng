import React from 'react'
import intersect from '@alpinejs/intersect'
import Alpine from 'alpinejs'
import { AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation' //Documentation here: https://www.npmjs.com/package/react-type-animation

type Props = {}

window.Alpine = Alpine
Alpine.start()
Alpine.plugin(intersect)

const Hero = (props: Props) => {
  return (
  <div>
    <main>
      <section id="home" className="h-screen select-none">
        <div className="font-robotomono flex flex-col md:flex-row text-center md:text-start px-10 py-24 md:p-32 text-2xl">
          <h1 className="py-2 leading-9 animate-fade-in-fwd md:animate-fade-in-left">
            Hey there, I'm <span className="bg-slate-200 text-3xl font-semibold">Richard Tumaneng</span> and I am a
            <TypeAnimation
              sequence={[
                'Software Engineer',
                4000,
                'Full Stack Developer',
                4000,
                'Programmer',
                4000,
                'Lifetime Learner',
                4000,
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
        </div>
        <div className="my-72 md:my-48">
          <div className="animate-bounce py-5 flex flex-col items-center text-5xl">
              <div className="font-robotomono text-lg">
                Scroll Down
              </div>
              <AiOutlineArrowDown />
          </div>
        </div>
      </section>

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
            <div className='mx-3 md:mx-48 my-0 md:my-10 mb-24 md:mb-48 basis-1/2 text-center md:text-left'
            x-intersect="$el.classList.add('animate-slide-in-left')">
              <p>
                I'm a Software Engineer and Full Stack Web developer with 4+ years of experience.
                I have a BS in Software Engineering from San Jose State University.
                I specialize in web development, mobile app development, and database design. I'm passionate about creating innovative solutions to complex problems and strive to stay up-to-date on the latest technologies.
              </p>
            </div>
            <div className="mx-3 md:mx-12 md:basis-1/2 text-center">
              <h1 className="text-gray-500 text-xl mb-10">
                What I do
              </h1>
              <h2>
                <ul className="text-left space-y-12">
                  <li>
                    Full Stack Development
                  </li>
                  <li>
                    Software Engineer
                  </li>
                  <li>
                    Android Engineering
                  </li>
                </ul>
              </h2>
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

      <section id='skills' className='text-center h-screen'>
        <div>
          <h1 className="py-12 text-4xl">
              {/* Line Div */}
              <div className="relative flex my-0 items-center">
              <div className="ml-5 md:ml-96 flex-grow border-t border-gray-300"></div>
              <span className="flex mx-3 md:mx-4 text-gray-500">My Skills</span>
              <div className="mr-5 md:mr-96 flex-grow border-t border-gray-300"></div>
            </div>  
          </h1>
        </div>        
      </section>

      <section id='projects' className='text-center h-screen'>
        <div>
          <h1 className="py-12 text-4xl">
              {/* Line Div */}
              <div className="relative flex my-0 items-center">
              <div className="ml-5 md:ml-96 flex-grow border-t border-gray-300"></div>
              <span className="flex mx-3 md:mx-4 text-gray-500">Projects</span>
              <div className="mr-5 md:mr-96 flex-grow border-t border-gray-300"></div>
            </div>  
          </h1>
        </div>     
      </section>
    </main>
  </div>

  )
}

export default Hero