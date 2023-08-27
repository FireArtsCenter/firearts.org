import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  title?: string;
}

export default function Header({
  title = "Fire Arts Center of Chicago",
}: HeaderProps) {
  return (
    <>
      <a
        id="skip"
        className="text-screenreader hover:border-b-0 focus:border-b-0"
        href="#content"
      >
        Skip to content
      </a>

      <header className="grid grid-header mb-4 md:mb-0">
        <Image
          src="/images/bronze-pouring-header.jpg"
          className="block w-full md:w-auto"
          alt="A crucible of molten bronze being poured in a ceramic mold"
          width="720"
          height="263"
        />

        <Link
          className="border-b-0 hover:border-b-0 focus:border-b-0 hidden md:block hover:text-white focus:text-white"
          href="/"
        >
          <Image src="/fac-logo.svg" alt="" width={241} height={251} priority />
        </Link>
        <h1 className="bg-fac-red m-0 py-1 px-4 text-right w-full">{title}</h1>
      </header>
    </>
  );
}
