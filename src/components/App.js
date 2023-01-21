import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
    return (
        <Container>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/home" element={<TelaHome />} />
                    <Route path="/nova-entrada" element={<TelaNovaEntrada />} />
                    <Route path="/nova-saida" element={<TelaNovaSaida />} />
                </Routes>
            </BrowserRouter>

        </Container>
    )
}

export default App

const Container = styled.div`
width: 375px;
height: 667px;
background-color: #9567BE;
margin: 0 auto;
display: flex;
flex-direction: column;
`
