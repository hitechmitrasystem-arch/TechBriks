# 🎨 Visual Diagrams & Examples

## Carousel Animation Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│              VALUE DELIVERED FOR - CAROUSEL SECTION             │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Carousel Wrapper (overflow: hidden)                      │  │
│  │                                                          │  │
│  │  ┌─ Carousel Track (display: flex; animate: 60s) ────┐  │  │
│  │  │                                                    │  │  │
│  │  │ [HSBC] [AIB] [Julius] [PTSB]  [Ujjivan] [AUS] [Raif]  │  │
│  │  │ ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← │  │
│  │  │                                                    │  │  │
│  │  │ START                                   MIDDLE     │  │  │
│  │  │ translateX(0)                   translateX(-50%)   │  │  │
│  │  │                                                    │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  │                                                          │  │
│  │     [Cloned items] [Cloned items]  (not visible)         │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  HOVER: animation-play-state = paused    🖱️ STOP              │
│  LEAVE: animation-play-state = running   ▶️ RESUME            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Responsive Layout Breakdown

### Desktop View (1025px+)
```
┌────────────────────────────────────────────────────┐
│        VALUE DELIVERED FOR SECTION                │
├────────────────────────────────────────────────────┤
│                                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│  │ HSBC    │ │  AIB    │ │ Julius  │ │  PTSB   │ │
│  │ [Logo]  │ │ [Logo]  │ │ [Logo]  │ │ [Logo]  │ │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
│                                                   │
│  Scroll Direction: → → →                         │
│  4 Logos Visible at Once                         │
│  Speed: 60 seconds per cycle                     │
│                                                   │
└────────────────────────────────────────────────────┘
```

### Tablet View (769px-1024px)
```
┌──────────────────────────────────────┐
│   VALUE DELIVERED FOR SECTION        │
├──────────────────────────────────────┤
│                                     │
│  ┌──────────────┐ ┌──────────────┐  │
│  │ HSBC         │ │ AIB          │  │
│  │ [Logo]       │ │ [Logo]       │  │
│  └──────────────┘ └──────────────┘  │
│                                     │
│  Scroll Direction: → → →            │
│  2 Logos Visible at Once            │
│  Speed: 60 seconds per cycle        │
│                                     │
└──────────────────────────────────────┘
```

### Mobile View (≤768px)
```
┌──────────────────────┐
│ VALUE DELIVERED FOR  │
├──────────────────────┤
│                     │
│  ┌────────────────┐ │
│  │ HSBC           │ │
│  │ [Logo]         │ │
│  └────────────────┘ │
│                     │
│ Scroll Direction: →  │
│ 1 Logo Visible      │
│ Speed: 40 seconds   │
│                     │
└──────────────────────┘
```

---

## Animation Timeline

### Single Carousel Cycle (60 seconds)

```
Time (seconds)  0       7.5     15      22.5    30      37.5    45      52.5    60
                |       |       |       |       |       |       |       |       |
Position (%)    0%      12.5%   25%     37.5%   50%     62.5%   75%     87.5%   100%
                |       |       |       |       |       |       |       |       |
Visible Logo  [HSBC]→ [AIB]  →[Julius]→[PTSB] →[Ujji] →[Aus] →[Raif] →[BIL]  → [HSBC*]
                                                                              (clone)

Legend:
HSBC = First logo
*    = Cloned version (seamlessly transitions back)
→    = Smooth scroll animation continues
```

---

## Code Structure Hierarchy

```
📄 index.html
├─ Section#clients
│  └─ .carousel-wrapper
│     └─ .carousel-track#carouselTrack
│        ├─ .carousel-item .client-logo-item (1: HSBC)
│        ├─ .carousel-item .client-logo-item (2: AIB)
│        ├─ .carousel-item .client-logo-item (3: Julius)
│        ├─ .carousel-item .client-logo-item (4: PTSB)
│        ├─ .carousel-item .client-logo-item (5: Ujji)
│        ├─ .carousel-item .client-logo-item (6: Aus)
│        ├─ .carousel-item .client-logo-item (7: Raif)
│        ├─ .carousel-item .client-logo-item (8: BIL)
│        │ ← CLONED BY JAVASCRIPT ↓
│        ├─ .carousel-item .client-logo-item (1: HSBC*)
│        ├─ .carousel-item .client-logo-item (2: AIB*)
│        ├─ .carousel-item .client-logo-item (3: Julius*)
│        ├─ .carousel-item .client-logo-item (4: PTSB*)
│        ├─ .carousel-item .client-logo-item (5: Ujji*)
│        ├─ .carousel-item .client-logo-item (6: Aus*)
│        ├─ .carousel-item .client-logo-item (7: Raif*)
│        └─ .carousel-item .client-logo-item (8: BIL*)
```

---

## CSS Animation Sequence

```
CSS @keyframes carousel-scroll {
  0%:    ┌─────────────────────────────────────┐
         │ [1][2][3][4][5][6][7][8][clone...]│
         │ ^← visible area                     │
         └─────────────────────────────────────┘
         transform: translateX(0)

  25%:   ┌─────────────────────────────────────┐
         │       [1][2][3][4][5][6][7][8]... │
         │       ^← scrolled left              │
         └─────────────────────────────────────┘
         transform: translateX(-25%)

  50%:   ┌─────────────────────────────────────┐
         │               [1][2][3][4][5][6]... │
         │               ^← half way          │
         └─────────────────────────────────────┘
         transform: translateX(-50%)

  75%:   ┌─────────────────────────────────────┐
         │                   [1][2][3][4][5].. │
         │                   ^← 3/4 way        │
         └─────────────────────────────────────┘
         transform: translateX(-75%)

  100%:  ┌─────────────────────────────────────┐
         │                       [1][2][3][4]* │
         │                       ^← clones show│
         └─────────────────────────────────────┘
         transform: translateX(-100%)
         ↓ INSTANTLY RESET TO 0% (seamless loop)
}
```

---

## JavaScript Module Architecture

```
Carousel (Module Pattern - IIFE)
│
├─ CONFIG (Private)
│  ├─ carouselSelector: '#carouselTrack'
│  ├─ autoPlayDuration: 60000
│  └─ observerOptions: { threshold, rootMargin }
│
├─ State Variables (Private)
│  ├─ carouselTrack: HTMLElement
│  ├─ isAnimationActive: Boolean
│  └─ intersectionObserver: IntersectionObserver
│
├─ Private Methods
│  ├─ init() → Initialize carousel
│  ├─ cloneItemsForInfiniteScroll() → Clone 8 items
│  ├─ setupIntersectionObserver() → Observe visibility
│  ├─ startAnimation() → Play animation
│  ├─ pauseAnimation() → Stop animation
│  └─ setupHoverPause() → Pause on hover
│
└─ Public API (Returned Object)
   ├─ init() → Initialize
   ├─ setSpeed(duration) → Adjust speed
   ├─ pauseAnimation() → Manual pause
   └─ startAnimation() → Manual resume
```

---

## Event Flow Diagram

```
PAGE LOAD
    ↓
[DOMContentLoaded]
    ↓
App.init()
    ↓
Carousel.init()
    ├─ querySelector('#carouselTrack')
    │  ↓
    ├─ cloneItemsForInfiniteScroll()
    │  ├─ Get 8 carousel items
    │  └─ Clone each → 16 total items
    │
    ├─ setupIntersectionObserver()
    │  ├─ Observe carousel-wrapper
    │  └─ On visibility change:
    │     ├─ Visible → startAnimation()
    │     └─ Hidden → pauseAnimation()
    │
    └─ setupHoverPause()
       ├─ On mouseenter → pauseAnimation()
       └─ On mouseleave → startAnimation()

    ↓ ANIMATION RUNNING ↓

USER ACTION
    ├─ [Scroll to section]
    │  → IntersectionObserver detects
    │  → startAnimation() called
    │  → CSS animation-play-state = 'running'
    │
    ├─ [Hover over carousel]
    │  → Mouseenter event
    │  → pauseAnimation() called
    │  → CSS animation-play-state = 'paused'
    │
    ├─ [Move mouse away]
    │  → Mouseleave event
    │  → startAnimation() called
    │  → CSS animation-play-state = 'running'
    │
    └─ [Scroll away from section]
       → IntersectionObserver detects
       → pauseAnimation() called
       → CSS animation-play-state = 'paused'
```

---

## Responsive Width Calculation

```
DESKTOP (1025px+)
┌──────────────────────────────┐
│ Container: 100% width        │
├──────────────────────────────┤
│ 4 items visible:             │
│ - Each item: 25% - 0.5rem    │
│ - Gap between: 2rem          │
│                              │
│ ┌─────┬─────┬─────┬─────┐   │
│ │25% │25% │25% │25% │   │
│ └─────┴─────┴─────┴─────┘   │
└──────────────────────────────┘

TABLET (769px-1024px)
┌──────────────────────┐
│ Container: 100% width│
├──────────────────────┤
│ 2 items visible:     │
│ - Each item: 50% -1rem
│ - Gap between: 2rem  │
│                      │
│ ┌──────────┬─────────┐
│ │  50%    │  50%    │
│ └──────────┴─────────┘
└──────────────────────┘

MOBILE (≤768px)
┌──────────┐
│100% width│
├──────────┤
│ 1 item:  │
│ - Width: │
│  100%-1rm│
│ - Gap:1rm│
│          │
│┌────────┐│
││ 100%  ││
│└────────┘│
└──────────┘
```

---

## Performance Optimization Flowchart

```
USER SCROLLS TO CAROUSEL
    ↓
IntersectionObserver Triggers
    ↓
Is Section Visible? 
    ├─ YES → startAnimation()
    │        └─ CSS animation-play-state = 'running'
    │           ├─ transform: GPU accelerated ⚡
    │           ├─ No layout reflows ✅
    │           └─ 60fps smooth ✅
    │
    └─ NO → pauseAnimation()
             └─ CSS animation-play-state = 'paused'
                ├─ Browser stops rendering ✅
                ├─ No CPU usage ✅
                └─ Battery efficient ✅
```

---

## CSS Cascade Priority

```
1. Inline Styles
   └─ None used (clean separation)

2. CSS Classes (.carousel-*)
   ├─ .carousel-wrapper (overflow: hidden)
   ├─ .carousel-track (flex, animation)
   ├─ .carousel-item (width, height)
   └─ @media queries (responsive)

3. Tailwind Classes (from HTML)
   ├─ flex, p-8, bg-white (cards)
   └─ rounded-xl (border radius)

4. CSS Variables (from :root)
   └─ --brand-blue, --brand-green

5. Browser Defaults
```

---

## Before & After Comparison

### BEFORE (Grid Layout)
```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  <div>Logo 1</div>
  <div>Logo 2</div>
  ...
  <div>Logo 8</div>
</div>

Behavior:
- Static grid layout
- No animation
- All logos visible at once
- No hover pause effect
```

### AFTER (Carousel Layout)
```html
<div class="carousel-wrapper">
  <div class="carousel-track" id="carouselTrack">
    <div class="carousel-item">Logo 1</div>
    <div class="carousel-item">Logo 2</div>
    ...
    <div class="carousel-item">Logo 8</div>
    <!-- Auto-cloned by JavaScript -->
  </div>
</div>

Behavior:
- Animated horizontal scroll
- Auto-play on load
- 4/2/1 logos visible (responsive)
- Pause on hover
- Seamless infinite loop
```

---

## Mobile Touch Interaction

```
TOUCH DEVICE
    │
    ├─ TAP on logo card
    │  ├─ :active state triggers
    │  ├─ scale(1.05) effect shows
    │  └─ Box shadow animates
    │
    ├─ PRESS & HOLD
    │  └─ Long press detected by device
    │     (browser handles, not carousel)
    │
    └─ SWIPE (not implemented)
       ├─ Gesture not blocked by carousel
       ├─ Browser scroll works normally
       └─ User can scroll page freely
```

---

## IntersectionObserver Threshold

```
Viewport:
┌──────────────────────────────┐
│                              │
│                              │
│ └─ Intersection Root Margin  │
│    (0px in this case)        │
└──────────────────────────────┘

Carousel:
┌──────────────────────────────┐
│ ╔════════════════════════════╗ Threshold: 10%
│ ║ Carousel Section           ║ (must be 10% in viewport)
│ ║                            ║
│ ║ Triggers when ANY 10% of   ║
│ ║ this element is visible    ║
│ ╚════════════════════════════╝
│                              │
└──────────────────────────────┘

Result:
- Visible: Animation runs
- Hidden: Animation stops
```

---

## CSS Specificity Chart

```
Selector                              Specificity Score
────────────────────────────────────────────────────
.carousel-wrapper                     0-1-0 (1 class)
.carousel-track                       0-1-0 (1 class)
.carousel-item                        0-1-0 (1 class)
.carousel-wrapper:hover               0-2-0 (1 class + 1 pseudo)
@media (max-width: 768px)             0-1-0 (media doesn't add)
.carousel-item:hover                  0-2-0 (1 class + 1 pseudo)
```

All selectors have equal/lower specificity than Tailwind utilities,
so can be easily overridden if needed.

---

This completes the visual documentation! 🎨
