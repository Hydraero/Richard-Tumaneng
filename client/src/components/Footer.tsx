import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <section id='about-me' className="text-primarydark dark:text-primary py-10">
        <div className="font-robotomono">
          <h1 className="flex flex-col justify-center text-center">
              © 2023 Richard Tumaneng. All Rights Reserved. 
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Footer