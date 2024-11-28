import Rule from "./Rule.ts";

export default class StringRule extends Rule {
    public validations: {
        max: number | null,
        min: number | null,
        numbersCount: number | null,
        specialCharacter: number | null,
        disableSequentialNumbers: number | null
    } = {
        max: null,
        min: null,
        numbersCount: null,
        specialCharacter: null,
        disableSequentialNumbers: null
    };

    public validate(value: string): boolean {
        if (this.validations.max !== null) {
            if (value.length > this.validations.max) {
                return false;
            }
        }

        if (this.validations.min !== null) {
            if (value.length < this.validations.min) {
                return false;
            }
        }

        if (this.validations.numbersCount !== null) {
            // noinspection RegExpUnnecessaryNonCapturingGroup
            const regex = new RegExp(`^(?:\\D*\\d){${this.validations.numbersCount},}\\D*$`);

            if (!regex.test(value)) {
                return false;
            }
        }

        if (this.validations.specialCharacter !== null) {
            const result = value.match(/[^a-zA-Z0-9\s]/g);
            if (result === null || result.length < this.validations.specialCharacter) {
                return false;
            }
        }

        let count = 0;

        for (let i = 0; i < value.length; i++) {
            if (!Number.isNaN(parseInt(value[i]))) {
                if (count === 0) {
                    count = 1;
                    continue;
                }

                if (this.validations.disableSequentialNumbers !== null) {
                    if (parseInt(value[i]) === parseInt(value[i - 1]) + 1) {
                        if (count + 1 > this.validations.disableSequentialNumbers) {
                            return false;
                        }

                        count++;
                        continue;
                    }
                }
            }

            count = 0;
        }
        return true;
    }

    public maxLength(max: number): StringRule {
        this.validations.max = max;

        return this;
    }

    public minLength(min: number): StringRule {
        this.validations.min = min;

        return this;
    }

    /**
     * @param count min numbers count
     */
    public numbers(count: number = 1): StringRule {
        this.validations.numbersCount = count;

        return this;
    }

    /**
     *
     * @param count min special characters
     */
    public specialCharacters(count: number = 1): StringRule {
        this.validations.specialCharacter = count;
        return this;
    }

    /**
     *
     * @param maxLength min sequential numbers
     *  The allowed string size is at most equal to the parameter passed
     */
    public disableSequentialNumbers(maxLength: number = 3): StringRule {
        this.validations.disableSequentialNumbers = maxLength;
        return this;
    }
}