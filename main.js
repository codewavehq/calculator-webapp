document.getElementById("btn_0").onclick = function() { btn_Value(0); };
document.getElementById("btn_plus").onclick = function() { btn_Value("+"); };
document.getElementById("btn_minus").onclick = function() { btn_Value("-"); };
document.getElementById("btn_multiply").onclick = function() { btn_Value("*"); };
document.getElementById("btn_divide").onclick = function() { btn_Value("/"); };
document.getElementById("btn_equal").onclick = function() { calculateResult(); };
document.getElementById("btn_clear").onclick = function() { clearResult(); };
document.getElementById("btn_dot").onclick = function() { btn_Value("."); };
document.getElementById("btn_percent").onclick = function() { btn_Value("%"); };
document.getElementById("btn_ce").onclick = function() { removeLastCharacter(); };
document.getElementById("btn_1").onclick = function() { btn_Value(1); };
document.getElementById("btn_2").onclick = function() { btn_Value(2); };
document.getElementById("btn_3").onclick = function() { btn_Value(3); };
document.getElementById("btn_4").onclick = function() { btn_Value(4); };
document.getElementById("btn_5").onclick = function() { btn_Value(5); };
document.getElementById("btn_6").onclick = function() { btn_Value(6); };
document.getElementById("btn_7").onclick = function() { btn_Value(7); };
document.getElementById("btn_8").onclick = function() { btn_Value(8); };
document.getElementById("btn_9").onclick = function() { btn_Value(9); };
document.getElementById("btn_sign").onclick = function() { toggleSign(); };

let result = document.querySelector(".result");
result.value = "0";

const btn_Value = (value) => {
    if (result.value === "0" || result.value === "Error") {
        result.value = value.toString();
    } else {
        result.value += value.toString();
    }
    if (result.value.length > 20) {
        result.value = "Error: Too many digits";
    }
};

const clearResult = () => {
    result.value = "0";
};

const removeLastCharacter = () => {
    if (result.value.length > 1) {
        result.value = result.value.slice(0, -1);
    } else {
        result.value = "0";
    }
};

const calculateResult = () => {
    try {
        let expression = result.value.replace("%", "/100");
        result.value = Function(`"use strict"; return (${expression})`)(); // Safer alternative to eval
    } catch (e) {
        result.value = "Error";
    }
};

const toggleSign = () => {
    if (result.value.startsWith("-")) {
        result.value = result.value.slice(1);
    } else if (result.value !== "0") {
        result.value = "-" + result.value;
    }
};