import { useState } from "react";
import styles from "./DateSelector.module.css";

interface DateSelectorProps {
  title: string;
  onSelected: (date: Date) => void;
}

function DateSelector({ title, onSelected }: DateSelectorProps) {
  // const [date, setDate] = useState<Date | null>(null);
  const [dateString, setDateString] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setDateString(value);

    const parsedDate = new Date(`${value}T00:00:00.000Z`);
    // validate date
    if (isNaN(parsedDate.getTime())) {
      // setDate(parsedDate);
      setError("invalid date");
    } else {
      onSelected(parsedDate);
    }
  };

  return (
    <div className={styles.dateSelector}>
      <p>{title}</p>
      {error && <p>{error}</p>}
      <input type="date" value={dateString} onChange={handleDateChange} />
    </div>
  );
}

export { DateSelector };
