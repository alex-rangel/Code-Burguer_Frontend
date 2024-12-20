import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Title = styled.h1`
    font-size: 30px;
    color: #000000;
    text-align: center;
    margin-bottom: 25px;
`

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        background: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`
export const Label = styled.label`
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 3px;
`
export const Input = styled.input`
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: none;
    width: 100%;
    min-width: 280px;
    outline: none;
    padding: 10px;
`
export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 25px ;
`
export const Labelupload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff;
    border-radius: 5px;
    padding: 10px;
    gap: 10px;

    input{
        opacity: 0;
        width: 1px;
    }
`
