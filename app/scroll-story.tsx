"use client";

import { useEffect, useRef, useState } from "react";
import {
  domAnimation,
  LazyMotion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import * as m from "motion/react-m";
import styles from "./page.module.css";

export type StoryProject = {
  title: string;
  situation: string;
  detail: string;
};

type ScrollStoryProps = {
  projects: StoryProject[];
};

export default function ScrollStory({ projects }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const sceneCount = projects.length + 3;
  const isResolved = activeScene === sceneCount - 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const strategyX = useTransform(
    scrollYProgress,
    [0.02, 0.9],
    ["0vw", "36vw"],
  );
  const executionX = useTransform(
    scrollYProgress,
    [0.02, 0.9],
    ["0vw", "-36vw"],
  );
  const endpointOpacity = useTransform(
    scrollYProgress,
    [0, 0.025, 0.86, 0.97],
    [0, 1, 1, 0],
  );
  const axisScale = useTransform(
    scrollYProgress,
    [0.1, 0.26],
    [0.04, 1],
  );
  const prototypeOpacity = useTransform(
    scrollYProgress,
    [0.09, 0.2, 0.82, 0.92],
    [0, 1, 1, 0],
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 56.25rem)");

    const updateEnhancement = () => {
      setIsEnhanced(media.matches && !shouldReduceMotion);
    };

    updateEnhancement();
    media.addEventListener("change", updateEnhancement);

    return () => media.removeEventListener("change", updateEnhancement);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isEnhanced || !sectionRef.current) return;

    const steps = sectionRef.current.querySelectorAll<HTMLElement>(
      "[data-story-step]",
    );
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.intersectionRatio);
        });

        const current = [...ratios.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])[0];

        if (current) {
          const index = Number(
            (current[0] as HTMLElement).dataset.storyStep ?? 0,
          );
          setActiveScene(index);
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [isEnhanced]);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <section
          ref={sectionRef}
          className={styles.story}
          data-enhanced={isEnhanced ? "true" : "false"}
          aria-labelledby="story-title"
        >
          <h2 id="story-title" className={styles.srOnly}>
            Closing the gap between product strategy and execution
          </h2>

          <div className={styles.storyStage} aria-hidden="true">
            <div className={styles.storyField}>
              <m.span
                className={`${styles.endpoint} ${styles.strategy}`}
                style={{ x: strategyX, opacity: endpointOpacity }}
              >
                Strategy
              </m.span>
              <m.span
                className={`${styles.endpoint} ${styles.execution}`}
                style={{ x: executionX, opacity: endpointOpacity }}
              >
                Execution
              </m.span>

              <div className={styles.axis}>
                <m.span
                  className={styles.axisLine}
                  style={{ scaleX: axisScale }}
                  animate={{ opacity: isResolved ? 0.2 : 1 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <m.span
                  className={styles.prototype}
                  style={{ opacity: prototypeOpacity }}
                >
                  Prototype
                </m.span>

                <div className={styles.evidenceMarks}>
                  {projects.map((project, index) => {
                    const isReached = activeScene >= index + 2;
                    const isActive = activeScene === index + 2;
                    const collapseDistance = [30, 10, -10, -30][index];

                    return (
                      <m.span
                        key={project.title}
                        className={styles.evidenceMark}
                        animate={
                          isResolved
                            ? {
                                x: `${collapseDistance}cqw`,
                                opacity: [1, 1, 0],
                                scale: [1, 1.12, 0.4],
                                backgroundColor: "var(--accent)",
                              }
                            : {
                                x: "0cqw",
                                opacity: isReached ? 1 : 0.18,
                                scale: isActive
                                  ? 1.35
                                  : isReached
                                    ? 1
                                    : 0.72,
                                backgroundColor: isReached
                                  ? "var(--accent)"
                                  : "var(--background)",
                              }
                        }
                        transition={{
                          duration: isResolved ? 0.58 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                          times: isResolved ? [0, 0.72, 1] : undefined,
                        }}
                      />
                    );
                  })}
                </div>

                <m.div
                  className={styles.resultMark}
                  initial={false}
                  animate={
                    isResolved
                      ? {
                          opacity: [0, 0, 1],
                          scale: [0.72, 0.72, 1],
                          rotate: [-8, -8, 0],
                        }
                      : { opacity: 0, scale: 0.72, rotate: -8 }
                  }
                  transition={{
                    duration: isResolved ? 0.72 : 0.24,
                    times: isResolved ? [0, 0.56, 1] : undefined,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className={styles.resultDial}>
                    {projects.map((project) => (
                      <span key={project.title} className={styles.resultProof} />
                    ))}
                    <span className={styles.resultCore} />
                  </span>
                  <span className={styles.resultLabel}>One system</span>
                </m.div>
              </div>

              <div className={styles.stageScenes}>
                {Array.from({ length: sceneCount }, (_, index) => (
                  <m.article
                    key={index}
                    className={styles.stageScene}
                    initial={false}
                    animate={{
                      opacity: activeScene === index ? 1 : 0,
                      y:
                        activeScene === index
                          ? 0
                          : activeScene > index
                            ? -14
                            : 14,
                      filter:
                        activeScene === index ? "blur(0px)" : "blur(5px)",
                    }}
                    transition={{
                      duration: activeScene === index ? 0.58 : 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <SceneCopy index={index} projects={projects} />
                  </m.article>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.storyFlow}>
            {Array.from({ length: sceneCount }, (_, index) => (
              <article
                key={index}
                className={styles.storyStep}
                data-story-step={index}
              >
                <SceneCopy index={index} projects={projects} />
              </article>
            ))}
          </div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
}

function SceneCopy({
  index,
  projects,
}: {
  index: number;
  projects: StoryProject[];
}) {
  if (index === 0) {
    return (
      <div className={styles.sceneCopy}>
        <h3 className={styles.sceneStatement}>AI has closed the gap.</h3>
        <p className={styles.sceneSupport}>
          Product leaders now build systems, not processes.
        </p>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={styles.sceneCopy}>
        <h3 className={styles.sceneStatement}>
          Strategy without prototypes is speculation.
        </h3>
        <p className={styles.sceneSupport}>I prototype the system first.</p>
      </div>
    );
  }

  const projectIndex = index - 2;
  const project = projects[projectIndex];

  if (project) {
    return (
      <div className={`${styles.sceneCopy} ${styles.projectScene}`}>
        <p className={styles.projectProgress}>
          Proof {projectIndex + 1} of {projects.length}
        </p>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectSituation}>{project.situation}</p>
        <p className={styles.projectDetail}>{project.detail}</p>
      </div>
    );
  }

  return (
    <div className={`${styles.sceneCopy} ${styles.resolutionScene}`}>
      <p className={styles.resolutionContext}>
        Most people talking about AI-native product organizations advise from
        the outside.
      </p>
      <h3 className={styles.resolutionTitle}>I run one.</h3>
      <p className={styles.method}>
        I build for my own work first. Then I find what scales. Then I put it
        in front of teams.
      </p>
    </div>
  );
}
