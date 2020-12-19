import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChirpForm: React.FC<IChirpProps> = props => {

    const [user, setUser] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = { user, message };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('api/chirps', options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        setUser('');
        setMessage('');
    }
    return (
        <div className="section row justify-content-center">
            <form className="form-group col-md-6 mt-2">
                <label className="text-primary font-weight-bold" htmlFor="User">User</label>
                <input value={user} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUser(e.target.value)}
                    type="text" className="form-control mb-2" placeholder="Something original please..." />
                <label className="text-primary font-weight-bold" htmlFor="Message">Message</label>
                <textarea value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)}
                    placeholder="Don't waste our time..."
                    className="form-control">
                </textarea>
                <div className="d-flex justify-content-between">
                    <div>
                        <button onClick={handleClick} className="btn btn-primary mt-2">Chirp!</button>
                    </div>
                    <div>
                        <Link to = "/" className="btn text-primary mt-2">All Chirps</Link>
                    </div>
                </div>
            </form>
        </div>
    )

};

interface IChirpProps {

}

export default ChirpForm;
