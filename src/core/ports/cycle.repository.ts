import {CyclePhase} from "../domain/cycle-phase";

export interface CycleRepository {
    getCurrentPhase(today: Date): CyclePhase;
    saveStartDate(date: Date): void;
}
