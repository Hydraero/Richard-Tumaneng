import React from 'react'
import aichat from "../assets/img/aichat.png"
type Props = {}

const Projects = (props: Props) => {
    return (
        <div>
            <section id='projects' className="font-robotomono dark:text-primary">
                <div className="py-8 text-4xl ">
                    <h1 className="flex mx-3 md:mx-4 text-gray-500 dark:text-primary justify-center">Projects</h1>
                </div>
                <div className="my-12 md:my-24 flex flex-col md:flex-row md:flex-wrap space-y-10 space-x-0 md:space-y-0 md:space-x-5 justify-center items-center">
                    <div className="w-5/6 md:w-1/3 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 my-10">
                        <img className="w-full" src={aichat} alt="Sunset in the mountains" />
                        <div className="mx-6 my-4">
                            <div className="font-bold text-xl mb-2">AI Chat</div>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="flex flex-row justify-evenly pb-4">
                            <a href="https://github.com/Hydraero/AIChat" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    GitHub Repo
                                </button>
                            </a>
                            <a href="https://ai-chat-hydraero.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <h1 className="flex justify-center font-bold pb-2">
                                Technologies Used: 
                            </h1>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#JavaScript</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Node.js</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Express.js</span>
                        </div>
                    </div>

                    <div className="w-5/6 md:w-1/3 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 my-10">
                        <img className="w-full" src={aichat} alt="Sunset in the mountains" />
                        <div className="mx-6 my-4">
                            <div className="font-bold text-xl mb-2">Portfolio Website</div>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="flex flex-row justify-evenly pb-4">
                            <a href="https://github.com/Hydraero/AIChat" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    GitHub Repo
                                </button>
                            </a>
                            <a href="https://ai-chat-hydraero.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <h1 className="flex justify-center font-bold pb-2">
                                Technologies Used: 
                            </h1>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#TypeScript</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#React</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Vite</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Node.js</span>
                        </div>
                    </div>
                    
                    <div className="w-5/6 md:w-1/3 rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 my-10">
                        <img className="w-full" src={aichat} alt="Sunset in the mountains" />
                        <div className="mx-6 my-4">
                            <div className="font-bold text-xl mb-2">Block Locale</div>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="flex flex-row justify-evenly pb-4">
                            <a href="https://github.com/Hydraero/AIChat" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    GitHub Repo
                                </button>
                            </a>
                            <a href="https://ai-chat-hydraero.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 py-2 px-4 rounded-full hover:bg-slate-500">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <h1 className="flex justify-center font-bold pb-2">
                                Technologies Used: 
                            </h1>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#solidity</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#truffle</span>
                            <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#react</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Projects