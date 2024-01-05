import React from "react";
import './Footer.css';

export function Footer() {
    return (
        <footer className="container footer">
        <div className="row">
            <div className="col-sm">
            {/* <img src="/img/ger-new-logo.png" alt="Gerardo Hernández Carrera"> */}
            <h2>PORTAFOLIO</h2>
            <p>Gerardo Hernández Carrera</p>
            <h4>
                MEEATD <separate>|</separate> 2023-2024 <separate />{" "}
            </h4>
            </div>
            <div className="col-sm" id="footerinfo">
            <div className="row">
                <div className="col-sm ">
                <div className="col-4  media">
                    <div className="social">
                    <a
                        href="https://www.instagram.com/chidovaril/"
                        target="_blank"
                        id="Instagram"
                    >
                        <svg
                        width={20}
                        height={20}
                        fill="#121212"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M2.571 0A2.585 2.585 0 000 2.571V17.43A2.585 2.585 0 002.571 20H17.43A2.585 2.585 0 0020 17.429V2.57A2.585 2.585 0 0017.429 0H2.57zm0 1.714H17.43c.49 0 .857.367.857.857v6.572h-3.51c-.409-2.265-2.398-4-4.776-4-2.378 0-4.367 1.735-4.777 4H1.714V2.57c0-.49.367-.857.857-.857zM15.714 3.43a1.142 1.142 0 10-.001 2.284 1.142 1.142 0 00.001-2.284zM10 6.857A3.13 3.13 0 0113.143 10 3.13 3.13 0 0110 13.143 3.13 3.13 0 016.857 10 3.13 3.13 0 0110 6.857zm-8.286 4h3.51a4.866 4.866 0 004.776 4 4.866 4.866 0 004.777-4h3.509v6.572c0 .49-.367.857-.857.857H2.57a.837.837 0 01-.857-.857v-6.572z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gerardohdezcarrera/"
                        target="_blank"
                        id="LinkedIn"
                    >
                        <svg
                        width={21}
                        height={21}
                        fill="#121212"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.844 3.792v.023c0 .426-.067.847-.203 1.248h.084V20.74H.095V5.063h.107A3.905 3.905 0 010 3.815c0-1.024.39-2.008 1.14-2.732C1.89.36 2.89 0 3.934 0c1.051 0 2.049.364 2.793 1.102.736.73 1.095 1.695 1.117 2.667v.023zM2.48 5.062A1.8 1.8 0 012 3.816C2 2.788 2.764 2 3.934 2s1.887.788 1.91 1.815c0 .483-.172.922-.486 1.248-.338.349-.841.567-1.472.567-.593 0-1.078-.218-1.407-.567zM2.095 18.74h3.63V7.063h-3.63V18.74z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.71 5.063h7.048l.005.05A6.567 6.567 0 0114.8 4.8c1.656 0 3.282.568 4.472 1.892 1.17 1.302 1.707 3.095 1.707 5.146v8.902H5.898v-9.952c0-1.412-.046-2.595-.093-3.635l-.095-2.09zm7.266 2.109A4.144 4.144 0 0011.475 8.3c-.11.13-.201.26-.277.379l-.005.008h-.071l-.168-1.624H7.802c.028.606.055 1.268.074 2 .013.536.022 1.109.022 1.725v7.952h3.63v-6.734c0-.334.023-.669.12-.908.054-.138.122-.277.206-.411.217-.348.534-.66.964-.825.204-.08.434-.125.691-.125 1.314 0 1.84 1.027 1.84 2.531v6.472h3.63V11.84c0-3.44-1.792-5.04-4.18-5.04-.71 0-1.316.148-1.823.373z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>

    );
}
