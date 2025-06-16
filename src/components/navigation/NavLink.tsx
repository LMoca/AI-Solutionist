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
      className="block text-cyan-200 hover:text-cyan-400 px-6 py-4 rounded-md text-xl font-medium transition-colors duration-200 text-center"
    >
      {children}
    </a>
  );
}