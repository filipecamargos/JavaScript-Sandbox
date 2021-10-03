/*Write a function that returns the acute angle between two clock hands, with two integers for the number of hours and number
of minutes. E.g. For 3:00, the acute angle would be 90°. For 6:00, it would be 180°*/


function clockHand(time) {
    const ANGLE = 360;
    const HOURTIME = 12;
    const MINUTETIME = 60;
    const [hour, minute] = time.split(':')

    //Checks in Place
    if (hour > HOURTIME || hour < 0 || minute < 0 || minute > MINUTETIME ) {
        throw new Error('Invalid Time Format!');
    }

    //Hour: 0:00 am 11:59 pm => 24hrs => 360dg
    //ex: 1 => (360dg/12hr)* 1 am = Angle
    let hourAngle = (ANGLE/HOURTIME) * hour;

    //Minute: 0m => 59m => 60m => 360dg
    //ex: 30m => (360dg/12hr) * 30 m = Angle
    let minuteAngle = (ANGLE/MINUTETIME) * minute;

    let angle = hourAngle > minuteAngle ? (hourAngle - minuteAngle) : (minuteAngle - hourAngle);

    return angle;

}

//test the function 
try {
    console.log(clockHand('2:00') + ' => 60')
} catch (err) {
    console.log(err)
}
