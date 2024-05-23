import React, { useState, useEffect } from 'react';
import {
    AddFeed,
    Container,
    CustomModalStyles,
    FeedHeader,
    MessageWrapper,
    Publication,
    PublicationHeader,
    PublicationText,
    CircularElement,
    Line,
    InteractiveIcons
} from './publicationFeedStyles';
import AddPublicationBlock from '../addPublicationBlock/AddPublicationBlock';
import { BsChatLeftText } from "react-icons/bs"
import { BsEye } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
const PublicationFeed = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [publications, setPublications] = useState([]);
    const author = 'elissok';

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        const storedPublications = JSON.parse(localStorage.getItem('publications')) || [];
        setPublications(storedPublications);
    }, []);

    const handleAddPublication = (publication) => {
        const updatedPublications = [publication, ...publications];
        setPublications(updatedPublications);
        localStorage.setItem('publications', JSON.stringify(updatedPublications));
    };



    return (
        <Container>
            <FeedHeader>Лента публикаций</FeedHeader>
            <AddFeed onClick={openModal}>Добавить публикацию</AddFeed>
            <CustomModalStyles isOpen={modalIsOpen} onRequestClose={closeModal}>
                <AddPublicationBlock closeModal={closeModal} onAddPublication={handleAddPublication} />
            </CustomModalStyles>
            {publications.map((publication, index) => (
                <Publication key={index}>
                    <CircularElement />
                    <Line />
                    <PublicationHeader>{author}</PublicationHeader>
                    <MessageWrapper>
                        <PublicationText>{publication.text}</PublicationText>
                    </MessageWrapper>
                    <InteractiveIcons>
                        <span onClick={() => console.log('Liked!')}><BsSuitHeart /> 1.5K</span>
                        <span onClick={() => console.log('Commented!')}><BsChatLeftText /> 150</span>
                        <span onClick={() => console.log('Viewed!')}><BsEye /> 150</span>
                    </InteractiveIcons>
                </Publication>
            ))}
        </Container>
    );
};

export default PublicationFeed;
