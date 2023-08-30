export function formatTimeAgo(timestamp) {
  const currentTime = new Date();
  const timeDifference = currentTime - timestamp;

  // Definir límites de tiempo en milisegundos
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;

  if (timeDifference < minute) {
    return "Just now";
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);

    return `${minutesAgo} min ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);

    return `${hoursAgo} hour ago`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);

    return `${daysAgo} day ago`;
  } else if (timeDifference < 3 * week) {
    const weeksAgo = Math.floor(timeDifference / week);

    return `${weeksAgo} week ago`;
  } else {
    const monthsAgo = Math.floor(timeDifference / month);

    return `${monthsAgo} month ago`;
  }
}

export function giveTime(lastMsj) {
  const timestamp = lastMsj ? new Date(lastMsj?.timestamp).getTime() : 0;
  const formatTime = formatTimeAgo(timestamp);

  return formatTime;
}
