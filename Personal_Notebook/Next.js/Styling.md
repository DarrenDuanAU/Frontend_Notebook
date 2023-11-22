# Styling
## Terms
CSS 
modules
Daisy UI
Global styles
PostCSS
Tailwind

## Summary
- In Next.js projects, we define global styles in /app/global.css. Reserve this file for global styles that need to be applied across multiple pages and components. Avoid adding excessive styles to this file, as it can quickly grow out of hand and become difficult to maintain.
- In traditional CSS, if we define the same class in two different files, one will overwrite the other depending on the order in which these files are imported. CSS modules help us prevent this problem. A CSS module is a CSS file that is scoped to a page or component.  
- During the build process, Next.js uses a tool called PostCSS to transform our CSS class names and generate unique class names. This prevents clashes between different CSS classes across the application.
- Tailwind is a widely-used CSS framework for styling application. It offers a comprehensive set of small, reusable utility classes. We can combine these classes to create beautiful user interfaces.
- DaisyUI is a component library built on top of Tailwind. It provides a collection of pre-designed and reusable components such as accordion, badge, card, etc.
