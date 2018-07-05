// window.onload = createCalendar;
let monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// Allows us to make the calendar in the M,T,W,T,F,S,S format instead of S,M,T,W,T,F,S
let dayArray = [7,1,2,3,4,5,6];
class Calendar {
    constructor() {
        let date = new Date()
        this.year = date.getUTCFullYear();
        this.monthIndex = date.getUTCMonth();
        // Set date to the 1st of current month
        this.startOfMonthDate = new Date(this.year,this.monthIndex,1);
        // Month as a string
        this.month = monthsArray[this.monthIndex];
        this.date = 1;
        // Day of the week (0 means Sunday, 1 Monday etc.)
        this.dayAtStartOfMonth = this.startOfMonthDate.getDay();
        this.text='';
        // Colour of the top of each day
        this.color = 'red';
        this.initCalendarDisplay();
    }

    // Number of days in the month
    daysInMonth(month,year) {
        return new Date(year,month+1,0).getDate();
    }

    // Initialise calendar for current month
    initCalendarDisplay() {
        let i = 0;
        let calendarMonth = document.getElementById('calendarMonth');
        let calendarWrapper = document.getElementById('calendarWrapper');
        let iteratingDate =1;
        let daysInMonth = this.daysInMonth(this.monthIndex,this.year);
        // Sets month and year to display
        calendarMonth.innerHTML = '';
        calendarMonth.innerHTML+=`${this.month} ${this.year}`;
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

    // Changes the calendar
    _changeMonth() {
        let i = 0;
        let calendarWrapper = document.getElementById('calendarWrapper');
        let calendarMonth = document.getElementById('calendarMonth');
        let iteratingDate =1;
        let daysInMonth = this.daysInMonth(this.monthIndex,this.year);
        // Set date to the 1st of current month
        this.startOfMonthDate = new Date(this.year,this.monthIndex,1);
        this.dayAtStartOfMonth = this.startOfMonthDate.getDay();
        calendarWrapper.innerHTML = '';
        // Changes month and year displayed
        calendarMonth.innerHTML = '';
        calendarMonth.innerHTML += `${this.month} ${this.year}`;
        for (i=1; i<=42; i++) {
            // Starts including the date on correct day of the week and ends after correct number of days
            if (i>=dayArray[this.dayAtStartOfMonth] && iteratingDate<=daysInMonth){
                calendarWrapper.innerHTML += `<div><p class="calendar-number ${this.color}">${iteratingDate}</p><p class="calendar-text">${this.text}</p></div>`;
                iteratingDate++;
            } else {
                calendarWrapper.innerHTML += `<div><p class="calendar-text">${this.text}</p></div>`;
            }
        }
    }

    // Displays next calendar month
    nextMonth() {
        if (this.monthIndex==11){
            this.monthIndex = 0;
            this.year += 1;
            this.month = monthsArray[this.monthIndex];
        } else {
            this.monthIndex += 1;
            this.month = monthsArray[this.monthIndex];
        }
        this._changeMonth();
    }
    
    // Displays previous calendar month
    prevMonth() {
        if (this.monthIndex==0){
            this.monthIndex = 11;
            this.month = monthsArray[this.monthIndex];
            this.year -= 1;
        } else {
            this.monthIndex -= 1;
            this.month = monthsArray[this.monthIndex];
        }
        this._changeMonth();
    }
}

calendar = new Calendar();
leftArrow = document.getElementById('leftArrow');
rightArrow = document.getElementById('rightArrow');
leftArrow.addEventListener("click", function(){
    calendar.prevMonth();
})
rightArrow.addEventListener("click", function(){
    calendar.nextMonth();
})
