
export type InputLineProps = {
    inputLine: string
    res: number
}



export const InputLine: React.FC<InputLineProps> = ({ inputLine }) => {
    return (
        <div>
            {inputLine}
        </div>
    )
}
