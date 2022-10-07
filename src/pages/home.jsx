import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import { Center } from '../components/center';
import Table from '../components/table';

function Home() {
    const droneData = [{ serialNum: 111, weight: 122, model: "hshs" }, { serialNum: 111, weight: 122, model: "hshs" }];
    const navigate = useNavigate();
    return (
        <Center>
            <h1>Drones</h1>
            <Button onClick={() => navigate('/drone/register')}>Register Drone</Button>
            <Table data={droneData} />
        </Center >
    );
}

export default Home;