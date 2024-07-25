import { getDictionary } from '../dictionaries';
import React from 'react';

async function NotFoundPage() {
  const dict = await getDictionary('en');

  return (
    <div className="prose dark:prose-invert lg:prose-xl dark:prose-h1:text-yellow mx-auto my-24 text-center">
      <h1>{dict.error.not_found}</h1>
      <p>{dict.error.not_found_desc}</p>
      <p>
        <a href="/">
          {dict.error.back_home}
        </a>
      </p>
    </div>
  );
}

export default NotFoundPage;