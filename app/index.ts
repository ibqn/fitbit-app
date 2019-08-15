import clock, { TickEvent } from 'clock';
import document from 'document';

import { zeroPad } from '../common/utils';

clock.granularity = 'seconds';

let hourHand = document.getElementById("hours") as GroupElement;
let minHand = document.getElementById("mins") as GroupElement;
let secHand = document.getElementById("secs") as GroupElement;

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours: number, minutes: number) {
    let hourAngle = (360 / 12) * hours;
    let minAngle = (360 / 12 / 60) * minutes;
    return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes: number) {
    return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds
function secondsToAngle(seconds: number) {
    return (360 / 60) * seconds;
}

// Rotate the hands every tick
function updateClock(today: Date) {
    let hours = today.getHours() % 12;
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    (hourHand.groupTransform as Transform).rotate.angle = hoursToAngle(hours, mins);
    (minHand.groupTransform as Transform).rotate.angle = minutesToAngle(mins);
    (secHand.groupTransform as Transform).rotate.angle = secondsToAngle(secs);
}

// Update the clock every tick event
clock.ontick = (evt: TickEvent) => updateClock(evt.date);
