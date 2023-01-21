import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TelaNovaSaida() {

    return (

        <>

            <HeaderNovaSaida>Nova saída</HeaderNovaSaida>

            <ConteudoNovaSaida>
                <FormsNovaSaida>

                    <input type="number" placeholder="Valor" required />
                    <input placeholder="Descrição" required />
                    <button type="submit"><p>Salvar saída</p></button>

                </FormsNovaSaida>
            </ConteudoNovaSaida>

        </>

    )
}

const ConteudoNovaSaida = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`
const HeaderNovaSaida = styled.div`
margin-left: 24px;
margin-top: 25px;
font-size: 26px;
font-weight: 700;
line-height: 30.5px;
font-family:'Raleway', sans-serif;
color: white;
`

const FormsNovaSaida = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    width: 326px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 16px;
    padding-left: 10px;
    border: 1px solid white;
    &::placeholder{
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color:#000000;
    }
}
button{
width: 326px;
height: 46px;
background-color: #A328D6;
border-radius: 8px;
margin-top: 10px;
border: 1px solid #A328D6;
&:hover{
cursor: pointer;
}
}
p{
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.5px;
  color: #FFFFFF;
}
`