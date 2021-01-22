// Github Repository link :   https://github.com/arju10/JavaScript_Problem_Solving 


// Convert Kilometer To Meter

function kilometerToMeter(kilometer) {
    if (kilometer < 0 || kilometer == '') {
        return "Distance can't be a negative number or string . It always allows positive numbers.";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}





// Budget Calculator

function budgetCalculator(clock, phone, laptop) {
    var clockPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalBudget = clockPrice * clock + phonePrice * phone + laptopPrice * laptop;
    return totalBudget;

}





// Hotel Cost

function hotelCost(day) {
    var first_10days_per_days_cost = 100;
    var after10days_per_days_cost = 80;
    var after20days_per_days_cost = 50;
    if (1 <= day && day <= 10) {
        totalCost = first_10days_per_days_cost * day;
        return totalCost;
    }
    else if (11 <= day && day <= 20) {
        totalCost = first_10days_per_days_cost * day + after10days_per_days_cost * (day - 10);
        return totalCost;
    }
    else if (21 <= day) {
        totalCost = first_10days_per_days_cost * day + after10days_per_days_cost * (day - 10) + after20days_per_days_cost * (day - 20);
        return totalCost;
    }
    return totalCost;
}






//Mega Friends

function megaFriend(arra) {
    var max_str = arra[0].length;
    var longest_string = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            longest_string = arra[i];
            max_str = maxi;
        }
    }
    return longest_string;
}
