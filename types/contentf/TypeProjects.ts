import type { Entry, EntryFields } from "contentful";

export interface TypeProjectsFields {
    fields: {
        projectName?: EntryFields.Symbol;
        description?: EntryFields.Symbol;
        skills?: EntryFields.Symbol;
        company?: EntryFields.Symbol;
        year?: EntryFields.Symbol;
    };
    contentTypeId: string;
}

export type TypeProjects = Entry<TypeProjectsFields>;
