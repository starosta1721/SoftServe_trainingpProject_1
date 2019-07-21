interface Logic {
    number1: any;
    number2: any;
    sign: string;
    sum(num1: number, num2: number): number;
    sub(num1: number, num2: number): number;
    div(num1: number, num2: number): number;
    mul(num1: number, num2: number): number;  
    calc(num1: string, num2: string, sign: string): number;
    isNumeric(n: string): boolean;
}

class Logic implements Logic {
    number1: any;
    number2: any;
    sign: string;
    constructor(
        first_number: string, 
        second_number: string, 
        operation_sign: string,
        validationObj: void) {
            
            this.number1 = first_number;
            this.number2 = second_number;
            this.sign = operation_sign;
            this.validation = validationObj;
        }
    sum(num1: number, num2: number): number{
        return num1 + num2;
    };
    sub(num1: number, num2: number): number{
        return num1 - num2;
    };
    div(num1: number, num2: number): number{
        return num1 / num2;
    };
    mul(num1: number, num2: number): number{
        return num1 * num2;
    };
    isNumeric(n: any): boolean {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    calc(num1: string, num2: string, sign: string): any {
        let answer: string;
        this.number1 = num1;
        let res: boolean = this.isNumeric(this.number1);
        if (res) {
            this.number1 = Number(this.number1);
            let validationAnswer: boolean = this.validation.validate(this.number1);
            if(!validationAnswer) {
                answer = "Uncorrect input";
            } else {
               return this.number1; 
            }
        }
        this.number2 = num2;
        res = this.isNumeric(this.number2);
        if (res) {
            this.number2 = Number(this.number2);
            let validationAnswer: boolean = this.validation.validate(this.number2);
            if(!validationAnswer) {
                answer = "Uncorrect input";
            } else {
               return this.number2; 
            }
        }
        if (answer != "Uncorrect input") {
            switch (sign) {
                case "+":
                    return answer = String(this.sum(this.number1, this.number2));
                    break;
                case "-":
                    return answer = String(this.sub(this.number1, this.number2));
                    break;
                case "/":
                    return answer = String(this.div(this.number1, this.number2));
                    break;
                case "*":
                    return answer = String(this.mul(this.number1, this.number2));
                    break;
                default:
                    break;
            }
        return answer;
        }
    return answer;
    }
}



let logic: Logic = new Logic("2", "3", "+", )