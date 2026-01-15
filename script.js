function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) result *= a;
    return result;
}
function q1() {
    document.getElementById('res1').innerText = "2 raised to 3 is: " + power(2, 3);
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function q2() {
    let year = 2024;
    document.getElementById('res2').innerText = year + (isLeapYear(year) ? " is a Leap Year" : " is not a Leap Year");
}
function getS(a, b, c) { return (a + b + c) / 2; }
function getArea(a, b, c) {
    let s = getS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
function q3() {
    document.getElementById('res3').innerText = "Area: " + getArea(5, 6, 7).toFixed(2);
}
const calcAvg = (m1, m2, m3) => (m1 + m2 + m3) / 3;
const calcPerc = (m1, m2, m3) => ((m1 + m2 + m3) / 300) * 100;
function q4() {
    let m1 = 80, m2 = 90, m3 = 85;
    let avg = calcAvg(m1, m2, m3);
    let per = calcPerc(m1, m2, m3);
    document.getElementById('res4').innerText = `Avg: ${avg.toFixed(1)}, Perc: ${per.toFixed(1)}%`;
}
function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}
function q5() {
    document.getElementById('res5').innerText = "Index: " + myIndexOf("Hello", "o");
}
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
function q6() {
    document.getElementById('res6').innerText = removeVowels("Hello World");
}
function countVowelPairs(text) {
    let count = 0;
    let str = text.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
        let char1 = str[i], char2 = str[i+1];
        if ("aeiou".includes(char1) && "aeiou".includes(char2)) {
            switch(char1 + char2) {
                default: count++;
            }
        }
    }
    return count;
}
function q7() {
    let text = "Pleases read this application and give me gratuity";
    document.getElementById('res7').innerText = "Pairs found: " + countVowelPairs(text);
}

// 8. Distance Conversion
function toMeters(km) { return km * 1000; }
function toFeet(km) { return km * 3280.84; }
function toInches(km) { return km * 39370.1; }
function toCm(km) { return km * 100000; }
function q8() {
    let km = 5;
    document.getElementById('res8').innerText = `${toMeters(km)}m, ${toFeet(km).toFixed(0)}ft`;
}

// 9. Overtime Pay
function calcOvertime(hours) {
    if (hours <= 40) return 0;
    return (hours - 40) * 12;
}
function q9() {
    document.getElementById('res9').innerText = "Overtime Pay: Rs. " + calcOvertime(45);
}

function q10() {
    let amount = 570;
    let hundreds = Math.floor(amount / 100);
    let fifties = Math.floor((amount % 100) / 50);
    let tens = Math.floor(((amount % 100) % 50) / 10);
    document.getElementById('res10').innerText = `100s: ${hundreds}, 50s: ${fifties}, 10s: ${tens}`;
}