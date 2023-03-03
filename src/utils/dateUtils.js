import moment from 'moment/moment';

export const getWeekStartDate = date => {
  const dayOfWeek = moment(date).day();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  // console.log(moment(date).add(difference, 'day').format());
  // const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  // console.log(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()));

  return moment(date).add(difference, 'day').format();
  // return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = moment(startDate).format();
    // const base = new Date(startDate);
    result.push(moment(base).add(i, 'day').format());
    // result.push(new Date(base.setDate(base.getDate() + i)));
  }
  // console.log(result);
  return result;
};

export const getCurrentMonth = weekStartDate => {
  const mondayDate = getWeekStartDate(weekStartDate);
  const weekStartMonth = moment(mondayDate).format('MMMM');
  const weekEndMonth = moment(mondayDate).add(6, 'day').format('MMMM');

  return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
};
// export const getCurrentMonth = weekDates => {
//   // console.log(weekDates);
//   const weekStartMonth = moment(weekDates[0]).format('MMMM');
//   const weekEndMonth = moment(weekDates[6]).format('MMMM');

//   // const weekStartMonth = months[weekDates[0].getMonth()];
//   // const weekEndMonth = months[weekDates[6].getMonth()];
//   return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
// };

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  return moment(date).add(hours, 'hours').add(minutes, 'minutes').format();
};

export const formatMins = mins => {
  return mins < 10 ? `0${mins}` : mins;
};


export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
// import moment from 'moment/moment';

// export const getWeekStartDate = date => {
//   const dateCopy = new Date(date);
//   const dayOfWeek = moment(dateCopy).day();
//   // const dateCopy = new Date(date);
//   // const dayOfWeek = dateCopy.getDay();
//   const difference =
//     dayOfWeek === 0
//       ? -6 // for Sunday
//       : 1 - dayOfWeek;

//   // const monday = new Date(dateCopy.setDate(date.getDate() + difference));
//   // console.log(monday);
//   // console.log(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()));
//   // return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());

//   const monday = moment(moment(dateCopy).set('date', moment(date).date() + difference)).format();
//   console.log(monday);
//   console.log(moment(monday).year(monday).month(monday).date(monday).format());
//   return moment(monday).year(monday).month(monday).date(monday).format();
// };

// export const generateWeekRange = startDate => {
//   // const result = [];
//   // for (let i = 0; i < 7; i += 1) {
//   //   const base = new Date(startDate);
//   //   result.push(new Date(base.setDate(base.getDate() + i)));
//   // }
//   // return result;

//   const result = [];
//   for (let i = 0; i < 7; i += 1) {
//     const base = moment(startDate).format();
//     moment().set('date', 1);
//     result.push(moment(moment(base).set('date', (moment(base).date() + i))).format());
//     console.log(moment(moment(base).set('date', moment(base).date() + i)).format('YYYY MM DD'));
//   }
//   console.log(result);
//   return result;
// };

// export const getCurrentMonth = weekDates => {
//   // const weekStartMonth = months[weekDates[0].getMonth()];
//   // const weekEndMonth = months[weekDates[6].getMonth()];
//   // return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
//    const weekStartMonth = months[weekDates[0].getMonth()];
//    const weekEndMonth = months[weekDates[6].getMonth()];
//    return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
// };

// export const getDateTime = (date, time) => {
//   const [hours, minutes] = time.split(':');
//   const withHours = new Date(new Date(date).setHours(Number(hours)));
//   const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
//   return withMinutes;
// };

// export const formatMins = mins => {
//   return mins < 10 ? `0${mins}` : mins;
// };

// export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// export const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
