import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerField.scss";

interface DatePickerFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: any;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const handleDateChange = (date: Date | null) => {
    onChange({
      target: {
        name,
        value: date?.toISOString().split("T")[0],
      },
    });
  };

  return (
    <div>
      <label className="block mb-2" htmlFor={name}>
        {label}
      </label>
      <DatePicker
        selected={new Date(value)}
        onChange={handleDateChange}
        className="w-full p-2 pl-3 border rounded-2xl"
        dateFormat="dd MMMM yyyy"
        id={name}
        aria-label={label}
      />
    </div>
  );
};

export default DatePickerField;
