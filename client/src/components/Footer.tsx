import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <section id='about-me' className="h-full md:h-screen">
        <div className="font-robotomono">
          <h1 className="py-12 text-4xl">
            {/* Line Div */}
            <div className="relative flex my-0 items-center">
              <div className="ml-5 md:ml-96 flex-grow border-t border-gray-300"></div>
              <span className="flex mx-3 md:mx-4 text-gray-500">Footer</span>
              <div className="mr-5 md:mr-96 flex-grow border-t border-gray-300"></div>
            </div>
          </h1>
          <h1>
            <div className="relative flex py-5 items-center">
              <div className="mx-5 md:mx-96 flex-grow border-t border-gray-300"></div>
            </div>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Footer