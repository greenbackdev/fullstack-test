import { Fragment, PropsWithChildren, ReactNode } from "react";

export type OptionType = { value: string; label: string };

export interface Props {
  value?: string;
  options: Array<OptionType>;
  onChange?: (value: string) => void;
  className?: string;
  children?: ReactNode;
}

const Select = ({ value, options, onChange, className, children }: Props) => {
  return (
    <label>
      {children}

      <select
        value={value}
        onChange={({ target: { value } }) => onChange?.(value)}
        className={className}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
