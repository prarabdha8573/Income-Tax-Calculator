function calc_income_tax(){
    var income = document.getElementById("Income").value;
    if (income<=250000) {
        document.getElementById("out").innerHTML = income;
    }
    else if (income>250000 && income<=500000) {
        income = (5/100)*income;
        document.getElementById("out").innerHTML = income;
    }
    else if (income>500000 && income<=750000) {
        income = (10/100)*income;
        document.getElementById("out").innerHTML = income;
    }
    else if (income>750000 && income<=1000000) {
        income = (15/100)*income;
        document.getElementById("out").innerHTML = income;
    }
    else if (income>1000000 && income<=1250000) {
        income = (20/100)*income;
        document.getElementById("out").innerHTML = income;
    }
    else if (income>1250000 && income<=1500000) {
        income = (25/100)*income;
        document.getElementById("out").innerHTML = income;
    }
    else if (income>1500000) {
        income = (30/100)*income;
        document.getElementById("out").innerHTML = income;
    }
}