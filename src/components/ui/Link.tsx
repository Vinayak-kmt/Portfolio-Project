import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }

    // Call the original onClick if it exists
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={`transition-all duration-300 ${className}`} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};