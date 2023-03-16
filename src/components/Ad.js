import React from "react";
import Script from "next/script";

function Ad() {
    return (
        <div>
            {/* <Script id="show-banner" strategy="afterInteractive">
                {` console.log("AdReplacement");`}
            </Script> */}
            <a href="https://amzn.to/3yee3bY">
                <img
                    className="aligncenter wp-image-27855 size-full"
                    src="https://shopclip.jp/wp/wp-content/uploads/2023/02/amazon-coupon1.png"
                    alt=""
                    width="751"
                    height="150"
                />
            </a>
            <p
                className="has-text-align-center"
                style={{
                    textAlign: "center",
                }}
            >
                <a
                    className="btn __green"
                    style={{
                        width: "100%",
                    }}
                    href="https://amzn.to/3yee3bY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    最新Amazonクーポンも確認する
                </a>
            </p>

            <amp-ad
                width="728"
                height="90"
                type="a8"
                data-aid="210604850431"
                data-wid="001"
                data-eno="01"
                data-mid="s00000008473001117000"
                data-mat="3HDZQQ-74LUIA-1TDM-6NETT"
                data-type="static"
            ></amp-ad>

            <a
                href="https://px.a8.net/svt/ejp?a8mat=3T24JT+BTOZUQ+2D32+2HCY6P"
                rel="nofollow"
            >
                <img
                    border="0"
                    width="728"
                    height="90"
                    alt=""
                    src="https://www24.a8.net/svt/bgt?aid=230206601715&wid=003&eno=01&mid=s00000011027015009000&mc=1"
                />
            </a>
            <img
                border="0"
                width="1"
                height="1"
                src="https://www19.a8.net/0.gif?a8mat=3T24JT+BTOZUQ+2D32+2HCY6P"
                alt=""
            />
        </div>
    );
}

export default Ad;
