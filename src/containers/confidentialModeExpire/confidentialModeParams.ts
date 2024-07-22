const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const FullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const now = new Date();

const currentDateParams = {
	day: now.getDay(),
	month: now.getMonth(),
	date: now.getDate(),
	year: now.getFullYear(),
};

const currentDate = `${days[currentDateParams.day]}, ${months[currentDateParams.month]} ${currentDateParams.date}, ${currentDateParams.year}`;

const nextDay = new Date(currentDate);
const nextWeek = new Date(currentDate);
const nextOneMonth = new Date(currentDate);
const nextThreeMonths = new Date(currentDate);
const nextFiveYears = new Date(currentDate);

nextDay.setDate(nextDay.getDate() + 1);
nextWeek.setDate(nextWeek.getDate() + 7);
nextOneMonth.setMonth(nextOneMonth.getMonth() + 1);
nextThreeMonths.setMonth(nextThreeMonths.getMonth() + 3);
nextFiveYears.setFullYear(nextFiveYears.getFullYear() + 5);

const nextDayParams = {
	day: nextDay.getDay(),
	month: nextDay.getMonth(),
	date: nextDay.getDate(),
	year: nextDay.getFullYear(),
};

const nextWeekParams = {
	day: nextWeek.getDay(),
	month: nextWeek.getMonth(),
	date: nextWeek.getDate(),
	year: nextWeek.getFullYear(),
};

const nextOneMonthParams = {
	day: nextOneMonth.getDay(),
	month: nextOneMonth.getMonth(),
	date: nextOneMonth.getDate(),
	year: nextOneMonth.getFullYear(),
};

const nextThreeMonthParams = {
	day: nextThreeMonths.getDay(),
	month: nextThreeMonths.getMonth(),
	date: nextThreeMonths.getDate(),
	year: nextThreeMonths.getFullYear(),
};

const nextFiveYearsParams = {
	day: nextFiveYears.getDay(),
	month: nextFiveYears.getMonth(),
	date: nextFiveYears.getDate(),
	year: nextFiveYears.getFullYear(),
};

const nextDayTime = `${days[nextDayParams.day]}, ${months[nextDayParams.month]} ${nextDayParams.date}, ${nextDayParams.year}`;
const nextWeekTime = `${days[nextWeekParams.day]}, ${months[nextWeekParams.month]} ${nextWeekParams.date}, ${nextWeekParams.year}`;
const nextOneMonthTime = `${days[nextOneMonthParams.day]}, ${months[nextOneMonthParams.month]} ${nextOneMonthParams.date}, ${nextOneMonthParams.year}`;
const nextThreeMonthsTime = `${days[nextThreeMonthParams.day]}, ${months[nextThreeMonthParams.month]} ${nextThreeMonthParams.date}, ${nextThreeMonthParams.year}`;
const nextFiveYearsTime = `${days[nextFiveYearsParams.day]}, ${months[nextFiveYearsParams.month]} ${nextFiveYearsParams.date}, ${nextFiveYearsParams.year}`;

const modeExpireList = [
	{ name: "1 day", time: nextDayTime },
	{ name: "1 week", time: nextWeekTime },
	{ name: "1 month", time: nextOneMonthTime },
	{ name: "3 months", time: nextThreeMonthsTime },
	{ name: "5 years", time: nextFiveYearsTime },
];

// Schedule Send Time

const nextThreeDays = new Date(currentDate);
nextThreeDays.setDate(nextThreeDays.getDate() + 3);

const nextThreeDaysParams = {
	month: nextThreeDays.getMonth(),
	date: nextThreeDays.getDate(),
};
const nextOneDayTime = `${months[nextDayParams.month]} ${nextDayParams.date}, 8:00 AM`;
const nextOneDayAfternoonTime = `${months[nextDayParams.month]} ${nextDayParams.date}, 1:00 PM`;
const nextThreeDaysTime = `${months[nextThreeDaysParams.month]} ${nextThreeDaysParams.date}, 8:00 AM`;
const nextThreeDaysDay = `${FullDays[nextThreeDaysParams.month]} morning`;

export { currentDate, modeExpireList, nextOneDayTime, nextOneDayAfternoonTime, nextThreeDaysTime, nextThreeDaysDay };
