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



const Page = ({ dados, language, brazilLanguageCode }) => {
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
                <Profile 
                    openModal={handleModalOpen} 
                    dados={dados} 
                    language={language}
                    brazilLanguageCode={brazilLanguageCode}/>
                <MainContent>
                    <InformationContainer>
                        <BsFillBriefcaseFill size={26} color="#009688" />
                        {language === brazilLanguageCode &&
                            <InformationTitle>
                                Histórico Profissional
                            </InformationTitle>
                        }
                        {language !== brazilLanguageCode &&
                            <InformationTitle>
                                Work History
                            </InformationTitle>
                        }

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
                        {language === brazilLanguageCode &&
                            <InformationTitle>
                                 Formação Acadêmica
                            </InformationTitle>
                        }
                        {language !== brazilLanguageCode &&
                            <InformationTitle>
                                Education
                            </InformationTitle>
                        }
                    </InformationContainer>
                    {dados.graduations.map((experience, index) => {
                        return (
                            <WorkHistory
                                key={index}
                                experiencePosition={experience.experiencePosition}
                                experienceCompany={experience.experienceCompany}
                                experiencePeriodInit={experience.experiencePeriodInit}
                                experiencePeriodEnd={experience.experiencePeriodEnd}
                                descriptions={experience.descriptions}
                            />);
                    })}
                </MainContent>
            </PageArea>
            <Footer language={language} brazilLanguageCode={brazilLanguageCode}/>
        </>
    )
};

export default Page;