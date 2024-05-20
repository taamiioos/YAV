import Header from "../header/Header";
import React from "react";
import TicketForm from "../ticketForm/TicketForm";
import {
    Date,
    LinkContainer,
    NavLink,
    Description,
    Address,
    InfoContainer,
    EventInfoContainer,
    DateAndNameContainer, TypeEvent,
} from "./buyTicketPageStyles";
import {Container, NameEvent} from "../eventPage/EventPageStyles";

const BuyTicketPage = () => {
    return (
        <Container>
            <Header/>
            <LinkContainer>
                <NavLink to="/eventsPage">&lt;  Мероприятия</NavLink>
                <NavLink to="/eventPage">&lt;  Summer night</NavLink>
            </LinkContainer>
            <NameEvent>КУПИТЬ БИЛЕТ</NameEvent>
            <InfoContainer>
                <TicketForm/>
                <EventInfoContainer>
                    <DateAndNameContainer>
                        <TypeEvent>SUMMER NIGHT</TypeEvent>
                        <Date>04.11.2024</Date>
                    </DateAndNameContainer>
                    <DateAndNameContainer>

                        <Description>“Необъяснимо, но бар”</Description>
                        <Address>, ул. Сретенка 34/1с1, м. Сухаревская, 2-ой этаж</Address>
                    </DateAndNameContainer>

                </EventInfoContainer>
            </InfoContainer>
        </Container>
    )
}
export default BuyTicketPage;
