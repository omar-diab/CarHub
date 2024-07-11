import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="text-black-100 mt-5 border-t border-gray-100">
      <div className="container mx-auto px-6 sm:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
            <p className="text-base text-gray-700">
              CarHub 2024 <br />
              All Rights Reserved &copy;
            </p>
          </div>
          <div className="flex-1 w-full flex md:justify-end flex-wrap gap-20">
            {footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                <h3 className="font-bold text-primary-blue">{link.title}</h3>
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url} className="text-gray-500">
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-16 py-10 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-10">
          <p>&copy; 2024 CarHub. All Rights Reserved</p>
          <div className="flex sm:justify-end justify-center gap-10">
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
