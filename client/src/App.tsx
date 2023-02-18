import React from 'react';
import { Navbar, Hero ,Footer, CTA, About, Projects } from './components/components.index';
import { useState} from 'react';
import arrow from "./assets/arrow.svg"

type Props = {}

const App = (props: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-100 w-full overflow-hidden select-none App">
      <div>
        <Navbar/>
      </div>

      <img src={arrow} width="50" height="50" className="absolute right-20 md:right-25 animate-heartbeat"></img>

      <div>
        <Hero/>
      </div>

      <div>
        <About/>
      </div>

      <div>
        <Projects/>
      </div>

      <div>
        <CTA/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App