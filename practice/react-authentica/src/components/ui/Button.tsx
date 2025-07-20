import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

// Define the Button component's props interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string; // Optional className for custom styles
}

// Use forwardRef to support ref forwarding
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', type = 'button', ...props }, ref) => {
    return (
      <button
        type={type} // Default to 'button' to avoid unintended form submissions
        className={`bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Optional: Set display name for better debugging
Button.displayName = 'Button';