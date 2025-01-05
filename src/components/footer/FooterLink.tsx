interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function FooterLink({ href, children, external }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-cyan-200 hover:text-cyan-400 transition-colors duration-200 block"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}