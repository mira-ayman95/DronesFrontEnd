import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/button';
import { Center } from '../components/center';
import Table from '../components/table';
import { api } from '../config/api';


function LoadDroneDetails() {
    const navigate = useNavigate();
    const { droneId } = useParams();
    const [medicationsData, setMedicationsData] = useState([]);
    const [batteryLevel, setBatteryLevel] = useState([]);

    const listMedications = async () => {
        try {
            const response = await api.get(`/drone/${droneId}/medications`);
            let medicationsData = response.data.data;
            setMedicationsData(medicationsData);
        } catch (err) {
            console.log({ err });
        }
    };

    const getDroneDetails = async () => {
        try {
            const response = await api.get(`/drone/${droneId}`);
            let battery = response.data.data.battery;
            setBatteryLevel(battery);
        } catch (err) {
            console.log({ err });
        }
    };

    useEffect(() => {
        listMedications();
        getDroneDetails();
    }, []);

    return (
        <Center>
            <h1>Drone Details</h1>
            <h2> your battery is {batteryLevel} %</h2>
            <Button onClick={() => navigate('/drone/load/medications')}>Load Medications</Button>
            <h1>Medications Details</h1>
            <Table data={medicationsData} columns={["name", "code", "weight"]} message="No Medications Loaded to this drone" />
        </Center >
    );
}

export default LoadDroneDetails;