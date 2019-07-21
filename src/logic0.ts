//working code
class Logica {
    number1: any;
    number2: any;
    sign: any;
    
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
        this.number1 = num1;
        this.number2 = num2;
        this.sign = sign;
        let answer: any;
        let res: boolean = this.isNumeric(this.number1);
        if (res) {
            this.number1 = Number(this.number1);
            if(this.number1 !== Number) {
                answer = "Uncorrect input1";
            } else {
               return this.number1; 
            }
        }
        this.number2 = num2;
        res = this.isNumeric(this.number2);
        if (res) {
            this.number2 = Number(this.number2);
            if(this.number2 !== Number) {
                answer = "Uncorrect input2";
            } else {
               return this.number2; 
            }
        }
        if (answer != "Uncorrect input") {
            switch (sign) {
                case "+":
                    answer = String(this.sum(this.number1, this.number2));
                    break;
                case "-":
                    answer = String(this.sub(this.number1, this.number2));
                    break;
                case "/":
                    answer = String(this.div(this.number1, this.number2));
                    break;
                case "*":
                    answer = String(this.mul(this.number1, this.number2));
                    break;
                default:
                    break;
            }
        return answer;
        }
    return answer;
    }
}



let ogica = new Logica();
console.log(ogica.calc("2", "3", "+"));

