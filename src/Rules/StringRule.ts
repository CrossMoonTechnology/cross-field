import Rule from "./Rule.ts";

export default class StringRule extends Rule {
    public validations: { max: number | null, min: number | null, numbersCount: number | null, specialCharacter: number | null } = {
        max: null,
        min: null,
        numbersCount: null,
        specialCharacter: null
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
            const regex = /\W|_/;
            if(regex.test(value)) {
                return false;
            }
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

    public numbers(count: number = 1): StringRule {
        this.validations.numbersCount = count;

        return this;
    }

    public specialCharacters(count: number = 1): StringRule {
       this.validations.specialCharacter = count;
           return this;
    }

    public disableSequentialNumbers(maxLength: number = 3) {
        // Verifica se a string possui uma sequencia de numeros
        // O tamanho da sequencia permitida é nom aximo igual ao parametro passado
        //
        // disableSequentialNumbers(3)
        // string = '1234hdjfk' -> false
        // string = '123fjwelifjw_4_eiljf-3' -> true
    }
}