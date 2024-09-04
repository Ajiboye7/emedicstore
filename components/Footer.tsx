import Image from "next/image";
import { FooterLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd w-full">
      <div className="content flex flex-col max-w-[1600px] mx-auto p-10 justify-end sm:mt-0">
      <div className="top flex flex-row justify-between flex-wrap gap-[10px] xs:gap-5 mb-12 md:mb-28">
          <div className="left items-center">
            <div className="logo flex items-center gap-3">
              <Image
                src="/Rectangle 3351.svg"
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <p className="footer-body py-7">
              Your Accessible and Budget - Friendly
              <br/> Online Pharmacy.
            </p>
            <div className="flex flex-col gap-5 mb-10">
            <p className="footer-body">support@emedicstore.org</p>
            <p className="footer-body">+234 7025007538, +234 9124652534</p>
            </div>
            
            <div className="socials flex gap-5">
              {/*<Image
                src="/LinkedIn.svg"
                alt="linkedin"
                width={40}
                height={40}
                className="w-[15px] h-[15px]"
              />*/}
              <Image
                src="/Facebook.svg"
                alt="facebook"
                width={30}
                height={30}
                
              />
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <Image
                  src="/Instagram.svg"
                  alt="instagram"
                  width={32} 
                  height={32} 
                  className="w-[15px] h-[15px]"
                />
              </div>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src="/Vector.svg"
                alt="twitter"
                width={40}
                height={40}
                className="w-[15px] h-[15px]"
              />
              </div>
              
            </div>
          </div>
          {FooterLinks.map((column, columnIndex) => (
            <div key={column.title} className="title">
              <p className="footer-title pb-5">{column.title}</p>
              <ul className="links footer-links">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={link.title}
                    className="footer-link text-footerLinkFont py-2"
                  >
                    {columnIndex === FooterLinks.length - 1 &&
                    linkIndex === column.links.length - 1 ? (
                      <Link
                        href={link.url}
                        className="flex justify-between items-center border-b-2 border-footerBorderLine pb-4"
                      >
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
        <div className="bottom text-fontColor flex sm:justify-center lg:justify-between items-center flex-wrap gap-5 border-t-2 border-footerBorderLine pt-8">
          <p className="footer-text-bottom">
            &copy; 2023 CardCircuit. All rights reserved
          </p>
          <p className="footer-text-bottom">
            private policy | Terms and Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
