import type { FC, InputHTMLAttributes } from "react";

interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id: string;
}

export const FormCheckbox: FC<FormCheckboxProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={id}
        className="w-4 h-4 text-denim-600 bg-white border-neutral-300 rounded focus:ring-2 focus:ring-denim-500"
        {...props}
      />
      <label htmlFor={id} className="text-sm text-neutral-900 cursor-pointer">
        {label}
      </label>
    </div>
  );
};
