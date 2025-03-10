import type { Entry, EntryFields } from "contentful";

export interface TypeProjectsFields {
    projectName?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    skills?: EntryFields.Symbol;
    company?: EntryFields.Symbol;
}

export type TypeProjects = Entry<TypeProjectsFields>;
