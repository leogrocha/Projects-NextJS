interface ContainerProps {
    children: any,
}

const Container = (props: ContainerProps) => {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 border-black rounded-md p-5">
                {props.children}
            </div>
        </div>
    )
}

export default Container;