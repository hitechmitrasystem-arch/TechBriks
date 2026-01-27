# Responsive Hero Image CSS Implementation

## Current Issue

The current hero section uses a single image (`home.png`) with:
- Fixed composition that doesn't adapt to different aspect ratios
- Man on the right gets clipped on desktop (16:9)
- Man completely missing on mobile (9:16)

## Solution: Responsive Image Strategy

### Approach 1: Picture Element (Recommended)

Provides best browser support and semantic HTML:

```html
<div class="absolute inset-0 z-0" style="background-size: cover; background-repeat: no-repeat;">
  <picture>
    <!-- Mobile first: 9:16 aspect ratio -->
    <source media="(max-width: 639px)" srcset="../images/home-mobile.png" type="image/png">
    <!-- Tablet and Desktop: 16:9 aspect ratio -->
    <source media="(min-width: 640px)" srcset="../images/home-desktop.png" type="image/png">
    <!-- Fallback -->
    <img src="../images/home-desktop.png" alt="TechBriks Consulting - Professional team in modern office" 
         style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
  </picture>
  
  <!-- Keep existing gradient overlays -->
  <div class="hidden sm:block absolute inset-0" style="background: linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25));"></div>
  <div class="sm:hidden absolute inset-0" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55));"></div>
</div>
```

### Approach 2: CSS Media Queries (Alternative)

Using CSS `background-image` with media queries:

```css
/* Mobile-first approach */
#home {
  background-image: url('../images/home-mobile.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Tablet and larger */
@media (min-width: 640px) {
  #home {
    background-image: url('../images/home-desktop.png');
  }
}
```

### Approach 3: Hybrid with Background Images

Best for performance and flexibility:

```html
<section id="home" class="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
  <!-- Background container with media query swaps -->
  <div class="absolute inset-0 z-0 hero-bg"
       style="background-size: cover; background-position: center; background-repeat: no-repeat;">
    
    <!-- Mobile background -->
    <div class="sm:hidden absolute inset-0"
         style="background-image: url('../images/home-mobile.png'); 
                 background-size: cover; 
                 background-position: center;"></div>
    
    <!-- Desktop background -->
    <div class="hidden sm:block absolute inset-0"
         style="background-image: url('../images/home-desktop.png'); 
                 background-size: cover; 
                 background-position: center;"></div>
    
    <!-- Existing overlays remain -->
    <div class="hidden sm:block absolute inset-0" style="background: linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25));"></div>
    <div class="sm:hidden absolute inset-0" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55));"></div>
  </div>
  
  <!-- Rest of content unchanged -->
</section>
```

## Recommended Implementation

**Use Approach 1 (Picture Element)** because:
- ✅ Semantic HTML for images
- ✅ Native browser support
- ✅ SEO friendly
- ✅ Accessible with alt text
- ✅ Works with CSS overlays
- ✅ Future-proof for WebP conversion
- ✅ Best performance

## Image Specifications

### home-desktop.png
- **Dimensions**: 1920 × 1080 pixels (16:9)
- **Format**: PNG or WebP
- **Size**: < 500KB
- **Safe area**: Both people centered-left, 80px clearance from edges
- **Content**: Full office environment with subjects on left-center, extended environment on right

### home-mobile.png
- **Dimensions**: 1080 × 1920 pixels (9:16)
- **Format**: PNG or WebP
- **Size**: < 500KB
- **Safe area**: Both people in vertical center, fully visible
- **Content**: Both subjects prominent, office environment above and below

## Browser Support

| Approach | Picture | Media Queries | Hybrid |
|----------|---------|---------------|--------|
| Chrome | ✅ Full | ✅ Full | ✅ Full |
| Firefox | ✅ Full | ✅ Full | ✅ Full |
| Safari | ✅ Full | ✅ Full | ✅ Full |
| IE 11 | ✅ Fallback | ✅ Full | ✅ Full |
| Mobile Safari | ✅ Full | ✅ Full | ✅ Full |
| Android | ✅ Full | ✅ Full | ✅ Full |

## Performance Considerations

1. **Image Size Optimization**:
   - Use ImageOptim or TinyPNG to compress
   - Desktop: ~250-350KB compressed
   - Mobile: ~200-300KB compressed

2. **WebP Support** (Optional but recommended):
   ```html
   <picture>
     <source media="(max-width: 639px)" srcset="../images/home-mobile.webp" type="image/webp">
     <source media="(max-width: 639px)" srcset="../images/home-mobile.png" type="image/png">
     <source media="(min-width: 640px)" srcset="../images/home-desktop.webp" type="image/webp">
     <source media="(min-width: 640px)" srcset="../images/home-desktop.png" type="image/png">
     <img src="../images/home-desktop.png" alt="..." style="...">
   </picture>
   ```

3. **Lazy Loading** (Optional):
   ```html
   <img ... loading="lazy" alt="...">
   ```

## Gradient Overlays

Both mobile and desktop versions will use identical gradient overlays:

**Desktop/Tablet:**
```css
background: linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25));
```
- Stronger gradient on left (where text is)
- Fades on right (where image extends)

**Mobile:**
```css
background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55));
```
- Stronger, darker gradient for readability over portrait orientation

## Testing Checklist

After implementation:

- [ ] Desktop view (1920×1080): Both people visible, correct composition
- [ ] Tablet view (768×1024): No cropping, smooth transition
- [ ] Mobile view (375×667): Both people visible, portrait layout works
- [ ] Mobile portrait (9:16): Full content visible
- [ ] Slow 3G: Images load progressively
- [ ] Browser DevTools: No console errors
- [ ] Responsive breakpoints: CSS triggers correctly
- [ ] Text readability: Overlays maintain visibility
- [ ] Buttons clickable: CTA buttons accessible
- [ ] Accessibility: Alt text present and descriptive

## Fallback Strategy

If images fail to load:
```css
/* Fallback gradient background */
background: linear-gradient(135deg, #0B3A5A 0%, #062236 50%, #3FA34D 100%);
```

This provides a branded background using the TechBriks colors.

## Transition Strategy

To implement without breaking the site:

1. **Prepare new images**: Create desktop and mobile versions
2. **Upload files**: Place in `/public/images/`
3. **Update HTML**: Replace hero section div with recommended approach
4. **Test responsive**: Verify at multiple breakpoints
5. **Monitor**: Check for load errors in production
6. **Optimize**: Further compress if needed

---

**Next Step**: Once new hero images are created and placed in `/public/images/`, 
update [public/index.html](public/index.html) lines 250-320 with the recommended implementation.
