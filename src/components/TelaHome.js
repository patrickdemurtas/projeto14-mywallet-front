import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlusCircle, FaMinusCircle, FaGreaterThanEqual } from 'react-icons/fa'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";



export default function TelaHome() {

   const green = '#03AC00'
   const red = '#C70000'
   let final;

    const Auth = localStorage.getItem("token")
    const Name = localStorage.getItem("name")

// VARIÁVEL DE AMBIENTE NÃO FUNCIONOU, ENTÃO INSERI MANUALMENTE
    const url = "http://localhost:5010"

    const Navigate = useNavigate()


    const [balancete, setBalancete] = useState([])
    



    function logOut() {
        localStorage.removeItem("name")
        localStorage.removeItem("token")
        Navigate("/")

    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${Auth}`
            }
        }
        const promise = axios.get(`${url}/balance`, config)
        promise.then((res) => {

            setBalancete(res.data.adds)

        })
        promise.catch((error) => alert('erro'))
    }, [])

    console.log(balancete)




    function renderizarMensagemVazia() {

        if (balancete.length === 0) {



            return (
                <>
                    <MensagemVaziaUm><p>Não há registros de</p></MensagemVaziaUm><MensagemVaziaDois><p>entrada ou saída</p></MensagemVaziaDois>
                </>

            )
        }
    }



    function saldo(){
         const ganhos = balancete.filter( b => b.type === "in").map( b => b.value )
         const perdas = balancete.filter( b => b.type === "out").map( b => b.value )
       
         const ganhosTotais = ganhos.map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
         const perdasTotais = perdas.map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

         final = ganhosTotais - perdasTotais
         console.log(final)

    }
saldo()

    return (

        <>

            <HeaderHome>
                <p>Olá, {Name}</p>
                <RiLogoutBoxRLine onClick={logOut} style={{ color: "white", fontSize: "30", marginRight: "20px", cursor: "pointer" }} />
            </HeaderHome>



            <ContainerSaldo>


                {renderizarMensagemVazia()}

                {balancete.map((b) => (
                    <Elemento>
                        <DataDescricao><h1>{b.date}</h1> <p>{b.desc}</p></DataDescricao><Valor green={green} red={red} tipo={b.type}><p>{b.value}</p></Valor>
                    </Elemento>

                ))}




                <FooterSaldo green={green} red={red} final={final}>
                    <h1>SALDO</h1>
                    <h2>{final}</h2>
                </FooterSaldo>


            </ContainerSaldo>

            <FooterEntradaSaida>

                <Link to="/nova-entrada" style={{ textDecoration: 'none' }}>
                    <Contabil>
                        <FaPlusCircle style={{ color: "white" }} />
                        <p>Nova<br />entrada</p>
                    </Contabil>
                </Link>

                <Link to="/nova-saida" style={{ textDecoration: 'none' }}>
                    <Contabil>
                        <FaMinusCircle style={{ color: "white" }} />
                        <p>Nova<br />saída</p>
                    </Contabil>
                </Link>

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
    color: ${props => {
        if (props.tipo === "in") return (props.green)
        return (props.red)
    }};  
}
`

const FooterSaldo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 10px;
margin-top: 80px;

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
    color: ${props => {
            if(props.final >= 0) return (props.green)
            return (props.red)
    }};
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