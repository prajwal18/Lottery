import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import chicken from '../../assets/images/chicken.jpg';
//Delete After
import { data, getMobileArrayData, getWinningNumber } from "./Util";
//Delete After

//Styled Componenet
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #3489eb, #4fb2e8);
    background-image:url(${chicken});
    background-size:cover;
    color: rgba(255,255,255,0.6);
`;
const Title = styled.h1`
    display: block;
    padding: 10px;
    font-size: 4rem;
    text-transform: capitalize;
    color: white;
`;
const CustBtn = styled.button`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    aling-items: center;
    padding: 10px 40px;
    font-size: 1.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: #3489eb;
    border: 2px solid #3cd9de;
    &:hover {
        color: #de803c;
    }
    &:active{
        color: white;
        background: #46aae8;
    }
`;
const CustLink = styled(Link)`
    color: #9ae9f5 !important;
    &:active {
        color: #f53a33 !important;
    }
`;
const CustForm = styled.form`
    display: flex; gap: 20px;
    margin-top: 50px; align-items:center;
    justify-content: center;
`;
const CustInput = styled.input`
    display: block; 
    padding: 10px;
    color: rgba(255,255,255, 0.6);
    font-size: 1.1rem;
    width: 300px;
`;
const UploadBtn = styled.button`
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
`;
//Styled Componenet

const Upload = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleUpload = () => {
        let mobileData = getMobileArrayData(data);
        navigate("/lottery-start", {state: {allowAccess: true, mobileData}});
    };
    const location = useLocation();
    return(
        <>
            {
                location.state && location.state.allowAccess?
                <Container>
                    <Title>Upload your Excel File</Title>
                    <p>Valley cold store | Providing excellent service for 41+ years</p>

                    <CustForm onSubmit={handleUpload}>
                        <CustInput type="file" required accept=".xls,.xlsx"/>
                        <UploadBtn type="submit">Upload</UploadBtn>
                    </CustForm>
                    {
                        error &&
                        <p style={{color: "red", fontSize: "2rem"}}>Sorry, can't read exel file</p>
                    }
                </Container>  
                :
                <GoBackToHome/>
            }
        </>
        
    );
}
const Proceed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleProceed = () => {
        console.log(location);
        const winningNumber = getWinningNumber(location.state.mobileData);
        navigate("/lottery", {state: {allowAccess: true, winningNumber: winningNumber}})
    };
    return(
        <>
            {
                location.state && location.state.allowAccess?
                <Container>
                    <Title>Start the lottery</Title>
                    <p>Click the button to start the lottery.</p>
                    <CustBtn onClick={handleProceed}>start</CustBtn>
                </Container>  
                :
                <GoBackToHome/>
            }
        </>
        
    );
}

export const GoBackToHome = () => {
    return(
        <Container style={{justifyContent:"flex-start", paddingTop: "100px"}}>
            <p style={{color: "white"}}>Sorry You can't acces this page.</p>
            <CustLink to="/">Go back to Home</CustLink>
        </Container>
    )
}

export {Upload, Proceed};