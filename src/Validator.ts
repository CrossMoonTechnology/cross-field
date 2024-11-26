import Rule from "./Rules/Rule.ts";

export default class Validator {
    public rules: Array<Rule> = [];

    constructor(rules: Array<Rule>) {
        this.rules = rules;
    }
}