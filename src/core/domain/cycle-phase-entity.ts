import {CyclePhaseEnum} from "./cycle-phase.enum";

export interface CyclePhaseEntity {
    currentPhase: CyclePhaseEnum;
    daysUntilNextPhase: number;
    nextPhase: CyclePhaseEnum;
    explanation: string;
}
