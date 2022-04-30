const dayFormat = (day) => {
  let dayInfo;

  switch (day) {
    case 0:
      dayInfo = 'Domingo';
      break;
    case 1:
      dayInfo = 'Lunes';
      break;
    case 2:
      dayInfo = 'Martes';
      break;
    case 3:
      dayInfo = 'Miercoles';
      break;
    case 4:
      dayInfo = 'Jueves';
      break;
    case 5:
      dayInfo = 'Viernes';
      break;
    case 6:
      dayInfo = 'Sabado';
      break;
    default:
      dayInfo = undefined;
      break;
  }

  return dayInfo;
};

const monthFormat = (month) => {
  let monthInfo;

  switch (month) {
    case 0:
      monthInfo = 'January';
      break;
    case 1:
      monthInfo = 'February';
      break;
    case 2:
      monthInfo = 'March';
      break;
    case 3:
      monthInfo = 'April';
      break;
    case 4:
      monthInfo = 'May';
      break;
    case 5:
      monthInfo = 'June';
      break;
    case 6:
      monthInfo = 'July';
      break;
    case 7:
      monthInfo = 'August';
      break;
    case 8:
      monthInfo = 'September';
      break;
    case 9:
      monthInfo = 'October';
      break;
    case 10:
      monthInfo = 'November';
      break;
    case 11:
      monthInfo = 'December';
      break;
    default:
      monthInfo = undefined;
      break;
  }

  return monthInfo;
};

const dateFormat = (date) => {
  const getDate = new Date(date);
  const day = getDate.getDate();
  const month = monthFormat(getDate.getMonth());
  const year = getDate.getFullYear();

  return `${day} ${month} ${year}`;
};

export { dateFormat, dayFormat };
