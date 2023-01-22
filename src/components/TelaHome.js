import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logOut from "../assets/logOut.png"
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export default function TelaHome() {


    return (

        <>

            <HeaderHome>
                <p>Olá, Fulano</p>
                <RiLogoutBoxRLine  style={{color:"white", fontSize: "30", marginRight:"20px", cursor:"pointer"}}/>
            </HeaderHome>



            <ContainerSaldo>

                <Elemento>
                    <DataDescricao><h1>30/11</h1> <p>Almoço mãe</p></DataDescricao>
                    <Valor><p>39,90</p></Valor>
                </Elemento>

                <Elemento>
                    <DataDescricao><h1>30/11</h1> <p>Almoço mãe</p></DataDescricao>
                    <Valor><p>39,90</p></Valor>
                </Elemento>

                <Elemento>
                    <DataDescricao><h1>30/11</h1> <p>Almoço mãe</p></DataDescricao>
                    <Valor><p>39,90</p></Valor>
                </Elemento>

                <FooterSaldo>
                    <h1>SALDO</h1>
                    <h2>345,98</h2>
                </FooterSaldo>


            </ContainerSaldo>

            <FooterEntradaSaida>

                <Contabil>
                    <FaPlusCircle style={{color:"white"}}/>
                    <p>Nova<br/>entrada</p>
                </Contabil>

                <Contabil>
                <FaMinusCircle style={{color:"white"}}/>
                    <p>Nova<br/>saída</p>
                </Contabil>

            </FooterEntradaSaida>







        </>
    )
}

const HeaderHome = styled.div`
display: flex;
justify-content: space-between;
margin-left: 24px;
margin-top: 25px;

p{
font-size: 26px;
font-weight: 700;
line-height: 30.5px;
font-family:'Raleway', sans-serif;
color: white;
}

img{
  width: 23px;
  height: 24px;
  margin-right: 28px;
  &:hover{
    cursor: pointer;
  }
}
`

const ContainerSaldo = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
margin-top: 22px;
width: 326px;
height: 446px;
border-radius: 5px;
background-color: #FFFFFF;
position: relative;
overflow-y: scroll;
`

const MensagemVaziaUm = styled.div`
display: flex;
align-items: center;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23.5px;
    font-weight: 400;
    color: #868686;
    margin-top: 200px;
}
`

const MensagemVaziaDois = styled.div`
display: flex;
align-items: center;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23.5px;
    font-weight: 400;
    color: #868686;
}
`

const Elemento = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 23px;
`

const DataDescricao = styled.div`
display: flex;
h1{
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #C6C6C6;
    margin-right: 5px;
    margin-left: 5px;
}

p{
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #000000;  
}
`

const Valor = styled.div`
margin-right: 10px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #03AC00;  
}
`

const FooterSaldo = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
margin-bottom: 10px;
margin-top: 10px;

h1{
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    color: #000000;
    margin-left: 10px;  
}

h2{
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 400;
    color: #03AC00;
    margin-right: 10px;
}
`
const FooterEntradaSaida = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 326px;
margin-top: 13px;
`
const Contabil = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: #A328D6;
padding-left: 10px;
width: 155px;
height: 114px;
border-radius: 5px;
p{
    font-family:'Raleway', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: white;
}
&:hover{
    cursor: pointer;
}
`

//<MensagemVaziaUm><p>Não há registros de</p></MensagemVaziaUm><MensagemVaziaDois><p>entrada ou saída</p></MensagemVaziaDois>

//<Elemento> <DataDescricao><h1>30/11</h1> <p>Almoço mãe</p></DataDescricao><Valor><p>39,90</p></Valor></Elemento>