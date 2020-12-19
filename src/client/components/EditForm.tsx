import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IChirp } from '../App';
import Home from '../views/Home';


const EditForm: React.FC<IEditFormProps> = props => {


    const [user, setUser] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then((chirp) => {
                setUser(chirp.user);
                setMessage(chirp.message);
            })
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = { user, message };
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(`/api/chirps/${id}`, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        setUser('');
        setMessage('');
    }

    return (
        <div className="section row justify-content-center">
            <form className="form-group col-md-6 mt-2">
                {/* label and input for name */}
                <label className="text-danger" htmlFor="User">User</label>
                <input value={user} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUser(e.target.value)}
                    type="text" className="form-control mb-2" />
                    {/* label and input for message */}
                <label className="text-danger" htmlFor="Message">Message</label>
                <textarea value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)}
                    className="form-control">
                </textarea>
                <div className="d-flex justify-content-between">
                    {/* button for handling edit chirp */}
                    <div>
                        <button onClick={handleClick} className="btn btn-link text-success mt-2">Edit Chirp!</button>
                    </div>
                    {/* button to view all chirps */}
                    <div>
                        <Link to="/" className="btn text-primary mt-2">All Chirps</Link>
                    </div>
                </div>
            </form>
        </div>
    )

}
export interface IEditFormProps { }

export default EditForm;

