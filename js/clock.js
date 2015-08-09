var DifferenceHour = -1,
    DifferenceMinute = -1,
    DifferenceSecond = -1,
    Tday = new Date("September 4, 2015 23:59:59"),
    daysms = 24 * 60 * 60 * 1000,
    hoursms = 60 * 60 * 1000,
    Secondms = 60 * 1000,
    microsecond = 1000,
    timer0 = document.querySelector(".clock-img0"),
    timer1 = document.querySelector(".clock-img1"),
    timer2 = document.querySelector(".clock-img2"),
    timer3 = document.querySelector(".clock-img3"),
    timer4 = document.querySelector(".clock-img4"),
    timer5 = document.querySelector(".clock-img5"),
    timer6 = document.querySelector(".clock-img6"),
    timer7 = document.querySelector(".clock-img7");
function clock () {
    var time = new Date();
    var convertHour = DifferenceHour,
        convertMinute = DifferenceMinute,
        convertSecond = DifferenceSecond,
        Diffms = Tday.getTime() - time.getTime();
    DifferenceHour = Math.floor(Diffms / daysms);
    Diffms -= DifferenceHour * daysms;
    DifferenceMinute = Math.floor(Diffms / hoursms);
    Diffms -= DifferenceMinute * hoursms;
    DifferenceSecond = Math.floor(Diffms / Secondms);
    Diffms -= DifferenceSecond * Secondms;
    var dSecs = Math.floor(Diffms / microsecond);
    if (convertHour != DifferenceHour) {
        var tens = Math.floor(DifferenceHour / 10),
            units = DifferenceHour % 10;
        switch(tens)
        {
            case 0: timer0.src = "images/0.png";break;
            case 1: timer0.src = "images/1.png";break;
            case 2: timer0.src = "images/2.png";break;
            case 3: timer0.src = "images/3.png";break;
        }
        switch(units)
        {
            case 0: timer1.src = "images/0.png";break;
            case 1: timer1.src = "images/1.png";break;
            case 2: timer1.src = "images/2.png";break;
            case 3: timer1.src = "images/3.png";break;
            case 4: timer1.src = "images/4.png";break;
            case 5: timer1.src = "images/5.png";break;
            case 6: timer1.src = "images/6.png";break;
            case 7: timer1.src = "images/7.png";break;
            case 8: timer1.src = "images/8.png";break;
            case 9: timer1.src = "images/9.png";break;
        }
    };
    if (convertMinute != DifferenceMinute) {
        var tens = Math.floor(DifferenceMinute / 10),
            units = DifferenceMinute % 10;
        switch(tens)
        {
            case 0: timer2.src = "images/0.png";break;
            case 1: timer2.src = "images/1.png";break;
            case 2: timer2.src = "images/2.png";break;
            case 3: timer2.src = "images/3.png";break;
            case 4: timer2.src = "images/4.png";break;
            case 5: timer2.src = "images/5.png";break;
            case 6: timer2.src = "images/6.png";break;
            case 7: timer2.src = "images/7.png";break;
            case 8: timer2.src = "images/8.png";break;
            case 9: timer2.src = "images/9.png";break;
        }
        switch(units)
        {
            case 0: timer3.src = "images/0.png";break;
            case 1: timer3.src = "images/1.png";break;
            case 2: timer3.src = "images/2.png";break;
            case 3: timer3.src = "images/3.png";break;
            case 4: timer3.src = "images/4.png";break;
            case 5: timer3.src = "images/5.png";break;
            case 6: timer3.src = "images/6.png";break;
            case 7: timer3.src = "images/7.png";break;
            case 8: timer3.src = "images/8.png";break;
            case 9: timer3.src = "images/9.png";break;
        }
    };
    if (convertSecond != DifferenceSecond) {
        var tens = Math.floor(DifferenceSecond / 10),
            units = DifferenceSecond % 10;
        switch(tens)
        {
            case 0: timer4.src = "images/0.png";break;
            case 1: timer4.src = "images/1.png";break;
            case 2: timer4.src = "images/2.png";break;
            case 3: timer4.src = "images/3.png";break;
            case 4: timer4.src = "images/4.png";break;
            case 5: timer4.src = "images/5.png";break;
            case 6: timer4.src = "images/6.png";break;
            case 7: timer4.src = "images/7.png";break;
            case 8: timer4.src = "images/8.png";break;
            case 9: timer4.src = "images/9.png";break;
        }
        switch(units)
        {
            case 0: timer5.src = "images/0.png";break;
            case 1: timer5.src = "images/1.png";break;
            case 2: timer5.src = "images/2.png";break;
            case 3: timer5.src = "images/3.png";break;
            case 4: timer5.src = "images/4.png";break;
            case 5: timer5.src = "images/5.png";break;
            case 6: timer5.src = "images/6.png";break;
            case 7: timer5.src = "images/7.png";break;
            case 8: timer5.src = "images/8.png";break;
            case 9: timer5.src = "images/9.png";break;
        }
    };
    var tens = Math.floor(dSecs / 10),
        units = dSecs % 10;
    switch(tens)
    {
        case 0: timer6.src = "images/0.png";break;
        case 1: timer6.src = "images/1.png";break;
        case 2: timer6.src = "images/2.png";break;
        case 3: timer6.src = "images/3.png";break;
        case 4: timer6.src = "images/4.png";break;
        case 5: timer6.src = "images/5.png";break;
        case 6: timer6.src = "images/6.png";break;
        case 7: timer6.src = "images/7.png";break;
        case 8: timer6.src = "images/8.png";break;
        case 9: timer6.src = "images/9.png";break;
    }
    switch(units)
    {
        case 0: timer7.src = "images/0.png";break;
        case 1: timer7.src = "images/1.png";break;
        case 2: timer7.src = "images/2.png";break;
        case 3: timer7.src = "images/3.png";break;
        case 4: timer7.src = "images/4.png";break;
        case 5: timer7.src = "images/5.png";break;
        case 6: timer7.src = "images/6.png";break;
        case 7: timer7.src = "images/7.png";break;
        case 8: timer7.src = "images/8.png";break;
        case 9: timer7.src = "images/9.png";break;
    }
    setTimeout("clock()",1000);
}
window.onload = clock;