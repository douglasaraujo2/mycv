import {
    ProfileMenu, ProfilePhoto, ProfileName, ProfileContainer,
    InformationContainer, InformationText,
    Clickable, ShowMoreButton
} from "./styles";
import { SkillContainer } from '../MainComponents';
import Skill from '../Skill';

import { BsFillBriefcaseFill, BsFillHouseDoorFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaAsterisk, FaWhatsapp } from 'react-icons/fa';


const Page = ({ openModal, dados }) => {
    let { name, position, location, email, mobile, skills } = dados;
    // eslint-disable-next-line 
    mobile = mobile.replace(/\%20/g, "");
    const openPhoneLink = () => {
        window.open(`https://api.whatsapp.com/send?phone=${mobile}`, '_blank');
        return false;
    }

    const sendMeAnEmail = () => {
        window.open(`mailto:${email}?subject=Contato Perfil Dev`, "same");
    }
    const modalOpen = () => {
        openModal(true);
    }

    return (
        <>
            <ProfileMenu>
                <ProfilePhoto>
                    <ProfileName><h2>{name}</h2></ProfileName>
                </ProfilePhoto>
                <ProfileContainer>
                    <InformationContainer>
                        <InformationText>
                            <BsFillBriefcaseFill size={17} color="#009688" /> {position}
                        </InformationText>
                        <InformationText>
                            <BsFillHouseDoorFill size={17} color="#009688" /> {location}
                        </InformationText>
                        <Clickable onClick={() => { sendMeAnEmail() }} style>
                            <InformationText>
                                <BsFillEnvelopeFill size={17} color="#009688" /> {email}
                            </InformationText>
                        </Clickable>
                        <Clickable onClick={() => { openPhoneLink() }} style>
                            <InformationText>
                                <FaWhatsapp size={17} color="#009688" /> {mobile})}
                            </InformationText>
                        </Clickable>
                    </InformationContainer>
                    <hr />
                    <InformationContainer>
                        <InformationText>
                            <FaAsterisk size={17} /> Skills / Qualifications
                        </InformationText>
                    </InformationContainer>
                    <SkillContainer>
                        {skills.map((skillData, index) => {
                            if (index < 4) {
                                return (
                                    <Skill
                                        key={index}
                                        iconLib={skillData.iconLib}
                                        iconName={skillData.iconName}
                                        description={skillData.description}
                                        range={skillData.range} />)
                            } else {
                                return null;
                            }
                        })}
                        <ShowMoreButton onClick={modalOpen}>Ver Mais</ShowMoreButton>
                    </SkillContainer>
                </ProfileContainer>
            </ProfileMenu>

        </>
    )
}

export default Page;