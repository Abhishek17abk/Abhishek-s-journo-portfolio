import React from 'react';

function CTAButton({ children, as: Component = 'button', variant = 'primary', ...props }) {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <Component 
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default CTAButton;
