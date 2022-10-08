import { Center } from "../components/center";
import styled from 'styled-components';
import { useState } from "react";
import { Button } from "../components/button";
import { useNavigate, useParams } from 'react-router-dom';
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

function LoadMedications() {
    const navigate = useNavigate();
    const { droneId } = useParams();

    const [formState, setFormState] = useState({
        name: "",
        code: "",
        weight: "",
        image: ""
    });

    const [error, setError] = useState(null);

    const updateFormValue = (inputKey) => (event) => {
        setFormState({
            ...formState,
            [inputKey]: event.target.value
        });
    };

    const loadMedications = async (event) => {
        try {
            event.preventDefault();
            const response = await api.post(`/drone/${droneId}/medications`, [{
                ...formState
            }]);
            setError("");
            navigate(`/drone/${droneId}/medications`)
        } catch (err) {
            setError(err.response.data.message || err.response.data.error || "something went wrong, please try again later");
            console.log({ err });
        }
    };

    const onUploadImage = async (event) => {
        try {
            const uploadedFile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', uploadedFile);

            const response = await api.post('/upload', formData);
            setFormState({ ...formState, image: response.data.imagePath });
        } catch (err) {
            setError(err.response.data.message || err.response.data.error || "something went wrong, please try again later");
            console.log({ err });
        }
    };

    console.log({ formState });

    return (
        <Center>
            <Form onSubmit={loadMedications}>
                <label>Enter Drone Name: </label>
                <Input type="text" value={formState.name} onChange={updateFormValue('name')} />
                <label>Enter Drone Code: </label>
                <Input type="text" value={formState.code} onChange={updateFormValue('code')} />
                <label>Enter Drone Weight </label>
                <Input type="number" value={formState.weight} onChange={updateFormValue('weight')} />
                <label>Enter Drone Image:</label>
                <div>
                    uploadImage
                    <Input type="file" onChange={onUploadImage} multiple={false} />
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

export default LoadMedications;