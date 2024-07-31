'use client'

import { useEffect, useCallback } from 'react'

import Typed from 'typed.js';

import styles from '@/styles/home/HomePage.module.css'

import { getTitles, getPhotos } from '@/lib/mediaDefinitions'; 


export default function Title({changePhoto}: {changePhoto: (photoLocation: string) => void}){
    const photos = getPhotos()

    const changePhotoWrapper = useCallback((arrayPos: number) => {
        changePhoto(photos[arrayPos])
    }, [changePhoto, photos])

    useEffect(() => {
        const typed = new Typed("#toBeTyped", {
            strings: getTitles(),
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 50,
            backDelay: 1000,
            preStringTyped: changePhotoWrapper,
            smartBackspace: false,
            loop: true
        })

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <>
            <h2 className={styles.title}>
                Hello, I'm<br/><span id="toBeTyped"/>
            </h2>
        </>
    )
}