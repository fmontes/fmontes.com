export function Footer(): React.ReactElement {
  return (
      <div className="prose dark:prose-invert mx-auto mt-24">
          <p>
              Copyright © {new Date().getFullYear()}. Design and code by myself with Next.js.{' '}
              <a href="https://github.com/fmontes/fmontes.com">Fork it</a> and create yours
          </p>
      </div>
  );
}
