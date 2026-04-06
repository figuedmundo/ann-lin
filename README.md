# Wood Cabin Maker Digital CV & Portfolio

A modern, responsive HTML/CSS CV and portfolio template designed specifically for woodworkers, carpenters, and cabin makers. It uses a "Combination Portfolio" layout that leads with practical projects and certifications, perfect for entry-level tradespeople.

## Features

- **Warm Timber Modern Aesthetic:** A custom color palette featuring warm creams (`#F5F0E8`), rich mahogany (`#5D4037`), and deep walnut (`#3E2723`).
- **Interactive Portfolio Gallery:** A CSS Grid layout for showcasing physical projects, complete with a JavaScript Lightbox for full-screen image viewing.
- **Print & PDF Optimized:** Includes strict `@media print` rules ensuring the layout formats cleanly into a 2-column grid when printed or exported to PDF.
- **No Heavy Frameworks:** Pure HTML5, CSS3, and vanilla JavaScript for maximum speed and easy editing.

## How to Customize

1. **Personal Information:** 
   Open `index.html` and replace "Alex Woods" and the placeholder contact information in the `<header>` section with your actual details.
   
2. **Professional Profile:**
   Update the paragraph under the "Professional Profile" section to reflect your specific background and goals.

3. **Certifications:**
   Update the `<div class="certification-box">` with the exact name, date, and issuing body of your Wood Cabin Maker certification.

4. **Adding Your Project Photos:**
   - Place your `.jpg` or `.png` project photos in the project folder.
   - In the "Selected Projects" section of `index.html`, locate the `<img>` tags.
   - Replace the `src="https://placehold.co/...` URL with the local path to your image (e.g., `src="my-oak-cabinet.jpg"`).
   - Update the `alt` attribute and the title/description below each image.

5. **Skills & Education:**
   Modify the lists under "Technical Skills" and "Education" to match your actual competencies and schooling.

## Exporting to PDF

Since this CV is optimized for print, you can generate a professional PDF in two ways:

**Method 1: Browser Print**
1. Open `index.html` in your web browser (Chrome/Edge recommended).
2. Press `Ctrl + P` (or `Cmd + P` on Mac).
3. Set the destination to "Save as PDF".
4. Ensure "Background graphics" is enabled (if you want the background colors) and "Headers and footers" is disabled.

**Method 2: Using the Python Script**
You can use the included `export_cv.py` script to programmatically generate the PDF using Playwright (which respects the `@media print` rules perfectly).
