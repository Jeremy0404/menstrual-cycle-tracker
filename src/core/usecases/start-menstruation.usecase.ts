import { DateProvider } from '../ports/date.provider';
import { CycleRepository } from '../ports/cycle.repository';
import { BaseUsecase } from './base-usecase';

export class StartMenstruationUsecase extends BaseUsecase {
  constructor(
    private dateProvider: DateProvider,
    private cycleRepository: CycleRepository
  ) {
    super();
  }

  execute() {
    this.logger(`Executing ${StartMenstruationUsecase.name}`);
    return this.cycleRepository.saveStartDate(
      this.dateProvider.getCurrentDate()
    );
  }
}
