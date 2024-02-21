# GraphQL


## basic

### GraphQL vs RESTful APIs

RESTful APIs
- Over fetching (Getting back more data than we need)
- Under fetching (Getting back less data than we need)

GraphQL can solve this problem (by single endpoint)

```js
Query {
  courses {
    id,
    title,
    thumbnail_url
  }
}
```

- we also can nest needed info in one query
```js
Query {
  course (id: "1") {
    id,
    title,
    thumbnail_url,
    author {
      name,
      id,
      courses {
        id,
        title,
        thumbnail_url
      }
    }
  }
}
```
