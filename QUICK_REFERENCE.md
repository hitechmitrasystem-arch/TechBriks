# Quick Reference Card - Hero Image Recomposition

## 📐 Image Specifications

| Aspect | Desktop | Mobile |
|--------|---------|--------|
| **Filename** | `home-desktop.png` | `home-mobile.png` |
| **Dimensions** | 1920 × 1080 px | 1080 × 1920 px |
| **Aspect Ratio** | 16:9 | 9:16 |
| **Max File Size** | 500 KB | 500 KB |
| **Format** | PNG or WebP | PNG or WebP |
| **Location** | `/public/images/` | `/public/images/` |

---

## 🎨 Composition Rules

### Desktop (1920 × 1080)
```
Left space (280px) | Subjects center-left | Right extended (400-500px)
  ↓                |        ↓             |           ↓
TEXT AREA       BOTH PEOPLE VISIBLE   OFFICE ENV
```
- Woman: ~30% from left, tablet visible
- Man: ~50-65% from left, laptop visible
- Edge clearance: 80px minimum
- Right side: Extended office environment

### Mobile (1080 × 1920)
```
        ↓
   TOP SPACE (190px)
   (ceiling/context)
        ↓
  WOMAN    MAN
 (Tablet) (Laptop)
  ↓
BOTH PEOPLE
FULLY VISIBLE
  ↓
  BOTTOM SPACE (190px)
  (furniture/wall)
```
- Vertically centered composition
- No head cropping (top or bottom)
- Office context above and below

---

## ✅ Preserve Exactly

- ✅ Same 2 people (woman, man)
- ✅ Same faces, expressions, poses
- ✅ Same clothing and devices (tablet, laptop)
- ✅ Same professional office environment
- ✅ Same lighting, shadows, color grading
- ✅ Professional corporate consulting aesthetic
- ✅ Brand blue (#0B3A5A) and green (#3FA34D)

---

## ❌ Do NOT

- ❌ Crop subjects further
- ❌ Add text, logos, watermarks
- ❌ Change colors or lighting
- ❌ Use single image for both layouts
- ❌ Leave empty negative space on right

---

## 🔧 Implementation

### HTML Change
**From:** Single `background-image` with `home.png`
**To:** `<picture>` element with media queries
**File:** `/public/index.html` lines 250-320

### CSS Breakpoint
```
Mobile: ≤ 639px → home-mobile.png
Desktop: ≥ 640px → home-desktop.png
```

### Picture Element
```html
<picture>
  <source media="(max-width: 639px)" srcset="../images/home-mobile.png">
  <source media="(min-width: 640px)" srcset="../images/home-desktop.png">
  <img src="../images/home-desktop.png" alt="...">
</picture>
```

---

## 🧪 Test Viewports

| Category | Viewport | Image Used |
|----------|----------|-----------|
| **Mobile** | 375×667 | home-mobile.png |
| **Mobile** | 1080×1920 | home-mobile.png |
| **Tablet** | 768×1024 | home-desktop.png |
| **Tablet** | 1024×768 | home-desktop.png |
| **Desktop** | 1366×768 | home-desktop.png |
| **Desktop** | 1920×1080 | home-desktop.png |

---

## 📋 Creation Checklist

### Create Images
- [ ] Desktop version: 1920 × 1080
- [ ] Mobile version: 1080 × 1920
- [ ] Both people positioned correctly
- [ ] Safe margins around subjects
- [ ] Professional appearance maintained

### Optimize
- [ ] Desktop: Compress to <500KB
- [ ] Mobile: Compress to <500KB
- [ ] Maintain image quality
- [ ] (Optional) Create WebP versions

### Upload
- [ ] Place `home-desktop.png` in `/public/images/`
- [ ] Place `home-mobile.png` in `/public/images/`
- [ ] Verify file names match exactly
- [ ] Check file sizes

### Update HTML
- [ ] Replace hero section code
- [ ] Use picture element with sources
- [ ] Verify paths correct
- [ ] Keep gradient overlays

### Test
- [ ] Desktop view: 1920×1080
- [ ] Mobile view: 1080×1920
- [ ] Tablet view: 768×1024
- [ ] Text readability
- [ ] Button functionality
- [ ] No console errors

---

## 🎯 Success Criteria

✅ Both people visible on desktop (16:9)
✅ Both people visible on mobile (9:16)
✅ No edge cropping at any viewport
✅ Left side has clean text space
✅ Right side has extended environment
✅ Professional appearance maintained
✅ Brand colors and lighting preserved
✅ File sizes optimized
✅ All tests pass

---

## 📚 Documentation Guide

| Need | File |
|------|------|
| Technical requirements | HERO_IMAGE_RECOMPOSITION_BRIEF.md |
| Visual layout diagrams | HERO_IMAGE_VISUAL_GUIDE.md |
| CSS implementation | RESPONSIVE_HERO_CSS_GUIDE.md |
| HTML code ready-to-use | HTML_IMPLEMENTATION_GUIDE.md |
| Complete overview | PROJECT_SUMMARY_HERO_RECOMPOSITION.md |

---

## 🚀 Creation Options

### Option A: Professional Reshoot
- Hire photographer
- Same subjects, wider framing
- ~4 hours + shoot time

### Option B: AI Generation (RECOMMENDED)
- Use DALL-E 3, Midjourney, Stable Diffusion
- Fast turnaround
- ~1-2 hours

### Option C: Manual Edit
- Use Photoshop/GIMP
- Extend current image
- Reposition subjects
- ~3-4 hours

---

## 💡 Pro Tips

1. **Start with desktop version** - more detailed
2. **Keep high-resolution originals** - for future edits
3. **Test early and often** - catch issues quickly
4. **Compress aggressively** - use TinyPNG or Squoosh
5. **Use WebP as bonus** - 25-35% smaller files
6. **Document your process** - easier to iterate

---

## 📞 Troubleshooting Quick Links

**Images not loading?**
- Check file paths: `../images/home-mobile.png`
- Verify files in `/public/images/`
- Clear browser cache

**Wrong image on device?**
- Check media query breakpoint (640px)
- Verify `<source>` media attributes
- Test in DevTools device emulation

**Image looks wrong?**
- Verify dimensions: 1920×1080 or 1080×1920
- Check compression isn't excessive
- Confirm both subjects positioned correctly

**Performance issues?**
- Reduce file size with TinyPNG
- Enable lazy loading
- Create WebP versions

---

## 📦 File Locations

```
/public/
├── images/
│   ├── home-desktop.png     ← NEW: 1920×1080
│   ├── home-mobile.png      ← NEW: 1080×1920
│   └── home.png             ← OLD: Keep as backup
└── index.html               ← UPDATE: Lines 250-320
```

---

## ⏰ Timeline Estimate

- Image creation: 2-4 hours
- Optimization: 15-30 min
- HTML update: 15-20 min
- Testing: 30-45 min
- **Total: 3-6 hours**

---

## 📌 Remember

The goal is simple:
✅ **One responsive, composition-specific image for each major viewport**
✅ **Both people always visible, never cropped**
✅ **Professional appearance maintained**
✅ **Brand identity preserved**

Your current single image doesn't work for both 16:9 and 9:16 aspect ratios.
Two images, composition-specific to each layout, solves the problem completely.

---

**Version**: 1.0
**Date**: January 26, 2026
**Status**: Ready to implement
