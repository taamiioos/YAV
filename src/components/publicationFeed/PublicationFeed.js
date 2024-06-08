import React, { useEffect, useState } from 'react';
import {
    AddFeed, Container, CustomModalStyles, FeedHeader, MessageWrapper, Publication,
     PublicationText, CircularElement, Line, InteractiveIcons
} from './publicationFeedStyles';
import { BsChatLeftText, BsEye, BsSuitHeart } from "react-icons/bs";
import AddPublicationBlock from "../addPublicationBlock/AddPublicationBlock";
import { useDispatch, useSelector } from "react-redux";
import { loadPublications } from "../../redux/actions/publicationActions";

const PublicationFeed = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const publications = useSelector(state => state.post.publications);

    useEffect(() => {
        dispatch(loadPublications());
    }, [dispatch]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Container>
            <FeedHeader>Лента публикаций</FeedHeader>
            <AddFeed onClick={openModal}>Добавить публикацию</AddFeed>
            <CustomModalStyles isOpen={modalIsOpen} onRequestClose={closeModal}>
                <AddPublicationBlock closeModal={closeModal} />
            </CustomModalStyles>
            {publications && publications.length > 0 ? (
                publications.map((publication, index) => (
                    <Publication key={index}>
                        <CircularElement />
                        <Line />
                        <MessageWrapper>
                            <PublicationText>{publication.text}</PublicationText>
                        </MessageWrapper>
                        <InteractiveIcons>
                            <span onClick={() => console.log('Liked!')}><BsSuitHeart /> 1.5K</span>
                            <span onClick={() => console.log('Commented!')}><BsChatLeftText /> 150</span>
                            <span onClick={() => console.log('Viewed!')}><BsEye /> 150</span>
                        </InteractiveIcons>
                    </Publication>
                ))
            ) : (
                <p>Нет публикаций</p>
            )}
        </Container>
    );
};

export default PublicationFeed;
