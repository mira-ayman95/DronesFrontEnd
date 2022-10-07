import { Center } from '../components/center';
import Table from '../components/table';

function Home() {
    const droneData = [{ serialNum: 111, weight: 122, model: "hshs" }, { serialNum: 111, weight: 122, model: "hshs" }];
    return (
        <Center>
            <h1>Drones</h1>
            <Table data={droneData} />
        </Center >
    );
}

export default Home;