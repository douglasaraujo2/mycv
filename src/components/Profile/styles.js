import styled from 'styled-components';
import Picture from '../../images/profile.jpg'

export const ProfileMenu = styled.div`
    align-self: flex-start;
    width: 30%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    @media (max-width: 800px){
        width: 100%;
        padding: 0;
        align-self: center;
        flex: 1;
        margin:0;
    }
`;

export const ProfilePhoto = styled.div`
    position: relative;
    background: url(${Picture});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;  
`;

export const ProfileName = styled.div`
    color: #fff;
    display: flex;
    height: 500px;
    h2{
        position: absolute;
        left:0;
        bottom:0;
        font-weight: 400;
        margin: 10px 0;
    }
`;

export const ProfileContainer = styled.div`
    flex:1;
    background: #fff;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    hr{
        border: 0;
        border-top: 1px solid #eee;
        margin: 20px 0;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        @media(max-height: 500px){
            border-top:0 ;
        }
    }
`;

export const InformationContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const InformationIcon = styled.div`
    align-self: flex-start;
`;

export const InformationText = styled.p`
    margin:15px;
    color: #999;
    svg{
        align-self: center;
        margin-right: 16px;
    }
`;


export const ShowMoreButton = styled.button`
    margin-top: 5px;
    background: #009688;
    align-self: center;
    padding: 8px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
`;

export const Clickable = styled.div`
    cursor: pointer;
    position: relative;
`;