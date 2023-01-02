const getCurrentDate = (separator = " ", comma = ", ") => {
  let newDate = new Date();
  let day = newDate.getDay();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${
    day === 0
      ? "Sunday"
      : day === 1
      ? "Monday"
      : day === 2
      ? "Tuesday"
      : day === 3
      ? "Wednesday"
      : day === 4
      ? "Thursday"
      : day === 5
      ? "Friday"
      : "Saturday"
  }${comma}${
    month === 1
      ? "January"
      : month === 2
      ? "February"
      : month === 3
      ? "March"
      : month === 4
      ? "April"
      : month === 5
      ? "May"
      : month === 6
      ? "June"
      : month === 7
      ? "July"
      : month === 8
      ? "August"
      : month === 9
      ? "September"
      : month === 10
      ? "October"
      : month === 11
      ? "November"
      : "December"
  }${separator}${date}${comma}${year}`;
};

export default getCurrentDate;
