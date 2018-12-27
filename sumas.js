function sumTo(n1, n2) {
    const a = Array.from(n1);
    const b = Array.from(n2);
    let c = "";
    let aNegative = "";
    let bNegative = "";
    if (a[0] === "-") {
        aNegative = "-";
        a.splice(0, 1);
    }
    if (b[0] === "-") {
        bNegative = "-";
        b.splice(0, 1);
    }
    let countTo = 1;
    let next = false;

    const lngA = a.length;
    const lngB = b.length;
    if (lngA > lngB) {
        for (let d = 0; d < lngA - lngB; d++) {
            b.unshift("0");
        }
        countTo = lngA;
    } else if (lngA < lngB) {
        for (let d = 0; d < lngB - lngA; d++) {
            a.unshift("0");
        }
        countTo = lngB;
    }
    for (let i = (countTo - 1); i >= 0; i--) {
        let sub = (Number(aNegative + a[i]) + Number(bNegative + b[i])) + (next ? 1 : 0);
        let clean = Number((sub + "").replace("-", ""));
        if (clean > 9 && i > 0) {
            c = (clean - 10) + "" + c;
            next = true;
        } else {
            c = clean + "" + c;
            next = false;
        }
    }
    if (aNegative === "-" && ((n1.length - 1) > n2.length) ||
        bNegative === "-" && (n1.length < (n2.length - 1))) {
        c = "-" + c;
    }
    return c;
}