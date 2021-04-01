import styled from 'styled-components';

export const MainContent = styled.div`
    flex: 1;
    margin-top: 10px;
    hr{
        border: 0;
        border-top: 1px solid #eee;
        margin: 20px 0;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        @media(max-width: 800px){
            border-top:0;
        }
    }
    `

export const PageArea = styled.div`
    display: flex;
    width:100%;
    @media (max-width: 800px){
      width: 100%;
      flex-direction: column;
  }
`;

export const InformationContainer = styled.div`
    display:flex;
    background: #fff;
    margin-top: 15px; 
    svg{
        margin: 15px;
    }
`;

export const InformationTitle = styled.h2`
    margin:15px;
    color: #999;
`;