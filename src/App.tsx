import { useState } from 'react'
import { CalcButtons } from './components/CalcButtons'
import { InputLine } from './components/InputLine'


function App() {
  const [inputLine, setInputLine] = useState<string>("")

  const [calcResult, setCalcResult] = useState<number>(0)

  return (
    <div className='container mx-auto w-screen h-screen'>
      <div className='flex flex-col w-full h-full items-center justify-center gap-2'>
        <InputLine inputLine={inputLine} />
        <CalcButtons setInputLine={setInputLine} inputLine={inputLine} res={calcResult} setRes={setCalcResult} />
      </div>
    </div>
  )
}

export default App
