import { SkillBackground, SkillRange, SkillText } from '../MainComponents';
import Icon from '../Icon';

const Skill = ({ iconLib, iconName, description, range }) => {
    return (
        <div>
            <SkillText><Icon iconLib={iconLib} iconName={iconName} /> {description}</SkillText>
            <SkillBackground>
                <SkillRange percentage={range} >{range + "%"}</SkillRange>
            </SkillBackground>
        </div>
    )
}

export default Skill;