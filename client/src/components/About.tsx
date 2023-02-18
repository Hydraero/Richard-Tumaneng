import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiFillApi } from 'react-icons/ai';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiEslint, SiJava, SiNodedotjs, SiNodemon, SiReact, SiMysql, SiPython, SiExpress, SiKubernetes, SiDocker, SiGit, SiGithub, SiVite } from "react-icons/si";
import "../index.css";

type Props = {}

// react-tabs tutorial followed from: https://blog.logrocket.com/how-to-build-tab-component-react/

const About = (props: Props) => {
  return (
    <div>
      <section id='skills' className="h-full md:h-screen">
        <div className="font-robotomono">
          <h1 className="py-12 text-4xl">
            {/* Line Div */}
            <div className="relative flex my-0 items-center">
              <div className="ml-5 md:ml-96 flex-grow border-t border-gray-300"></div>
              <span className="flex mx-3 md:mx-4 text-gray-500">About Me</span>
              <div className="mr-5 md:mr-96 flex-grow border-t border-gray-300"></div>
            </div>
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className='mx-3 md:mx-48 my-0 md:my-14 mb-24 md:mb-48 basis-1/3 text-center md:text-left'
              x-intersect="$el.classList.add('animate-slide-in-left')">
              <p>
                I'm a Software Engineer and Full Stack Web developer with 4+ years of experience.
                I have a BS in Software Engineering from San Jose State University.
                I specialize in web development, mobile app development, and database design. I'm passionate about creating innovative solutions to complex problems and strive to stay up-to-date on the latest technologies.
              </p>
            </div>

            <div className="mx-3 md:mx-12 md:basis-2/3 text-center" x-intersect="$el.classList.add('animate-slide-in-right')">
              <div>
                <h1 className="text-gray-500 text-2xl mb-5">
                  My Skills
                </h1>
              </div>
              <div>
                <Tabs className="Tabs">
                  <TabList>
                    <Tab>Front End</Tab>
                    <Tab>Back End</Tab>
                    <Tab>Tools</Tab>
                  </TabList>

                  <TabPanel className="flex flex-col space-y-2 TabPanel-1">
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        JavaScript
                      </div>
                      <SiJavascript className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        TypeScript
                      </div>
                      <SiTypescript className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        HTML
                      </div>
                      <SiHtml5 className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        CSS
                      </div>
                      <SiCss3 className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        React.js
                      </div>
                      <SiReact className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        ESLint
                      </div>
                      <SiEslint className="text-5xl"/>
                    </div>
                  </TabPanel>

                  <TabPanel className="flex flex-col space-y-2 TabPanel-2">
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Java
                      </div>
                      <SiJava className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        MySQL
                      </div>
                      <SiMysql className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Python
                      </div>
                      <SiPython className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Node.js
                      </div>
                      <SiNodedotjs className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Nodemon
                      </div>
                      <SiNodemon className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Express.js
                      </div>
                      <SiExpress className="text-5xl"/>
                    </div>
                  </TabPanel>

                  <TabPanel className="flex flex-col space-y-2 TabPanel-3">
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Docker
                      </div>
                      <SiDocker className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Kubernetes
                      </div>
                      <SiKubernetes className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Git
                      </div>
                      <SiGit className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        GitHub
                      </div>
                      <SiGithub className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        Vite
                      </div>
                      <SiVite className="text-5xl"/>
                    </div>
                    <div className="flex flex-row items-center justify-between animate-swing-in-top-bck">
                      <div className="font-robotomono">
                        APIs
                      </div>
                      <AiFillApi className="text-5xl"/>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>

            </div>

          </div>
          <h1>
            <div className="relative flex py-5 items-center">
              <div className="mx-5 md:mx-96 flex-grow border-t border-gray-300"></div>
            </div>
          </h1>
        </div>

        <></>
      </section>
    </div>
  )
}

export default About