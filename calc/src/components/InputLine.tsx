
export type InputLineProps = {
    inputLine: string
    res: number
}



export const InputLine: React.FC<InputLineProps> = ({ inputLine, res }) => {
    return (
        <div>
            {inputLine}
        </div>
    )
}