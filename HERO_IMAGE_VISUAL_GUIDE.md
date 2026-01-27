# Hero Image Composition - Visual Reference Guide

## Current Problem Visualization

### Desktop (1920 × 1080) - Current Issue
```
Current home.png single image stretched to 16:9:
┌────────────────────────────────────────────────────────────────┐
│ OFFICE  │ WOMAN        │ MAN         │ CLIPPED!│ (EDGE)       │
│         │ (tablet)     │ (laptop)    │ RIGHT   │              │
│ BG      │              │             │ CROPPED │              │
│ ENV     └──────────────┴─────────────┴─────────┘              │
│                                                                │
│ GRADIENT OVERLAY (text on left) - OK                          │
└────────────────────────────────────────────────────────────────┘
ISSUE: Man gets cut off on right edge
```

### Mobile (1080 × 1920) - Current Issue
```
Same image squeezed to 9:16:
┌──────────────────────┐
│ OFFICE BG (CROPPED)  │
│ WOMAN VISIBLE        │
│ MAN PARTIALLY CUT    │
│ MAN ALMOST GONE      │
│ OFFICE BG (CROPPED)  │
│                      │
└──────────────────────┘
ISSUE: Man completely missing from portrait view
```

---

## Proposed Solution

### Desktop (1920 × 1080) - NEW home-desktop.png

```
SAFE TEXT SPACE (15-20% left)  |  CENTERED SUBJECT AREA  |  EXTENDED ENVIRONMENT
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│  SAFE TEXT   │  ┌─────────────────────────────────────┐  ┌───────────────┐ │
│  AREA        │  │ OFFICE ENVIRONMENT BACKGROUND      │  │ EXTENDED ENV  │ │
│ (280px)      │  │                                     │  │ (office wall, │ │
│              │  │  ┌──────┐  ┌──────┐                │  │  furniture,   │ │
│ "TechBriks   │  │  │Woman │  │ Man  │                │  │  window, etc) │ │
│ CONSULTING"  │  │  │Tablet│  │Laptop│ <--- BOTH      │  │  400-500px    │ │
│              │  │  │      │  │      │     VISIBLE     │  │               │ │
│ "Helping     │  │  └──────┘  └──────┘ CENTERED       │  │               │ │
│  build       │  │                                     │  │               │ │
│  digital..."  │  │ Office furniture, modern lighting  │  │               │ │
│              │  └─────────────────────────────────────┘  └───────────────┘ │
│ Get in Touch │                                                               │
│ [Buttons]    │                                                               │
│              │                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
         380px          ~1160px Safe Subject Area        ~380px Extended

✅ Both people centered-left
✅ Both heads/shoulders fully visible
✅ Clean negative space on left for text
✅ Extended environment on right for safe margins
✅ No one touching edges
```

**Composition Details:**
- **Total Width**: 1920px
- **Left safe space**: 280px (for text/buttons)
- **Subject area**: 1160px (centered with both people)
- **Right extension**: 400-500px (extended office environment)
- **Bottom clearance**: 80-100px (minimum buffer from bottom)

---

### Mobile (1080 × 1920) - NEW home-mobile.png

```
PORTRAIT ORIENTATION (9:16)

┌──────────────────────────┐
│                          │
│ OFFICE BACKGROUND        │
│ (ceiling, upper walls)   │
│                          │
│        190px top         │
├──────────────────────────┤
│                          │
│   ┌────────┐  ┌────────┐ │
│   │ Woman  │  │  Man   │ │
│   │ Tablet │  │ Laptop │ │
│   │        │  │        │ │  <-- CENTERED VERTICALLY
│   └────────┘  └────────┘ │      BOTH FULLY VISIBLE
│                          │      NO CROPPING
│  OFFICE ENVIRONMENT      │
│  (desk, furniture)       │
│                          │
│        ~960px            │  Subject + immediate environment
│                          │
├──────────────────────────┤
│ OFFICE BACKGROUND        │
│ (lower furniture, wall)  │
│                          │
│        190px bottom      │
└──────────────────────────┘

✅ Both people vertically centered
✅ Both heads fully visible (no top crop)
✅ Both shoulders visible (no bottom crop)
✅ Devices (tablet, laptop) visible
✅ Office environment context visible
✅ Works as background-size: cover
```

**Composition Details:**
- **Total Width**: 1080px
- **Total Height**: 1920px
- **Top clearance**: 190px (office ceiling/context)
- **Subject height**: ~960px (both people head to torso)
- **Bottom clearance**: 190px (office context/furniture)
- **Horizontal centering**: Both people in middle 60% of width

---

## Subject Positioning Reference

### Woman (Left Subject)
- **Position**: Left-center
- **Visible Elements**: 
  - Full head with face/expression
  - Both shoulders
  - Upper torso
  - Tablet device in hands
  - Professional clothing
- **Desktop**: ~25-35% from left edge
- **Mobile**: ~30% from left edge

### Man (Right Subject)
- **Position**: Right-center (closer to center than woman)
- **Visible Elements**:
  - Full head with face/expression
  - Both shoulders
  - Upper torso
  - Laptop device in hands
  - Professional clothing
- **Desktop**: ~50-65% from left edge
- **Mobile**: ~55% from left edge

### Critical Safety Zones

```
DESKTOP (1920x1080):
Safe margin edges = minimum 80px from any subject

┌─────────────┬────────────────────────┬─────────────┐
│80px margin  │   SAFE SUBJECT ZONE    │80px margin  │
│ (left)      │ (~1760px wide)         │ (right)     │
└─────────────┴────────────────────────┴─────────────┘
                 ↓
           NO HEADS/FACES
           TOUCHING EDGES

MOBILE (1080x1920):
Safe margin edges = minimum 80px from top/bottom

┌─────────────────────────────┐
│     80px top margin         │
│ ───────────────────────────│
│                             │
│    SAFE SUBJECT ZONE        │
│    (~1760px tall)           │
│                             │
│ ───────────────────────────│
│    80px bottom margin       │
└─────────────────────────────┘
        ↓
  NO HEADS/FACES
  TOUCHING TOP/BOTTOM
```

---

## Office Environment Elements (to Preserve & Extend)

**Critical Elements - MUST Keep:**
- ✅ Modern office furniture (desks, chairs)
- ✅ Professional lighting (natural + overhead)
- ✅ Contemporary office aesthetics
- ✅ Tech-focused color accents (blues, greens)
- ✅ Professional wall textures/colors
- ✅ Window elements (if present)
- ✅ Both people's expressions and poses
- ✅ Laptop and tablet devices

**Elements for RIGHT Extension (Desktop only):**
- Additional office wall space (matching existing)
- Continued window or architectural elements
- Office furniture edge or background continuation
- Consistent lighting and shadows
- Maintain perspective and depth

---

## Color & Lighting Requirements

**Brand Colors to Maintain:**
- Primary Blue: #0B3A5A (dark professional)
- Secondary Green: #3FA34D (tech accent)
- Neutral: #E6EDF3 (light backgrounds for text)

**Lighting Characteristics:**
- Natural daylight + professional overhead lighting
- Professional color temperature (5500-6500K)
- Realistic shadows and depth
- No harsh contrast or extreme color grading
- Soft transitions between light/shadow areas

**Quality Standards:**
- Professional enterprise consulting aesthetic
- High color accuracy
- Natural skin tones
- Realistic fabric textures (clothing)
- Realistic device materials (glass, aluminum)

---

## Aspect Ratio Testing Matrix

After creating images, verify these viewports:

### Desktop Tests
```
1920 × 1080  ✓ Primary target (16:9)
1366 × 768   ✓ Common laptop
1280 × 720   ✓ HD minimum
```

### Tablet Tests
```
1024 × 768   ✓ iPad landscape
768 × 1024   ✓ iPad portrait
```

### Mobile Tests
```
1080 × 1920  ✓ Primary mobile (9:16)
540 × 960    ✓ Half-resolution mobile
414 × 896    ✓ iPhone 12 Pro
375 × 667    ✓ iPhone 8
```

**Critical Rule:** At EVERY viewport, both people must be:
- ✅ Fully visible (no cropping of heads)
- ✅ Identifiable (clear faces and expressions)
- ✅ Properly positioned (not at extreme edges)
- ✅ Professional (clothing, devices, environment visible)

---

## Responsive Behavior Map

```
VIEWPORT                IMAGE USED              LAYOUT
─────────────────────────────────────────────────────────────
≤ 639px (Mobile)       home-mobile.png        Portrait vertical
640-1023px (Tablet)    home-desktop.png       Fill container
≥ 1024px (Desktop)     home-desktop.png       Hero background
```

---

## File Organization

```
/public/images/
├── home.png                    (OLD - current file, keep for reference)
├── home-desktop.png            (NEW - 1920×1080)
├── home-mobile.png             (NEW - 1080×1920)
├── home-desktop.webp           (OPT - WebP version of desktop)
└── home-mobile.webp            (OPT - WebP version of mobile)
```

---

## Handoff Checklist for Designer/Photographer

- [ ] Current home.png analyzed for composition issues
- [ ] Desktop version composed at 1920×1080
  - [ ] Both subjects centered-left
  - [ ] Right side extended with environment
  - [ ] Safe text space on left
  - [ ] No subjects touching edges
- [ ] Mobile version composed at 1080×1920
  - [ ] Both subjects vertically centered
  - [ ] No cropping of heads/shoulders
  - [ ] Office context above and below
  - [ ] Safe for cover background
- [ ] Both versions maintain:
  - [ ] Same people, faces, expressions
  - [ ] Same clothing and devices
  - [ ] Same office environment aesthetic
  - [ ] Brand blue/green tones
  - [ ] Professional lighting and color grading
- [ ] Image optimization:
  - [ ] Compressed to <500KB each
  - [ ] Web-ready format (PNG or WebP)
  - [ ] No visible artifacts
  - [ ] Clean edges and transitions
- [ ] Quality review:
  - [ ] Professional appearance
  - [ ] No text/watermarks/logos
  - [ ] Realism and authenticity
  - [ ] Color accuracy

---

This guide provides all specifications needed to recompose hero images for proper responsive design.
