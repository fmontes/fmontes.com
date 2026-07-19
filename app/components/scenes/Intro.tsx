import { Reveal } from "../motion";

export function Intro() {
  return (
    <section id="about" data-chapter="About" className="py-[16svh]">
      <div className="mx-auto max-w-[660px] space-y-6 px-6 text-[18px] sm:text-[19px] leading-[1.7]">
        <Reveal>
          <p>
            VP of Product. 20 years across engineering, design, architecture,
            and product.
          </p>
        </Reveal>
        <Reveal>
          <p>
            I don&apos;t set strategy and wait. I prototype the system first.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Currently VP of Product at{" "}
            <strong className="font-medium text-ink-strong">dotCMS</strong>,
            used by organizations including Vodafone, Royal Bank of Canada,
            BlueCross BlueShield, Telus, White Castle, City Furniture, and
            Caliber.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
