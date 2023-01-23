import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import dayjs from "dayjs";

export default function TelaNovaSaida() {
    
    // VARIÁVEL DE AMBIENTE NÃO FUNCIONOU, ENTÃO INSERI MANUALMENTE
    const url = "http://localhost:5010"
    const Auth = localStorage.getItem("token")

    const Navigate = useNavigate()

    const [value, setValue] = useState('')
    const [desc, setDesc] = useState('')

    function saida(e) {
        e.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${Auth}`
            }
        }

        const corpo = { date: dayjs().format("DD/MM"), desc: desc, value: value, type: "out" }

        const promise = axios.post(`${url}/balance`, corpo, config)

        promise.then((res) => {
            console.log(res)
            Navigate("/home")

        })
          promise.catch((error) => alert('Não foi possível seguir com a solicitação'))


    }

    return (

        <>

            <HeaderNovaSaida>Nova saída</HeaderNovaSaida>

            <ConteudoNovaSaida>
                <FormsNovaSaida onSubmit={saida}>

                    <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} required />
                    <input placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} required />
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