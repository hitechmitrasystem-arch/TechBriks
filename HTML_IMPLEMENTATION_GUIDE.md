# HTML Implementation Template for Responsive Hero Images

## Updated Hero Section Code

Replace the hero section in [public/index.html](public/index.html) (lines 250-320) with this responsive implementation:

```html
  <main id="main-content">
    
    <!-- ─────────────────────────────────────────────────────────
         HERO SECTION - RESPONSIVE IMAGE COMPOSITION
         ───────────────────────────────────────────────────────── -->
    <section id="home" class="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      
      <!-- Background Image Container with Picture Element for Responsive Images -->
      <div class="absolute inset-0 z-0" style="overflow: hidden;">
        
        <!-- Picture element for responsive images -->
        <picture class="w-full h-full">
          <!-- Mobile: Portrait 9:16 aspect ratio -->
          <source media="(max-width: 639px)" 
                  srcset="../images/home-mobile.png, ../images/home-mobile.webp" 
                  type="image/webp">
          <source media="(max-width: 639px)" 
                  srcset="../images/home-mobile.png" 
                  type="image/png">
          
          <!-- Desktop/Tablet: Landscape 16:9 aspect ratio -->
          <source media="(min-width: 640px)" 
                  srcset="../images/home-desktop.webp" 
                  type="image/webp">
          <source media="(min-width: 640px)" 
                  srcset="../images/home-desktop.png" 
                  type="image/png">
          
          <!-- Fallback image for older browsers -->
          <img src="../images/home-desktop.png" 
               alt="TechBriks Consulting - Professional consulting team collaborating in modern office environment with technology devices"
               style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;"
               loading="lazy">
        </picture>
        
        <!-- Gradient Overlays for Text Readability -->
        <!-- Desktop/Tablet overlay - stronger on left for text visibility -->
        <div class="hidden sm:block absolute inset-0" 
             style="background: linear-gradient(to right, rgba(6, 33, 52, 0.65), rgba(6, 33, 52, 0.25)); pointer-events: none;">
        </div>
        
        <!-- Mobile overlay - stronger, darker gradient for readability over portrait -->
        <div class="sm:hidden absolute inset-0" 
             style="background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)); pointer-events: none;">
        </div>
      </div>
      
      <!-- Decorative elements - Hidden on mobile for performance -->
      <div class="hidden sm:block absolute top-40 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#3FA34D]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="hidden sm:block absolute bottom-20 left-0 w-64 md:w-80 h-64 md:h-80 bg-[#0B3A5A]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- Hero Content Container - Mobile First -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div class="max-w-4xl mx-auto text-center sm:text-left sm:mx-0">
          
          <!-- Main Headline -->
          <div class="space-y-5 sm:space-y-6 md:space-y-8">
            
            <!-- Company Name - Mobile-First Responsive Typography -->
            <h1 class="font-display font-extrabold tracking-tight animate-fade-in-up text-center sm:text-left">
              <span class="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.05]" style="color: #0B3A5A;">Tech<span style="color: #3FA34D;">Briks</span></span>
              <span class="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.05] mt-1" style="color: #0B3A5A;">CONSULTING</span>
            </h1>
            
            <!-- Tagline -->
            <h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.4] sm:leading-snug animate-fade-in-up text-center sm:text-left mx-auto sm:mx-0 max-w-xs sm:max-w-xl lg:max-w-2xl" 
                style="animation-delay: 0.1s; color: #FFFFFF;">
              Helping build digital ecosystems and scale technology solutions
            </h2>
            
            <!-- Description -->
            <p class="text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up text-center sm:text-left mx-auto sm:mx-0 max-w-xs sm:max-w-md lg:max-w-xl" 
               style="animation-delay: 0.2s; color: #E6EDF3;">
              By combining human-centric approach with measurable business outcomes.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-6 sm:pt-2 animate-fade-in-up w-full sm:w-auto" style="animation-delay: 0.3s;">
              <a href="#contact" 
                 class="btn-primary flex items-center justify-center h-14 sm:h-auto px-6 sm:px-8 sm:py-4 text-white text-base font-semibold rounded-xl sm:rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                 style="background-color: #0B3A5A;"
                 onmouseover="this.style.backgroundColor='#082d47'"
                 onmouseout="this.style.backgroundColor='#0B3A5A'">
                Get in Touch
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#expertise" 
                 class="flex items-center justify-center h-14 sm:h-auto px-6 sm:px-8 sm:py-4 text-base font-semibold rounded-xl sm:rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
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

## Key Improvements in This Implementation

### 1. **Picture Element for Responsiveness**
```html
<picture>
  <source media="(max-width: 639px)" srcset="../images/home-mobile.png">
  <source media="(min-width: 640px)" srcset="../images/home-desktop.png">
  <img src="../images/home-desktop.png" alt="...">
</picture>
```
- Mobile and desktop get different images appropriate for their aspect ratios
- Browser automatically loads the correct image
- Fallback for older browsers

### 2. **WebP Support (Optional Enhancement)**
```html
<source media="(max-width: 639px)" srcset="../images/home-mobile.webp" type="image/webp">
<source media="(max-width: 639px)" srcset="../images/home-mobile.png" type="image/png">
```
- WebP files are 25-35% smaller
- Requires creating WebP versions of images
- Automatic fallback to PNG if browser doesn't support

### 3. **Lazy Loading for Performance**
```html
<img src="..." loading="lazy">
```
- Images load only when needed
- Improves initial page load time
- Beneficial for users on slow connections

### 4. **Proper Alt Text**
```html
alt="TechBriks Consulting - Professional consulting team collaborating in modern office environment with technology devices"
```
- Accessibility for screen readers
- SEO benefit
- Descriptive and meaningful

### 5. **Object-Fit for Cover Behavior**
```css
style="object-fit: cover; object-position: center;"
```
- Ensures image fills entire container like CSS `background-size: cover`
- Maintains aspect ratio
- Centers content

### 6. **Pointer Events on Overlays**
```css
style="pointer-events: none;"
```
- Gradient overlays don't interfere with click targets
- Buttons remain clickable throughout hero
- Invisible layers don't affect UX

---

## CSS Fallback (If Picture Element Not Used)

If you prefer pure CSS approach, add this to [public/css/styles.css](public/css/styles.css):

```css
/* Mobile-first responsive hero images */
#home {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../images/home-mobile.png');
  
  /* Fallback gradient if image fails to load */
  background: linear-gradient(135deg, #0B3A5A 0%, #062236 50%, #3FA34D 100%);
}

/* Tablet and larger: Switch to desktop image */
@media (min-width: 640px) {
  #home {
    background-image: url('../images/home-desktop.png');
  }
}

/* WebP support (if using WebP versions) */
@supports (background-image: url('../images/home-desktop.webp')) {
  @media (min-width: 640px) {
    #home {
      background-image: url('../images/home-desktop.webp');
    }
  }
  
  @media (max-width: 639px) {
    #home {
      background-image: url('../images/home-mobile.webp');
    }
  }
}
```

---

## Implementation Steps

### Step 1: Prepare Images
- [ ] Create desktop image: `home-desktop.png` (1920 × 1080)
- [ ] Create mobile image: `home-mobile.png` (1080 × 1920)
- [ ] Optimize both for web (<500KB each)
- [ ] (Optional) Create WebP versions for better compression

### Step 2: Upload Images
- [ ] Place `home-desktop.png` in `/public/images/`
- [ ] Place `home-mobile.png` in `/public/images/`
- [ ] Keep `home.png` as backup (can delete later)

### Step 3: Update HTML
- [ ] Open [public/index.html](public/index.html)
- [ ] Find hero section (lines 250-320)
- [ ] Replace with new code from above
- [ ] Verify all paths are correct

### Step 4: Test Responsive Behavior
- [ ] Test on desktop (1920×1080)
- [ ] Test on tablet (768×1024)
- [ ] Test on mobile (375×667)
- [ ] Check mobile portrait view
- [ ] Verify text readability
- [ ] Check button functionality

### Step 5: Optimize Performance
- [ ] Verify image file sizes
- [ ] Check load times
- [ ] Use DevTools to confirm correct image is loading
- [ ] Test on slow 3G connection

### Step 6: Cross-Browser Testing
- [ ] Chrome / Chromium
- [ ] Firefox
- [ ] Safari (desktop and mobile)
- [ ] Edge

---

## Troubleshooting

### Images Not Loading
**Problem**: Hero section appears blank
- [ ] Check image file names match exactly
- [ ] Verify paths are correct (`../images/home-mobile.png`)
- [ ] Ensure files are in `/public/images/` directory
- [ ] Check browser console for 404 errors

### Wrong Image Loading
**Problem**: Desktop shows mobile image or vice versa
- [ ] Check media query breakpoints (640px)
- [ ] Verify `<source>` elements are in correct order
- [ ] Clear browser cache and reload
- [ ] Check DevTools Network tab for which file loads

### Image Quality Issues
**Problem**: Image looks blurry or compressed
- [ ] Verify image resolution matches specification
- [ ] Check file hasn't been over-compressed
- [ ] Test with original high-quality file
- [ ] Ensure correct color profile (sRGB)

### Performance Issues
**Problem**: Hero section loads slowly
- [ ] Reduce image file sizes with TinyPNG
- [ ] Use WebP format if supported
- [ ] Enable lazy loading attribute
- [ ] Check server response times

---

## Performance Optimization Tips

### Image Compression
Use these free tools:
- [TinyPNG.com](https://tinypng.com/) - Compress PNG/WebP
- [ImageOptim](https://imageoptim.com/) - Batch compression
- [Squoosh.app](https://squoosh.app/) - Convert and compress

### WebP Creation
Convert PNG to WebP:
```bash
# Using ImageMagick
convert home-desktop.png home-desktop.webp

# Using cwebp
cwebp -q 80 home-desktop.png -o home-desktop.webp
```

### Target File Sizes
- Desktop PNG: 250-400KB (uncompressed limit)
- Mobile PNG: 200-350KB
- Desktop WebP: 150-250KB
- Mobile WebP: 100-200KB

---

## Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge | Mobile |
|---------|--------|---------|--------|------|--------|
| Picture element | ✅ | ✅ | ✅ | ✅ | ✅ |
| Media queries | ✅ | ✅ | ✅ | ✅ | ✅ |
| WebP | ✅ | ✅ | ❌ | ✅ | ✅ |
| object-fit | ✅ | ✅ | ✅ | ✅ | ✅ |
| lazy loading | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Testing Checklist

- [ ] Desktop hero loads correct image (home-desktop.png)
- [ ] Mobile hero loads correct image (home-mobile.png)
- [ ] Both people visible on all screen sizes
- [ ] Text remains readable
- [ ] Buttons are clickable
- [ ] Gradient overlays properly applied
- [ ] No image distortion
- [ ] No horizontal scrolling
- [ ] Performance is good (DevTools audit)
- [ ] Console has no errors

---

Once you have created the two new hero images, use this implementation to ensure they display correctly across all devices with proper responsive behavior.
