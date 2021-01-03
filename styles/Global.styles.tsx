import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize'


const GlobalStyle = createGlobalStyle`
:root {
    --color-main: #0070f3;
    --color-text: #1d1d1f;
    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif
}

html,
body {
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    font-family: var(--font-family);
    line-height: 1.5;
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

a {
    color: var(--color-main);

    &:hover {
        text-decoration: none;
    }
}
`;

export default function Global(): ReactElement {
    return (
        <>
            <Normalize />
            <GlobalStyle />
        </>
    );
}
