import { Center } from "../components/center";
import styled from 'styled-components';
import { useState } from "react";
import { Button } from "../components/button";

const Input = styled.input`
    border-radius: 5px;
    outline: none;
    border: solid black 1px;
    height: 30px;
    font-size: 20px;
    font-weight: 200;
    padding-left: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    & input {
        margin-bottom: 20px;
    }

    & label {
        margin-bottom: 10px;
    }
`;

function RegisterDrone() {
    const [formState, setFormState] = useState({
        serialNum: "",
        model: "",
        weight: ""
    });

    const updateFormValue = (inputKey) => (event) => {
        setFormState({
            ...formState,
            [inputKey]: event.target.value
        });
    };

    return (
        <Center>
            <Form>
                <label>Enter Drone Serial Num: </label>
                <Input type="text" value={formState.serialNum} onChange={updateFormValue('serialNum')} />
                <label>Enter Drone Weight </label>
                <Input type="number" value={formState.weight} onChange={updateFormValue('weight')} />
                <label>Enter Drone Model:</label>
                <div>
                    <input type="radio" name="model" value={formState.model} onChange={updateFormValue('model')} /> Lightweight
                    &nbsp;
                    <input type="radio" name="model" value={formState.model} onChange={updateFormValue('model')} />  Middleweight
                    &nbsp;
                    <input type="radio" name="model" value={formState.model} onChange={updateFormValue('model')} />  Cruiserweight
                    &nbsp;
                    <input type="radio" name="model" value={formState.model} onChange={updateFormValue('model')} />  Heavyweight
                </div>

                <Button width="100%">Submit</Button>
            </Form>
        </Center>
    );
}

export default RegisterDrone;