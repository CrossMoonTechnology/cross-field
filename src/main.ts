import StringRule from "./Rules/StringRule.ts";

const stringRule: StringRule = new StringRule();
//stringRule.minLength(4);
//stringRule.maxLength(5);
//stringRule.specialCharacters(2);
stringRule.numbers(3);

console.log(stringRule.validate('longlive1'));



