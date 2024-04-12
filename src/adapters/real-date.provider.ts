import { DateProvider } from '../core/ports/date.provider';

export class RealDateProvider implements DateProvider {
  getCurrentDate(): Date {
    return new Date();
  }
}
