
function timeConversion(s) {
    // Write your code here

    let str = s.split(":");
    let hour = str[0];
    let min = str[1];
    let mixVal = str[2];

    let secRegex = /\d\d/;
    let noonRegex = /[A-Z][A-Z]/;
    let sec = str[2].match(secRegex)[0];
    let amORpm = str[2].match(noonRegex)[0];

    let resultArr = [];

    let amHours = {
        "01": "01",
        "02": "02",
        "03": "03",
        "04": "04",
        "05": "05",
        "06": "06",
        "07": "07",
        "08": "08",
        "09": "09",
        "10": "10",
        "11": "11",
        "12": "00"
    }

    let pmHours = {
        "01": "13",
        "02": "14",
        "03": "15",
        "04": "16",
        "05": "17",
        "06": "18",
        "07": "19",
        "08": "20",
        "09": "21",
        "10": "22",
        "11": "23",
        "12": "12"
    }

    if (amORpm == "AM") {
        resultArr.push(amHours[hour]);
    } else {
        resultArr.push(pmHours[hour]);
    }

    resultArr.push(min);
    resultArr.push(sec);

    console.log(hour);
    let result = resultArr.join(":");
    return result;
}






let str = "07:05:45PM";

let val = timeConversion(str);
console.log(val);