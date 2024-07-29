

export default function BackgroundBlurb({width}: {width: string}) {
    return (
        <div style={{ width }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 864 752" width="100%">
                <path fillRule="evenodd" clipRule="evenodd" d="M492.764 0H0V530H0.0119555C0.956065 635.543 57.8811 706.502 187.347 677.826C236.41 759.292 496.689 813.036 564.624 621.168C739.318 631.431 816.751 415.531 807.579 327.47C920.66 188.034 847.33 97.4305 732 47.6228V0H492.764Z" fill="url(#cottage)" />
                <defs>
                    <pattern id="cottage" patternUnits="userSpaceOnUse" width="864" height="752" x="0" y="0">
                        <image href="Cottage.jpg" x="0" y="0" width="864" />
                    </pattern>
                </defs>
            </svg>
        </div>
    )
}