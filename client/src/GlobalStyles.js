import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./fonts/Poppins-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('truetype');
    }
    :root {
        --primary-color: #FFFFFF;
        --accent-primary-color: #145DA0;
        --accent-secondary-color: #B1D4E0;
        --accent-text-color: #051D40;
        /* --page-horizontal-padding: 20px; */
        /* --header-height: 50px; */
        /* --max-content-width: 1200px; */
        --heading-font-family: 'Poppins';
        --body-font-family: 'Poppins';
        /* --user-img-width: 120px; */
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, link {
        margin: 0;
        padding: 0;
        border: 0;
        position:relative;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: var(--body-font-family);
        transition-duration: .3s;
        
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        height: 100vh;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3, h4 {
        color: var(--accent-primary-color);
        font-family: var(--heading-font-family);
        font-weight: bolder;
    }
    p, button, a {
        color: var(--accent-primary-color);
        font-size: 16px;
    }
    h2 {
        font-size: 28px;
    }
    h1 {
        font-size: 50px;
    }
    

`;
