describe("Stats Calculator", function () {
    "use strict";
    
    var numberOfDaysInAYear = 365;
    
    describe("calculateMinsPerYear", function () {                    
        it("should calculate the total number of minutes committed over a year for a minutes committed value of 0", function () {
            var minutesCommitted = 0,
                expectedMinutesCommitedPerYear = minutesCommitted * numberOfDaysInAYear;
            
            expect(statsCalculator.calculateMinsPerYear(minutesCommitted)).toEqual(expectedMinutesCommitedPerYear);
        });
        
        it("should calculate the total number of minutes committed over a year for a minutes committed value of 60", function () {
            var minutesCommitted = 60,
                expectedMinutesCommittedPerYear = minutesCommitted * numberOfDaysInAYear;

            expect(statsCalculator.calculateMinsPerYear(minutesCommitted)).toEqual(expectedMinutesCommittedPerYear);
        });
        
        it("should calculate the total number of minutes committed over a year for a minutes committed value of 9999", function () {
            var minutesCommitted = 9999,
                expectedMinutesCommittedPerYear = minutesCommitted * numberOfDaysInAYear;

            expect(statsCalculator.calculateMinsPerYear(minutesCommitted)).toEqual(expectedMinutesCommittedPerYear);
        });    
    });
    
    describe("calculateHoursPerYear", function () {
        it("should calculate the total number of hours committed over a year for a minutes committed value of 0", function () {
            var minutesCommitted = 0,
                expectedHoursCommitedPerYear = ((minutesCommitted * numberOfDaysInAYear) / 60).toFixed(0);

            expect(statsCalculator.calculateHoursPerYear(minutesCommitted)).toEqual(expectedHoursCommitedPerYear);
        });
        
        it("should calculate the total number of hours committed over a year for a minutes committed value of 20", function () {
            var minutesCommitted = 20,
                expectedHoursCommitedPerYear = ((minutesCommitted * numberOfDaysInAYear) / 60).toFixed(0);

            expect(statsCalculator.calculateHoursPerYear(minutesCommitted)).toEqual(expectedHoursCommitedPerYear);
        });
        
        it("should calculate the total number of hours committed over a year for a minutes committed value of 9999", function () {
            var minutesCommitted = 9999,
                expectedHoursCommitedPerYear = ((minutesCommitted * numberOfDaysInAYear) / 60).toFixed(0);

            expect(statsCalculator.calculateHoursPerYear(minutesCommitted)).toEqual(expectedHoursCommitedPerYear);
        });
    });
    
    describe("calculateAverageWorkingWeeks", function () {
        it("should calculate the number of average number of " + settings.stats.averageWorkingHoursPerWeek + " hour working weeks commiteed over a year for a minutes committed value of 0", function () {
            var minsCommited = 0,
                expectedNumberOfWorkingWeeksPerYear = (((minsCommited * numberOfDaysInAYear) / 60) / settings.stats.averageWorkingHoursPerWeek).toFixed(0);

            expect(statsCalculator.calculateAverageWorkingWeeks(minsCommited)).toEqual(expectedNumberOfWorkingWeeksPerYear);
        });
        
        it("should calculate the number of average number of " + settings.stats.averageWorkingHoursPerWeek + " hour working weeks commiteed over a year for a minutes committed value of 30", function () {
            var minsCommited = 30,
                expectedNumberOfWorkingWeeksPerYear = (((minsCommited * numberOfDaysInAYear) / 60) / settings.stats.averageWorkingHoursPerWeek).toFixed(0);

            expect(statsCalculator.calculateAverageWorkingWeeks(minsCommited)).toEqual(expectedNumberOfWorkingWeeksPerYear);
        });
        
        it("should calculate the number of average number of " + settings.stats.averageWorkingHoursPerWeek + " hour working weeks commiteed over a year for a minutes committed value of 9999", function () {
            var minsCommited = 9999,
                expectedNumberOfWorkingWeeksPerYear = (((minsCommited * numberOfDaysInAYear) / 60) / settings.stats.averageWorkingHoursPerWeek).toFixed(0);

            expect(statsCalculator.calculateAverageWorkingWeeks(minsCommited)).toEqual(expectedNumberOfWorkingWeeksPerYear);
        });
    });
    
    describe("calculateInfoStat", function () {
        it("should calculate the number of 60 minute podcasts listened to a year for a minutes committed value of 0", function () {
            var minutesCommitted = 0,
                podcastLength = 60,
                expectedNumberOfPodcasts = ((minutesCommitted * numberOfDaysInAYear) / podcastLength).toFixed(0);
            
            expect(statsCalculator.calculateInfoStat(minutesCommitted, podcastLength)).toEqual(expectedNumberOfPodcasts);
        });
        
        it("should calculate the number of 60 minute podcasts listened to a year for a minutes committed value of 45", function () {
            var minutesCommitted = 45,
                podcastLength = 60,
                expectedNumberOfPodcasts = ((minutesCommitted * numberOfDaysInAYear) / podcastLength).toFixed(0);
            
            expect(statsCalculator.calculateInfoStat(minutesCommitted, podcastLength)).toEqual(expectedNumberOfPodcasts);
        });
        
        it("should calculate the number of 60 minute podcasts listened to a year for a minutes committed value of 9999", function () {
            var minutesCommitted = 9999,
                podcastLength = 60,
                expectedNumberOfPodcasts = ((minutesCommitted * numberOfDaysInAYear) / podcastLength).toFixed(0);
            
            expect(statsCalculator.calculateInfoStat(minutesCommitted, podcastLength)).toEqual(expectedNumberOfPodcasts);
        });
    });
});