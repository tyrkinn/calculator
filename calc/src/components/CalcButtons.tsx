import { useCallback, useEffect, useState } from "react"
import { SetState } from "../App"


export type CalcButtonsProps = {
    setInputLine: SetState<string>
    setRes: SetState<number>
    res: number
    inputLine: string,
}



const sum = (x: number, y: number) => {
    const res = x + y
    return res
}

const minus = (x: number, y: number) => {
    const res = x - y
    return res
}

const divide = (x: number, y: number) => {
    const res = x / y
    return res
}

const multi = (x: number, y: number) => {
    const res = x * y
    return res
}


export type Calc = {
    x: number,
    y: number,
    operation: string,
    res: number
}

export type BinaryOp = (x: number, y: number) => number

export const binaryID: BinaryOp = (_x, _y) => 0

export const CalcButtons: React.FC<CalcButtonsProps> = ({ setInputLine, inputLine, res, setRes }) => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


    const operations: Record<string, BinaryOp> = {
        "+": sum,
        "-": minus,
        "/": divide,
        "*": multi,
        "=": binaryID,
        "C": binaryID
    }

    const [calc, setCalc] = useState<Calc>({
        x: 0,
        y: 0,
        operation: "",
        res: 0
    })

    const handleClick = (value: string | number) => {
        setInputLine((prev) => prev + value.toString())
    }


    const handleOpShat = async (value: string, inputLine: string) => {
        switch (value) {
            case "=":
                let op = inputLine.split(calc.operation)
                setCalc({
                    y: Number(op[0]),
                    x: Number(op[1]),
                    operation: calc.operation,
                    res: operations[calc.operation](Number(op[0]), Number(op[1]))
                })

                break
            case "C":
                setInputLine('')
                break
            default:
                setCalc((prev) => ({
                    ...prev,
                    operation: value,
                }))
                setInputLine((prev) => prev + value.toString())

        }
    }

    useEffect(() => {
        setRes(calc.res)
        setInputLine(String(calc.res))
    }, [calc.res])

    useEffect(() => {
        setInputLine('')
    }, [])


    return (
        <div>
            <div className="grid grid-rows-4 grid-cols-3 grid-flow-row gap-2">
                {digits.map(d =>
                    <button key={d} onClick={() => handleClick(d)}>{d}</button>
                )}
            </div>
            {Object.keys(operations).map(key => <button onClick={() => handleOpShat(key, inputLine)} key={key}>{key}</button>)}

        </div>
    )
}