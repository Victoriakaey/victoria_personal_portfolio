import type { ReactNode } from "react";

const spotifyUrl = "https://open.spotify.com/artist/2zKFtSlWX5ulWikdcOIf76";

export const en_aboutTitle = "About me";

export const cn_aboutTitle = "关于我";

/** Anchor words. Sparse on purpose — the whole point is having something to land on. */
function Key({ children }: { children: ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}

function Anchor({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="underline underline-offset-4 decoration-1 transition hover:text-black dark:hover:text-white"
    >
      {children}
    </a>
  );
}

export const cn_aboutParagraphs: ReactNode[] = [
  <>
    我一直对事物的本质，以及它们是如何一步步发展至今的，抱有很深的兴趣。
  </>,
  <>
    这种好奇心不断驱使着我去学习新的东西。<Key>心理学</Key>
    让我理解人的行为、成长，以及人与人之间复杂的互动；<Key>计算机科学</Key>
    让我开始从系统的角度思考问题，理解复杂系统如何被设计、构建和演化，也让我拥有了把想法变成现实的能力；
    <Key>AI</Key>
    则让我开始探索，人和智能系统能够如何共同思考、共同创造。它们看起来属于不同的学科，但对我来说，都在帮助我回答同样的问题。
  </>,
  <>
    后来我发现，那些一路思考、学习和经历过的东西，最后总会变成一些作品。它们有时候是
    <Anchor href="/#projects">软件</Anchor>，有时候是
    <Anchor href={spotifyUrl}>音乐</Anchor>
    、文字、绘画、陶艺，或者料理。媒介一直在变，但过程没有变过。这也是我理解世界的方式。
  </>,
];

export const en_aboutParagraphs: ReactNode[] = [
  <>
    I&apos;ve always been curious about how things become what they are. That
    question led me to psychology, computer science, and eventually AI, but it
    has never really changed.
  </>,
  <>
    That curiosity keeps leading me toward new ways of understanding the world.{" "}
    <Key>Psychology</Key> taught me to think about human behavior, development,
    and relationships. <Key>Computer science</Key> taught me how complex systems
    are designed, built, and evolve, while giving me the ability to turn ideas
    into something real. <Key>AI</Key> has become another way for me to explore
    how humans and intelligent systems can work together over time.
  </>,
  <>
    Eventually, what I learn and experience usually turns into something I can
    make. Sometimes it&apos;s <Anchor href="/#projects">software</Anchor>.
    Sometimes it&apos;s <Anchor href={spotifyUrl}>music</Anchor>, poetry,
    drawings, pottery, or food. The medium changes, but the process doesn&apos;t.
    It&apos;s simply how I make sense of the world.
  </>,
];
