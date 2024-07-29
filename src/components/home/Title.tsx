'use client'

import { useEffect, useRef } from 'react'

import Typed from 'typed.js';

import styles from '@/styles/home/HomePage.module.css'

type typeDirection = "right" | "left"


export default function Title(){
    useEffect(() => {
        const typed = new Typed("#toBeTyped", {
            strings: ["Richard Cui", "a Nature Enthusiast", "a League of Legends Addict", "a Poor Rockclimber", "an Adventure Seeker", "an Avid Runner", "a Sports Lover"],
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        })

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <h2 className={styles.title}>
            Hello, I'm <br/><span id="toBeTyped"/>
        </h2>
    )
}