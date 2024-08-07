export function getDateDifference(dateString) {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  const differenceMs = currentDate - givenDate;

  const differenceYears = Math.floor(
    differenceMs / (1000 * 60 * 60 * 24 * 365)
  );
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
  const differenceMinutes = Math.floor(differenceMs / (1000 * 60));

  let result;
  if (differenceYears > 0) {
    result =
      differenceYears + (differenceYears === 1 ? " year" : " years") + " ago";
  } else if (differenceDays > 0) {
    result =
      differenceDays + (differenceDays === 1 ? " day" : " days") + " ago";
  } else if (differenceHours > 0) {
    result =
      differenceHours + (differenceHours === 1 ? " hour" : " hours") + " ago";
  } else {
    result =
      differenceMinutes +
      (differenceMinutes === 1 ? " minute" : " minutes") +
      " ago";
  }

  return result;
}

export function convertViewCount(viewCount) {
  if (viewCount < 1000) {
    return viewCount.toString();
  } else if (viewCount < 1000000) {
    return (viewCount / 1000).toFixed(1) + "K";
  } else if (viewCount < 1000000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else {
    return (viewCount / 1000000000).toFixed(1) + "B";
  }
}
