import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div>
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
        </div>

    )
}

export default Projects