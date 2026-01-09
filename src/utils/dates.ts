const oneDay = 1000 * 60 * 60 * 24;

function isDateInThePast(start: Date) {
  const rightNow = new Date();
  const timestampUTC = Date.UTC(
    rightNow.getFullYear(),
    rightNow.getMonth(),
    rightNow.getDate(),
  );
  const todayUTC = new Date(timestampUTC);
  todayUTC.setUTCHours(0, 0, 0, 0);

  return start.getTime() < todayUTC.getTime();
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

  return new Date(utc + days * oneDay);
}

export { daysBetween, addDays, isDateInThePast };
