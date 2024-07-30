import Image from "next/image"

import styles from "@/styles/Miscellaneous.module.css"

export default function TransitionBlurb({height, width}: {height: number | string, width: number | string}){

    // const transitionBlurbScale = 0.2375

    return(
        <div className={styles.transition}>
            <Image src="/blurbs/transition-blurb.svg" alt="Orange upper portion of transition blurb" fill />
        </div>
    )
}