import { useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Input from "../globals/Input";
import Title from "../globals/Title";

const Main = () => {

    const [minimum, setMinimum] = useState(null);
    const [maximum, setMaximum] = useState(null);
    const [random, setRandom] = useState(0);

    const result = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        setRandom(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return (
        <div className="bg-gradient-to-r from-red-400 to-orange-300">
            <Container>
                <Title title="Random" />

                <div className="mt-5">
                    <Input
                        label="Mininum:"
                        value={minimum}
                        onChange={setMinimum}
                    />

                    <div>
                        <Input
                            label="Maximum:"
                            value={maximum}
                            onChange={setMaximum}
                        />
                    </div>
                </div>

                <div className="mt-5 flex justify-center items-center">
                    <Button
                    className="bg-blue-400"
                    onClick={() => result(minimum, maximum)}
                    >Result</Button>
                </div>

                <div className="flex justify-center items-center text-3xl mt-5">
                    {random}
                </div>
            </Container>
        </div>
    )
}

export default Main;