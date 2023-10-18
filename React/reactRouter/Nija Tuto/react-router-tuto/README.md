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

## React Router new version 
for acces to new feature in react router we need to work with new version, that incolude defrent syntax new concepts, but it's completly fine to work with old version, it's sill working.

## Syntax

```js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home'
import About from './pages/about'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

```

### createBrowserRoute
This is the recommended router for all React Router web projects. It uses the [DOM History API](https://developer.mozilla.org/en-US/docs/Web/API/History) to update the URL and manage the history stack.

It also enables the v6.4 data APIs like [loaders](https://reactrouter.com/en/main/route/loader), [actions](https://reactrouter.com/en/main/route/action), [fetchers](https://reactrouter.com/en/main/hooks/use-fetcher) and more.

### JSX Routes
there is two to set your routes configer first one user obj inside objet to set your dom tree
And for our final trick, many folks prefer to configure their routes with JSX. You can do that with createRoutesFromElements. There is no functional difference between JSX or objects when configuring your routes, it's simply a stylistic preference.

### Router Provider

All data router objects are passed to this component to render your app and enable the rest of the data APIs.

### Outlet
An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

## 404 Not Found Page
when the user open our wep app with wrong path we give him a page that say there is no page with this name, and give him some links to go to home page or contacts or ....

```js
<Route path='*' element={<NotFound />} />
```
we add this Route in the buttom of our parent path, and user will see if path is not in our react router routes

## loader

Each route can define a "loader" function to provide data to the route element before it renders.
```js
// ... : other codes in app.jsx
import Careers, { loadingCarrers } from './pages/carrers/Careers'
// ...
<Route index element={<Careers />} loader={loadingCarrers} />
// ...
```
inside ther loader we put a fetch aync function that return a promise and the hook useLoaderData will get resolve that from promise

```js
export const loadingCarrers = async () => {
    const res = await fetch("http://localhost:4000/careers")

    return res.json()
}
```
***Note***: you can set loader function in any file and import it

### useLoaderData
This hook provides the value returned from your route loader.

- it's important to set the useLoaderData hook inside the route element component that hove `loader`
```js
import { useLoaderData } from "react-router-dom"
// ...
const careers = useLoaderData() // array of careers obj
```
## Route Parameters
- Changeable section of a route
- Same component shown for every variation (same template)

Example:

- /users/username
- /users/spider-wahmane
- /users/whybe
- /users/tchisama
- /users/nsila
- /users/ilroez

in this example above we have same path /users but the useranme changeable section in path

```js
<Route 
path="/users/:username" 
element={<UserComponentTemplate />}
loader={fetch_User_Data_Function}
/>
``` 
the React Router send auto the username to fetch_User_Data_Function params u can get it using

```js
export const fetch_User_Data_Function = async ({ params }) => {
    const { id } = params
    console.log(id) // username
    const res = await fetch("http://api.example.com/users/" + id)
    return res.json()
}
```
we can get data from this function using the useLoaderData hook like what we did last Part [loader](#loader)

There is another hook we can use if we want to get the username inside the UserComponentTemplate that called useParams() 
```js
const { useranme } = useParams()
```
***Note***: make sure to use same route parameter that you put in Route path (here we use :username) in every use of it

you can take a look to /src/pages/careers/CreersDetails.jsx for give a look how we use route parameters

## ErrorElement
we use ErrorElement to give the user a page error that give him a understand to the probleme and solution
- for example we use errorElement in our if fetching data has field or the id of carrer not found 

```js
// ...

<Route path='careers' element={<CareersLayout />} errorElement={<CareersError />} >
        // Route elements
</ Route>
// ...

```
the errorElement page will shown if any Route of Route elements throw an error

## useLocation
```js
// https://ilorez/tasks/today

import {useLoction} from 'react-router-dom'
const location = useLocation() // output : /tasks/today
```

## Forms & Actions
- in what can used:
  - create form in any place in your app and send data from it to any script in your app

### Froms
```js
import { Form } from "react-router-dom";

<Form method="post" action="/help/contact" >
        // our fields
</From>
```
- we can import the From from react reouter and put our fields(inputs) just like normla form, and set the method and action but there some defrents here
#### Form method
- form it's not send the request using this method you set when you click on sumbmit (nooo),
the method is just a key and his value `{method:"post"}` that sended to your fanction for use if you need it in other thing.

#### From action
for not confuesed we have two actions that we need to understand:
  - action in our form and that what we will talk about
  - action in our Route (every Route can take it like path and element `ex : action={function}`)
  ```js
  <Route path='/help/contact' element={< Contact />} action={contactAction} />
  ```


=> the From action accept a path to your Route that you want to use the action function iside it
```js
<Form method="post" action="/help/contact" >
        // our fields
</From>
```

### Action
this is the other type:

- we need to create function that will send form data to it 
- the action function must return something

```js
export const contactAction = async ({ request }) => {

    const data = await request.formData()
    const submission = {
        username: data.get("username"),
        email: data.get("email"),
        message: data.get("message"),
    }
    console.log(submission)
    // conditions and connection with db
    if (submission.message.length < 15) {
        return { error: "the message length must be over 15 chars" }
    }

    // redirect
    return redirect("/")

}
```

- how to use action funtion in Route.

```js
import { contactAction } from './path/to/function'
  <Route path='/help/contact' element={< Contact />} action={contactAction} />
```
so the history is:

- when u click on sumbit in your form.
- react create obj Request that contain inforamtion like method path and your input data
- after that will go to path that you set on From action. 
- and pass Route action funtion the Request obj
- after function do what must to (ex : send request to backend) it's will return something 
- maybe return a message(error or succes) that you get from your database after send data to it 
- you can get message and alert it or just set in a specifique position in your dom by using 'useActionData'
- `useActionData`: will get the data that you return from you action function

## redirect
- redirect user to another path
```js
import {redirect } from "react-router-dom";
redirect('/')
```







