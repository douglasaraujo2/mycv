import Modal from '../Modal';
import { SkillContainer } from '../MainComponents';
import Skill from '../Skill';

export default function SkillModal({ isModalOpen, handleModalOpen, skills }) {
    return <Modal
        showModal={isModalOpen}
        handleModal={handleModalOpen}
        title="Tasks / Qualifications">
        <SkillContainer>
            {skills.map((skillData, index) => {
                return (
                    <Skill
                        key={index}
                        iconLib={skillData.iconLib}
                        iconName={skillData.iconName}
                        iconColor="#009688"
                        description={skillData.description}
                        range={skillData.range} />)

            })}
        </SkillContainer>
    </Modal>
}