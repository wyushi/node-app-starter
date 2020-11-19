import { Logger } from "./Logger";

export class ConsoleLogger implements Logger {
    
    log(s: string): void {
        console.log(s);
    }

}