interface ButtonProps {
    className?: string,
    onClick?: () => void,
    children: any,
}

const Button = (props: ButtonProps) => {
    
    return(
        <button
        className={`
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;