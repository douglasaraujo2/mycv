import React, { useState } from "react";
import Profile from '../../components/Profile';
import Footer from "../../components/Footer";
import {
    MainContent, PageArea,
    InformationTitle, InformationContainer
} from './styles';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FaCertificate } from 'react-icons/fa';

import SkillModal from "../../components/SkillModal";
import WorkHistory from "../../components/WorkHistory";



const Page = ({ dados }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = (value) => {
        setIsModalOpen(value);

        let body = document.querySelector("body");

        if (value) {
            body.classList.add("modal-open");
        } else {
            body.classList.remove("modal-open");
        }
    }
    return (
        <>
            {isModalOpen &&
                <SkillModal
                    isModalOpen={isModalOpen}
                    handleModalOpen={handleModalOpen}
                    skills={dados.skills}
                />
            }
            <PageArea>
                <Profile openModal={handleModalOpen} dados={dados} />
                <MainContent>
                    <InformationContainer>
                        <BsFillBriefcaseFill size={26} color="#009688" />
                        <InformationTitle>
                            Histórico Profissional
                        </InformationTitle>
                    </InformationContainer>
                    {dados.experiences.map((data, index) => {
                        return (
                            <WorkHistory
                                key={index}
                                experiencePosition={data.experiencePosition}
                                experienceCompany={data.experienceCompany}
                                experiencePeriodInit={data.experiencePeriodInit}
                                experiencePeriodEnd={data.experiencePeriodEnd}
                                descriptions={data.descriptions}
                            />);
                    })}

                    <InformationContainer>
                        <FaCertificate size={26} color="#009688" />
                        <InformationTitle>
                            Formação Acadêmica
                        </InformationTitle>
                    </InformationContainer>
                    {dados.graduations.map((experience) => {
                        return (
                            <WorkHistory
                                experiencePosition={experience.experiencePosition}
                                experienceCompany={experience.experienceCompany}
                                experiencePeriodInit={experience.experiencePeriodInit}
                                experiencePeriodEnd={experience.experiencePeriodEnd}
                                descriptions={experience.descriptions}
                            />);
                    })}
                </MainContent>
            </PageArea>
            <Footer />
        </>
    )
};

export default Page;