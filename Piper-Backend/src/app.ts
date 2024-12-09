import express  from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { initializePgConnector } from './services/pg.connector';
// ROUTES **************
import restaurantRouter from './restaurants/restaurant.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

initializePgConnector();


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pi-Piper API</h1>');
})

app.use('/', [restaurantRouter]);


app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})