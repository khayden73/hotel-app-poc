const oneDay = 1000 * 60 * 60 * 24;

function areDatesInOrder(date1: Date, date2: Date) {
  return date1 < date2;
}

function daysBetween(start: Date, end: Date) {
  // convert to UTC timestamps
  const startUTC = Date.UTC(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );
  const endUTC = Date.UTC(
    end.getUTCFullYear(),
    end.getUTCMonth(),
    end.getUTCDate(),
  );

  // calculate the difference in milliseconds
  const differenceMs = Math.abs(endUTC - startUTC);
  return Math.ceil(differenceMs / oneDay);
}

function addDays(start: Date, days: number) {
  // convert to UTC timestamps
  const utc = Date.UTC(
    start.getUTCFullYear(),
    start.getUTCMonth(),
    start.getUTCDate(),
  );
  const end = new Date(utc + days * oneDay);
  console.info("[addDays]", {
    start,
    utc,
    days,
    oneDay,
    math: utc + days * oneDay,
    end,
  });
  return end;
}

export { daysBetween, addDays };
