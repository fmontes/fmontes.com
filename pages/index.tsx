import React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>@fmontes</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className="sm:col-span-2">
                <h1>How to manage Angular state in your components</h1>
                <p>
                    <time>July 21, 2020</time>
                </p>

                <p>Managing the state of your Angular application has always been a challenge.</p>
                <p>
                    In this tutorial, I will explain how to manage your component’s state with
                    @ngrx/component-store. You will be able to do it in a more organized way and
                    minimizing bugs and UI inconsistencies.
                </p>

                <h2>Prerequisites</h2>
                <ol>
                    <li>Basic knowledge of Angular</li>
                    <li>Basic knowledge of RXJS</li>
                    <li>
                        <a href="https://cli.angular.io/">angular-cli</a> installed or{' '}
                        <a href="https://stackblitz.com/">Stackblitz</a> account
                    </li>
                </ol>

                <h3>In short a state is:</h3>
                <p>It is an object that represents the view of your component.</p>

                <p>
                    Then you create a <b>service that will communicate</b> with the “backend” (only
                    for the demo).
                </p>

                <h4>Selectors</h4>
                <p>To create a selector, the select method is used as follows:</p>
            </main>
        </>
    );
}
