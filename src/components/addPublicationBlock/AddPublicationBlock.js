import React, { useState, useRef, useEffect } from 'react';
import { FeedHeader } from '../publicationFeed/publicationFeedStyles';
import { Button, Container, Images, Input, InputButton, PreviewImage, Textarea } from './AddPublicationBlockStyles';

const AddPublicationBlock = ({ closeModal, onAddPublication }) => {
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setPreviewImages((prevPreviewImages) => [...prevPreviewImages, event.target.result]);
        };
        images.forEach((image) => {
            reader.readAsDataURL(image);
        });
    }, [images]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleImageChange = (event) => {
        setImages([...images, ...event.target.files]);
    };

    const handlePostPublication = () => {
        const publication = {
            text,
            images: Array.from(images).map((image) => ({
                data: URL.createObjectURL(image),
                type: image.type,
            })),
        };
        onAddPublication(publication);
        closeModal();
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Container>
            <FeedHeader>ДОБАВИТЬ ПУБЛИКАЦИЮ</FeedHeader>
            <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Текст публикации"
                rows="4"
                variant="outlined"
                style={{ width: '80%' }}
            />
            <InputButton onClick={handleUploadClick}>
                +
                <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} multiple />
            </InputButton>
            <Images>
                {previewImages.map((previewImage, index) => (
                    <PreviewImage key={index} src={previewImage} alt="Preview" />
                ))}
            </Images>
            <Button onClick={handlePostPublication}>
                Разместить
            </Button>
        </Container>
    );
};

export default AddPublicationBlock;