# Redux Tutorial
## Redux Essentials
### Intruduction
Welcome to the Redux Essentials tutorial! This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

### Part 1 : Redux Overview and Concepts
#### What is Redux?
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
#### Why Should I Use Redux?
Redux helps you manage "global" state - state that is needed across *many* parts of your application.
#### When Should I Use Redux?
Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:
- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

*Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.*

