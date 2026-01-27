# Hero Image Recomposition Brief - TechBriks Consulting

## Problem Statement

Current hero image (`home.png`) has responsive composition issues:
- **Desktop (16:9)**: Man on right is too close to the edge and gets clipped
- **Mobile (9:16)**: Man is completely cropped out, breaking the composition
- Text/UI elements need safe space on the LEFT side
- Both subjects (man and woman) need visibility across all screen sizes

## Design Requirements

### Composition Rules
✅ **KEEP EXACTLY:**
- Same two people (man and woman)
- Same faces, expressions, and poses
- Same clothing and devices (laptop and tablet)
- Same professional corporate office environment
- Same lighting, color grading, and realism
- Professional blue/green tech consulting brand aesthetic

✅ **DO NOT:**
- Crop the people further
- Add text, logos, UI, or watermarks
- Change lighting, color grading, or realism
- Modify clothing or devices

### Layout Specifications

**Safe Area:** Central "safe zone" containing:
- Both heads fully visible
- Both shoulders and upper torso visible
- No cropping when viewed in 9:16 or 16:9 aspect ratios

**Safe Space for UI:**
- **LEFT side**: 15-20% negative space for website text, headlines, buttons
- **RIGHT side**: Extended canvas with environment continuation (office elements, window, wall texture, etc.)

### Output Specifications

#### Desktop Hero (1920 × 1080 | 16:9)
- File: `home-desktop.png`
- Resolution: 1920 × 1080 pixels
- Subject: Both people centered-left to center
- Safe area: Both faces visible, 80px minimum clearance from all edges
- Right side: Extended with office environment elements
- Left side: 20% clean negative space for overlaid text

#### Mobile Hero (1080 × 1920 | 9:16)
- File: `home-mobile.png`
- Resolution: 1080 × 1920 pixels
- Subject: Both people in center, no cropping
- Safe area: Both faces, shoulders, and devices fully visible
- Top/bottom: Professional corporate environment
- Must be useful as `background-size: cover` background

## Technical Specifications

### Current Implementation
```html
<div style="background-image: url('../images/home.png'); 
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat;">
```

### Image Composition Zones

**Desktop (1920 × 1080):**
```
┌─────────────────────────────────────────────────────┐
│ LEFT 20%      │     CENTER SUBJECT AREA      │ RIGHT │
│ (380px)       │     (1160px safe)            │ (380px)│
│               │  Both people visible         │       │
│  TEXT SPACE   │  Heads + shoulders           │ EXTEND│
│  Safe margin  │  Devices visible            │  ENV  │
└─────────────────────────────────────────────────────┘
```

**Mobile (1080 × 1920):**
```
┌──────────────┐
│  TOP SPACE   │
│  (190px)     │
├──────────────┤
│   SUBJECT    │
│   AREA       │
│ BOTH PEOPLE  │
│   CENTER     │
│ Heads + Dev  │
│   (960px)    │
├──────────────┤
│ BOTTOM SPACE │
│  (190px)     │
└──────────────┘
```

## Brand Guidelines to Maintain

- **Color Palette**: Blue (#0B3A5A) and Green (#3FA34D) accents visible in environment
- **Aesthetic**: Modern, professional tech consulting office
- **Tone**: Collaborative, trustworthy, innovative
- **Elements**: Contemporary office furniture, modern tech devices, professional lighting
- **Atmosphere**: Bright, energetic, focused on collaboration

## Implementation Approach

### Option 1: AI Image Generation (DALL-E 3, Midjourney, Stable Diffusion)

**Prompt Structure:**
```
Professional corporate consulting office scene with two people:
- Female consultant with [device] on left-center
- Male consultant with [device] on center-right
- Standing in modern office environment
- Natural professional lighting
- Tech consulting aesthetic with blue and green accents
- Both subjects positioned in horizontal center with 20% safe space on left
- Extended environmental elements on right side
- Clean, professional, realistic, enterprise-grade
- Composition must work for both 16:9 and 9:16 aspect ratios
```

### Option 2: Manual Image Editing (Photoshop/GIMP)

1. **Canvas Extension**: Extend current image on RIGHT side
   - Duplicate office environment elements (walls, furniture, window)
   - Add 300-400px on right maintaining perspective
   - Blend seamlessly with existing environment

2. **Subject Repositioning**: 
   - Shift both people toward center-left
   - Ensure no cropping of heads/shoulders
   - Maintain same lighting and shadows
   - Add small shadows if needed for repositioning

3. **Safe Area Validation**:
   - Test crop at 16:9 (1920×1080)
   - Test crop at 9:16 (1080×1920)
   - Verify both subjects visible at all aspect ratios

### Option 3: Professional Reshoot

If original subjects/models are available:
- Reshoot with wider framing
- Position both subjects center-left
- Extended office environment on right
- Capture same lighting/color grading

## Quality Checklist

- [ ] Desktop version: 1920 × 1080, optimized for web (<500KB)
- [ ] Mobile version: 1080 × 1920, optimized for web (<500KB)
- [ ] Both people fully visible in both versions
- [ ] No visible cropping of subjects
- [ ] Left side has clean 15-20% negative space
- [ ] Right side has extended environment (not empty)
- [ ] Professional office environment maintained
- [ ] Brand blue/green tones preserved
- [ ] Color grading consistent
- [ ] Lighting realistic and balanced
- [ ] Shadows and depth properly rendered
- [ ] No text, logos, or watermarks added
- [ ] Safe for `background-size: cover` usage
- [ ] File format: PNG (with compression) or WebP

## Responsive Usage

Both images will be used with responsive CSS:

```css
/* Desktop */
@media (min-width: 640px) {
  background-image: url('../images/home-desktop.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

/* Mobile */
@media (max-width: 639px) {
  background-image: url('../images/home-mobile.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
```

## Files to Update in HTML

After creating new images, update [public/index.html](public/index.html) line ~257:
- Add responsive image loading
- Reference both desktop and mobile versions
- Maintain existing gradient overlays and animations

---

**Next Steps:**
1. Create desktop hero: 1920 × 1080 (`home-desktop.png`)
2. Create mobile hero: 1080 × 1920 (`home-mobile.png`)
3. Optimize both for web (compress, maintain quality)
4. Upload to `/public/images/` directory
5. Update HTML for responsive image handling
