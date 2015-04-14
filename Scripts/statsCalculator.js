"use strict";

var statsCalculator = function () {    
    var calculateMinsPerYear = function (minsCommited) {
        return minsCommited * 365;
    },

    calculateHoursPerYear = function (minsCommited) {
        return ((minsCommited * 365) / 60).toFixed(0);
    },

    calculateAverageWorkingWeeks = function (minsCommited) {
        return (calculateHoursPerYear(minsCommited) / settings.stats.averageWorkingHoursPerWeek).toFixed(0);
    },    

    calculateDaysLeftThisYear = function () {
        var today = new Date();
        var endOfYear = new Date(today.getFullYear(), 11, 31);
        var oneDay = 1000 * 60 * 60 * 24;
        return Math.ceil((endOfYear.getTime() - today.getTime()) / (oneDay));
    },
        
    calculateMinutesLeftThisYear = function (minsCommited) {
        return (calculateDaysLeftThisYear() * minsCommited).toFixed(0);
    },
        
    calculateInfoStat = function (minsCommitted, statDivider) {                        
        return (calculateMinsPerYear(minsCommitted) / statDivider).toFixed(0);
    }

    return {
        calculateMinsPerYear: calculateMinsPerYear,
        calculateHoursPerYear: calculateHoursPerYear,
        calculateAverageWorkingWeeks: calculateAverageWorkingWeeks,        
        calculateMinutesLeftThisYear: calculateMinutesLeftThisYear,
        calculateInfoStat: calculateInfoStat
    }
}();
