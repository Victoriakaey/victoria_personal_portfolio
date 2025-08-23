import { BsLinkedin } from "react-icons/bs";
import {
  FaCalendar,
  FaCalendarCheck,
  FaGithub,
  FaGithubSquare,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiNeteasecloudmusic } from "react-icons/si";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { PiGithubLogoFill } from "react-icons/pi";




export const cn_introContent = (
  <>
    <p className="mb-1 sm:mb-4">
      <span className="font-semibold text-3xl sm:text-5xl">
        段嘉琪 (Victoria)
      </span>
    </p>
    <span className="italic font-light text-md sm:text-2xl">
      软件工程师，研究员，艺术家
    </span>
  </>
);

export const en_introContent = (
  <>
    <p className="mb-1 sm:mb-4">
      <span className="font-semibold text-3xl sm:text-5xl">
        Jiaqi (Victoria) Duan
      </span>
    </p>
    <span className="italic font-light text-md sm:text-2xl">
      Engineer, Researcher, Artist
    </span>
  </>
);

{
  /* Hello, I'm xxx. I'm a xxx developer with x years of experience. I enjoy building xxx. My focus is xxx */
}

export const cn_introItems = {
  contact: "点击此处联系我",
  download: "下载我的简历",
  resume: "/Jiaqi_Duan_Resume.pdf",
};

export const en_introItems = {
  contact: "Contact me here",
  download: "Download Resume",
  resume: "/Jiaqi_Duan_Resume.pdf",
};

export const introLinks = {
  calendly: "https://calendly.com/jduan10/meeting-with-victoria-duan",
  scholar: "https://scholar.google.com/citations?user=pzf2YpwAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/jiaqi-duan",
  github: "https://github.com/Victoriakaey",
  netease: "https://music.163.com/#/artist?id=46274436",
  spotify: "https://open.spotify.com/artist/2zKFtSlWX5ulWikdcOIf76?si=Le6H6tzVQcWk5NKUk8TcMg",
  applemusic: "https://music.apple.com/us/artist/vyke/1827533554"
};

export const introIcons = {
  calendly: <FaCalendarCheck className="text-xl" />,
  scholar: <FaGoogleScholar className="text-xl" />,
  linkedin: <BsLinkedin className="text-xl" />,
  github: <FaSquareGithub className="text-xl" />,
  netease: <SiNeteasecloudmusic className="text-xl" />,
  spotify: <FaSpotify className="text-xl" />,
  applemusic: <SiApplemusic className="text-xl" />,
};

export const introBtns = [
  // {
  //   href: introLinks.calendly,
  //   icon: introIcons.calendly,
  // },
  {
    href: introLinks.scholar,
    icon: introIcons.scholar,
  },
  {
    href: introLinks.linkedin,
    icon: introIcons.linkedin,
  },
  {
    href: introLinks.github,
    icon: introIcons.github,
  },
  // {
  //   href: introLinks.netease,
  //   icon: introIcons.netease,
  // },
  {
    href: introLinks.applemusic,
    icon: introIcons.applemusic,
  },
];
