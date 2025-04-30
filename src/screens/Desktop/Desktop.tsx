import React from "react";
import "./Desktop.css"; // Import the CSS file
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const Desktop = (): JSX.Element => {
  const navItems = ["Home", "About Us", "Contact"];
  const workItems = [
    { title: "Guitar", type: "PRODUCT CONFIGURATOR" },
    { title: "Car", type: "PRODUCT CONFIGURATOR" },
    { title: "Shirt", type: "PRODUCT CONFIGURATOR" },
  ];
  const footerLinks = ["PRIVACY POLICY", "TERMS OF USE"];
  const socialIcons = [
    {
      icon: <FacebookIcon className="w-12 h-12 text-white" />,
      alt: "Facebook",
    },
    {
      icon: <InstagramIcon className="w-12 h-12 text-white" />,
      alt: "Instagram",
    },
    { icon: <TwitterIcon className="w-12 h-12 text-white" />, alt: "Twitter" },
    {
      icon: <LinkedinIcon className="w-12 h-12 text-white" />,
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="bg-dark flex-center w-full">
      <div className="bg-dark overflow-hidden w-full max-w-1440 relative">
        {/* Hero Section */}
        <section className="hero-section">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23D9D9D9'/%3E%3C/svg%3E"
          >
            <source src="./video-bg.mp4" type="video/mp4" />
          </video>

          <header className="hero-header">
            <div className="hero-header-container">
              <div className="logo-container">
                <div className="w-[60px] h-[60px]" />
                <div className="logo-text">MOXEL</div>
              </div>

              <nav className="flex items-center">
                {navItems.map((item, index) => (
                  <div key={index} className="nav-item">
                    <div className="nav-item-text">{item}</div>
                  </div>
                ))}
              </nav>
            </div>
          </header>
        </section>

        {/* Main Content Section */}
        <section className="main-content">
          {/* Value Proposition */}
          <div className="value-proposition">
            <div className="value-proposition-title">
              Tailoring Your Immersive 3d Product Experience
            </div>

            <div className="value-proposition-subtitle">
              We want to build an impactful application — with you, for your customers.
            </div>

            <div className="value-proposition-description">
              Increase engagement and conversion rate with your audience by letting
              your customers explore, customise and connect with your products with a
              fun, visually stunning experience.
            </div>
          </div>

          {/* Our Works Section */}
          <div className="works-section">
            <h2 className="works-title">OUR WORKS</h2>

            <div className="works-grid">
              {workItems.map((item, index) => (
                <div key={index} className="work-item">
                  <div className="work-item-image" />
                  <div className="flex flex-col items-center w-full py-4">
                    <div className="work-item-title">{item.title}</div>
                    <div className="work-item-type">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <div className="w-full mt-[100px] px-[186px]">
          <h2 className="font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)] mb-16">
            CONTACT US
          </h2>

          <Card className="w-full bg-[#ffffff0a] rounded-[20px] border-2 border-solid border-[#090c170d] backdrop-blur-[190px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(190px)_brightness(100%)]">
            <CardContent className="flex flex-row items-center justify-center gap-[30px] p-5">
              <div className="w-[417px] flex flex-col items-start justify-center gap-[30px]">
                <div className="flex flex-col gap-2">
                  <div className="font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                    Let&apos;s Chat
                  </div>
                  <div className="opacity-80 [font-family:'Outfit',Helvetica] font-extralight text-white text-base">
                    Talk To Us To Find Out How We Can Build Something Special
                    For You To Engage Your Customer In A New, Special Way.
                    <br />
                    <br />
                    feel Free To Reach Out To Us On Our Socials As Well, If
                    You Prefer To Start The Conversation That Way.
                  </div>
                </div>

                <div className="flex items-start gap-[33px]">
                  {socialIcons.map((social, index) => (
                    <div key={index} className="cursor-pointer">
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[525px] flex flex-col gap-[41px] p-10">
                <div className="flex flex-col items-start gap-3.5 w-full">
                  <div className="flex items-start gap-3.5 w-full z-[3]">
                    <Input
                      className="flex-1 px-3.5 py-3 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] text-[#ffffff99] font-paragraph"
                      placeholder="Name"
                    />
                  </div>

                  <Input
                    className="w-full px-3.5 py-3 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] text-[#ffffff99] font-paragraph z-[2]"
                    placeholder="Email"
                  />

                  <Textarea
                    className="w-full h-[111px] px-3.5 py-3 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] text-[#ffffff99] font-paragraph z-[1]"
                    placeholder="Message"
                  />

                  <Button className="w-full py-3 z-0 rounded-[5px] [background:linear-gradient(90deg,rgba(118,58,245,1)_0%,rgba(166,4,242,1)_100%)]">
                    <span className="font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                      Send
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="flex w-full justify-end mt-[45px] mb-[38px] px-[186px]">
          <div className="flex flex-col w-[513px] h-12 items-end justify-between">
            <div className="flex items-center gap-[30px]">
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className="[font-family:'Outfit',Helvetica] font-normal text-white text-base text-center tracking-[-0.80px] cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
            <div className="[font-family:'Outfit',Helvetica] font-thin text-white text-base text-right tracking-[-0.80px]">
              © 2025 MOXEL PTE LTD ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};