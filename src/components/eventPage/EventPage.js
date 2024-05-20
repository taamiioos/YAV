import {
    Container,
    NameEvent,
    Info,
    Image,
    Price,
    Participants,
    BuyLink,
    Date,
    DateAndPlace,
    DateAndNameContainer
} from "./EventPageStyles";
import Header from "../header/Header";
import React from "react";
import event_picture from './../../img/event_picture.png';
import prog from './../../img/programm.png';

import {
    Address,
    Description,
    LinkContainer,
    NavLink
} from "../buyTicketPage/buyTicketPageStyles";

const EventPage = () => {
    return (
        <Container>
            <Header/>
            <LinkContainer>
                <NavLink to="/eventsPage">&lt;  Мероприятия</NavLink>
            </LinkContainer>
            <NameEvent>SUMMER NIGHT</NameEvent>
            <Image src={event_picture} alt="event_picture" style={{width: '26%', marginTop: '2%'}}/>
            <Info>
                <p>Йоу! Скучали? Пришло время нового мероприятия.</p>

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

            <Price>1080 ₽</Price>
            <Participants>56 билетов осталось</Participants>
            <BuyLink to="/ticketPage">Купить билет</BuyLink>
            <DateAndPlace>
                <Date>04.11.2024</Date>
                <DateAndNameContainer>
                    <Description>“Необъяснимо, но бар”</Description>
                    <Address>, ул. Сретенка 34/1с1, м. Сухаревская, 2-ой этаж</Address>
                </DateAndNameContainer>
            </DateAndPlace>

            <Image src={prog} alt="prog" style={{width: '90%', marginTop: '8%'}}/>

        </Container>
    )
}
export default EventPage;
