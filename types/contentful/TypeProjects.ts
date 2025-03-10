import type { Entry, EntryFields } from "contentful";

export interface TypeProjectsFields {
    projectName?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    skills?: EntryFields.Symbol;
    company?: EntryFields.Symbol;
    fields: {
        projectName: EntryFields.Symbol;
        description: EntryFields.Symbol;
        skills: EntryFields.Symbol;
        company: EntryFields.Symbol;
    };
    contentTypeId: string;
}

export type TypeProjects = Entry<TypeProjectsFields>;
