# Advanced React Typescript

Create a new project using npx
`npx create-react-app [name] --template typescript`

## Props and types

- The parent will provide props to its children
- Interface to define what props Child expects to receive
- Checks done by typescript:

  - are we providing the correct props to Child when we show it in Parent?
  - are we using the correctly named + typed props in Child?

- All React components (React.FC) can optionally provide these properties:
  - propTypes
  - displayName
  - defaultProps
  - contextTypes

## Refs

- Refs work as reference values for HTML tags
- Can be used with the `useRef` hook
- To bind the ref to an HTML element:
  1. set the initial ref value
  2. bind the ref to the HTML element using the ref prop
  3. check for nullish values while mounting the component (useEffect hook)

```tsx
const RefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  }
);
```
