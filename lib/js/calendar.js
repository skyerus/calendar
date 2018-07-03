function createCalendar() {
    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    let calendarWrapper = document.getElementById('calendarWrapper');
    console.log(calendarWrapper);
    for (i=1; i<=35; i++) {
        // calendarWrapper.innerHTML += `<div>${i}</div>`;
        calendarWrapper.insertAdjacentHTML('beforeend', `<div><p class="calendar-number red">${i}</p><p class="calendar-text">${text}</p></div>`)
    }
}
// window.onload = createCalendar;
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// Allows us to make the calendar in the M,T,W,T,F,S,S format instead of S,M,T,W,T,F,S
let dayArray = [7,1,2,3,4,5,6];
class Calendar {
    constructor(date) {
        this.year = date.getUTCFullYear();
        this.monthIndex = date.getUTCMonth();
        // Set date to the 1st of current month
        this.startOfMonthDate = new Date(date.getUTCFullYear(),this.monthIndex,1);
        // Month as a string
        this.month = months[this.monthIndex];
        this.date = 1;
        // Day of the week (0 means Sunday, 1 Monday etc.)
        this.dayAtStartOfMonth = this.startOfMonthDate.getDay();
        this.text='';
        // Colour of the top of each day
        this.color = 'red';
        let i = 0;
        let calendarWrapper = document.getElementById('calendarWrapper');
        let iteratingDate =1;
        let daysInMonth = this.daysInMonth(this.monthIndex,this.year);
        for (i=1; i<=42; i++) {
            // calendarWrapper.innerHTML += `<div>${i}</div>`;

            // Starts including the date on correct day of the week and ends after correct number of days
            if (i>=dayArray[this.dayAtStartOfMonth] && iteratingDate<=daysInMonth){
                calendarWrapper.insertAdjacentHTML('beforeend', `<div><p class="calendar-number ${this.color}">${iteratingDate}</p><p class="calendar-text">${this.text}</p></div>`);
                iteratingDate++;
            } else {
                calendarWrapper.insertAdjacentHTML('beforeend', `<div><p class="calendar-text">${this.text}</p></div>`);
            }
        }
    }

    // Number of days in the month
    daysInMonth(month,year) {
        return new Date(year,month+1,0).getDate();
    }
}

Calendar = new Calendar(new Date());