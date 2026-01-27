# Hero Image Composition - One-Page Visual Summary

## PROBLEM

```
Current Single Image (home.png):
Doesn't work for both 16:9 AND 9:16 aspect ratios

DESKTOP (16:9):
┌────────────────────────────────┐
│ Woman│ Man  │CLIPPED!│ EDGE   │ ← Man gets cropped
│Tablet│Laptop│  RIGHT │        │
└────────────────────────────────┘
          PROBLEM: 3 people visible only partially

MOBILE (9:16):
┌──────────┐
│ Woman    │
│ (partial)│
│ Man      │ ← Man almost completely missing
│ MOSTLY   │
│ CROPPED  │
└──────────┘
          PROBLEM: 2 people visible? → Man is GONE
```

---

## SOLUTION

### Create TWO Optimized Images

```
DESKTOP (1920 × 1080 | 16:9):
┌─────────────────────────────────────────────────────────────┐
│ LEFT  │ WOMAN      │ MAN        │        RIGHT EXTENDED     │
│SPACE  │ (Tablet)   │ (Laptop)   │    (Office Environment)  │
│       │ ┌────────┐ ┌────────┐   │    ┌───────────────────┐ │
│TEXT   │ │        │ │        │   │    │                   │ │
│AREA   │ │VISIBLE │ │VISIBLE │   │    │   EXTENDED ENV    │ │
│280px  │ │        │ │        │   │    │   (walls,         │ │
│       │ └────────┘ └────────┘   │    │    furniture,     │ │
│"Tech  │                         │    │    windows)       │ │
│Briks" │  CENTERED-LEFT          │    │                   │ │
│       │  BOTH PEOPLE VISIBLE     │    │   400-500px       │ │
│[CTA]  │                         │    └───────────────────┘ │
└─────────────────────────────────────────────────────────────┘
        ↑                           ↑                ↑
      Safe Text              Safe Subject        Extended
      Space                  Area                Environment

✅ Both people visible
✅ No one touching edges
✅ Left space for text overlay
✅ Right side extended for safe margins

MOBILE (1080 × 1920 | 9:16):
┌──────────────────────┐
│  Office Ceiling/Wall │
│  (Context 190px)     │
├──────────────────────┤
│                      │
│  WOMAN    │    MAN   │
│  TABLET   │   LAPTOP │
│                      │  Both people
│  FULLY VISIBLE       │  fully visible
│  HEAD TO TORSO       │  head to torso
│                      │  centered
│  Office Environment  │  960px height
│  (Furniture)         │
├──────────────────────┤
│  Office Base/Wall    │
│  (Context 190px)     │
└──────────────────────┘

✅ Both people visible
✅ No head cropping
✅ No torso cropping
✅ Office context visible above and below
```

---

## KEY REQUIREMENTS

### PRESERVE ✅
```
✅ Same 2 people (woman, man)
✅ Same faces and expressions
✅ Same clothing
✅ Same devices (tablet, laptop)
✅ Same office environment (furniture, walls, windows)
✅ Same professional lighting
✅ Same color grading (realistic)
✅ Same brand colors (blue #0B3A5A, green #3FA34D)
✅ Professional corporate consulting aesthetic
```

### CHANGE 🔄
```
🔄 Reposition both people CLOSER TO CENTER horizontally
🔄 Woman: Move from position X to ~30-35% from left
🔄 Man: Move from position Y to ~50-65% from left
🔄 EXTEND canvas on RIGHT side with office environment
🔄 Create CLEAN NEGATIVE SPACE on LEFT for text
🔄 Ensure SAFE MARGINS: 80px minimum from all edges
```

### DO NOT ❌
```
❌ Crop subjects further
❌ Add text, logos, watermarks
❌ Change lighting or colors
❌ Use single image for both layouts
❌ Leave empty white space on right
```

---

## TECHNICAL SPECIFICATIONS

### Desktop: 1920 × 1080 (16:9)

```
COMPOSITION ZONES:
┌─────────────┬──────────────────────────┬─────────────┐
│ 280px       │ ~1160px SAFE AREA        │ 480px       │
│ LEFT        │ (with subject padding)   │ RIGHT       │
│ SPACE       │                          │ EXTENDED    │
│             │ Woman: 30-35% from left  │ ENVIRON     │
│ TEXT AREA   │ Man: 50-65% from left    │             │
│             │ 80px edge clearance      │             │
└─────────────┴──────────────────────────┴─────────────┘
     ↓                   ↓                      ↓
  Safe for          Safe for Subjects      Extended Office
  Headlines         No Cropping            Environment
  & Buttons
```

### Mobile: 1080 × 1920 (9:16)

```
COMPOSITION ZONES:
┌──────────────────────┐
│ 190px TOP            │
│ Office Context       │
│ (ceiling, lights)    │
├──────────────────────┤
│ ~960px               │
│ SUBJECT AREA         │
│ Woman + Man          │
│ Both centered        │
│ Head to torso        │
│ Fully visible        │
│ No cropping          │
├──────────────────────┤
│ 190px BOTTOM         │
│ Office Context       │
│ (furniture, walls)   │
└──────────────────────┘
```

---

## RESPONSIVE BEHAVIOR

```
VIEWPORT RANGE              IMAGE USED              LAYOUT
─────────────────────────────────────────────────────────────
≤ 639px (Mobile)      home-mobile.png        Portrait 9:16
640-1023px (Tablet)   home-desktop.png       Landscape 16:9
≥ 1024px (Desktop)    home-desktop.png       Landscape 16:9

At BREAKPOINT (640px):
  Mobile ← (640px) → Desktop
  Smooth transition between images
```

---

## COLOR & STYLE GUIDE

### Brand Colors (MUST PRESERVE)
```
Primary Blue:    #0B3A5A  (dark, professional, corporate)
Secondary Green: #3FA34D  (tech, innovation, accent)
Light Neutral:   #E6EDF3  (text backgrounds, readability)
```

### Aesthetic (MUST PRESERVE)
```
✓ Professional corporate consulting look
✓ Modern office environment (furniture, technology)
✓ Contemporary aesthetic (not dated)
✓ Natural professional lighting (5500-6500K)
✓ Realistic color temperature
✓ High-quality appearance (no compression artifacts)
✓ Proper skin tones and fabric textures
✓ Realistic device materials (glass, aluminum)
```

---

## CREATION OPTIONS

### Option A: Professional Reshoot 📸
```
Cost:     $500-2000
Time:     2-5 days
Quality:  Best
Process:  Hire photographer to reshoot with:
          - Both subjects (woman, man)
          - Woman with tablet, man with laptop
          - Modern office environment
          - Wider framing (1920×1080 desktop)
          - Same lighting and aesthetic as original
```

### Option B: AI Image Generation 🤖 ← RECOMMENDED
```
Cost:     Free - $20
Time:     1-2 hours
Quality:  Very Good
Tools:    DALL-E 3, Midjourney, Stable Diffusion
Process:  Generate new images using detailed prompt:
          "Professional male and female consultants
           in modern office. Woman with tablet on left,
           man with laptop on right-center. Corporate
           office environment, natural lighting, blue
           and green tech brand colors. Professional
           consulting aesthetic. Realistic, high quality."
```

### Option C: Manual Image Editing 🎨
```
Cost:     Free
Time:     3-4 hours
Quality:  Good
Tools:    Photoshop, GIMP, Affinity Photo
Process:  1. Extend canvas on right
          2. Duplicate office environment
          3. Reposition subjects center-left
          4. Blend seamlessly
          5. Adjust shadows/lighting
          6. Test and iterate
```

---

## FILE ORGANIZATION

```
After Implementation:

/public/
├── images/
│   ├── home.png              ← Old (keep as backup)
│   ├── home-desktop.png      ← NEW: 1920×1080
│   ├── home-mobile.png       ← NEW: 1080×1920
│   ├── home-desktop.webp     ← OPTIONAL: 25% smaller
│   └── home-mobile.webp      ← OPTIONAL: 25% smaller
│
└── index.html
    └── Lines 250-320: Hero section
        └── Replace single background-image
        └── With <picture> element + media queries
```

---

## IMPLEMENTATION STEPS

```
┌──────────────┐
│  STEP 1:     │  Choose image creation method
│  PLAN        │  (Reshoot/AI/Edit)
└──────┬───────┘
       ↓
┌──────────────┐
│  STEP 2:     │  Create desktop (1920×1080)
│  CREATE      │  Create mobile (1080×1920)
│  IMAGES      │  Follow composition specs
└──────┬───────┘
       ↓
┌──────────────┐
│  STEP 3:     │  Compress <500KB each
│  OPTIMIZE    │  Consider WebP versions
└──────┬───────┘
       ↓
┌──────────────┐
│  STEP 4:     │  home-desktop.png → /public/images/
│  UPLOAD      │  home-mobile.png → /public/images/
└──────┬───────┘
       ↓
┌──────────────┐
│  STEP 5:     │  Replace HTML hero section
│  IMPLEMENT   │  Use picture element code
│  CODE        │  Update paths, keep overlays
└──────┬───────┘
       ↓
┌──────────────┐
│  STEP 6:     │  Test desktop: 1920×1080
│  TEST        │  Test mobile: 1080×1920
│  & VERIFY    │  Verify both people always visible
└──────────────┘
```

---

## SUCCESS CHECKLIST

### Desktop (1920×1080)
- [ ] Both people fully visible
- [ ] Woman visible on left
- [ ] Man visible on center-right
- [ ] No one touching right edge
- [ ] Text overlay readable
- [ ] Professional appearance

### Mobile (1080×1920)
- [ ] Both people fully visible
- [ ] No head cropping at top
- [ ] No torso cropping at bottom
- [ ] Vertically centered
- [ ] Office context visible
- [ ] Professional appearance

### All Viewports
- [ ] Correct image loads at each breakpoint
- [ ] Smooth transitions between sizes
- [ ] No distortion or stretching
- [ ] Buttons clickable
- [ ] Text readable
- [ ] No console errors
- [ ] Performance good

### Quality
- [ ] Professional appearance
- [ ] Same subjects preserved
- [ ] Same expressions preserved
- [ ] Same environment preserved
- [ ] Same lighting preserved
- [ ] Same colors preserved
- [ ] No watermarks/logos/text
- [ ] Brand identity maintained

---

## QUICK METRICS

| Metric | Value |
|--------|-------|
| **Desktop Dimensions** | 1920 × 1080 px |
| **Mobile Dimensions** | 1080 × 1920 px |
| **Max File Size** | 500 KB each |
| **Responsive Breakpoint** | 640 px |
| **Subject Edge Clearance** | 80 px minimum |
| **Left Safe Space** | 15-20% (text) |
| **Right Safe Space** | Extended environment |
| **Total Implementation Time** | 3-6 hours |

---

## NEXT STEPS

1. **Review** all documentation
2. **Decide** creation method (Recommended: AI)
3. **Create** two images with proper composition
4. **Optimize** to <500KB
5. **Upload** to `/public/images/`
6. **Update** HTML with picture element code
7. **Test** on all viewports
8. **Verify** success criteria met
9. **Deploy** to production

---

## KEY INSIGHT

**Why Two Images?**

A single image cannot properly fill two different aspect ratios without compromising composition:
- Stretched → Looks distorted
- Squeezed → Crops subjects
- Cropped → Loses important content

**Two optimized images = Perfect fit for each layout**

Desktop image: Optimized for 16:9 (landscape)
Mobile image: Optimized for 9:16 (portrait)

Browser automatically loads the correct one!

---

**Status:** ✅ READY FOR IMPLEMENTATION
**Documentation:** Complete and comprehensive
**Next Action:** Choose image creation method and begin

All specifications, visual guides, code templates, and checklists are provided and ready to use.
