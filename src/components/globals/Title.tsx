interface TitleProps {
    title: string,
    className?: string,
}

const Title = (props: TitleProps) => {
    return(
        <div className={`
        ${props.className}
        flex justify-center items-center text-2xl`}>
            {props.title}
        </div>
    )
}

export default Title;