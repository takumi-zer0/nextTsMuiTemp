import React from "react";
import Script from "next/script";

function Ad() {
    return (
        <div>
            <Script id="show-banner" strategy="afterInteractive">
                {` console.log("AdReplacement");`}
            </Script>
        </div>
    );
}

export default Ad;
