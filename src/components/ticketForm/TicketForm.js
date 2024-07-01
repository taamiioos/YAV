import React, { useState } from "react";
import {
    Button,
    FormContainer,
    FormLabel,
    Input,
    InputContainer,
    Participants,
    Price,
    Ticket
} from "./TicketFormStyles";

const TicketForm = () => {
    const [form, setForm] = useState({
        name: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <FormLabel htmlFor="name">Имя:</FormLabel>
                    <Input type="text" id="name" name="name" placeholder="Стефания" value={form.name} onChange={handleInputChange} />
                </InputContainer>

                <InputContainer>
                    <FormLabel htmlFor="phone">Телефон:</FormLabel>
                    <Input type="tel" id="phone" name="phone" placeholder="+7 (911) 529-61-27" pattern="[0-9]{10}" value={form.phone} onChange={handleInputChange} />
                </InputContainer>
                <Ticket>1 билет</Ticket>
                <Price>1080 ₽</Price>
                <Button type="submit">Купить билет</Button>
            </form>
            <Participants>56 билетов осталось</Participants>
        </FormContainer>
    );
};

export default TicketForm;
