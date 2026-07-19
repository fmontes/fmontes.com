# Scroll Story Design Brief

## Feature Summary

Redesign the entire homepage as a continuous scroll narrative for executives, conference organizers, and hiring leaders. The experience must establish that Freddy closes the distance between product strategy and execution by building real systems, then turn that understanding into a conversation on LinkedIn.

## Primary User Action

The visitor should understand that Freddy builds the systems he advocates, trust the evidence, and choose **Start a conversation** to contact him on LinkedIn about consulting, speaking, or recruiting.

## Design Direction

- **Color strategy:** Restrained. Preserve the current warm off-white, near-black ink, and desaturated blue-gray accent. Blue marks narrative progress and evidence rather than decorating whole sections.
- **Theme scene:** A senior leader reads between meetings in a quiet daylight office, focused but not rushed, with enough time to absorb one idea before moving to the next.
- **Anchors:** The current fmontes.com identity and the proportion, legibility, and functional precision of Braun watches.
- **Winning probe:** Direction A, **The Gap Closes**, is the narrative backbone. Direction B contributes one behavior: each project leaves visible evidence behind as the story advances.

## Scope

- **Fidelity:** Production-ready.
- **Breadth:** The complete homepage in light and dark modes.
- **Interactivity:** Shipped-quality responsive scroll choreography with semantic, readable fallbacks.
- **Time intent:** Polish until it is ready to ship, including accessibility, performance, and browser testing.

## Layout Strategy

The page is a sequence of connected scenes, not a stack of independent sections.

1. **Cover:** Freddy's identity, social links, role, and the thesis “I build the AI systems I lead teams to ship.” occupy a calm opening viewport.
2. **The tension:** Strategy and Execution move to opposite sides of a persistent visual field. The distance between them becomes the central problem.
3. **The mechanism:** Prototype appears between them. A thin blue-gray axis begins connecting both sides.
4. **The evidence:** Each of the four projects receives enough space for its title, situation, work, and outcome. When its detailed reading moment passes, it remains as a concise mark on the shared axis. The visual system accumulates rather than resetting.
5. **The method:** The existing build, scale, and team cadence explains how the accumulated evidence was produced.
6. **The resolution:** Strategy and Execution converge into one coherent system. “I run one.” appears once as the payoff.
7. **The epilogue:** Twenty years of building, writing, podcasting, and speaking expands the context without becoming a metrics section.
8. **The invitation:** “Start a conversation” links to LinkedIn. Consulting, speaking, and recruiting are stated as reasons to reach out, not separate service cards.

The visual field remains symmetrical and spacious. The persistent axis is the connective tissue, not navigation chrome. There are no repeated section labels, alternating promotional bands, project cards, or conventional portfolio grid.

## Key States

- **Initial:** The thesis is immediately readable before any animation completes.
- **Tension:** Strategy and Execution are separated, with the gap clearly legible as intentional space.
- **Mechanism:** Prototype and the connecting axis appear without hiding the core message.
- **Evidence:** Four sequential project states provide long-form reading moments while completed projects remain visible as accumulated marks.
- **Resolution:** The axis and evidence resolve into the final claim and invitation.
- **Reduced motion:** The same story becomes a normal-flow sequence with static connector states and short crossfades or no transition.
- **No JavaScript:** All content remains visible in semantic document order. Scroll choreography is progressive enhancement.
- **Mobile:** The horizontal gap becomes a vertical relationship. Each proof occupies a generous reading block while a restrained vertical axis accumulates alongside it.
- **Short viewports:** Content can scroll naturally inside the document. No critical copy is trapped inside a fixed-height scene.
- **Dark mode:** Preserve the current dark identity while maintaining WCAG contrast and comfortable line height.
- **Keyboard and focus:** LinkedIn and social links retain clear, high-contrast focus states.

There are no loading, empty, or application error states because the homepage is static. Missing future project imagery is an accepted content condition, not an empty state.

## Interaction Model

- Use native scrolling with no scroll hijacking and no mandatory scroll snap.
- On larger screens, a pinned visual stage maps scroll progress to the distance between Strategy and Execution, the length of the connecting axis, and the accumulated evidence marks.
- Project copy enters through restrained masks or crossfades while remaining present and readable without animation.
- Animate transform, opacity, clip-path, and semantic SVG stroke progress. Avoid layout-property animation and decorative motion.
- Each project leaves a persistent mark after its detailed scene, so movement communicates memory and causality.
- The final CTA receives a quiet focus and hover response. It does not pulse or chase attention.
- A reduced-motion media query replaces spatial choreography with static ordered composition.

## Content Requirements

- Retain the hero thesis and the strongest current proof points.
- Use “I run one.” only at the resolution so it functions as a payoff rather than a repeated slogan.
- Remove generic scaffold labels such as “What I believe” and “Recently built” when the narrative itself communicates those roles.
- Give each project a consistent content sequence: situation, system built, and specific organizational outcome.
- Keep the current dotCMS customer context, but edit it into one calm credibility passage rather than a logo wall.
- Keep the twenty-year background, audience reach, podcast, course, and speaking history as an epilogue.
- Use “Start a conversation” as the primary CTA, linking to LinkedIn with accessible standalone link text.
- Do not create placeholder screenshots. Structure project scenes to accept optional real visuals later without requiring them now.
- Build the connective graphic as semantic HTML and SVG or CSS, not a raster illustration. The visual must remain crisp, responsive, theme-aware, and accessible.

## Technical and Quality Constraints

- Preserve the Next.js App Router architecture and keep the semantic content server-rendered.
- Isolate scroll measurement and choreography in the smallest practical client component.
- Treat animation as progressive enhancement and avoid blank initial states.
- Maintain WCAG 2.2 AA contrast, keyboard navigation, heading order, and reduced-motion support.
- Prevent horizontal overflow at mobile and tablet widths.
- Keep motion smooth by avoiding layout thrashing and unnecessary continuous JavaScript work.
- Verify desktop, tablet, mobile, light mode, dark mode, reduced motion, keyboard navigation, and no-JavaScript content order before shipping.

## Recommended Implementation References

- `animate.md` for the scroll choreography and reduced-motion strategy.
- `layout.md` for single-purpose viewport pacing and responsive rhythm.
- `typeset.md` for the large typographic hierarchy and long-form readability.
- `adapt.md` for converting horizontal convergence into a mobile vertical narrative.
- `optimize.md` for scroll performance and client-boundary discipline.
- `polish.md` for the final cross-browser and accessibility pass.

## Open Questions

None. Real project imagery is intentionally deferred and must not block this version.
