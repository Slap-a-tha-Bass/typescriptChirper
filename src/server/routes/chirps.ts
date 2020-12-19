// exists in ./server/routes
import * as express from 'express';
import ChirpStore from '../utils/chirpstore';

const router = express.Router();

router.get("/", (req, res) => {
    const data = ChirpStore.GetChirps();
    const chirps = Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key]
        }
    })
    chirps.pop();
    res.json(chirps);
});
// needs req.body
router.post("/", (req, res) => {
    // req.body represents form data (typically)
    const newChirp = req.body;
    ChirpStore.CreateChirp(newChirp);
    res.json('Posted new chirp!');
});

// needs params
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let chirpDetails = ChirpStore.GetChirp(id);
    res.json(chirpDetails);
});

// needs params
router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    let deleteChirp = ChirpStore.DeleteChirp(id);
    res.json('Chirp deleted');
});

// needs params && req.body
router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    const editChirp = req.body;
    ChirpStore.UpdateChirp(id, editChirp);
    res.json('Updated again!!');
})

export default router;

