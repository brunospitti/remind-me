import { injectGlobal } from "emotion";

export const colors = {
  primary: "#00b8a9",
  secondary: "#ffde7d",
  tertiary: "#f6416c",
  complementary: "#f8f3d4",
  dark: "#333",
  light: "#F7FFF7",
  lightGrey: "#C1C1C1",
  danger: "#FF6767"
};

export default injectGlobal`
    // css reset

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
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
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }



    // global styles

    * {
        font-family: -apple-system,BlinkMacSystemFont,'avenir next',avenir,'helvetica neue','segoe ui', helvetica,roboto,noto,arial,sans-serif;
        font-size: 14px;
        color: ${colors.dark};
    }
`;
