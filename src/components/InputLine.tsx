export type InputLineProps = {
    inputLine: string
}

export const InputLine: React.FC<InputLineProps> = ({ inputLine }) => {
    return (
        <div>
            {inputLine}
        </div>
    )
}
