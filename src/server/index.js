import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../../dist', 'index.html')));

app.listen(PORT, () => {});
