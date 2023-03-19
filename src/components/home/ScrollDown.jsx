import React from "react";

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button
            button--flex">
                <svg
                    width="32px"
                    height="32px"
                    class="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlnsxlink="http://www.w3.org/199/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                    }}
                    >
                        <path
                            class="wheel"
                            d="M123.359,79.77510,72.843"
                            style={{
                                fill: "none",
                                stroke: "var(--title-color)",
                                strokeWidth: "20px",
                            }}
                            ></path>
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.
                                358,-113.359c-62.565,0 -113.359,50.794 -113.359,133.
                                35910,143.237c0,62.565 50.794,113.359 113.359 113.359,113.
                                359c62.564,0 113.358,-50.794 113.358,-113.35910,-143.
                                237Z"
                                style={{
                                    fill: "none",
                                    stroke: "var(--title-color)",
                                    strokeWidth: "20px",
                                }}
                                ></path>
                </svg>
                <span className="home_scroll-name">Scroll Down</span>
                <i class="uil uil=arrow-down home_scroll-arrow"></i>
            </a>
        </div>
    );
};

export default ScrollDown