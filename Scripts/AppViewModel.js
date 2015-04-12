(function() {
    'use strict';
    
    function AppViewModel() {
        var self = this;

        var minsCommitedInputElement = document.getElementById(settings.minsCommitedInputElementName);
        var youCouldDoInfoPanelElement = document.getElementById(settings.youCouldDoInfoPanelElementName);
        var leftThisYearContainerElement = document.getElementById(settings.timeLeftInfoPanelElementName);
        
        self.showNotifications = ko.observable(false);
        self.notifications = ko.observable("");
        
        self.previousMinsCommited = 0;
        self.minsCommited = 0;
        self.minsCommitedKO = ko.observable(0);

        self.dotNetRocksStat = ko.observable(0);
        self.techEdStat = ko.observable(0);
        self.blogStat = ko.observable(0);
        self.ndcStat = ko.observable(0);
        self.pluralsightStat = ko.observable(0);
        self.dddStat = ko.observable(0);

        self.sharpeningMinutesLeftThisYear = ko.observable(0);
        self.currentYear = new Date().getFullYear();


        self.calculateStats = function () {
            var minutesInput = minsCommitedInputElement.value;            
            
            if (validateInput(minutesInput)) {                                            
            
                if (self.previousMinsCommited !== self.minsCommited) {
                    self.updateStats();                    
                    self.minsCommitedKO(self.minsCommited);
                    self.previousMinsCommited = self.minsCommited;                    
                    annimate();
                }   
            }                             
        };

        self.updateStats = function() {
            self.updateCountUps();
            self.updateYouCouldDoInfoPanel();
            self.updateMinutesLeftThisYear();                
        };

        self.updateCountUps = function() {
            self.updateMinutesPerYearCountUp();
            self.updateAverageWorkingWeeksCountUp();
            self.updateHoursPerYearCountUp();
        };        

        self.updateYouCouldDoInfoPanel = function() {        
            // TODO: Replace with a iterator and use knockout foreach construct in UI to build UL
            self.dotNetRocksStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.dotNetRocks));
            self.techEdStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.techEd));
            self.blogStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.blogPost));
            self.ndcStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.ndcVideo));
            self.pluralsightStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.pluralsightCourse));
            self.dddStat(statsCalculator.calculateInfoStat(self.minsCommited, settings.stats.dividers.dddswEvent));
        };

         self.updateMinutesLeftThisYear = function () {
            self.sharpeningMinutesLeftThisYear(self.calculateMinutesLeftThisYear());
        };

        self.updateCountUp = function (countUpId, currentValue, newValue) {
            var countUpDisplay = new countUp(countUpId,
                                      currentValue,
                                      newValue,
                                      0, 
                                      settings.countUp.duration, 
                                      settings.countUp.options);

            countUpDisplay.start();
        };

        self.updateMinutesPerYearCountUp = function() {
            self.updateCountUp(settings.countUp.id.minutesPerYear,
                              statsCalculator.calculateMinsPerYear(self.previousMinsCommited),
                              statsCalculator.calculateMinsPerYear(self.minsCommited));
        };

        self.updateAverageWorkingWeeksCountUp = function () {
            self.updateCountUp(settings.countUp.id.avgWorkingWeek,
                              statsCalculator.calculateAverageWorkingWeeks(self.previousMinsCommited),
                              statsCalculator.calculateAverageWorkingWeeks(self.minsCommited));
        };

        self.updateHoursPerYearCountUp = function () {
            self.updateCountUp(settings.countUp.id.hoursPerYear,
                              statsCalculator.calculateHoursPerYear(self.previousMinsCommited),
                              statsCalculator.calculateHoursPerYear(self.minsCommited));                
        };   

        self.calculateMinutesLeftThisYear = function() {
            var minsLeftThisYear = statsCalculator.calculateDaysLeftThisYear() * self.minsCommited;

            return formatNumber(minsLeftThisYear.toFixed(0));
        };
        
        var validateInput = function (value) {   
            var isValid = true;
            
            if (!isNumeric(value)) {
                self.notifications("Please enter a positive numeric value for the number of minutes you want to commit a day");
                self.showNotifications(true);                               
                
                isValid = false;                
            } else if (!isLessThanADayOfMinutes(value)) {
                self.notifications("Impressive commitment! Sadly, that's more minutes than there are in a day. However, I'll show you what you could achieve if you were a superhero! &#9786;");
                self.showNotifications(true);                                  
            } else {                
                self.showNotifications(false);                               
            }                  
            
            return isValid;
        }
        
        var isNumeric = function (value) {
            var regEx = /^\d+$/;
            return regEx.test(value);
        };
        
        var isLessThanADayOfMinutes = function (value) {
            self.minsCommited = parseFloat(value);
            
            return self.minsCommited <= 1440;
        };
        
        var annimate = function() {
            addAnimations();
            
            setTimeout(function () {
                removeAnimations();
            }, 750);
        };
        
        var addAnimations = function() {
            classie.addClass(youCouldDoInfoPanelElement, 'animated');
            classie.addClass(youCouldDoInfoPanelElement, settings.youCouldDoInfoPanelAnimation);
            
            classie.addClass(leftThisYearContainerElement, 'animated');
            classie.addClass(leftThisYearContainerElement, settings.timeLeftInfoPanelAnimation);
        };
        
        var removeAnimations = function () {            
            classie.removeClass(youCouldDoInfoPanelElement, 'animated');
            classie.removeClass(youCouldDoInfoPanelElement, settings.youCouldDoInfoPanelAnimation);

            classie.removeClass(leftThisYearContainerElement, 'animated');
            classie.removeClass(leftThisYearContainerElement, settings.timeLeftInfoPanelAnimation);            
        };
        
        var formatNumber = function (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        };
    }

    ko.applyBindings(new AppViewModel());
}());