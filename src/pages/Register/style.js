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
    height: 90%;
    border-radius: 10px 0px 0px 10px;
`
export const ContainerItens = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 90%;
    padding: 25px 75px;
    background-color: #373737;
    border-radius: 0px 10px 10px 0px;
`

export const ImgLogo = styled.img`
    width: 240px;
`
export const Text = styled.p`
    color: #FFF;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`
export const Label = styled.p`
     color: #FFF;
    font-size: 12px;
    margin:${props => (props.error ? '5px 0px 5px 0px' : '10px 0px 5px 0px')}; 
`
export const Input = styled.input`
    width: 390px;
    height: 38px;
    border-radius: 10px;
    border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
    outline: none;
    padding-left: 10px;
`
export const TextSigin = styled.p`
    color: #FFF;
    margin-top: 15px;

    Link{
        text-decoration: underline;
        cursor: pointer;
        color: #FFF;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const ErroMessage = styled.p`
    font-size: 12px;
    color: #cc1717;
`