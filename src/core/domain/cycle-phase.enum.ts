export enum CyclePhaseEnum {
  MENSTRUAL = 'MENSTRUAL',
  FOLLICULAR = 'FOLLICULAR',
  OVULATION = 'OVULATION',
  LUTEAL = 'LUTEAL',
}

interface LevelDetails {
  level: number;
  explanation: string;
}

export interface CyclePhaseDetails {
  name: string;
  explanation: string;
  feelings: LevelDetails;
  libido: LevelDetails;
  energyLevel: LevelDetails;
  nextPhase: CyclePhaseEnum;
}

export const cyclePhaseDetailsMap = new Map<CyclePhaseEnum, CyclePhaseDetails>([
  [
    CyclePhaseEnum.MENSTRUAL,
    {
      name: 'Menstrual',
      explanation: 'The uterus is shedding its lining.',
      feelings: {
        level: 1,
        explanation: 'Might feel sad or experience PMS symptoms',
      },
      libido: { level: 1, explanation: 'Lower libido' },
      energyLevel: { level: 1, explanation: 'Lower energy' },
      nextPhase: CyclePhaseEnum.FOLLICULAR,
    },
  ],
  [
    CyclePhaseEnum.FOLLICULAR,
    {
      name: 'Follicular',
      explanation: 'The body is preparing for ovulation.',
      feelings: {
        level: 2,
        explanation: 'Generally feel better and more energetic',
      },
      libido: { level: 2, explanation: 'Libido starts to increase' },
      energyLevel: { level: 2, explanation: 'Energy levels are rising' },
      nextPhase: CyclePhaseEnum.OVULATION,
    },
  ],
  [
    CyclePhaseEnum.OVULATION,
    {
      name: 'Ovulation',
      explanation: 'The ovary releases a mature egg.',
      feelings: { level: 3, explanation: 'Feeling great, high energy' },
      libido: { level: 3, explanation: 'Libido is at its peak' },
      energyLevel: { level: 3, explanation: 'High energy, time to be active!' },
      nextPhase: CyclePhaseEnum.LUTEAL,
    },
  ],
  [
    CyclePhaseEnum.LUTEAL,
    {
      name: 'Luteal',
      explanation: 'The body is preparing for a possible pregnancy.',
      feelings: {
        level: 2,
        explanation: 'Mood swings are possible, PMS symptoms may start',
      },
      libido: { level: 2, explanation: 'Libido may decrease' },
      energyLevel: { level: 2, explanation: 'Energy levels start to decrease' },
      nextPhase: CyclePhaseEnum.MENSTRUAL,
    },
  ],
]);
