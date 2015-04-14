"use strict";

(function() {    
    
    function AppViewModel() {
        var self = this;        
        
        self.showNotifications = ko.observable(false);
        self.notifications = ko.observable("");
        self.minsCommited = ko.observable(0);                        

        self.dotNetRocksStat = ko.observable(0);
        self.techEdStat = ko.observable(0);
        self.blogStat = ko.observable(0);
        self.ndcStat = ko.observable(0);
        self.pluralsightStat = ko.observable(0);
        self.dddStat = ko.observable(0);

        self.sharpeningMinutesLeftThisYear = ko.observable(0);
        self.currentYear = new Date().getFullYear();

        var minsCommitedInputElement = document.getElementById(settings.minsCommitedInputElementName);
        var youCouldDoInfoPanelElement = document.getElementById(settings.youCouldDoInfoPanelElementName);
        var leftThisYearContainerElement = document.getElementById(settings.timeLeftInfoPanelElementName);
        
        var previousMinsCommited = 0;        
        
        self.calculateStats = function () {
            var minutesInput = minsCommitedInputElement.value;            
            
            if (isValidInput(minutesInput) && isDifferentMinsCommitedValue()) {                                
                updateStats();                
                                
                previousMinsCommited = self.minsCommited();                    

                startAnimations();
            }
        };        

        var updateStats = function() {
            updateCountUps();
            updateYouCouldDoInfoPanel();
            updateMinutesLeftThisYear();                
        };

        var updateCountUps = function() {
            updateMinutesPerYearCountUp();
            updateAverageWorkingWeeksCountUp();
            updateHoursPerYearCountUp();
        };        

        var updateYouCouldDoInfoPanel = function() {        
            // TODO: Replace with a iterator and use knockout foreach construct in UI to build UL
            self.dotNetRocksStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.dotNetRocks));
            self.techEdStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.techEd));
            self.blogStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.blogPost));
            self.ndcStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.ndcVideo));
            self.pluralsightStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.pluralsightCourse));
            self.dddStat(statsCalculator.calculateInfoStat(self.minsCommited(), settings.stats.dividers.dddswEvent));
        };

        var updateMinutesLeftThisYear = function () {
            self.sharpeningMinutesLeftThisYear(calculateMinutesLeftThisYear());
        };

        var updateCountUp = function (countUpId, currentValue, newValue) {
            var countUpDisplay = new countUp(countUpId,
                                      currentValue,
                                      newValue,
                                      0, 
                                      settings.countUp.duration, 
                                      settings.countUp.options);

            countUpDisplay.start();
        };

        var updateMinutesPerYearCountUp = function() {
            updateCountUp(settings.countUp.id.minutesPerYear,
                              statsCalculator.calculateMinsPerYear(previousMinsCommited),
                              statsCalculator.calculateMinsPerYear(self.minsCommited()));
        };

        var updateAverageWorkingWeeksCountUp = function () {
            updateCountUp(settings.countUp.id.avgWorkingWeek,
                              statsCalculator.calculateAverageWorkingWeeks(previousMinsCommited),
                              statsCalculator.calculateAverageWorkingWeeks(self.minsCommited()));
        };

        var updateHoursPerYearCountUp = function () {
            updateCountUp(settings.countUp.id.hoursPerYear,
                              statsCalculator.calculateHoursPerYear(previousMinsCommited),
                              statsCalculator.calculateHoursPerYear(self.minsCommited()));                
        };   

        var calculateMinutesLeftThisYear = function() {
            var minsLeftThisYear = statsCalculator.calculateMinutesLeftThisYear(self.minsCommited());

            return formatNumberWithCommas(minsLeftThisYear);
        };
        
        var isValidInput = function (value) {   
            var isValid = true;
            
            if (isNumeric(value)) {
                self.minsCommited(parseFloat(value));
                
                displayNotifications();
            } else {
                showNotification(settings.notificationMessages.invalidInput);                
                
                isValid = false; 
            }                                                 
            
            return isValid;
        }
        
        var isNumeric = function (value) {
            var regEx = /^\d+$/;
            return regEx.test(value);
        };
        
        var displayNotifications = function () {
            if (isZeroMinutes(self.minsCommited())) {
                showNotification(settings.notificationMessages.zeroMinutes);                
            } else if (isGreaterThanADayOfMinutes(self.minsCommited())) {
                showNotification(settings.notificationMessages.moreThanADayOfMinutes);                
            } else {                
                hideNotifications();                              
            }
        };
        
        var isGreaterThanADayOfMinutes = function (mins) {                        
            return mins > 1440;
        };
        
        var isZeroMinutes = function (mins) {
            return mins === 0;
        };
    
        var isDifferentMinsCommitedValue = function () {
            return previousMinsCommited !== self.minsCommited()
        };
        
        var showNotification = function (notificationMessage) {
            self.notifications(notificationMessage);
            self.showNotifications(true);
        };
        
        var hideNotifications = function () {
            self.showNotifications(false);
        };
        
        var startAnimations = function() {
            addAnimations();
            
            setTimeout(function () {
                removeAnimations();
            }, 750);
        };
        
        var addAnimations = function() {
            addAnimation(youCouldDoInfoPanelElement, settings.youCouldDoInfoPanelAnimation);            
            addAnimation(leftThisYearContainerElement, settings.timeLeftInfoPanelAnimation);                        
        };
        
        var removeAnimations = function () {       
            removeAnimation(youCouldDoInfoPanelElement, settings.youCouldDoInfoPanelAnimation);
            removeAnimation(leftThisYearContainerElement, settings.timeLeftInfoPanelAnimation);                               
        };
        
        var addAnimation = function (elementToAnimate, animationToAdd) {
            classie.addClass(elementToAnimate, 'animated');
            classie.addClass(elementToAnimate, animationToAdd);
        };
        
        var removeAnimation = function (elementToAnimate, animationToRemove) {
            classie.removeClass(elementToAnimate, 'animated');
            classie.removeClass(elementToAnimate, animationToRemove);
        };
        
        var formatNumberWithCommas = function (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        };
    }
    
    ko.applyBindings(new AppViewModel());
}());