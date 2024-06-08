import React from "react";
import { AppWindowIcon, HomeIcon, MapIcon, User2Icon } from "lucide-react";

const FooterLink: React.FC<{
  href: string;
  icon: React.ReactNode;
}> = ({ href, icon }) => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <a
        href={href}
        className="flex flex-col items-center text-gray-700 hover:text-blue-500"
      >
        {icon}
      </a>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-t border-gray-200">
      <FooterLink href="/" icon={<HomeIcon />} />
      <FooterLink href="/map" icon={<MapIcon />} />
      <FooterLink href="/appointments" icon={<AppWindowIcon />} />
      <FooterLink href="/user" icon={<User2Icon />} />
    </div>
  );
};

export default Footer;
