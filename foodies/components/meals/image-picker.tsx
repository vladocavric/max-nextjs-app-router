'use client';
import React, { useRef, useState, ChangeEvent } from 'react';
import styles from './image-picker.module.scss';
import Image from 'next/image';

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
    const [pickedImage, setPickedImage] = useState<string | null>(null);

    const imageInput = useRef<HTMLInputElement>(null);
    const handlePickClick = () => {
        imageInput.current?.click();
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            const result = fileReader.result;
            if (typeof result === 'string') {
                setPickedImage(result);
            } else {
                console.error('Unexpected fileReader.result type:', typeof result);
            }
        };
        fileReader.readAsDataURL(file);
    };

    const handleRemoveImage = () => {
        setPickedImage(null);
        if (imageInput.current) {
            imageInput.current.value = '';
        }
    };
    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>no image selected</p>}
                    {pickedImage && <Image src={pickedImage} alt='image selected by user' fill />}
                </div>
                <input
                    className={styles.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button className={styles.button} type='button' onClick={handlePickClick}>
                    Pick an Image
                </button>
                {pickedImage && (
                    <button className={styles.button} type='button' onClick={handleRemoveImage}>
                        Remove Image
                    </button>
                )}
            </div>
        </div>
    );
};

export default ImagePicker;
