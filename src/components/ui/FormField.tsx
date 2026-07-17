import type { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBaseClasses =
  "w-full rounded-lg border border-border-subtle bg-white px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-brand-teal focus-visible:outline-offset-1";
const errorFieldClasses = "border-error";

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export function FieldWrapper({ id, label, required, error, hint, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-text-primary">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-error">
            *
          </span>
        )}
        {!required && <span className="ml-1.5 text-xs font-normal text-text-muted">(optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-text-muted">
          {hint}
        </p>
      )}
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}

interface BaseInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  hint?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  placeholder?: string;
}

export function TextField({
  id,
  name,
  label,
  value,
  onChange,
  required,
  error,
  hint,
  type = "text",
  autoComplete,
  maxLength,
  placeholder,
}: BaseInputProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error} hint={hint}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={`${fieldBaseClasses} ${error ? errorFieldClasses : ""}`}
      />
    </FieldWrapper>
  );
}

interface TextareaFieldProps
  extends Omit<BaseInputProps, "type" | "autoComplete">,
    Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> {}

export function TextareaField({
  id,
  name,
  label,
  value,
  onChange,
  required,
  error,
  hint,
  maxLength,
  placeholder,
  rows = 5,
}: TextareaFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={`${fieldBaseClasses} resize-y ${error ? errorFieldClasses : ""}`}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "name"> {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  options,
  required,
  error,
  placeholder = "Select an option",
}: SelectFieldProps) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBaseClasses} ${error ? errorFieldClasses : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

interface CheckboxFieldProps {
  id: string;
  name: string;
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
}

export function CheckboxField({ id, name, label, checked, onChange, required, error }: CheckboxFieldProps) {
  return (
    <div>
      <div className="flex items-start gap-2.5">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-subtle text-teal-text focus-visible:outline-2 focus-visible:outline-brand-teal focus-visible:outline-offset-1"
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-text-primary">
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-error">
              *
            </span>
          )}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}

interface CheckboxGroupProps {
  legend: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export function CheckboxGroup({ legend, required, error, children }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-text-primary">
        {legend}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-error">
            *
          </span>
        )}
        {!required && <span className="ml-1.5 text-xs font-normal text-text-muted">(optional)</span>}
      </legend>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">{children}</div>
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}
