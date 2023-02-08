import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation' //Documentation here: https://www.npmjs.com/package/react-type-animation

type Props = {}

const Hero = (props: Props) => {
  return (
  <div>
    <main>
      <section id="home" className="flex md:flex-row flex-col h-screen">
        <div className='font-robotomono p-32 text-2xl'>
          <h1 className='py-2 leading-9'>
            Hey there, I'm <span className='bg-slate-200 text-3xl font-semibold'>Richard Tumaneng</span> and I am a
            <TypeAnimation
              sequence={[
                'Software Engineer',
                4000,
                'Full Stack Developer',
                4000,
                'Computer Enthusiast',
                4000,
                'Lifetime Learner',
                4000,
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
        </div>
      </section>
      <section id='about-me' className='mb-40 text-center'>
              Hello World
      </section>
      <section id='skills' className='mb-40 justify-center'>
              Hello World
      </section>
      <section id='projects' className='mb-40 justify-center'>
              Hello World
      </section>
      <section id='contact' className='mb-40 justify-center'>
              Hello World
      </section>
    </main>
  </div>

  )
}

export default Hero