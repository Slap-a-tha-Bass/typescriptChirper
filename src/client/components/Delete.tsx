import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IChirp } from '../App';
import ChirpCard from '../components/ChirpCard';
import Layout from '../components/Layout';
import Home from '../views/Home';

const Delete: React.FC<IDeleteProps> = ({ children }) => {

    const [chirp, setChirp] = React.useState<IChirp>(null);

    const [user, setUser] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    const { id } = useParams<{ id: string }>();
    const data = { user, message }
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    React.useEffect(() => {
        fetch(`/api/chirps/${id}`, options)
            .then(res => res.json())
            .then(data => console.log('Deleted!'))
            .then(() => {
                window.location.reload();
            })
    }, []);

    return (
        <Layout>
            <Home />
        </Layout>
    )
}
export interface IDeleteProps { }

export default Delete;
