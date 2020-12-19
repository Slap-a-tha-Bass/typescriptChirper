import * as fs from 'fs';

/* {
    1: {
        user: string;
        message: string;
    },
    nextid: number,
}
*/

interface IChirp {
    user: string,
    message: string;
}

interface ChirpData {
    [key: number]: IChirp;
    nextid: number;
}

let chirps: ChirpData = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json').toString());
}

let getChirps = () => {
    return Object.assign({}, chirps);
    // create copy and return it
}

let getChirp = (id: number) => {
    return Object.assign({}, chirps[id]);
    // create copy and return it
}

let createChirp = (chirp: IChirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
}

let updateChirp = (id: number, chirp: IChirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = (id: number) => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
}

export default {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}