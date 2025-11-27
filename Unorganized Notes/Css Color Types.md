---
tags:
  - CSS
---
## Syntax of different types:
```css
/* Named colors */
rebeccapurple
aliceblue

/* RGB Hexadecimal */
#f09
#ff0099

/* RGB (Red, Green, Blue) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Hue, Saturation, Lightness) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Hue, Whiteness, Blackness) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* Lab (Lightness, A-axis, B-axis) / alpha channel */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Lightness, Chroma, Hue) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Lightness, A-axis, B-axis) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* OkLCh (Lightness, Chroma, Hue) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Relative CSS colors */
/* HSL hue change */
hsl(from red 240deg s l)
/* HWB alpha channel change */
hwb(from green h w b / 0.5)
/* LCH lightness change */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```
### alpha channel (opacity)
- value applied to certain color types, can be either:
    - 0 to 1, where 0 is completely transparent and 1 completely opaque
    - 0% to 100% 

### relative color
- allows a color to be defined relative to another color.
```css title:"general relative color syntax"
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```
relative colors are created using the same "color functions" as absolute (regular) colors, but with different parameters.
```css 
#one {
  background-color: red;
}

#two {
  background-color: rgb(from red 200 g b / alpha); //assigns red *as* 200, g & b as 0 .... seems strange to bother w relative @ this point... }
  
  rgb(from rgb(200 170 0) b g r) 
  HERE WE GO, now its using the original values w variables 'b' 'g' & 'r' from the og rgb 
/* output color is equivalent to rgb(0 170 200) */
```

## Color Properties
- color
- opacity
## Color Functions

- rgb()
- hsl()
- hwb()
- lab()
- lch()
- oklab()
- oklch()
- color()
- color-mix()
- contrast-color()
- light-dark()
## Color Data Types
```css 
<color>
<color-function>
<hex-color>
<named-color>
<alpha-value>
<hue>
<system-color>
<colorspace-params>
```
