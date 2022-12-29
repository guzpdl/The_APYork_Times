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
    month === 0
      ? "January"
      : month === 1
      ? "February"
      : month === 2
      ? "March"
      : month === 3
      ? "April"
      : month === 4
      ? "May"
      : month === 5
      ? "June"
      : month === 6
      ? "July"
      : month === 7
      ? "August"
      : month === 8
      ? "September"
      : month === 9
      ? "October"
      : month === 10
      ? "November"
      : "December"
  }${separator}${date}${comma}${year}`;
};

export default getCurrentDate;
