import { cn_links, en_links } from "./data";

export type SectionName = (typeof cn_links | typeof en_links)[number]["name"];

export type projectsDataType = {
    title: string
    time: string,
    description: string,
    sideNotes: string,
    tags: string[],
    imageUrl: string | null,
    projectUrl: string | null,
}