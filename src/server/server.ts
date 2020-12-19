// exists in ./server
import * as express from 'express';
import * as path from 'path';

import apiRouter from './routes';

const app = express();
// converts form data into JS and assigns it as req.body
app.use(express.json());

app.use(express.static('public'));
app.use("/api", apiRouter);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening on port: ${port}`));