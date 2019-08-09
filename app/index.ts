import clock from 'clock';
import document from 'document';

clock.granularity = 'seconds';

let clockID = document.getElementById('clockID');

clock.ontick = (evt) => {
    let hours = ('0' + evt.date.getHours()).slice(-2);
    let mins = evt.date.getMinutes();
    let secs = ('0' + evt.date.getSeconds()).slice(-2);

    clockID.text = `${hours}:${mins}:${secs}`;
    //console.log(evt.date.toString());
}
