import * as React from 'react';
import { IChirp } from '../App';
import ChirpCard from '../components/ChirpCard';
import Layout from '../components/Layout';

const Home: React.FC<IHomeProps> = ({ children }) => {

    const [chirps, setChirps] = React.useState<Array<IChirp>>([]);

    React.useEffect(() => {
        fetch('/api/chirps')
            .then(res => res.json())
            .then(chirps => setChirps(chirps));
    }, []);
    return (
        <Layout>
            {chirps.map(chirp => {
                return (
                    <ChirpCard key={chirp.id} chirp={chirp} />
                )
            })}
        </Layout>
    )
}
export interface IHomeProps { }

export default Home;
