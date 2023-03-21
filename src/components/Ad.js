import React from "react";
import Script from "next/script";

function Ad() {
    return (
        <div>
            <a href="https://shopclip.jp/wp/wp-content/uploads/2023/03/amazon-coupon2.png">
                <img
                    className="aligncenter size-full wp-image-28773"
                    src="https://shopclip.jp/wp/wp-content/uploads/2023/03/amazon-coupon2.png"
                    alt=""
                    width="926"
                    height="144"
                />
            </a>
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
