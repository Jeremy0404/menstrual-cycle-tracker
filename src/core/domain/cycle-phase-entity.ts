import { CyclePhaseDetails } from './cycle-phase.enum';

export interface CyclePhaseEntity {
  currentPhase: CyclePhaseDetails;
  daysUntilNextPhase: number;
}
