import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id="home" className="flex md:flex-row flex-col">
      <div>
        <h1>
          Hi I'm Richard Tumaneng and I am a
        </h1>
        <h2>
          Software Engineer
        </h2>
        <p>
          <AiFillLinkedin/>
        </p>

      </div>
    </section>
  )
}

export default Hero