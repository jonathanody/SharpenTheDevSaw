"use strict";

var settings = {
    stats: {
        dividers: {
            dotNetRocks: 60,
            techEd: 75,
            blogPost: 20,
            ndcVideo: 60,
            pluralsightCourse: 181,
            dddswEvent: 480
        },
        identifiers: {
            dotNetRocks: 'dotNetRocks',
            techEd: 'techEd',
            blogPost: 'blogPost',
            ndcVideo: 'NdcVideo',
            pluralsightCourse: 'pluralsightCourse',
            dddswEvent: 'dddswEvent'
        },
        averageWorkingHoursPerWeek: 37.5
    },    

    countUp: {
        options: {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        },        
        duration: 1.5,
        id: {
            minutesPerYear: 'minutesPerYearCountUp',
            avgWorkingWeek: 'workingWeeksCountUp',
            hoursPerYear: 'hoursPerYearCountUp'
        }
    },
    
    minsCommitedInputElementName: 'minutesCommited',
    
    youCouldDoInfoPanelElementName: 'you-could-do-info-panel',
    youCouldDoInfoPanelAnimation: 'fadeIn', 
    
    timeLeftInfoPanelElementName: 'left-this-year-container',
    timeLeftInfoPanelAnimation: 'fadeIn',
    
    notificationMessages: {
        invalidInput: 'Please enter a positive numeric value for the number of minutes you want to commit a day',
        zeroMinutes: 'Surely you can commit more than zero minutes a day?! &#9785;',
        moreThanADayOfMinutes: 'Impressive commitment! Sadly, that\'s more minutes than there are in a day. However, I\'ll show you what you could achieve if you were a superhero! &#9786;'
    }
};