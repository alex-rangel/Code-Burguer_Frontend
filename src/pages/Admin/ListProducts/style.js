import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
//import { Link} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
`

export const Img = styled.img`
    width: 70px;
    border-radius: 5px;
`
export const Editbutton = styled(EditIcon)`
    cursor: pointer;
    color: '#323d5d';
`