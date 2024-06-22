import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type projectsDataType = {
    title: string
    time: string,
    description: string,
    sideNotes: string,
    tags: string[],
    imageUrl: string | null,
    projectUrl: string | null,
}