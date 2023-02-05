import React from 'react';
import { Navbar, Footer } from './components/components.index';
import { useState} from 'react';

type Props = {}

const App = (props: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        Hello World
      </div>
      
    </div>
  )
}

export default App