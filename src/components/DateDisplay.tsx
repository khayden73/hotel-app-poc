import styles from "./DateDisplay.module.css";

interface DateDisplayProps {
  start: Date;
  end?: Date;
  label?: string;
  options?: Intl.DateTimeFormatOptions;
  showRange?: boolean;
}

const defaultOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const rangeOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

function DateDisplay({
  start,
  end,
  options = defaultOptions,
  label,
  showRange = false,
}: DateDisplayProps) {
  const dtFormat = Intl.DateTimeFormat(
    "en-US",
    showRange ? rangeOptions : options,
  );

  console.info({
    start,
    end,
    showRange,
    resolvedOptions: dtFormat.resolvedOptions(),
    parts: dtFormat.formatRangeToParts(start, end!),
  });

  return (
    <div className={styles.dateDisplay}>
      {showRange && end ? (
        <p>Dates: {dtFormat.formatRange(start, end)}</p>
      ) : (
        <>
          {label && <p>{label}</p>}
          <time dateTime={start.toUTCString()}>{dtFormat.format(start)}</time>
        </>
      )}
    </div>
  );
}

export { DateDisplay };
