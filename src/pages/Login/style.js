import styled from 'styled-components'
import imagembackground from '../../assets/imagembackground.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${imagembackground});
    background-repeat: no-repeat;
    background-size: cover;
`
export const ImgLogin = styled.img`
    height: 70%;
    border-radius: 10px 0px 0px 10px;
`
export const ContainerItens = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 70%;
    padding: 25px 75px;
    background-color: #373737;
    border-radius: 0px 10px 10px 0px;
`

export const ImgLogo = styled.img`
    margin-bottom: 50px;
    width: 400px;
`
export const Text = styled.p`
    color: #FFF;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
`
export const Label = styled.p`
     color: #FFF;
    font-size: 12px;
    margin-bottom: 5px;
`
export const Input = styled.input`
    width: 390px;
    height: 38px;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-bottom: 25px;
    padding-left: 10px;
`
export const Botao = styled.button`
    width: 180px;
    height: 35px;
    border-radius: 20px;
    border: none;
    margin-top: 40px;
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
export const TextSignup = styled.p`
    color: #FFF;
    margin-top: 30px;

    a{
        text-decoration: underline;
        cursor: pointer;
    }
`