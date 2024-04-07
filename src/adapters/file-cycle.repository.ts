import fs from 'fs';
import path from 'path';
import {CycleRepository} from "../core/ports/cycle.repository";
import {CyclePhaseEntity} from "../core/domain/cycle-phase-entity";
import {CyclePhaseDetails, CyclePhaseEnum} from "../core/domain/cycle-phase.enum";

const cycleLength = 28;
const DATA_FILE = path.join(__dirname, '..', '..', 'db.json');

function getCurrentPhase(cycleDay: number) {
    if (cycleDay >= 1 && cycleDay <= 5) {
        return CyclePhaseEnum.Menstrual;
    } else if (cycleDay >= 6 && cycleDay <= 13) {
        return CyclePhaseEnum.Follicular;
    } else if (cycleDay === 14) {
        return CyclePhaseEnum.Ovulation;
    } else {
        return CyclePhaseEnum.Luteal;
    }
}

function getCycleDay(currentDate: Date, menstruationStartDate: Date) {
    const diffTime = Math.abs(currentDate.getTime() - menstruationStartDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays % cycleLength;
}

export class FileCycleRepository implements CycleRepository {
    getCurrentPhase(today: Date): CyclePhaseEntity {
        try {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
            const data = JSON.parse(fileContent);
            return this.calculateCycleData(new Date(data.menstruationStartDate), today);
        } catch (err) {
            throw new Error(`Cannot retrieve infos: ${err}`);
        }
    }

    saveStartDate(date: Date): void {
        const data = { menstruationStartDate: date.toISOString().split('T')[0] }; // Ensuring date is stored in YYYY-MM-DD format
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    }

    private calculateCycleData(menstruationStartDate: Date, currentDate: Date): CyclePhaseEntity {
        const cycleDay = getCycleDay(currentDate, menstruationStartDate);
        const currentPhase = getCurrentPhase(cycleDay);
        const daysUntilNextPhase = (cycleDay >= 14) ? cycleLength - cycleDay + 1 : 14 - cycleDay;

        return {
            currentPhase: currentPhase,
            daysUntilNextPhase: daysUntilNextPhase,
            nextPhase: CyclePhaseDetails[currentPhase].nextPhase,
            explanation: CyclePhaseDetails[currentPhase].explanation
        };
    }
}
