function convert() {
    let to_convert = document.getElementById("to_convert").value;
    to_convert = parseFloat(to_convert);

    function decimal(num) {
        if (num === 0) {
            return "0";
        }

        let binary = '';
        while (num > 0) {
            binary = (num % 2).toString() + binary;
            num = Math.floor(num / 2);
        }
        return binary;
    }

    let result = decimal(to_convert);
    let final = document.getElementById('result');
    final.value = result;
}
