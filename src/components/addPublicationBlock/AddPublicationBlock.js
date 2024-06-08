import React, { useState } from 'react';
import { Button, Container, Textarea } from "./AddPublicationBlockStyles";
import { FeedHeader } from "../publicationFeed/publicationFeedStyles";
import { useDispatch } from "react-redux";
import { addPublication, loadPublications } from "../../redux/actions/publicationActions";

const AddPublicationBlock = ({ closeModal }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handlePostPublication = async () => {
        const publicationData = { text };
        await dispatch(addPublication(publicationData));
        await dispatch(loadPublications());
        closeModal();
    };

    return (
        <Container>
            <FeedHeader>ДОБАВИТЬ ПУБЛИКАЦИЮ</FeedHeader>
            <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Текст публикации"
                rows="7"
                variant="outlined"
            />
            <Button onClick={handlePostPublication}>
                Разместить
            </Button>
        </Container>
    );
};

export default AddPublicationBlock;
