export type InputLineProps = {
    inputLine: string
}

export const InputLine: React.FC<InputLineProps> = ({ inputLine }) => {
    return (
        <div className='w-28 text-center h-6 border'>
            {inputLine}
        </div>
    )
}
