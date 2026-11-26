# Image placeholders

Drop your photos in this folder using exactly these file names. Until a file exists, the site shows a
labelled placeholder in its place. Supported formats: jpg, jpeg, png, webp, avif, svg. The extension
must match the file name in `src/config/*.config.js` (change the config if you use another format).

| File name | Used in | Suggested size |
|---|---|---|
| hero-aerospace.jpg | Home banner, slide 1 | 1920x1080 |
| hero-defence.jpg | Home banner, slide 2 | 1920x1080 |
| hero-cnc.jpg | Home banner, slide 3 | 1920x1080 |
| hero-quality.jpg | Home banner, slide 4 | 1920x1080 |
| about-workshop.jpg | Home and About intro | 1200x1500 |
| about-team.jpg | About page | 1600x900 |
| about-facility.jpg | About page | 1600x900 |
| service-aerospace.jpg | Services page, Home highlight | 1600x1000 |
| service-aerospace-1.jpg, -2.jpg, -3.jpg | Aerospace picture strip | 1200x900 |
| service-defence.jpg | Services page, Home highlight | 1600x1000 |
| service-defence-1.jpg, -2.jpg, -3.jpg | Defence picture strip | 1200x900 |
| gallery-01.jpg to gallery-12.jpg | Gallery page | 1200x900 |

To add or rename slots, edit `home.config.js`, `about.config.js`, `services.config.js` and
`gallery.config.js` in `src/config/`.
