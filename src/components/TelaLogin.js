import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";


export default function TelaLogin() {

   const Navigate = useNavigate()
   const url = "http://localhost:5000"

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   
   const { token, setToken, storageToken } = useContext(AuthContext)


   function fazerLogin(e) {
       e.preventDefault()

       const corpo = { email, password }

       const promise = axios.post(`${url}/sign-in`, corpo)
       promise.then((res) => {
        storageToken(res.data)
        Navigate("/home")
        console.log(token)
       })
       promise.catch((error) => alert(error.response.data))

       
   }



    return (
        <>

            <Logo>
                <p>MyWallet</p>
            </Logo>

            <ConteudoLogin>

                <FormsLogin onSubmit={fazerLogin}>
                    <input type="email" placeholder="E-mail" value={email} onChange={ e => setEmail(e.target.value) } required />
                    <input type="password" placeholder="Senha" value={password} onChange={ e => setPassword(e.target.value)} required />
                    <button type="submit"><p>Entrar</p></button>
                </FormsLogin>

                <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                    <LinkCadastro><p>Primeira vez? Cadastre-se!</p></LinkCadastro>
                </Link>


            </ConteudoLogin>

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
margin-top: 155px;
p{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    line-height: 50.37px;
    color: white;
}
`

const ConteudoLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`

const FormsLogin = styled.form`
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

const LinkCadastro = styled.div`
margin-top: 15px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
}
`