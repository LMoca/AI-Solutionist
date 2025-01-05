interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-cyan-200 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}