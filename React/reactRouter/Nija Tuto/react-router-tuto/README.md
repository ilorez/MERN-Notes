# React-Router Notes
welcome in this short tutorial, you will found basics notes to start working with react-router.


## Introduction
First we need to understand the concept of react and how it's work. 

### SPA's
<div style="display: flex; flex-direction: row;">
  <div style="flex: 70%; padding: 10px;">
    SPA (Single Page Application), when you send a request from browser the server return a one single file (html/json...),and browser render the file into your page, and that happining every time when click on a link to any page inside the website, and here react come with amazing different concept.
  </div>
  <div style="flex: 30%; padding: 10px;">

![Image description](./readme%20images/images.png)

  </div>
</div>


<div style="display: flex; flex-direction: column;">
  <div style="flex: 100%; padding: 10px;">


When we using react we insital on our application another package that call react dom or (react virual dom), that make easly handling routes inside the browser.

So, The story is:
1. **Open React App:**
   When a user opens a React application, the initial component or components will render, triggering the creation of the initial virtual DOM.

2. **Sending Requests:**
   The React app may send requests to a server to fetch data, but this typically happens when the component mounts or when there's a need to update data in the app. It's not necessary to send a request to "all pages" in the app, but rather requests are sent for the data needed by the current page or component.

3. **Creating Virtual DOM:**
   The initial rendering of a React app involves creating a virtual DOM based on the components and their structure. This virtual DOM is a lightweight copy of the actual DOM, which allows React to efficiently track changes and update the real DOM as needed.

4. **User Interaction - Clicking a Link:**
   When a user clicks a link within the React app, the React Router (or a similar routing mechanism) typically handles this action. It may prevent a full page refresh by intercepting the link click and updating the virtual DOM accordingly to render the new page or component without making a complete server request.

5. **Rendering the Page:**
   React will then re-render the relevant components based on the new route or page the user has navigated to, without needing to make a full request to the server. The rendering is done using the virtual DOM and is much faster than a full page refresh.

In summary, the user interaction with the React app triggers the rendering of new components using the virtual DOM, allowing for a seamless and fast user experience without full page reloads. Server requests are typically made to fetch data as needed, but they don't necessarily happen for every page or component unless required. The React app is designed to efficiently update the UI based on user actions without always needing to go back to the server for new content.

  </div>
  <div style="flex: 100%; padding: 10px;">

![Image description](./readme%20images/Real-DOM-and-React-Virtual-DOM.png)
![Image description](./readme%20images/react-vdom.jpg)

  </div>
</div>

## Instalation
```shell
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm run dev
```

for install react-router package we need just to use next command:
```shell
cd <your project directory> # open projet directory
npm install react-router-dom localforage match-sorter sort-by # installing react router
npm run dev # run your web app
```

## Start Working with react router
### Import

```js
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
```
---
**BrowserRouter** : A `<Router>` for use in web browsers. Provides the cleanest URLs.

---

**Routes** : A container for a nested tree of elements that renders the branch that best matches the current location.

---

**Route** : Declares an element that should be rendered at a certain URL path.

---

**Link** : The public API for rendering a history-aware .

---

**NavLink** : A wrapper that knows if it's "active" or not.

---

### setup

```js
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
```
**Note**: `index` === `path='/'`

so what this code say:
  - if the url is root (/) render home component
  - if the url is (/about) render about component

## React Router new version Router Provider, createBrowserRouter & Outlet






