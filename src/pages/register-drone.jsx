import { Center } from "../components/center";
import styled from 'styled-components';
import { useState } from "react";
import { Button } from "../components/button";
import { useNavigate } from 'react-router-dom';
import { api } from "../config/api";

const Input = styled.input`
    border-radius: 5px;
    outline: none;
    border: solid black 1px;
    height: 30px;
    font-size: 20px;
    font-weight: 200;
    padding-left: 10px;
`;
const ErrorDiv = styled.div`
    width: 100%;
    color: #ff6969;
    text-align: center;
    padding: 20px 0px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    & input {
        margin-bottom: 20px;
    }

    & label {
        margin-bottom: 10px;
    }
`;

function RegisterDrone() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        serialNum: "",
        model: "",
        weight: ""
    });

    const [error, setError] = useState(null);

    const updateFormValue = (inputKey) => (event) => {
        setFormState({
            ...formState,
            [inputKey]: event.target.value
        });
    };

    const registerDrone = async (event) => {
        try {
            event.preventDefault();
            const response = await api.post('/drone', {
                ...formState
            });
            setError("");
            navigate('/')
        } catch (err) {
            setError(err.response.data.message || err.response.data.error || "something went wrong, please try again later");
            console.log({ err });
        }
    };

    return (
        <Center>
            <Form onSubmit={registerDrone}>
                <label>Enter Drone Serial Num: </label>
                <Input type="text" value={formState.serialNum} onChange={updateFormValue('serialNum')} />
                <label>Enter Drone Weight </label>
                <Input type="number" value={formState.weight} onChange={updateFormValue('weight')} />
                <label>Enter Drone Model:</label>
                <div>
                    <input type="radio" name="model" value="lightWeight" onChange={updateFormValue('model')} /> Light weight
                    &nbsp;
                    <input type="radio" name="model" value="middleWeight" onChange={updateFormValue('model')} />  Middle weight
                    &nbsp;
                    <input type="radio" name="model" value="cruiserWeight" onChange={updateFormValue('model')} />  Cruiser weight
                    &nbsp;
                    <input type="radio" name="model" value="heavyWeight" onChange={updateFormValue('model')} />  Heavy weight
                </div>

                {error &&
                    <ErrorDiv>
                        {error}
                    </ErrorDiv>}

                <Button width="100%">Submit</Button>
            </Form>
        </Center>
    );
}

export default RegisterDrone;