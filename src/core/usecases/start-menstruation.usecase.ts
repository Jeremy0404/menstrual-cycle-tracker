import {DateProvider} from '../ports/date.provider';
import {CycleRepository} from '../ports/cycle.repository';

export class StartMenstruationUsecase {
    constructor(
        private dateProvider: DateProvider,
        private cycleRepository: CycleRepository
    ) {}

    execute() {
        return this.cycleRepository.saveStartDate(this.dateProvider.getCurrentDate());
    }
}
