import { CyclePhaseEntity } from '../domain/cycle-phase-entity';

export interface CycleRepository {
  getCurrentPhase(today: Date): CyclePhaseEntity;
  saveStartDate(date: Date): void;
}
