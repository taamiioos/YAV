import event_picture from './../../img/event_picture.png';
import {
    EventContainer,
    EventDate, EventDescriptionContainer, EventDescriptionLink, EventListContainer,
    EventText,
    EventTicketsContainer,
    EventTitle, NavLink,
    TicketsButton,
    TicketsLeftContainer
} from './eventsStyles'
import {Container, Image, NameEvent} from "../eventPage/EventPageStyles";
import React from "react";
import Header from "../header/Header";

const Events = () => {
    return (
        <Container>
            <Header/>
            <NameEvent>МЕРОПРИЯТИЯ</NameEvent>
            <EventListContainer>
                <EventContainer>
                    <Image src={event_picture} alt="event_picture" style={{width: '30%'}}/>
                    <EventDescriptionContainer>
                        <EventTitle>SUMMER NIGHT</EventTitle>
                        <EventDate>4 ноября 2024, 19:00 - 5:00</EventDate>
                        <EventText>
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
                            <p>Итого у вас должно получиться: Классная работа!</p>
                        </EventText>
                        <EventDescriptionLink href="#!">Узнать больше</EventDescriptionLink>
                    </EventDescriptionContainer>
                    <EventTicketsContainer>
                        <TicketsButton>
                            <NavLink to="/eventPage">Купить билет</NavLink>
                        </TicketsButton>
                        <TicketsLeftContainer><p>56 </p> билетов осталось</TicketsLeftContainer>
                    </EventTicketsContainer>
                </EventContainer>
                <EventContainer>
                    <Image src={event_picture} alt="event_picture" style={{width: '30%'}}/>
                    <EventDescriptionContainer>
                        <EventTitle>SUMMER NIGHT</EventTitle>
                        <EventDate>4 ноября 2024, 19:00 - 5:00</EventDate>
                        <EventText>
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
                            <p>Итого у вас должно получиться: Классная работа!</p>
                        </EventText>
                        <EventDescriptionLink href="#!">Узнать больше</EventDescriptionLink>
                    </EventDescriptionContainer>
                    <EventTicketsContainer>
                        <TicketsButton>
                            <NavLink to="/eventPage">Купить билет</NavLink>
                        </TicketsButton>
                        <TicketsLeftContainer><p>56 </p> билетов осталось</TicketsLeftContainer>
                    </EventTicketsContainer>
                </EventContainer>
                <EventContainer>
                    <Image src={event_picture} alt="event_picture" style={{width: '30%'}}/>
                    <EventDescriptionContainer>
                        <EventTitle>SUMMER NIGHT</EventTitle>
                        <EventDate> 4 ноября 2024, 19:00 - 5:00</EventDate>
                        <EventText>
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
                            <p>Итого у вас должно получиться: Классная работа!</p>
                        </EventText>
                        <EventDescriptionLink href="#!">Узнать больше</EventDescriptionLink>
                    </EventDescriptionContainer>
                    <EventTicketsContainer>
                        <TicketsButton>
                            <NavLink to="/eventPage">Купить билет</NavLink>
                        </TicketsButton>
                        <TicketsLeftContainer><p>56 </p> билетов осталось</TicketsLeftContainer>
                    </EventTicketsContainer>
                </EventContainer>
            </EventListContainer>
        </Container>
    );
}
export default Events;
