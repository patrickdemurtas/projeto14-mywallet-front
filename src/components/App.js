import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./TelaLogin";
import TelaHome from "./TelaHome";
import TelaNovaEntrada from "./TelaNovaEntrada";
import TelaNovaSaida from "./TelaNovaSaida";
import AuthContext from "../contexts/AuthContext";
import NameContext from "../contexts/NameContext";

function App() {

    const [token, setToken] = useState('')
    const [name, setName] = useState('')

    const Auth = localStorage.getItem("token")

    function storageToken(token) {
        if (token !== null) {
            setToken(token)
            localStorage.setItem("token", token)
        }
    }

    function storageName(name) {
        if (name !== null) {
            setName(name)
            localStorage.setItem("name", name)
        }
    }


    return (
        <Container>

            <AuthContext.Provider value={{ token, setToken, storageToken, Auth }} >
                <NameContext.Provider value={{ name, setName, storageName}} >

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaLogin />} />
                            <Route path="/cadastro" element={<TelaCadastro />} />
                            <Route path="/home" element={<TelaHome />} />
                            <Route path="/nova-entrada" element={<TelaNovaEntrada />} />
                            <Route path="/nova-saida" element={<TelaNovaSaida />} />
                        </Routes>
                    </BrowserRouter>

                </NameContext.Provider >
            </AuthContext.Provider>

        </Container>
    )
}

export default App

const Container = styled.div`
width: 375px;
height: 667px;
background-color: #8C11BE;
margin: 0 auto;
display: flex;
flex-direction: column;
`
