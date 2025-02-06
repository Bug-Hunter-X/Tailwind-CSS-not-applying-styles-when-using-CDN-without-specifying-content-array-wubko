# Tailwind CSS Bug: Styles Not Applying with CDN

This repository demonstrates a common issue when using Tailwind CSS with the CDN: styles not applying correctly if the content array is not specified in `tailwind.config.js`.  The bug arises from the CDN's inability to automatically detect and process CSS classes without a proper configuration.

## Bug Description
When you include the Tailwind CSS CDN script in your HTML and don't configure the `content` array in `tailwind.config.js` (or if you do not have a tailwind.config.js file),  Tailwind will not correctly identify and process your classes. Your HTML elements will simply ignore the classes. 

## Solution
Specify the `content` array in `tailwind.config.js` to explicitly tell Tailwind where to find your HTML files containing the classes.  If using the CDN you may have to adjust build process to ensure the config file is processed.