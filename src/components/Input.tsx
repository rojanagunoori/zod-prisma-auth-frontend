import React from "react";
import "./Input.css"; // Add custom styles for Input

type InputProps = {
  label: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, ...props }, ref) => {
    return (
      <div className="input-wrapper">
        <label className="input-label">{label}</label>
        <input
          type={type}
          ref={ref}
          className={`input-field ${error ? "input-error-border" : ""}`}
          {...props}
        />
        {error && <span className="input-error">{error}</span>}
      </div>
    );
  }
);

export default Input;
