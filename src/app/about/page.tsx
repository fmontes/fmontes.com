import { Metadata } from 'next';
import { defaultOpenGraph } from '@/utils/content';
import { SITE } from '@/utils/const';

export const metadata: Metadata = {
  title: 'About me - Freddy Montes',
  description: 'Code, Design, Learn and Teach',
  openGraph: {
    ...defaultOpenGraph,
    title: 'About me - Freddy Montes',
    url: `${SITE}/about`,
    images: [
      {
        url: `${SITE}/static/images/banner.png`,
        alt: 'Freddy Montes - Code, Design, Learn and Teach',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg">
      <h1>About me</h1>

      <p>
        Working full time in Angular, Typescript and SCSS, leading the team for revamping DotCMS administration system. Also experienced with React, Redux, GraphQL and NodeJS.
      </p>

      <blockquote>
        Code, Design, Learn and Teach.
      </blockquote>

      <p>
        Frontend is my true passion and I really enjoy the whole process of creating UIs. From the first brainstorming, wireframes, mockups, design, all the way until the final product.
      </p>

      <h3>Want to build something?</h3>
      <p>
        If you want to work with me just shoot me an email and I'll be ready to make it happen.
      </p>

      <h3>Skills</h3>
      <ul className="skills grid grid-cols-2 md:grid-cols-4 gap-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Gatsby</li>
        <li>Angular</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
        <li>NoSQL</li>
        <li>Redux</li>
        <li>NGRX</li>
        <li>Firebase</li>
        <li>RxJS</li>
        <li>SASS</li>
        <li>DotCMS</li>
        <li>Wordpress</li>
        <li>REST</li>
        <li>GraphQL</li>
        <li>Web Design</li>
        <li>UX</li>
        <li>Agile</li>
        <li>Sketch</li>
        <li>Figma</li>
        <li>Photoshop</li>
      </ul>
    </main>
  );
} 