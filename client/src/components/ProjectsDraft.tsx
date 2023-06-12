import React, { useState } from 'react'
import aichat from "../assets/img/aichat.png"
import buttery from "../assets/img/buttery.png"
import ned from "../assets/img/ned.png"
import polls from "../assets/img/polls.png"
import portfolio from "../assets/img/portfolio.png"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
type Props = {}

//This is an incomplete version of Projects section/component that uses objects of the projects to create a carousel
// Used this: https://github.com/fireclint/react-tailwind-slider/blob/main/src/App.js to create the idea for the carousel
const ProjectsDraft = (props: Props) => {
    const projects = [
        {
            src: aichat,
            projectTitle: "AI Chat",
            projectDescription: "This project is an AI Chat bot that utilizes the OpenAI GPT-3 API. This project was created with vanilla javascript, node, and express to connect the API to the front end and back end of this project.",
            githubLink: "https://github.com/Hydraero/AIChat",
            liveDemoLink: "https://ai-chat-hydraero.vercel.app/",
            technologiesUsed: ["JavaScript",],
        },
        {
            src: ned,
            projectTitle: "Loaning Software",
            projectDescription: "This was is a small financial product that determines a loaning company's repayment informations depending on the user input.",
            githubLink: "https://github.com/Hydraero/NedSample/tree/main/ned-assignment",
            liveDemoLink: "https://ned-assignment.vercel.app/",
            technologiesUsed: {},
        },
        {
            src: buttery,
            projectTitle: "Buttery",
            projectDescription: "Buttery is a movie database searching application created using Next.js that allows users to search for a movie and add movies to a favorites list. A RapidAPI alternative movie database was used to create the search function.",
            githubLink: "https://github.com/Hydraero/Buttery/tree/main/",
            liveDemoLink: "https://buttery.vercel.app/",
            technologiesUsed: {},
        },
        {
            src: portfolio,
            projectTitle: "Portfolio Website",
            projectDescription: "That's right, this portfolio website was made with love and care. It was also made using TypeScript, React, TailwindCSS, Vite, and Node.js. This portfolio showcases my skills and work.",
            githubLink: "https://github.com/Hydraero/Richard-Tumaneng",
            liveDemoLink: "#home",
            technologiesUsed: {},
        },
        {
            src: polls,
            projectTitle: "Block Locale",
            projectDescription: "BlockLocale is a passion project created with the idea of leveraging Blockchain Technology for a secure and immutable voting system. The smart contracts were written in Solidity and tested using Truffle and Ganache.",
            githubLink: "https://github.com/Hydraero/BlockLocale",
            liveDemoLink: "",
            technologiesUsed: {},
        },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentProjectIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentProjectIndex - 1;
        setCurrentProjectIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentProjectIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentProjectIndex + 1;
        setCurrentProjectIndex(newIndex);
    };

    const goToSlide = (slideIndex: any) => {
        setCurrentProjectIndex(slideIndex);
    };

    return (
        <div>
            <section id='projects' className="font-robotomono dark:text-primary">
                <div className="py-8 text-4xl ">
                    <h1 className="flex mx-3 md:mx-4 text-gray-500 dark:text-primary justify-center">Projects</h1>
                </div>
                <div className="my-12 md:my-24 flex flex-col  md:flex-row md:flex-wrap space-y-10 space-x-0 md:space-y-3 md:space-x-5 justify-center items-center">
                    <div className="dark:bg-slate-800 w-5/6 md:w-1/3 rounded overflow-hidden shadow-lg my-10 transition-all duration-500 hover:scale-105">
                        <img className="w-full" src={projects[currentProjectIndex].src} alt="Sunset in the mountains" />
                        <div className="mx-6 my-4">
                            <div className="font-bold text-xl mb-2">{projects[currentProjectIndex].projectTitle}</div>
                            <p className="">
                                {projects[currentProjectIndex].projectDescription}
                            </p>
                        </div>
                        <div className="flex flex-row justify-evenly pb-4">
                            <a href={projects[currentProjectIndex].githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 py-2 px-4 font-semibold rounded-full">
                                    GitHub
                                </button>
                            </a>
                            <a href={projects[currentProjectIndex].liveDemoLink} target="_blank" rel="noopener noreferrer">
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

                    {/* Left Arrow */}
                    <div className='text-2xl p-2 text-white cursor-pointer absolute left-1/4'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>

                    {/* Right Arrow */}
                    <div className='text-2xl p-2 text-white cursor-pointer absolute right-1/4'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>

                </div>

                <div className='flex justify-center -mt-10'>
                        {projects.map((project, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>

            </section>
        </div>

    )
}

export default ProjectsDraft