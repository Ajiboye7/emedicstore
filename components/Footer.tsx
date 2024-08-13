import Image from "next/image";
import { FooterLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-primaryGradientEnd to-primaryGradientStart w-full">
        <div className="content flex flex-col max-w-[1600px] mx-auto p-10 justify-end sm:mt-0">
          <div className="top flex flex-row justify-between flex-wrap gap-5 mb-28">
            <div className="left items-center">
              <div className="logo flex items-center gap-3">
                <Image src="/Rectangle 3351.svg" alt="logo" width={80} height={80} />
                <h2 className="text-fontColor text-3xl font-bold">CardCircuit</h2>
              </div>
              <p className="text-fontColor text-footerLinkFont py-7 leading-relaxed">
                Discover seamless financial <br /> freedom with CardCircuit.
                Elevate your
                <br />
                money management game <br />
                by downloading our app now.
              </p>
              <div className="socials flex gap-5">
                <Image
                  src="/LinkedIn.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Facebook.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Instagram.svg"
                  alt="intagram"
                  width={40}
                  height={40}
                />
                <Image src="/Vector.svg" alt="twitter" width={40} height={40} />
              </div>
            </div>
            {FooterLinks.map((column, columnIndex) => (
              <div key={column.title} className="title">
                <h3 className="text-fontColor text-3xl font-bold pb-5">
                  {column.title}
                </h3>
                <ul className="links text-fontColor">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={link.title}
                      className="footerLinks text-footerLinkFont py-2"
                    >
                      {columnIndex === FooterLinks.length - 1 &&
                      linkIndex === column.links.length - 1 ? (
                        <Link href={link.url} className="flex gap-3 items-center border-b-2 pb-4">
                          {link.title}{" "}
                          <Image 
                          src="/Arrow Right.svg" 
                          alt="arrow-right" 
                          width={40}
                          height={40}
                          />
                        </Link>
                      ) : (
                        <Link href={link.url}>{link.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bottom text-fontColor flex sm:justify-center lg:justify-between items-center flex-wrap gap-5 border-t-2 pt-8">
            <p className="text-2xl">&copy; 2023 CardCircuit. All rights reserved</p>
            <p className="text-2xl ">private policy | Terms and Conditions</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  