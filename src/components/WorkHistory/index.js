import React from 'react';

import {
    ExperienceContainer, ExperienceTitle, ExperiencePeriodContainer, ExperiencePeriodTitle, ExperienceDescription
} from './styles';

import { BsCalendarFill } from 'react-icons/bs';




export default function WorkHistory({ experiencePosition, experienceCompany, experiencePeriodInit, experiencePeriodEnd, descriptions = [] }) {
    const handlePeriod = (init, end) => {
        return (end ? init + ' - ' + end : init);
    }

    const handleDescription = (isImportant, html, text) => {
        if (isImportant) {
            return <ExperienceDescription><b>{text}</b></ExperienceDescription>
        } else if (html) {
            return <ExperienceDescription dangerouslySetInnerHTML={{ __html: text }} />
        } else {
            return <ExperienceDescription>{text}</ExperienceDescription>
        }
    }

    return (
        <ExperienceContainer>
            <ExperienceTitle><b>{experiencePosition} / {experienceCompany}</b> </ExperienceTitle>
            <ExperiencePeriodContainer>
                <ExperiencePeriodTitle>
                    <BsCalendarFill size={15} />{handlePeriod(experiencePeriodInit, experiencePeriodEnd)}
                </ExperiencePeriodTitle>
            </ExperiencePeriodContainer>
            {descriptions.map((description, index) => {
                let { isImportant, text, html } = description;
                return <div key={index}>{handleDescription(isImportant, html, text)}</div>;

            })}
            <hr />
        </ExperienceContainer>
    )


            }