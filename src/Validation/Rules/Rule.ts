import {RuleInterface} from "./RuleInterface.ts";

abstract class Rule implements RuleInterface {
    protected validations: object = {};
    protected value : any;

    abstract validate(value : any): boolean;

}

export default Rule;