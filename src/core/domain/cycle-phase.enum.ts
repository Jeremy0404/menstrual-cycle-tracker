export enum CyclePhaseEnum {
    Menstrual = "Menstrual Phase",
    Follicular = "Follicular Phase",
    Ovulation = "Ovulation",
    Luteal = "Luteal Phase"
}

export const CyclePhaseDetails = {
    [CyclePhaseEnum.Menstrual]: {
        explanation: "The uterus is shedding its lining.",
        nextPhase: CyclePhaseEnum.Follicular
    },
    [CyclePhaseEnum.Follicular]: {
        explanation: "The body is preparing for ovulation.",
        nextPhase: CyclePhaseEnum.Ovulation
    },
    [CyclePhaseEnum.Ovulation]: {
        explanation: "The ovary releases a mature egg.",
        nextPhase: CyclePhaseEnum.Luteal
    },
    [CyclePhaseEnum.Luteal]: {
        explanation: "The body is preparing for a possible pregnancy.",
        nextPhase: CyclePhaseEnum.Menstrual
    }
};
