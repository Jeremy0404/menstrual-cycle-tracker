import fs from 'fs';
import path from 'path';
import {CycleRepository} from "../core/ports/cycle.repository";
import {CyclePhase} from "../core/domain/cycle-phase";

const DATA_FILE = path.join(__dirname, '..', '..', 'db.json');

export class FileCycleRepository implements CycleRepository {
    getCurrentPhase(today: Date): CyclePhase {
        try {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
            const data = JSON.parse(fileContent);

            return this.calculateCycleData(new Date(data.menstruationStartDate), today);
        }
        catch (err) {
            throw new Error(`Cannot retrieve infos: ${err}`);
        }
    }

    saveStartDate(date: Date): void {
        const data = { menstruationStartDate: date.toISOString().split('T')[0] };
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    }

    private calculateCycleData(menstruationStartDate: Date, currentDate: Date): CyclePhase {
        const diffTime = Math.abs(currentDate.getTime() - menstruationStartDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const cycleDay = diffDays % 28;

        let currentPhase, daysUntilNextPhase, nextPhase, explanation;

        if (cycleDay >= 1 && cycleDay <= 5) {
            currentPhase = "Menstrual Phase";
            daysUntilNextPhase = 6 - cycleDay;
            nextPhase = "Follicular Phase";
            explanation = "The uterus is shedding its lining.";
        } else if (cycleDay >= 6 && cycleDay <= 13) {
            currentPhase = "Follicular Phase";
            daysUntilNextPhase = 14 - cycleDay;
            nextPhase = "Ovulation";
            explanation = "The body is preparing for ovulation.";
        } else if (cycleDay == 14) {
            currentPhase = "Ovulation";
            daysUntilNextPhase = 1;
            nextPhase = "Luteal Phase";
            explanation = "The ovary releases a mature egg.";
        } else {
            currentPhase = "Luteal Phase";
            daysUntilNextPhase = 29 - cycleDay;
            nextPhase = "Menstrual Phase";
            explanation = "The body is preparing for a possible pregnancy.";
        }

        return { currentPhase, daysUntilNextPhase, nextPhase, explanation };
    }
}
