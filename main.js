function C(n, k) {

    var p = 1, m = n;

    for (j = 1; j <= k; j++) {
        p = p * m / j;
        m--;
    }
    return p;  // The function returns the product of p1 and p2

} /*broj k kombinacija bez ponavljanja od na elemenata*/


function klik() {
    a[1] = parseInt(document.getElementById("i1").value);
    a[2] = parseInt(document.getElementById("i2").value);
    a[3] = parseInt(document.getElementById("i3").value);
    a[4] = parseInt(document.getElementById("i4").value);
    a[5] = parseInt(document.getElementById("i5").value);
    a[6] = parseInt(document.getElementById("i6").value);
    a[7] = parseInt(document.getElementById("i7").value);
    console.log(a.sort(function (p, q) {
        return p - q;
    }));

    document.getElementById("i1").value = a[1];
    document.getElementById("i2").value = a[2];
    document.getElementById("i3").value = a[3];
    document.getElementById("i4").value = a[4];
    document.getElementById("i5").value = a[5];
    document.getElementById("i6").value = a[6];
    document.getElementById("i7").value = a[7];
    // console.log(BrojKombinacije(a));
    document.getElementById("i").value = BrojKombinacije(a);
}
var b = 0;
function klik1() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 1;
    document.getElementById("dugme1").disabled = true;

}

function klik2() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 2;
    document.getElementById("dugme2").disabled = true;
}
function klik3() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 3;
    document.getElementById("dugme3").disabled = true;
}
function klik4() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 4;
    document.getElementById("dugme4").disabled = true;
}
function klik5() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 5;
    document.getElementById("dugme5").disabled = true;
}
function klik6() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 6;
    document.getElementById("dugme6").disabled = true;
}
function klik7() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 7;
    document.getElementById("dugme7").disabled = true;
}
function klik8() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 8;
    document.getElementById("dugme8").disabled = true;
}
function klik9() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 9;
    document.getElementById("dugme9").disabled = true;
}
function klik10() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 10;
    document.getElementById("dugme10").disabled = true;
}
function klik11() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 11;
    document.getElementById("dugme11").disabled = true;
}
function klik12() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 12;
    document.getElementById("dugme12").disabled = true;
}
function klik13() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 13;
    document.getElementById("dugme13").disabled = true;
}
function klik14() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 14;
    document.getElementById("dugme14").disabled = true;
}
function klik15() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 15;
    document.getElementById("dugme15").disabled = true;
}
function klik16() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 16;
    document.getElementById("dugme16").disabled = true;
}
function klik17() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 17;
    document.getElementById("dugme17").disabled = true;
}
function klik18() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 18;
    document.getElementById("dugme18").disabled = true;
}
function klik19() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 19;
    document.getElementById("dugme19").disabled = true;
}
function klik20() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 20;
    document.getElementById("dugme20").disabled = true;
}
function klik21() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 21;
    document.getElementById("dugme21").disabled = true;
}
function klik22() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 22;
    document.getElementById("dugme22").disabled = true;
}
function klik23() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 23;
    document.getElementById("dugme23").disabled = true;
}
function klik24() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 24;
    document.getElementById("dugme24").disabled = true;
}
function klik25() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 25;
    document.getElementById("dugme25").disabled = true;
}
function klik26() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 26;
    document.getElementById("dugme26").disabled = true;
}
function klik27() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 27;
    document.getElementById("dugme27").disabled = true;
}
function klik28() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 28;
    document.getElementById("dugme28").disabled = true;
}
function klik29() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 29;
    document.getElementById("dugme29").disabled = true;
}
function klik30() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 30;
    document.getElementById("dugme30").disabled = true;
}
function klik31() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 31;
    document.getElementById("dugme31").disabled = true;
}
function klik32() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 32;
    document.getElementById("dugme32").disabled = true;
}
function klik33() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 33;
    document.getElementById("dugme33").disabled = true;
}
function klik34() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 34;
    document.getElementById("dugme34").disabled = true;
}
function klik35() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 35;
    document.getElementById("dugme35").disabled = true;
}
function klik36() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 36;
    document.getElementById("dugme36").disabled = true;
}
function klik37() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 37;
    document.getElementById("dugme37").disabled = true;
}
function klik38() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 38;
    document.getElementById("dugme38").disabled = true;
}
function klik39() {
    window.b++;
    if (window.b == 1) text = "i1";
    else if (window.b == 2) text = "i2";
    else if (window.b == 3) text = "i3";
    else if (window.b == 4) text = "i4";
    else if (window.b == 5) text = "i5";
    else if (window.b == 6) text = "i6";
    else if (window.b == 7) { text = "i7"; document.getElementById("dugme").disabled = false; }
    else text = "i8";
    document.getElementById(text).value = 39;
    document.getElementById("dugme39").disabled = true;
}

function PretvoriBrojULotoKombinaciju() {
    x = parseInt(document.getElementById("odigratikombinaciju").value);
    console.log(x);
    if (x <= 0 || x > 15380937) {
        alert("Unesite broj izmedju 1 i 15380937");
        return;
    }
    var i, j, k, p, c;
    var b = [0, 0, 0, 0, 0, 0, 0];
    for (i = 0, j = 1; i <= 6; i++) {
        p = j - 1;
        while (x > 1) {
            c = C(39 - j, 6 - i);
            x -= c;
            j++; p = j - 1;
        }
        // p=j-1;
        if (x < 0) {
            b[i] = p;
            x += c;
        }
        if (x == 0) {
            b[i] = p; t = 0;
            for (k = 6; k >= i + 1; k--) {

                b[k] = 39 - t; t++;
            }
            break;
        }
        else if (x == 1) {
            for (k = i; k <= 6; k++) {
                p++;
                b[k] = p;
            }
            break;
        }

    }
    console.log(b);
    document.getElementById("ii1").value = b[0];
    document.getElementById("ii2").value = b[1];
    document.getElementById("ii3").value = b[2];
    document.getElementById("ii4").value = b[3];
    document.getElementById("ii5").value = b[4];
    document.getElementById("ii6").value = b[5];
    document.getElementById("ii7").value = b[6];
}

function Resetuj() {
    document.getElementById("dugme39").disabled = false;
    document.getElementById("dugme38").disabled = false;
    document.getElementById("dugme37").disabled = false;
    document.getElementById("dugme36").disabled = false;
    document.getElementById("dugme35").disabled = false;
    document.getElementById("dugme34").disabled = false;
    document.getElementById("dugme33").disabled = false;
    document.getElementById("dugme32").disabled = false;
    document.getElementById("dugme31").disabled = false;
    document.getElementById("dugme30").disabled = false;
    document.getElementById("dugme29").disabled = false;
    document.getElementById("dugme28").disabled = false;
    document.getElementById("dugme27").disabled = false;
    document.getElementById("dugme26").disabled = false;
    document.getElementById("dugme25").disabled = false;
    document.getElementById("dugme24").disabled = false;
    document.getElementById("dugme23").disabled = false;
    document.getElementById("dugme22").disabled = false;
    document.getElementById("dugme21").disabled = false;
    document.getElementById("dugme20").disabled = false;
    document.getElementById("dugme19").disabled = false;
    document.getElementById("dugme18").disabled = false;
    document.getElementById("dugme17").disabled = false;
    document.getElementById("dugme16").disabled = false;
    document.getElementById("dugme15").disabled = false;
    document.getElementById("dugme14").disabled = false;
    document.getElementById("dugme13").disabled = false;
    document.getElementById("dugme12").disabled = false;
    document.getElementById("dugme11").disabled = false;
    document.getElementById("dugme10").disabled = false;
    document.getElementById("dugme9").disabled = false;
    document.getElementById("dugme8").disabled = false;
    document.getElementById("dugme7").disabled = false;
    document.getElementById("dugme6").disabled = false;
    document.getElementById("dugme5").disabled = false;
    document.getElementById("dugme4").disabled = false;
    document.getElementById("dugme3").disabled = false;
    document.getElementById("dugme2").disabled = false;
    document.getElementById("dugme1").disabled = false;
    document.getElementById("dugme").disabled = true;
    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";
    document.getElementById("i3").value = "";
    document.getElementById("i4").value = "";
    document.getElementById("i5").value = "";
    document.getElementById("i6").value = "";
    document.getElementById("i7").value = "";
    document.getElementById("i").value = "";
    window.b = 0;
}

var broj = 39;

// var a = [0, 3, 5, 6, 7, 8, 9, 10]; /**kombinacija  */
var a = [0, 33, 34, 35, 36, 37, 38, 39]; /**kombinacija  */
// for(d=1;d<=7;d++) a[d]=parseInt( prompt("Unesite"+d+". broj od 1 do 39 ne ponavljajuci brojeve"));
// a[0]=0; console.log(a);

var brojkombinacije = 0, br = 0;
var i, j, p;
function BrojKombinacije(a) {
    window.brojkombinacije = 0;
    for (i = 0; i <= 6; i++) {

        for (p = a[i] + 1; p < a[i + 1]; p++) {
            brojkombinacije += C(39 - p, 6 - i);

        }
        // console.log(brojkombinacije);

    }
    brojkombinacije++;
    return (brojkombinacije);
}
