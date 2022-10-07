import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import { Center } from '../components/center';
import Table from '../components/table';
import { api } from '../config/api';

function Home() {
    const navigate = useNavigate();
    const [droneData, setDroneData] = useState([]);

    const listAvailableDrones = async () => {
        try {
            const response = await api.get('/drone');
            setDroneData(response.data.data);
        } catch (err) {
            console.log({ err });
        }
    };

    useEffect(() => {
        listAvailableDrones();
    }, []);

    return (
        <Center>
            <h1>Drones</h1>
            <Button onClick={() => navigate('/drone/register')}>Register Drone</Button>
            <Table data={droneData} />
        </Center >
    );
}

export default Home;