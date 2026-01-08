import styles from "./DaysInput.module.css";
import { useState } from "react";

interface DaysInputProps {
  onUpdate: (days: number) => void;
}

function DaysInput({ onUpdate }: DaysInputProps) {
  const [days, setDays] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (Number.isNaN(value)) {
      setError("invalid number");
    } else {
      setError(null);
      setDays(value);
      onUpdate(value);
    }
  };

  return (
    <div className={styles.daysInput}>
      <label>
        <p>Select Number of Days:</p>
        <input type="number" min={1} value={days} onChange={handleDaysChange} />
      </label>
      {error && <span>{error}</span>}
    </div>
  );
}

export { DaysInput };
