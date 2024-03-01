import styled from 'styled-components'

export const ContainerButton = styled.button`
    width: 180px;
    height: 35px;
    border-radius: 20px;
    border: none;
    background-color: #9758a6;
    color: #FFF;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.8;
    }
`