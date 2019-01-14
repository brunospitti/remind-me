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

export const currTime = () =>
  new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split(".")[0];
