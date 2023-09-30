# Inoroduction to Asynchronous & Synchronous
  later we need this to Understand Ajax, Fetch, Promises


## Table of Content
- [Synchronous](#synchronous) 
- [Asynchronous](#asynchronous) 
- [Relation Concept](#relation-concept) 
 
## Synchronous
- Operations Runs in Sequence
- Each Operation Must Wait For The Previous One To Complete
  ```js
      console.log(1);
      console.log(2);
      window.alert("Operation");
      console.log(3);
  ```
  -> after run this code above it's loged in the console 1 and 2 and it's showed an alert that waiting us to click on `ok` to contenu and log number 3. the same happening in the Synchronous programming it's waiting the last synchronous task to complete and give `ok` to start.

## Asynchronous
- Operations Runs In Parallel
- This Means That An Operation Can Occur while Another One Is Still Being Processed
  ```js
      console.log("1");
      console.log("2");
      setTimeout(() => console.log("Operation"), 3000);
      console.log("3");
  ```
  -> after run code above we can see in the consel the number 1,2 and 3 and after 3 seconds it's log 'Operation', that mean the loging of number 3 doesn't wait the last task and this exactly what happen with Asynchronous programming tasks.

## Relation Concept

- JavaScript Is A Single-Threaded
- Multi Threaded Languages.

**Note**: look at 'threaded.md'

Happy Coding!