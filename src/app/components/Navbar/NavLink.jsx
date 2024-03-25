import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 lg:text-base md:text-base text-secondarytext sm:text-xl rounded md:p-0 hover:text-primary-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;
