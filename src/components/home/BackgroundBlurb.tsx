import { useEffect, useState } from "react";

import styles from "@/styles/home/HomePage.module.css";
import { fadeType } from "@/lib/constants";

export default function Blurb({
  photo,
  fade,
}: {
  photo: string;
  fade: fadeType;
}) {
  const [fadeType, setFadeType] = useState("in" as fadeType);
  const [backspaced, setBackspaced] = useState(false);

  useEffect(() => {
    setFadeType(fade);
  }, [fade]);

  return (
    <div
      className={`${styles.backgroundBlurbFade} ${fadeType === "in" ? styles.backgroundBlurbFadeIn : styles.backgroundBlurbFadeOut}`}
    >
      <svg
        width="100%"
        // height="650"
        viewBox="0 0 224.89583 171.97917"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs1">
          <pattern
            id="imagePattern"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image href={photo} x="0" y="0" width="100%" height="100%" />
          </pattern>
        </defs>
        <g id="layer1">
          <path
            d="m 0,116.11938 c 15.47073,38.23227 31.830581,31.65276 31.830581,31.65276 0,0 7.646453,-1.77824 17.960274,-8.7134 10.31382,-6.93515 9.424696,21.51677 31.830581,28.2741 22.405884,6.75733 29.696694,4.08996 33.786654,3.91213 4.08996,-0.17782 28.45191,-9.42469 37.16531,-25.60672 8.7134,-16.18203 13.33684,-13.69249 13.33684,-13.69249 0,0 14.58161,9.4247 26.8515,10.31383 12.26989,0.88912 30.76363,-9.60253 19.56069,-58.682084 C 201.11949,34.497949 205.5651,38.054438 211.07766,33.608827 216.59022,29.163216 226.19274,32.364055 224.4145,20.271991 222.63625,8.1799262 214.63415,-0.35564897 205.03163,-1.7782448 195.4291,-3.2008408 -6.7573302,-4.089963 -6.7573302,-4.089963 Z"
            id="path1"
            fill="url(#imagePattern)"
          >
            {/* {fadeType === "in" ? <animate id="in" attributeType="CSS" attributeName="opacity" from="0" to="1" dur="1s" repeatCount={1} /> : <animate id="out" attributeType="CSS" attributeName="opacity" from="1" to="0" dur="6s" repeatCount={1} />} */}
          </path>
        </g>
      </svg>
    </div>
  );
}
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 864 752" width="864" height="752">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M492.764 0H0V530H0.0119555C0.956065 635.543 57.8811 706.502 187.347 677.826C236.41 759.292 496.689 813.036 564.624 621.168C739.318 631.431 816.751 415.531 807.579 327.47C920.66 188.034 847.33 97.4305 732 47.6228V0H492.764Z" fill="url(#Cottage)"/>
    <defs>
        <pattern id="cottage" patternUnits="userSpaceOnUse" width="100" height="100">
            <image href="Cottage.jpg" x="0" y="0" width="100" height="100"/>
        </pattern>
    </defs>
</svg> */
}
