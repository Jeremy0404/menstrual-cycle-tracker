import { DateProvider } from '../ports/date.provider';
import { CycleRepository } from '../ports/cycle.repository';

export class LoadCurrentPhaseUsecase {
  constructor(
    private dateProvider: DateProvider,
    private cycleRepository: CycleRepository
  ) {}

  execute() {
    console.log(
      `[${new Date().toISOString()}] Executing ${LoadCurrentPhaseUsecase.name}`
    );
    const today = this.dateProvider.getCurrentDate();
    return this.cycleRepository.getCurrentPhase(today);
  }
}
