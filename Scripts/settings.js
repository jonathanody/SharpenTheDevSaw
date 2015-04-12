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
    timeLeftInfoPanelAnimation: 'fadeIn'
};