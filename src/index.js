module.exports = function toReadable (number) {
    const unitsAndTeens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const arr = number.toString().split('');

    if (number < 20) {
        return unitsAndTeens[number];
    } else if (number < 100) {
        return number % 10 === 0 ? tens[arr[0] - 2] : tens[arr[0] - 2] + " " + unitsAndTeens[arr[1]];
    } else if (number >= 100 && number < 1000) {
        if (number === 100) {
            return 'one hundred'
        };
        return number % 100 === 0 ? unitsAndTeens[arr[0]] + ' hundred' : unitsAndTeens[arr[0]] + ' hundred ' + toReadable(+arr.slice(1).join(''));
    }
}
