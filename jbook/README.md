# JBook

To retrieve the binaries for a given npm module

```bash
npm view [package-name] dist.tarball
```

## Esbuild

[Esbuild](https://esbuild.github.io/) is a extremely fast javascript bundler

### Process

1. Bundle `index.js` file
2. Figure out where the `index.js` file is stored (onResolve step)
3. Attempt to load up the `index.js` file (onLoad step)
4. Parse the `index.js` file, find any `import/require/exports`
5. If there are any `import/require/exports`, figure out where the requested file is (onResolve step)
6. Attempt to load that file up (onLoad step)

## IFrames

### Direct access between frames

- It's allowed when the iframe element doesn't have a 'sandbox' property, or has a 'sandbox="allow-same-origin"' property, and
- We fetch the parent HTML doc and the frame HTML doc from the exact same
  - domain
  - port
  - protocol

### Communication between frames

- Accessing the parent

```javascript
parent.parentValue;
```

- Accessing the child
