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

export const cn_introContent = (
  <>
    <p className="mb-1 sm:mb-4">
      <span className="font-semibold text-3xl sm:text-5xl">
        段嘉琪 (Victoria)
      </span>
    </p>
    <span className="italic font-light text-md sm:text-2xl">
      软件工程师，研究团队负责人，艺术家
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
      Engineer, Research Lead, Artist
    </span>
  </>
);

{
  /* Hello, I'm xxx. I'm a xxx developer with x years of experience. I enjoy building xxx. My focus is xxx */
}

export const cn_introItems = {
  contact: "点击此处联系我",
  download: "下载我的简历",
  resume: "/JD_Resume.pdf",
};

export const en_introItems = {
  contact: "Contact me here",
  download: "Download Resume",
  resume: "/JD_Resume.pdf",
};

export const introLinks = {
  calendly: "https://calendly.com/jduan10/meeting-with-victoria-duan",
  linkedin: "https://www.linkedin.com/in/jiaqi-duan",
  github: "https://github.com/Victoriakaey",
  netease: "https://music.163.com/#/artist?id=46274436",
};

export const introIcons = {
  calendly: <FaCalendarCheck className="text-xl" />,
  linkedin: <BsLinkedin className="text-xl" />,
  github: <FaSquareGithub className="text-xl" />,
  netease: <SiNeteasecloudmusic className="text-xl" />,
};

export const introBtns = [
  {
    href: introLinks.calendly,
    icon: introIcons.calendly,
  },
  {
    href: introLinks.linkedin,
    icon: introIcons.linkedin,
  },
  {
    href: introLinks.github,
    icon: introIcons.github,
  },
  {
    href: introLinks.netease,
    icon: introIcons.netease,
  },
];
