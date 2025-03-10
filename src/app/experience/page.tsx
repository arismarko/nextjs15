'use client'

import { createClient } from 'contentful';
import { useEffect, useState, useTransition } from 'react';
import {  TypeExperiences } from '../../../types/contentf/TypeExperiences';

const Experience = () => {
    const [experiences, setExperiences] = useState<TypeExperiences []>([]);
    const [filter, setFilter] = useState<string>('')
    const [isPending, startTransition] = useTransition();
    
    const client = createClient({
        space: process.env.VITE_CONTENTFUL_SPACE_ID ?? '',
        accessToken:  process.env.VITE_CONTENTFUL_ACCESS_TOKEN ?? ''
    });

    useEffect(() => {

        const getExperiences = async () => {

            startTransition(async () => {
                const entries =  await client.getEntries({content_type: 'experiences'});
                let items = [];
    
                if(filter) {
                    items = entries.items.filter(entry => {
                        return entry.fields.skills.toLowerCase().includes(filter.toLowerCase())
                    })
    
                } else { 
                    items = entries.items
                }
    
                setExperiences(items)
            });
        };

        getExperiences()
        
    
    }, [filter])
    
    return (


        <div>
            <h2>Experiences</h2>
        {isPending ? (
          <div>Loading...</div>
        ) : (
            experiences.map((experience) => 
                <div key={experience.contentTypeId}>
                   <h2>{experience.fields.company}</h2>
                   <h3>Skills</h3>
                   {experience.fields.skills}
                </div>
            )
        )}
      </div>

    )
}

export default Experience;