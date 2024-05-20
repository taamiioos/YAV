import ClusterBlock from "../сlusterBlock/ClusterBlock"
import Header from "../header/Header";
import {ButtonBlock, ButtonStyled} from "../buttons/buttonsStyles";
import React, {useState} from "react";

import {ClusterHeader, Container} from "./clusterPageStyles";

const ClusterPage = () => {
    const [clusterName, setClusterName] = useState("Кино");

    const handleButtonClick = (name) => {
        setClusterName(name);
    }

    return (
        <Container>
            <ClusterHeader>
                <Header/>
                <ButtonBlock>
                    <ButtonStyled onClick={() => handleButtonClick("Кино")}>Кино</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Театр")}>Театр</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Музыка")}>Музыка</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Фотография")}>Фотография</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Арт")}>Арт</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Диджитал дизайн")}>Диджитал дизайн</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Фэшн")}>Фэшн</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Танец")}>Танец</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Бьюти")}>Бьюти</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Креатив")}>Креатив</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Продюссирование")}>Продюссирование</ButtonStyled>
                    <ButtonStyled onClick={() => handleButtonClick("Текст")}>Текст</ButtonStyled>
                </ButtonBlock>
            </ClusterHeader>
            <ClusterBlock clusterName={clusterName}/>

        </Container>
    )
}
export default ClusterPage;