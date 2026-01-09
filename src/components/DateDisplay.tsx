import styles from "./DateDisplay.module.css";

interface DateDisplayProps {
  date: Date;
  label?: string;
  options?: Intl.DateTimeFormatOptions;
}

const defaultOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

function DateDisplay({
  date,
  options = defaultOptions,
  label,
}: DateDisplayProps) {
  const dtFormat = Intl.DateTimeFormat("en-US", options);

  return (
    <div className={styles.dateDisplay}>
      {label && <p>{label}</p>}
      <time>{dtFormat.format(date)}</time>
    </div>
  );
}

export { DateDisplay };
