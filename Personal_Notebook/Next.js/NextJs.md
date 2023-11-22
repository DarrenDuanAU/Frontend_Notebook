### Client side rendering VS server side rendering
- client-side rendering: 
  - large bundles
  - resource intensive
  - No SEO
  - Less secure
- Server-side Rendering
  - Smaller bundles
  - Resource efficient
  - SEO
  - More secure

conclusion: Service-side rendering is has more benefit comparing with client-side rendering, but SSR will lose user inteaction feature => Next.js use server-side rendering as default. so we should extract smallest components as 'use Client' component (which is CSR), so we can have SSR as default while keeping the user interaction features.


# Static (at build time) rendering VS Dynamic (at request time) rendering

since most of the component are rendered on the server side, server will treated the components as a static page as default, we need to add { cache: 'no-store' } in as a arguments in fetch function, the compoent will be treated as a Dynamic rendered component.


Summary
- Next.js is a framework for building fast, and search-engine friendly applications. 
- It includes a compiler for transforming and minifying JavaScript code, a Command-line Interface (CLI) for building and starting our application, and a Node.js runtime for running backend code. This enables full-stack development. 
- With Next.js, we can render our components on the server and return their content to the client. This technique is called Server-side Rendering (SSR) and makes our applications search-engine friendly. 
- To further improve performance, we can pre-render pages and components that have static data during the build and serve them whenever needed. This technique is called Static Site Generation (SSG).
- The new app router in Next.js 13 makes it incredibly easy to create routes. We can define route segments by creating directories. To make a route public, we add a page file (page.js, page.jsx, or page.tsx) in the corresponding directory. 
- Next.js provides the Link component to enable client-side navigation. This means as the user navigates between pages, the new content is loaded quickly and smoothly without the entire page being reloaded. 
- Next.js 13 supports client and server components introduced in React 18. Client components are rendered on the client within a web browser. This technique is called Client-side Rendering (CSR) and it’s how traditional React apps work. Server components are rendered on the server within a Node.js runtime. This technique is called Server-side Rendering (SSR).
- Server components lead to reduced bundle sizes, better performance, increased search engine visibility, and enhanced security. But they cannot handle browser events, access browser APIs, or use the state or effect hooks. These functionalities are only available in client components. So we should use them whenever possible unless we need interactivity.
- All the components and pages in the /app directory are server components by default. To make a component a client component, we add the ‘use client’ directive on top of the component file.•Server components are great for fetching data because they don’t require extra server trips, making our application faster and more search-engine friendly. 
- Next.js enhances the fetch() function by adding automatic caching. This boosts performance and reduces the need to retrieve the same piece of data twice.•In Next.js, components can be rendered at build time (called Static Rendering) or at request time (called Dynamic Rendering). If we have pages or components with static data, we can pre-render them during build time to improve our application’s performance.
