import type { SetState } from "../types"
import { Controls, OperationSign } from "../enums"
import { getCalcFunc } from "../service"
import { useState } from 'react'

export type CalcButtonsProps = {
    setInputLine: SetState<string>
    setRes: SetState<number>
    res: number
    inputLine: string,
}

const digits = '1234567890'.split('')

export const CalcButtons: React.FC<CalcButtonsProps> = ({ setInputLine, inputLine, setRes }) => {

    const [operator, setOperator] = useState<OperationSign | null>(null)

    const handleClick = (value: string) => {
        setInputLine((prev) => prev + value.toString())
    }

    const handleOpShat = (sign: OperationSign) => {
      setInputLine(prev => prev + sign)
      setOperator(sign)
    }

    const handleControls = (control: Controls) => {
        switch (control) {
            case Controls.CLEAR:
                setInputLine('')
                break
            case Controls.EQUALS:
                if (operator === null) return
                const [x, y] = inputLine.trim().split(operator).map(Number)
                const calcFn = getCalcFunc(operator)
                const calcResult = calcFn(x, y)
                setRes(calcResult)
                setInputLine(calcResult.toString())
                setOperator(null)
        }

    }

    return (
        <div className="flex gap-2">
            <div className="grid grid-rows-4 grid-cols-3 grid-flow-row gap-2">
                {digits.map(d =>
                    <button key={d} className="digit last:col-span-3" onClick={() => handleClick(d)}>{d}</button>
                )}
            </div>
            <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2">
                {Object.values(OperationSign).map(sign => <button onClick={() => handleOpShat(sign)} key={sign}>{sign}</button>)}
                {Object.values(Controls).map(control => <button onClick={() => handleControls(control)} key={control}>{control}</button>)}
            </div>

        </div>
    )
}
