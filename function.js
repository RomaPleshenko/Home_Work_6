let num = prompt("Введите число");
let exponent = prompt("Введите степень");
    function calcPower(num, exponent=1) {
        if (isNaN(num)){
            return "error"
        }
        if (isNaN(exponent)){
            return "error"
        }
        let result = num**exponent;
        return result;
    }
    alert(calcPower(num,exponent));