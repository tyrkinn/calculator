import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CalcButtons } from './components/CalcButtons'
import { InputLine } from './components/InputLine'

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

function App() {
  const [inputLine, setInputLine] = useState<string>("")
  const [res, setRes] = useState<number>(0)




  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <InputLine inputLine={inputLine} res={res} />
        <CalcButtons setInputLine={setInputLine} inputLine={inputLine} res={res} setRes={setRes} />
      </div>
    </div>
  )
}

export default App
