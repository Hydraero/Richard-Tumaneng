import React from 'react'
import aichat from "../assets/img/aichat.png"
import ava from "../assets/img/ava.png"
import buttery from "../assets/img/buttery.png"
import ned from "../assets/img/ned.png"
import polls from "../assets/img/polls.png"
import portfolio from "../assets/img/portfolio.png"
import strain from "../assets/img/strain.png"
type Props = {}

const Projects = (props: Props) => {
    return (
        <div>
            <section id='projects' className="font-robotomono dark:text-primary">
                <div className="py-8 text-4xl ">
                    <h1 className="flex mx-3 md:mx-4 text-gray-500 dark:text-primary justify-center">Projects</h1>
                </div>
                <div className="my-12 md:my-24 flex flex-col  md:flex-row md:flex-wrap space-y-10 space-x-0 md:space-y-3 md:space-x-5 justify-center items-center">

                    <div className="card-container grid gap-5 grid-cols-1 md:gap-5 md:grid-cols-2 w-5/6 md:w-2/3">
                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={ava} alt="A10 Virtual Agent 404 page" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">A10 Virtual Agent</div>
                                <p className="">
                                    This AI Chat project was created using Microsoft Copilot Studios. Powered by OpenAI's GPT AI model, it is an NLP capable virtual assistant/agent that helps users find the resource or page they are looking for within the A10 Networks' website.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://www.a10networks.com/404/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#CopilotStudios</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#CSS</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#JavScript</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#GPT-4</span>
                            </div>
                        </div>
                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={strain} alt="Railway view of deployed MySQL database for Strains API" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">Strains API</div>
                                <p className="">
                                    A cannabis strains REST API application with 5000+ strains created using the Express.js framework. Created and documented using the standard best practices of API creation with SwaggerHub. The database used for this API is MySQL deployed through Railway.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://strains-api-pg-production.up.railway.app/api-docs" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Documentation
                                    </button>
                                </a>
                                <a href="https://strains-api-pg-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Express.js</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#JavScript</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#API</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Railway</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#MySQL</span>
                            </div>
                        </div>
                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={aichat} alt="Sunset in the mountains" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">AI Chat</div>
                                <p className="">
                                    This project is an AI Chat bot that utilizes the OpenAI GPT-3 API. This project was created with vanilla javascript, node, and express to connect the API to the front end and back end of this project.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://github.com/Hydraero/AIChat" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        GitHub
                                    </button>
                                </a>
                                <a href="https://ai-chat-hydraero.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#JavaScript</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Node.js</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Express.js</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Vite</span>
                            </div>
                        </div>
                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={ned} alt="Sunset in the mountains" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">Loaning Software</div>
                                <p className="">
                                    This was is a small financial product that determines a loaning company's repayment informations depending on the user input.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://github.com/Hydraero/NedSample/tree/main/ned-assignment" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        GitHub
                                    </button>
                                </a>
                                <a href="https://ned-assignment.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>

                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Vite</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Node</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Tailwind</span>
                            </div>
                        </div>
                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={buttery} alt="Sunset in the mountains" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">Buttery</div>
                                <p className="">
                                    Buttery is a movie database searching application created using Next.js that allows users to search for a movie and add movies to a favorites list. A RapidAPI alternative movie database was used to create the search function.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://github.com/Hydraero/Buttery/tree/main/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        GitHub
                                    </button>
                                </a>
                                <a href="https://buttery.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>

                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Next.js</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#TypeScript</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Tailwind</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Chakra</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#API</span>
                            </div>
                        </div>

                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 ">
                            <img className="w-full" src={portfolio} alt="Sunset in the mountains" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">Portfolio Website</div>
                                <p className="">
                                    That's right, this portfolio website was made with love and care. It was also made using TypeScript, React, TailwindCSS, Vite, and Node.js. This portfolio showcases my skills and work.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://github.com/Hydraero/Richard-Tumaneng" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        GitHub
                                    </button>
                                </a>
                                <a href="#home">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#TypeScript</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#React</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Node.js</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#TailwindCSS</span>
                            </div>
                        </div>

                        <div className="project-card dark:bg-slate-800 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                            <img className="w-full" src={polls} alt="Sunset in the mountains" />
                            <div className="mx-6 my-4">
                                <div className="font-bold text-xl mb-2">Block Locale</div>
                                <p className="">
                                    BlockLocale is a passion project created with the idea of leveraging Blockchain Technology for a secure and immutable voting system. The smart contracts were written in Solidity and tested using Truffle and Ganache.
                                </p>
                            </div>
                            <div className="flex flex-row justify-evenly pb-4">
                                <a href="https://github.com/Hydraero/BlockLocale" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                        GitHub
                                    </button>
                                </a>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <h1 className="flex justify-center font-bold pb-2">
                                    Technologies Used:
                                </h1>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Solidity</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#Truffle</span>
                                <span className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-full px-3 py-1 text-sm mr-2 mb-2">#React</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Projects