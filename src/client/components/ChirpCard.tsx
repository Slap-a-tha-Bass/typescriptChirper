import * as React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IChirp } from '../App';

const ChirpCard: React.FC<IChirpCardProps> = ({ chirp, isDetails }) => {
    const cardSize = isDetails ? 'col-md-12' : 'col-md-7';

    return (
        <div className={`${cardSize} mb-2`}>
            <div className="card shadow bg-light">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">@{chirp?.user}</h3> <Link to = {`/delete/${chirp?.id}`} className = "text-danger">X</Link>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{chirp?.message}</p> <Link to={`/edit/${chirp?.id}`} className="btn btn-sm text-info">Edit Chirp</Link>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            {isDetails ? <Link to={`/`} className="text-primary">GO HOME!</Link> : <Link to={`/details/${chirp?.id}`} className="text-primary">View Chirp</Link>}
                        </div>
                        <div>
                            <Link to="/form" className="text-primary">Post New Chirp!</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export interface IChirpCardProps {
    chirp: IChirp;
    isDetails?: boolean;
}

export default ChirpCard;