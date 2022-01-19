import Container from "../globals/Container";
import Title from "../globals/Title";
import ColorBlack from "./ColorBlack";
import ColorWhite from "./ColorWhite";

const Main = () => {
    return(
        <div>
            <Container>
                <Title title="Chess"/>

                <div className="mt-5">
                    <ColorWhite />
                    <ColorBlack />
                    <ColorWhite />
                    <ColorBlack />
                    <ColorWhite />
                    <ColorBlack />
                    <ColorWhite />
                    <ColorBlack />
                    
                </div>
            </Container>
        </div>
    )
}

export default Main;