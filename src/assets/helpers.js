export const randomId = () =>
  Math.random()
    .toString(36)
    .slice(-10);


export const dateTransformation = dateTime => {
  if (dateTime) {
    let date = dateTime.substring(0, 10);
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let time = dateTime.substring(11, dateTime.length);
    let hour = time.substring(0, 2);
    let minute = time.substring(3, 5);
    let second = time.substring(6, 8);

    return `${day}/${month}/${year} - ${hour}h${minute}m${second}s`;
  } else {
    return null;
  }
};