interface InputProps {
    label?: string,
    type?: string,
    value: any,
    onChange: (value: any) => void,
    className?: string,
}

const Input = (props: InputProps) => {
    return (
        <div className={`flex ${props.className} flex-col`}>
            <div>
                <label className="mb-4 ml-4 text-xl text-center"
                >
                    {props.label}
                </label>
            </div>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                onChange={(e) => props.onChange?.(e.target.value)}
                className={`
            flex flex-col
            border-2 border-black rounded-lg ml-4 mb-5 mt-2
            focus:outline-none bg-gray-100 px-4 py-2  hover:border-purple-600
            `}
            />

        </div>
    )
}

export default Input;