# HERO SECTION - FINAL IMPLEMENTATION CODE

## Complete Hero HTML Structure (Lines 254-285)

```html
<section id="home" style="position: relative; min-height: 100vh; display: flex; align-items: center; padding-top: 72px; overflow: hidden;">
  <!-- Hero Background Image Layer (z-0) - Explicit Inline Styles for Visibility -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; display: block; visibility: visible; opacity: 1;">
    <picture style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; visibility: visible; opacity: 1;">
      <!-- Mobile: Portrait 9:16 aspect ratio (max-width: 640px) -->
      <source media="(max-width: 640px)" srcset="/images/home-mobile.png" type="image/png">
      <!-- Desktop/Tablet: Landscape 16:9 aspect ratio (min-width: 641px) -->
      <source media="(min-width: 641px)" srcset="/images/home-desktop.png" type="image/png">
      <!-- Fallback image for older browsers -->
      <img src="/images/home-desktop.png" 
           alt="TechBriks Consulting - Professional team collaborating in modern office" 
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; visibility: visible; opacity: 1;">
    </picture>
  </div>
  
  <!-- Gradient Overlay Layer (z-1) - Semi-Transparent, Not Opaque -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
    <!-- Desktop/Tablet overlay -->
    <div class="hidden sm:block" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25)); pointer-events: none;"></div>
    <!-- Mobile overlay - stronger dark gradient for readability -->
    <div class="sm:hidden" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)); pointer-events: none;"></div>
  </div>
  
  <!-- Decorative elements - Hidden on mobile for performance -->
  <div class="hidden sm:block absolute top-40 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#3FA34D]/10 rounded-full blur-3xl"></div>
  <div class="hidden sm:block absolute bottom-20 left-0 w-64 md:w-80 h-64 md:h-80 bg-[#0B3A5A]/10 rounded-full blur-3xl"></div>
  
  <!-- Hero Content Container - Mobile First -->
  <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
    <div class="max-w-4xl mx-auto text-center sm:text-left sm:mx-0">
      <!-- Main Headline -->
      <div class="space-y-5 sm:space-y-6 md:space-y-8">
        <!-- Company Name -->
        <h1 class="font-display font-extrabold tracking-tight animate-fade-in-up text-center sm:text-left">
          <span class="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.05]" style="color: #0B3A5A;">Tech<span style="color: #3FA34D;">Briks</span></span>
          <span class="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.05] mt-1" style="color: #0B3A5A;">CONSULTING</span>
        </h1>
        
        <!-- Tagline -->
        <h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.4] sm:leading-snug animate-fade-in-up text-center sm:text-left mx-auto sm:mx-0 max-w-xs sm:max-w-xl lg:max-w-2xl" style="animation-delay: 0.1s; color: #FFFFFF;">
          Helping build digital ecosystems and scale technology solutions
        </h2>
        
        <!-- Description -->
        <p class="text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up text-center sm:text-left mx-auto sm:mx-0 max-w-xs sm:max-w-md lg:max-w-xl" style="animation-delay: 0.2s; color: #E6EDF3;">
          By combining human-centric approach with measurable business outcomes.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-6 sm:pt-2 animate-fade-in-up w-full sm:w-auto" style="animation-delay: 0.3s;">
          <a href="#contact" class="btn-primary flex items-center justify-center h-14 sm:h-auto px-6 sm:px-8 sm:py-4 text-white text-base font-semibold rounded-xl sm:rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
             style="background-color: #0B3A5A;"
             onmouseover="this.style.backgroundColor='#082d47'"
             onmouseout="this.style.backgroundColor='#0B3A5A'">
            Get in Touch
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#expertise" class="flex items-center justify-center h-14 sm:h-auto px-6 sm:px-8 sm:py-4 text-base font-semibold rounded-xl sm:rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
             style="background-color: #FFFFFF; color: #0B3A5A; border: 2px solid #3FA34D;"
             onmouseover="this.style.opacity='0.95'"
             onmouseout="this.style.opacity='1'">
            Explore Our Expertise
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Key Technical Details

### Section Container
- **Position:** `position: relative` (establishes z-index stacking context)
- **Height:** `min-height: 100vh` (full viewport height)
- **Layout:** `display: flex; align-items: center;` (centers content vertically)
- **Padding:** `padding-top: 72px` (clears fixed navbar)
- **Overflow:** `overflow: hidden` (clips decorative elements)

### Image Layer (Z-0)
- **Container:** `position: absolute; inset: 0; z-index: 0;`
- **Picture:** `position: absolute; inset: 0; display: block; visibility: visible; opacity: 1;`
- **Mobile:** `max-width: 640px` → `/images/home-mobile.png` (1080×1920)
- **Desktop:** `min-width: 641px` → `/images/home-desktop.png` (1920×1080)
- **Fallback:** `<img src="/images/home-desktop.png">` (for old browsers)
- **Sizing:** `object-fit: cover; object-position: center;` (fills and centers)

### Overlay Layer (Z-1)
- **Container:** `position: absolute; inset: 0; z-index: 1;`
- **Desktop:** `linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25))`
- **Mobile:** `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55))`
- **Interaction:** `pointer-events: none` (allows clicks to pass through)

### Content Layer (Z-10)
- **Position:** `position: relative; z-index: 10;` (floats above all)
- **Container:** `max-w-7xl mx-auto` (centered max width)
- **Responsive:** Padding and font sizes scale with viewport
- **Text Color:** White `#FFFFFF` and light gray `#E6EDF3`

---

## Rendering Guarantees

✅ **Image Visibility:**
- `display: block;` - renders as block element
- `visibility: visible;` - not hidden
- `opacity: 1;` - fully opaque

✅ **Responsive Behavior:**
- Media query at 640px breakpoint
- Mobile: portrait-optimized image
- Desktop: landscape-optimized image
- Smooth transition at breakpoint

✅ **Layer Stacking:**
- Z-0: Image (bottom)
- Z-1: Overlay (middle, semi-transparent)
- Z-10: Content (top, clickable)

✅ **No Visual Blockers:**
- Overlay is semi-transparent (0.25-0.75 opacity)
- No opaque background colors
- Image fully fills section
- Section has full viewport height

---

## Image Asset Requirements

| Image | Location | Size | Aspect Ratio | Purpose |
|-------|----------|------|--------------|---------|
| home-mobile.png | `/public/images/` | 1080×1920 | 9:16 | Mobile portrait view |
| home-desktop.png | `/public/images/` | 1920×1080 | 16:9 | Desktop landscape view |

---

## Browser Compatibility

✅ **Modern Browsers (Picture Element Support):**
- Chrome 38+
- Firefox 38+
- Safari 9+
- Edge 13+
- Opera 25+

✅ **Older Browsers (Fallback):**
- IE 11 - uses fallback `<img>` tag
- Works, displays default desktop image

---

## Testing Checklist

- [ ] Open on desktop (>640px) - verify home-desktop.png loads
- [ ] Open on mobile (≤640px) - verify home-mobile.png loads
- [ ] Resize browser window - verify smooth transition at 640px
- [ ] Verify both people visible on desktop
- [ ] Verify both people visible on mobile
- [ ] Verify gradient overlay visible
- [ ] Verify text readable
- [ ] Verify buttons clickable
- [ ] Check browser console - no 404 errors for images
- [ ] Test on actual mobile device - not just emulation

---

**Implementation Date:** January 26, 2026
**Status:** Production Ready
**Browser Testing:** Required before deployment
