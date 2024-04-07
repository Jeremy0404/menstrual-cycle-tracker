import express from 'express';
import {LoadCurrentPhaseUsecase} from "./core/usecases/load-current-phase.usecase";
import {RealDateProvider} from "./adapters/real-date.provider";
import {FileCycleRepository} from "./adapters/file-cycle.repository";
import {StartMenstruationUsecase} from "./core/usecases/start-menstruation.usecase";

const app = express();
const port = 3000;

app.use(express.json());

app.post('/start-menstruation', (req, res) => {
    const usecase = new StartMenstruationUsecase(new RealDateProvider(), new FileCycleRepository())
    usecase.execute();
    res.status(201).json({});
});

app.get('/cycle-info', (req, res) => {
    const usecase = new LoadCurrentPhaseUsecase(new RealDateProvider(), new FileCycleRepository())
    res.json(usecase.execute());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
