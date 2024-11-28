import StringRule from "./Validation/Rules/StringRule.ts";
import EmailRule from "./Validation/Rules/EmailRule.ts";

//const stringRule: StringRule = new StringRule();
//stringRule.minLength(4);
//stringRule.maxLength(5);
//stringRule.specialCharacters(2);
//stringRule.numbers(3);
//stringRule.disableSequentialNumbers(2);

const emailRule: EmailRule = new EmailRule();
emailRule.domain(['gmail.com','yahoo.com','outlook.com','icloud.com']);
console.log(emailRule.validate('camila@icloud.com'));




//console.log(stringRule.validate('12la'));



