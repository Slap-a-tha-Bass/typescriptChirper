import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IChirp } from '../App';
import ChirpCard from '../components/ChirpCard';
import Layout from '../components/Layout';

const Details: React.FC<IDetailsProps> = ({ children }) => {

    const [chirp, setChirp] = React.useState<IChirp>(null);

    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then(chirp => setChirp(chirp));
    }, []);
    return (
        <Layout>
            <ChirpCard isDetails chirp={{ id, ...chirp }} />
        </Layout>
    )
}
export interface IDetailsProps { }

export default Details;
