import React from 'react';
import {Container, Header, Info, Button, Participants} from './styles';

const ChallengeBlock = ({challengeInfo, onButtonClick}) => {
    // const ChallengeBlock = ({ challengeInfo, onButtonClick }) => {

    // const {description, participants } = challengeInfo;

    return (
        <Container>
            <Header>Новый челлендж!</Header>
            {/*<Info>{description}</Info>*/}
            <Info><p>Йоу! Скучали? Пришло время нового мероприятия.</p>

                <p>Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то
                    описание
                    сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и
                    бла
                    бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое
                    долгое и объемное и даже с пунктами типо:
                    первый
                    второй
                    третий</p>
                <p>Итого у вас должно получиться: Классная работа!</p></Info>

            <Button>Присоединиться</Button>
            {/*<Button onClick={onButtonClick}>Присоединиться</Button>*/}

            <Participants>56 человек из вашего кластера участвуют </Participants>
            {/*<Participants>Количество участников: {participants}</Participants>*/}

        </Container>
    );
};

export default ChallengeBlock;
