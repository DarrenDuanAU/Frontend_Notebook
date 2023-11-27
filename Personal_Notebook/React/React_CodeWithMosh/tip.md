### array的CRUD


```js
const [x, setX] = useState(0);
const [y, setY] = useState(0);

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