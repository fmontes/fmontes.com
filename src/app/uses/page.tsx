import { Metadata } from 'next';
import { defaultOpenGraph } from '@/utils/content';
import { SITE } from '@/utils/const';

export const metadata: Metadata = {
  title: 'What I use everyday - Freddy Montes',
  description: 'Hardware and software I use everyday',
  openGraph: {
    ...defaultOpenGraph,
    title: 'What I use everyday - Freddy Montes',
    url: `${SITE}/uses`,
    images: [
      {
        url: `${SITE}/static/images/banner.png`,
        alt: 'Freddy Montes - What I use everyday',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Uses() {
  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg">
      <h1>What I use everyday</h1>

      <h2>Hardware</h2>
      <ul>
        <li>
          <a href="https://www.apple.com/macbook-pro-14-and-16/">Apple Macbook Pro 14" M1 2022</a> - <s>Apple Macbook Pro 16" 2019</s>
        </li>
        <li>
          <a href="https://www.amazon.com/LG-32UL750-W-Monitor-Display-Silver/dp/B07NS7JKJH">LG 32UL750-W Monitor 32" 4K UHD (3840 x 2160)</a> - <s>ASUS PB287Q Gaming Monitor - 28" 4K UHD</s>
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B07DHDFW5V/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">Logitech MX Master Wireless </a> - <s>Apple Magic Mouse 2 - Silver</s>
        </li>
        <li>
          <a href="https://www.apple.com/airpods-pro/">Apple AirPods Pro</a>
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B085RNVJ3P/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1">Sony Noise Cancelling Headphones WHCH710N</a>
        </li>
        <li>
          <a href="https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english">
            Apple Magic Keyboard - US English
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B0892D1J2H/ref=ppx_yo_dt_b_asin_title_o07_s01?ie=UTF8&psc=1">
            MacBook Pro Docking Station Dual
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B07PMSBLTH/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1">
            RALENO LED Video Soft Light Panel
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B07WLWN2ZT/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1">
            USB Microphone, TONOR
          </a>
        </li>
      </ul>

      <h2>Software</h2>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        </li>
        <li>
          <a href="https://iterm2.com/">iTerm 2</a> with <a href="https://ohmyz.sh/">Oh My Zsh</a>
        </li>
        <li>
          <a href="https://www.raycast.com/">Raycast</a>- <s>Alfred 4</s>
        </li>
        <li>
          <a href="https://www.google.com/chrome/">Google Chrome</a>
        </li>
        <li>
          <a href="https://slack.com/">Slack</a>
        </li>
        <li>
          <a href="https://www.spotify.com/">Spotify</a>
        </li>
        <li>
          <a href="https://tweetdeck.twitter.com/">Tweetdeck</a>
        </li>
        <li>
          <a href="https://sketch.com/">Sketch</a> and <a href="http://figma.com/">Figma</a>
        </li>
        <li>
          Affinity <a href="https://affinity.serif.com/en-gb/designer/">Designer</a> and{' '}
          <a href="https://affinity.serif.com/en-gb/photo/">Photo</a>
        </li>
      </ul>
    </main>
  );
} 