import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";





export default function TelaCadastro() {

const url = "http://localhost:5000"

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')

const Navigate = useNavigate()

function fazerCadastro(e){
    e.preventDefault()

    const corpo = {name, email, password, confirmPassword}
    

    const promise = axios.post(`${url}/sign-up`, corpo)
      promise.then((res) => {
        alert('Cadastro realizado com sucesso!')
        Navigate('/')
      })
      promise.catch((error) => alert(error.response.data))
}


    return (

        <>

            <Logo>
                <p>MyWallet</p>
            </Logo>

            <ConteudoCadastro>

                <FormsCadastro onSubmit={fazerCadastro}>

                    <input placeholder="Nome"  value={name} onChange={ e => setName(e.target.value)} required />
                    <input type="email" placeholder="E-mail" value={email} onChange={ e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={ e => setPassword(e.target.value)} required />
                    <input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)} required />
                    <button type="submit"><p>Cadastrar</p></button>

                </FormsCadastro>

                <LinkEntrar>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <LinkEntrar><p>Já tem uma conta? Entre agora!</p></LinkEntrar>
                    </Link>

                </LinkEntrar>

            </ConteudoCadastro>




        </>
    )


}



const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 147px;
height: 50px;
margin: 0 auto ;
margin-top: 80px;
p{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    line-height: 50.37px;
    color: white;
}
`

const ConteudoCadastro = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 60px;
`

const FormsCadastro = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    width: 299px;
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
        line-height: 23.5px;
    }
}
button{
width: 298px;
height: 52px;
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

const LinkEntrar = styled.div`
margin-top: 15px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
}
`