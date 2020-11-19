import { ConsoleLogger } from "./ConsoleLogger";
import { Logger } from "./Logger";

export class LoggerFactory {
    static create(): Logger {
        return new ConsoleLogger();
    }
}