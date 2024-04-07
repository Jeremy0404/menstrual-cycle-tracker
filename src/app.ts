import express from 'express';
import {LoadCurrentPhaseUsecase} from "./core/usecases/load-current-phase.usecase";
import {RealDateProvider} from "./adapters/real-date.provider";
import {FileCycleRepository} from "./adapters/file-cycle.repository";

const app = express();
const port = 3000;

app.use(express.json());

// app.post('/start-menstruation', (req, res) => {
//     const startDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
//     StorageService.writeData({ menstruationStartDate: startDate });
//     res.json({ message: "Menstruation start date saved.", startDate });
// });

app.get('/cycle-info', (req, res) => {
    const usecase = new LoadCurrentPhaseUsecase(new RealDateProvider(), new FileCycleRepository())
    res.json(usecase.execute());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
