import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 992 ? setIsDesktop(true) : setIsDesktop(false);
    });
  });
  return (
    <div className="home__page">
      <header className="container text-center">
        <button className="btn_share">
          <img
            src={`${
              isDesktop
                ? "./images/desktop-share.png"
                : "/images/mobile-share.png"
            }`}
            alt="share profile"
          />
        </button>
        <div className="avatar">
          <img
            src="https://ca.slack-edge.com/T042F7V19Q8-U048MJWN34H-ad82ec5ba887-512"
            alt="profile img"
            id="profile__img"
          />
          <div className="avatar-overlay ">
            <img
              className="img-uploader"
              src="./images/camera.png"
              alt="img-uploader"
            />
          </div>
        </div>
        {/* <p id="slack">utin-francis-peter</p> */}
        <h1 className="pt-4 pb-5" id="slack">
          Utin Francis Peter
        </h1>
      </header>

      <main className="container">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            id={link.id}
            target={link.id === "contact" ? "" : "_blank"}
            rel="noopener noreferrer">
            <button className={`${!isDesktop ? "btn_sm" : "btn_lg"}`}>
              {link.name}
            </button>
          </a>
        ))}
        <div className="d-flex-center gap-3 mt-5 mb-5">
          <img className="main-icons" src="./images/slack.png" alt="slack" />
          <a
            href="https://github.com/utin-francis-peter/hng-basic-webpage-task1"
            target={"_blank"}
            rel="noopener noreferrer">
            <img className="main-icons" src="./images/icon.png" alt="github" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

const links = [
  {
    id: "twitter",
    name: "Twitter Link",
    link: "https://twitter.com/fran6is_",
  },
  {
    id: "btn__zuri",
    name: "Zuri Team",
    link: "https://training.zuri.team/",
  },
  {
    id: "books",
    name: "Zuri Books",
    link: "https://books.zuri.team/",
  },
  {
    id: "book__python",
    name: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=utin-francis-peter",
  },
  {
    id: "pitch",
    name: "Background Check for Coders",
    link: "https://background.zuri.team/",
  },
  {
    id: "book__design",
    name: "Design Books",
    link: "https://books.zuri.team/design-rules",
  },
  {
    id: "contact",
    name: "Contact Me",
    link: "/contact",
  },
];
