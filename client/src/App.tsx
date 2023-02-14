import React from 'react';
import { Navbar, Hero ,Footer } from './components/components.index';
import { useState} from 'react';

type Props = {}

const App = (props: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-100 w-full overflow-hidden App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      
    </div>
  )
}

export default App