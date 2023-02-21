import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <section id='about-me' className="text-primarydark dark:text-primary py-10">
        <div className="font-robotomono">
          <h1 className="flex flex-col justify-center text-center items-center">
            <div className="my-5">
              © 2023 Richard Tumaneng. All Rights Reserved.
            </div>
            <div className="flex flex-row text-5xl space-x-10">
              <a href="https://github.com/Hydraero" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/richard-t/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            </div>

          </h1>
        </div>
      </section>
    </div>
  )
}

export default Footer