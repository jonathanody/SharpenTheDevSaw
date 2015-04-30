var settings = {
    stats: {
        averageWorkingHoursPerWeek: 37.5,
        
        youCouldDoItems: [
            {
                title: '.NET Rocks',
                url: 'http://www.dotnetrocks.com/',
                template: 'Listen to <span class="emphasize">{0}</span> podcasts',
                minutes: 60
            },
            {
                title: 'TechEd',
                url: 'http://channel9.msdn.com/Events/TechEd',
                template: 'Watch <span class="emphasize">{0}</span> sessions',
                minutes: 75
            },
            {
                title: 'Morning Dew',
                url: 'http://www.alvinashcraft.com/',
                template: 'Read <span class="emphasize">{0}</span> blog posts',
                minutes: 20
            },
            {
                title: 'Pluralsight',
                url: 'http://www.pluralsight.com',
                template: 'Consume <span class="emphasize">{0}</span> courses',
                minutes: 181
            },
            {
                title: 'NDC',
                url: 'http://ndcvideos.com',
                template: 'View <span class="emphasize">{0}</span> videos',
                minutes: 60
            },
            {
                title: 'DDD!',
                url: 'http://en.wikipedia.org/wiki/Developer!_Developer!_Developer!',
                template: 'Attend <span class="emphasize">{0}</span> full day events',
                minutes: 480
            }
        ]
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
    
    youCouldDoItemsContainerElementName: 'you-could-do-items-container',
    youCouldDoItemsContainerAnimation: 'fadeIn',
    
    timeLeftInfoPanelElementName: 'left-this-year-container',
    timeLeftInfoPanelAnimation: 'fadeIn',
    
    notificationMessages: {
        invalidInput: 'Please enter a positive numeric value for the number of minutes you want to commit a day',
        zeroMinutes: 'Surely you can commit more than zero minutes a day?! &#9785;',
        moreThanADayOfMinutes: 'Impressive commitment! Sadly, that\'s more minutes than there are in a day. However, I\'ll show you what you could achieve if you were a superhero! &#9786;'
    }
};