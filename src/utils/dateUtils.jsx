import { terms } from '../data/academicCalendar';

export function getCurrentWeek() {
    // get date right now
    const currentDate = new Date();
    // get the start date of this semester from academic calendar
    const start =  terms['2026-T1'].startDate;
    // diff in time : so this is milliseconds
    const diffTime = currentDate - start;
    // convert ms to day : 1 day = 24 hours * 60 minutes * 60 seconds * 1000 ms
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    // convert day to week : 1 week = 7 days
    const diffWeeks = Math.floor(diffDays / 7);
    // cos week 0
    return diffWeeks + 1;
    
}
