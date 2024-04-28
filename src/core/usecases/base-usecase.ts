export class BaseUsecase {
  protected logger(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}
