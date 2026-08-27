// ---------------------------------------------------------------------------
// og-image.typ — the Open Graph / social card for fransancheztech.com
//
// Render (--ppi 72 makes 1pt = 1px, giving exactly the 1200x630 that LinkedIn,
// WhatsApp, Slack and X expect):
//
//     typst compile --format png --ppi 144 og-image.typ public/og-image.png
//
// --ppi 144, not 72. The page is defined as 1200x630pt, so ppi 72 would give
// exactly the 1200x630 that Open Graph specifies — but feed cards render on
// high-DPI screens, where a 1200px image displayed at ~600 CSS px has no
// headroom and looks soft. 144 renders the same layout at 2400x1260, which
// downscales cleanly. Keep og:image:width/height in Seo.jsx matching the file.
//
// Deliberately NOT a screenshot of the homepage. A social card is rendered at
// roughly 1200x630 in a feed and often scaled down further on mobile, so a
// page screenshot puts nav chrome and body copy in at illegible sizes. It also
// goes stale: the previous preview was a December 2025 screenshot still
// reading "DESARROLLADOR WEB - REACT.JS" long after that stopped being true.
//
// The palette, dot texture and typeface match linkedin-banner.typ in the CV
// repo on purpose, so the banner and any shared link read as one identity.
//
// This card DOES carry the name, unlike the LinkedIn banner. It appears
// standalone in a feed with no profile attached to it.
// ---------------------------------------------------------------------------

#set page(width: 1200pt, height: 630pt, margin: 0pt, fill: rgb("#0d1f31"))

// --- ground: soft diagonal wash, navy on navy -------------------------------
#place(top + left, rect(
  width: 1200pt, height: 630pt,
  fill: gradient.linear(
    rgb("#0b1a2b"),
    rgb("#16314c"),
    rgb("#1a3a5c"),
    rgb("#102438"),
    angle: 18deg,
  ),
))

// --- texture: fine dot matrix, two densities for depth -----------------------
#for y in range(0, 640, step: 18) {
  for x in range(0, 1210, step: 18) {
    place(top + left, dx: x * 1pt, dy: y * 1pt,
      circle(radius: 0.8pt, fill: white.transparentize(93%), stroke: none))
  }
}
#for y in range(9, 640, step: 54) {
  for x in range(9, 1210, step: 54) {
    place(top + left, dx: x * 1pt, dy: y * 1pt,
      circle(radius: 1.4pt, fill: rgb("#8fb6df").transparentize(86%), stroke: none))
  }
}

// --- vignette so the dots fade at the edges ----------------------------------
#place(top + left, rect(
  width: 1200pt, height: 630pt,
  fill: gradient.radial(
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(11, 26, 43, 150),
    center: (50%, 45%),
    radius: 70%,
  ),
))

// --- type --------------------------------------------------------------------
// Left-aligned with a generous margin rather than centred: feed cards are often
// cropped from the right on narrow layouts, so the name is safest on the left.
#place(left + horizon, dx: 88pt, block(width: 1000pt)[
  #text(
    font: ("Inter", "Segoe UI"),
    size: 68pt,
    weight: 700,
    fill: rgb("#f4f8fc"),
    tracking: -0.5pt,
  )[Francisco Sánchez]

  #v(26pt)

  #box(width: 110pt, height: 3pt, fill: rgb("#8fb6df").transparentize(35%))

  #v(26pt)

  #text(
    font: ("Inter", "Segoe UI"),
    size: 33pt,
    weight: 500,
    fill: rgb("#cddcec"),
  )[Python Engineer · AI, Platform & Full-Stack]

  #v(20pt)

  #text(
    font: ("Inter", "Segoe UI"),
    size: 22pt,
    weight: 400,
    fill: rgb("#8fb6df"),
    tracking: 1.4pt,
  )[fransancheztech.com]
])
