interface ContainerProps {
    children: any,
    className?: string,
}

const Container = (props: ContainerProps) => {
    return(
        <div className={`
        ${props.className}
        flex justify-center items-center h-screen`}>
            <div className={`
            ${props.className}
            border-2 border-black rounded-md p-5
            `}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;