import { useState } from 'react'
import { CalcButtons } from './components/CalcButtons'
import { InputLine } from './components/InputLine'


function App() {
  const [inputLine, setInputLine] = useState<string>("")

  const [calcResult, setCalcResult] = useState<number>(0)

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <InputLine inputLine={inputLine} res={calcResult} />
        <CalcButtons setInputLine={setInputLine} inputLine={inputLine} res={calcResult} setRes={setCalcResult} />
      </div>
    </div>
  )
}

export default App
