import {RuleInterface} from "./RuleInterface.ts";

export default class StringRule implements RuleInterface {
    public validate(): boolean {
        return false;
    }

}