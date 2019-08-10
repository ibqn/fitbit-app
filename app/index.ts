import clock, { TickEvent } from 'clock';
import document from 'document';

import { zeroPad } from '../common/utils';

clock.granularity = 'seconds';

let clockID = document.getElementById('clockID') as Element;

clock.ontick = (evt: TickEvent) => {
    let hours = zeroPad(evt.date.getHours());
    let mins = zeroPad(evt.date.getMinutes());
    let secs = zeroPad(evt.date.getSeconds());

    clockID.text = `${hours}:${mins}:${secs}`;
    //console.log(evt.date.toString());
}
