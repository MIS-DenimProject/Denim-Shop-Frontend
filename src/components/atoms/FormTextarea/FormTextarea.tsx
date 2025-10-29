import type { FC, TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const FormTextarea: FC<FormTextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <textarea
        id={id}
        className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-500 focus:border-transparent bg-neutral-50 text-neutral-900 resize-none"
        rows={3}
        {...props}
      />
    </div>
  );
};
