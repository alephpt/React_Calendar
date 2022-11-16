module.exports = {
    WEEK_DAYS: [
        "Moonday",
        "Tyrsday",
        "Odensday",
        "Thorsday",
        "Friggsday",
        "Saturnday",
        "Sunday"
    ],

    MONTH_NAMES: [
        "Janus",
        "Februa",
        "Mars",
        "Aperio",
        "Maia",
        "Juno",
        "Julius",
        "Augustus",
        "Septem",
        "Octo",
        "Novem",
        "Decem"
    ],

    MONTH_DAYS: [
        31,     // January
        28,     // February
        31,     // March
        30,     // April
        31,     // May
        30,     // June
        31,     // July
        31,     // August
        30,     // September
        31,     // October
        30,     // November
        31      // December
    ],

    isLeapYear: function(currentYear) {
        if (currentYear % 4 == 0 && currentYear % 100 != 0 ||
            currentYear % 400 == false) {
            return true;
        }
        return false;
    }

}