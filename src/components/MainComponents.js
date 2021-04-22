import styled, { keyframes, css } from "styled-components";

export const Template = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 8px;
  background: #DDD;
  @media (max-width: 800px){
      width: 100%;
      flex-direction: column;
      padding:0;
  }
`;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 27px;
`;
export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  background-color: #ffcaca;
  color: #000;
  border: 2px solid #ff0000;
  padding: 10px;
`;


export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  margin: 0;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &.default {
    color: #000;
    background-color: #fff;
    border-color: #000;
  }

  &.primary{
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  &.success{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  &.danger{
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
`;


export const SkillText = styled.div`
    margin: 15px;
    display:flex;
    color: #999;
`;

export const SkillContainer = styled.div`
    margin-bottom: 20px;
    display:flex;
    flex-direction: column;
`;

export const SkillBackground = styled.div`
    color: #000!important;
    background-color: #f1f1f1!important;
    height:18px;
    margin-bottom: 2px;
    margin: 5px;
    border-radius:16px;
    `;

const progressBar = (width) => keyframes`
        0% { width: 0; } 
        100% { width:  ${width}% }
`;

export const SkillRange = styled.div`
    border-radius:16px;
    color: #fff!important;
    background-color: #009688!important;
    height: 100%;
    text-align:center;
    width: ${({ percentage }) => !percentage ? '0px' : `${percentage}%`};
    animation: ${({ percentage }) => css`${progressBar(percentage)} 3s ease-in-out`};
`