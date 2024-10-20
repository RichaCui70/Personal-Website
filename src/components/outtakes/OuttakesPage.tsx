import Image from "next/image";

import { filmPhotos, carouselPhotos } from "@/lib/mediaDefinitions";
import styles from "@/styles/outtakes/Outtakes.module.css";

export default function OuttakesPage() {
  return (
    <section id="profile" className={styles.container}>
      <h2>Outtakes.</h2>
      <div className={styles.carousel}>
        {carouselPhotos.map(({photo, caption}) => (
          <CarouselItem key={photo} photo={photo} caption={caption} />
        ))}
      </div>
      <div className={styles.filmArea}>
        <div className={styles.header}>
          <p>nut</p>
        </div>
        <div className={styles.body}>
          {filmPhotos.map(({photo}) => (
            <FilmItem key={photo} photo={photo} /> 
          ))}
        </div>
      </div>
      <div style={{width: "100px", height: "100px", background: "red", display: "inline", float: "right"}}></div>
    </section>
  );
}

function FilmItem({ photo }: { photo: string }) {
  return (
    <div
      className={styles.image}
      style={{
        background: `url('${photo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

function CarouselItem({
  photo,
  caption,
}: {
  photo: string;
  caption: string;
}) {
  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselImage}
        style={{
          background: `url('${photo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={styles.carouselCaption}>
        <p>{caption}</p>
      </div>
    </div>
  );
}
