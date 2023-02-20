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
        <div className="my-32 md:my-48">
          <div className="animate-bounce py-5 flex flex-col items-center text-5xl">
              <div className="font-robotomono text-lg">
                Scroll Down
              </div>
              <AiOutlineArrowDown />
          </div>
        </div>
      </section>

    </main>
  </div>

  )
}

export default Hero