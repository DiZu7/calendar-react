import moment from 'moment/moment';

export const getWeekStartDate = date => {
  const dayOfWeek = moment(date).day();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  return moment(date).add(difference, 'day');
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = startDate;
    result.push(moment(base).add(i, 'days'));
  }
  return result;
};

export const getCurrentMonth = weekStartDate => {
  const mondayDate = getWeekStartDate(weekStartDate);
  const weekStartMonth = mondayDate.format('MMMM');
  const weekEndMonth = mondayDate.add(6, 'day').format('MMMM');

  return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
};

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
