import { LEVELS } from "./level.enum";

export class Task {
    
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL

    constructor(name, description, completed, LEVELS){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = LEVELS

    }
}
