import Link from "next/link";

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <li className="ml-10">
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <nav className="sticky top-0 flex justify-start max-w-3xl m-auto pt-10 sticky">
        <ul className="flex">
          <MenuItem label="Home" href="/" />
          <MenuItem label="Blog" href="/blog" />
          <MenuItem label="About" href="/about" />
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
