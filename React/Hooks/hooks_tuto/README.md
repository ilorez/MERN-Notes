# Hooks

Hooks let u use diffrent react features from your componnent, you can use built-in hooks like `useSate`,`useEffect` or build yours.

## useEffect

```js
useEffect(setup, dependencies?)
```
Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other  ***non-React code***.

### Parameters

***setup***: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

***dependencies***[optional]: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.



```jsx
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
```
Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.

There are two rarely used variations of useEffect with differences in timing:

- **[useLayoutEffect](#uselayouteffect)** fires before the browser repaints the screen. You can measure layout here.
- **[useInsertionEffect](#useinsertioneffect)** fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.
### Returns
useEffect returns undefined.

### Usage
- Connecting to an external system
- Wrapping Effects in custom Hooks
- Controlling a non-React widget
- Fetching data with Effects
- Specifying reactive dependencies
- Updating state based on previous state from an Effect
- Removing unnecessary object dependencies
- Removing unnecessary function dependencies
- Reading the latest props and state from an Effect
- Displaying different content on the server and the client



***Note*** : For more info about `useEffect` [Click Here](https://react.dev/reference/react/useEffect)
