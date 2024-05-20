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
import React, {useState} from "react";

const TicketForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (


        <FormContainer>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <FormLabel htmlFor="name">Имя:</FormLabel>
                    <Input type="text" id="name" name="name" placeholder="Стефания" value={name}
                           onChange={(event) => setName(event.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <FormLabel htmlFor="phone">Телефон:</FormLabel>
                    <Input type="tel" id="phone" name="phone" placeholder="+7 (911) 529-61-27"
                           pattern="[0-9]{10}"
                           value={phone} onChange={(event) => setPhone(event.target.value)}/>
                </InputContainer>
                <Ticket>1 билет</Ticket>
                <Price>1080 ₽</Price>

                <Button type="submit">Купить билет</Button>
            </form>
            <Participants>56 билетов осталось</Participants>
        </FormContainer>

    );
}

export default TicketForm;