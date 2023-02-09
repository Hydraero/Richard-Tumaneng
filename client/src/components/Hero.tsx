import React from 'react'
import { AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation' //Documentation here: https://www.npmjs.com/package/react-type-animation

type Props = {}

const Hero = (props: Props) => {
  return (
  <div>
    <main>
      <section id="home" className="h-screen">
        <div className='font-robotomono flex flex-col md:flex-row px-10 py-24 md:p-32 text-2xl'>
          <h1 className='py-2 leading-9'>
            Hey there, I'm <span className='bg-slate-200 text-3xl font-semibold'>Richard Tumaneng</span> and I am a
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
        <div className="py-72 md:py-24">
          <div className="animate-bounce py-5 flex flex-col items-center text-5xl">
              <div className="font-robotomono text-lg">
                Scroll Down
              </div>
              <AiOutlineArrowDown />
          </div>
        </div>
      </section>

      <section id='about-me' className='text-center h-screen'>
        <div className='font-robotomono font-bold'>
          <h1 className='py-24 text-4xl'>
            About Me
          </h1>
        </div>
      </section>

      <section id='skills' className='text-center h-screen'>
              Skills
      </section>

      <section id='projects' className='text-center h-screen'>
              Project
      </section>

      <section id='contact' className='text-center h-screen'>
              Contact
      </section>
    </main>
  </div>

  )
}

export default Hero