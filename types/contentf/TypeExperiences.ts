import type { Entry, EntryFields, EntrySkeletonType} from "contentful";

export interface TypeExperiencesFields {
    company?: EntryFields.Symbol;
    skills?: EntryFields.Symbol;
    date?: EntryFields.Symbol;
}

export type TypeProjectsEntry = Entry<TypeExperiences, undefined, string>

export type TypeExperiences = EntrySkeletonType<TypeExperiencesFields>;

