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
        className="absolute border-0 no-underline overflow-hidden h-px -m-px p-0 w-px text-xs focus:h-auto focus:w-auto focus:top-2 focus:left-2 focus:p-4 focus:border-0"
        href="#content"
      >
        Skip to content
      </a>

      <header className="md:col-start-1 md:col-span-5 md:grid md:grid-cols-4 md:items-center mb-4 md:mb-0">
        <div className="md:col-start-1 md:col-span-3">
          <Image
            src="/images/bronze-pouring-header.jpg"
            className="block md:w-full md:w-auto"
            alt="A crucible of molten bronze being poured in a ceramic mold"
            width="720"
            height="263"
          />
        </div>

        <Link
          className="border-b-0 hover:border-b-0 focus:border-b-0 hidden md:block"
          href="/"
        >
          <Image
            src="/fac-logo.svg"
            alt=""
            width={241}
            height={251}
            priority
          />
        </Link>
        <h1 className="font-raleway font-black text-white text-4xl md:col-start-1 md:col-span-5 bg-fac-red m-0 py-1 px-4 text-right w-full">
          {title}
        </h1>
      </header>
    </>
  );
}
