### array的CRUD

#### updating arrays

```js
function App() {
  const [ tags, setTags ] = useState([ 'happy', 'cheerful' ]);

  const handleClick = () => {
    // Add
    setTag([...tags, 'exciting']);

    // Remove
    setTags(tags.filter(tag => tag !== 'happy' ));

    //Update
    setTags(tags.map( tag => tag === 'happy' ? 'happyness' : tag))
  }
}
```

#### updating array of objects

```js
function App() {
  const [ bug, setBugs ] = useState([
    {id: 1, titleL 'Bug 1', fixed: false },
    {id: 2, titleL 'Bug 2', fixed: false },
  ])

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true } : bug ))
  }
}
```