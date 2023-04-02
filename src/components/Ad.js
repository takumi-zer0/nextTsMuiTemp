import React from "react";
import Link from "next/link";
import Script from "next/script";

function Ad() {
    return (
        <div>
            {/* <Script id="show-banner" strategy="afterInteractive">
                {` console.log("AdReplacement");`}
            </Script> */}
            {/* <Link href="https://amzn.to/3yee3bY">
                <a href="https://amzn.to/3yee3bY">
                    <img
                        className="aligncenter wp-image-27855 size-full"
                        src="https://shopclip.jp/wp/wp-content/uploads/2023/02/amazon-coupon1.png"
                        alt=""
                        width="751"
                        height="150"
                    />
                </a>
            </Link> */}

            <Link href="https://amzn.to/3yee3bY">
                <a>
                    <img
                        className="aligncenter size-full wp-image-28773 w-full"
                        src="https://shopclip.jp/wp/wp-content/uploads/2023/03/amazon-coupon2.png"
                        alt=""
                        width={926}
                        height={144}
                    />
                </a>
            </Link>
            <p
                className="has-text-align-center"
                style={{ textAlign: "center" }}
            >
                <a
                    className="btn __green"
                    style={{ width: "100%" }}
                    href="https://amzn.to/3yee3bY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    最新Amazonクーポンも確認する
                </a>
            </p>
        </div>
    );
}

export default Ad;
