import React from 'react';
import { ArrowRight, User } from 'lucide-react';

function CTAButton({ children, as: Component = 'button', variant = 'primary', icon = 'none', width = 'normal', ...props }) {
  const baseClasses = "group rounded-full font-bold text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-400",
    secondary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-400"
  };

  const widthClasses = {
    normal: "px-2 py-2",
    narrow: "px-1 py-2"
  };

  const blockClasses = "bg-blue-800 bg-opacity-50 group-hover:bg-opacity-70 rounded-full flex items-center justify-center space-x-2 transition-all duration-300";
  
  const blockWidthClasses = {
    normal: "px-4",
    narrow: "px-2"
  };

  const icons = {
    arrow: <ArrowRight className="w-5 h-5" />,
    user: <User className="w-5 h-5" />,
    none: null
  };

  return (
    <Component 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses[width]} ${props.className || ''}`}
      {...props}
    >
      <div className={`${blockClasses} ${blockWidthClasses[width]} py-2`}>
        <span>{children}</span>
        {icons[icon]}
      </div>
    </Component>
  );
}

export default CTAButton;