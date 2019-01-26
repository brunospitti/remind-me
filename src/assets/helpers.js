export const randomId = () =>
  Math.random()
    .toString(36)
    .slice(-10);

export const dateTransformation = dateTime => {
  if (dateTime) {
    let date = new Date(dateTime);
    return date.toDateString();
  } else {
    return null;
  }
};

export const dateCalendarTransformation = dateTime => {
  if (dateTime) {
    let date = new Date(dateTime);
    let dateYear = date.getFullYear();
    let dateDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let dateHours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let dateMinutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    let months = new Array();
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";
    let dateMonth = months[date.getMonth()];

    let dateFinal = `${dateDate}/${dateMonth}/${dateYear} ${dateHours}:${dateMinutes}`;

    return dateFinal;
  } else {
    return null;
  }
};

export const dateTimeTransformation = dateTime => {
  if (dateTime) {
    let date = new Date(dateTime);
    let dateTransformed = date.toUTCString();
    return dateTransformed.substring(0, dateTransformed.length - 7);
  } else {
    return null;
  }
};

export const currTime = () =>
  new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split(".")[0];

export const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
