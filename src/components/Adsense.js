import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Adsense() {
    const { asPath } = useRouter();

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, [asPath]);

    return (
        <div key={asPath}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8735562939411083"
                data-ad-slot="1809789971"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
