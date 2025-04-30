import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Sending data to a backend endpoint
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

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
      link: "https://www.facebook.com/moxelco", // Facebook link
    },
    {
      icon: <InstagramIcon className="w-12 h-12 text-white" />,
      alt: "Instagram",
      link: "https://www.instagram.com/moxelco", // Instagram link
    },
    {
      icon: <LinkedinIcon className="w-12 h-12 text-white" />,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/moxelco/", // LinkedIn link
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
                <img
                  src="./moxel_wordmark_white_h_320x132.png"
                  alt="Moxel Logo"
                  className="logo-image"
                />
              </div>

              <nav className="flex items-center">
                {navItems.map((item, index) => (
                  <div key={index} className="nav-item">
                    {item === "Home" && (
                      <a href="https://moxel.co" className="nav-item-text">
                        {item}
                      </a>
                    )}
                    {item === "About Us" && (
                      <a href="https://moxel.co/about" className="nav-item-text">
                        {item}
                      </a>
                    )}
                    {item === "Contact" && (
                      <a href="#contact-form" className="nav-item-text">
                        {item}
                      </a>
                    )}
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
                  <div className="work-item-image">
                    <video
                      className="work-item-video"
                      poster={`./thumbnails/${item.title.toLowerCase()}.jpg`} // Example thumbnail path
                      muted
                      loop
                      playsInline
                      ref={(video) => {
                        if (video && index === playingIndex) {
                          video.play();
                        } else if (video) {
                          video.pause();
                        }
                      }}
                    >
                      <source src="./video-bg.mp4" type="video/mp4" />
                    </video>
                    {playingIndex !== index && (
                      <div
                        className="play-button-overlay"
                        onClick={() => setPlayingIndex(index)} // Play the video
                      >
                        ▶
                      </div>
                    )}
                    {playingIndex === index && (
                      <div
                        className="pause-button-overlay"
                        onClick={() => setPlayingIndex(null)} // Pause the video
                      >
                        ❚❚
                      </div>
                    )}
                  </div>
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
        <div id="contact-form" className="w-full mt-[100px] px-[186px]">
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
                    Talk to us to find out how we can build something special
                    for you to engage your customer in a new, special way.
                    <br />
                    <br />
                    Feel free to reach out to us on our socials as well, if
  you prefer to start the conversation that way.
                  </div>
                </div>

                <div className="social-icons">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.alt}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Input
                    className="input-field"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  className="input-field"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Textarea
                  className="textarea-field"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button className="send-button" type="submit">
                  <span className="send-button-text">Send</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              {footerLinks.map((link, index) => (
                <div key={index} className="footer-link-item">
                  {link}
                </div>
              ))}
            </div>
            <div className="footer-copyright">
              © 2025 MOXEL PTE LTD ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};