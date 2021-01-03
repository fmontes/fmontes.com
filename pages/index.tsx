import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@styles/Container.styles';

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    margin-bottom: 0;
`;

const Description = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
    margin: 1rem 0;
`;

const Code = styled.span`
    background: #f2f2f2;
    border-radius: 5px;
    padding: 0.75rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
        Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Box = styled.div`
    background: #0070f31a;
    border-radius: 0.5rem;
    border: solid 1px var(--color-main);
    margin: 4rem auto;
    padding: 2rem;
    width: 25rem;

    h3 {
        margin-top: 0;
        font-size: 1.5rem;
    }

    ul {
        margin: 0 0 0 2rem;
        padding: 0;
    }
`;

export default function Home(): JSX.Element {
    return (
        <Container>
            <Head>
                <title>@fmontes Next.JS v10 starter</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <Title>
                @fmontes <Link href="https://nextjs.org/">Next.JS</Link> starter
            </Title>
            <Description>
                Get started by editing <Code>pages/index.tsx</Code>
            </Description>

            <Box>
                <h3>Features</h3>
                <ul>
                    <li>
                        <Link href="https://www.typescriptlang.org/">Typescript</Link>
                    </li>
                    <li>
                        <Link href="https://styled-components.com/">Styled Components</Link>
                    </li>
                    <li>
                        <Link href="https://eslint.org/">ESLint</Link> and{' '}
                        <Link href="https://prettier.io/">Prettier</Link>
                    </li>
                    <li>
                        <Link href="https://typicode.github.io/husky/#/">Husky</Link>
                    </li>
                </ul>
            </Box>
        </Container>
    );
}
