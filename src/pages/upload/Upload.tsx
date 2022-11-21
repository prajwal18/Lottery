import styled from "styled-components";

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
//Styled Componenet
type UploadNProceedPropType = {
    title: string,
    subTitle?: string,
    btnName: string,
    callback: () => void;
}

const UploadNProceed = ({title, subTitle, btnName, callback}: UploadNProceedPropType) => {
    return(
        <Container>
            <Title>{title}</Title>
            <p>{subTitle}</p>
            <CustBtn onClick={callback}>{btnName}</CustBtn>
        </Container>
    );
}

const Upload = () => {
    const handleUpload = () => {};
    return(
        <UploadNProceed
            title="Upload your document"
            subTitle="Valley cold store | Providing excellent service for 41+ years"
            btnName="Upload"
            callback={handleUpload}
        />

    );
}
const Proceed = () => {
    const handleProceed = () => {};
    return(
        <UploadNProceed
            title="Start the lottery"
            subTitle="Click the button to start the lottery."
            btnName="start"
            callback={handleProceed}
        />

    );
}

export {Upload, Proceed};