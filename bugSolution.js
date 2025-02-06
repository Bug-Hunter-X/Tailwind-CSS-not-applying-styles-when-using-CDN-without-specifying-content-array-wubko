```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Add this line to specify content
  theme: {
    extend: {},
  },
  plugins: [],
};
```
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-red-500 p-4">
      This is some text.
  </div>
</body>
</html>
```