import Rule from "./Rule.ts";

export default class EmailRule extends Rule {
    public validations: { domain: Array<string> | null } = {domain: null};

    public validate(value: string): boolean {

        if (!/\S+@\S+\.\S+/.test(value)) {
            return false;
        }

        if (this.validations.domain !== null) {
            let match = false;

            for (let i = 0; i < this.validations.domain.length; i++) {
                if (value.includes(this.validations.domain[i])) {
                    match = true;
                }
            }
            if (!match) {
                return false;
            }
        }

        return true;
    }

    public domain(dom: Array<string>): EmailRule {
        this.validations.domain = dom;
        return this;
    }
}

