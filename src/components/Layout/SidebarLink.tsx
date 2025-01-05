import React from 'react';

interface SidebarLinkProps {
  icon?: React.ReactNode;
  label: string;
  href: string;
}

const SidebarLink = ({ icon, label, href }: SidebarLinkProps) => (
  <a 
    href={href} 
    className="flex items-center text-gray-400 hover:text-white transition duration-300"
  >
    {icon && <div className="w-6 h-6 mr-4">{icon}</div>}
    <span>{label}</span>
  </a>
);

export default SidebarLink;