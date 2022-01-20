import { useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Input from "../globals/Input";
import Title from "../globals/Title";
import Table from "./Table";

const Main = () => {

    const [heigth, setHeigth] = useState(null);
    const [weigth, setWeigth] = useState(null);
    const [imc, setImc] = useState(0);

    const result = () => {
        setImc(((+weigth) / ((+heigth) * (+heigth))));
    }

    return (
        <div className="flex justify-center items-center">
            <Container>
                <Title title="Table IMC" />
                <div className="mt-3">
                    <Table />
                </div>
            </Container>

            <div className="ml-5">
                <Container>
                    <Title title="IMC" />

                    <div className="mt-5">
                        <Input
                            label="Weigth:"
                            value={weigth}
                            onChange={setWeigth}
                        />

                        <Input
                            label="Heigth:"
                            value={heigth}
                            onChange={setHeigth}
                        />
                    </div>

                    <div className="mt-5 flex justify-center items-center">
                        <Button
                            className="bg-blue-400"
                            onClick={result}
                        >Result</Button>
                    </div>

                    <div className="flex justify-center items-center text-3xl mt-5">
                        {imc.toFixed(2)}
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Main;