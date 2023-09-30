# Threaded


## Table of Content
- [JavaScript Is A Single-Threaded](#javascript-is-a-single-threaded) 
- [Multi Threaded Languages](#multi-threaded-languages) 
 
## JavaScript Is A Single-Threaded

JavaScript is a single-threaded programming language, meaning it can only perform one task at a time in the call stack. This is often referred to as the "main thread" or the "UI thread." However, JavaScript can exhibit behavior that appears to be concurrent or multi-threaded through the use of asynchronous programming and web APIs.

**Single-threaded nature**: JavaScript has a single call stack, which is a data structure that records where in the program we are. It follows a Last-In-First-Out (LIFO) order. When a function is called, it's added to the stack, and when a function is finished, it's removed from the stack.

**Asynchronous behavior**: Despite being single-threaded, JavaScript can handle asynchronous operations using mechanisms like callbacks, promises, async/await, and event loops. Asynchronous operations allow the program to continue executing other tasks while waiting for an asynchronous task to complete. For example, making an HTTP request, reading from a file, or waiting for a timer to finish.

**Event loop**: The event loop is a critical component that enables asynchronous behavior in JavaScript. It continuously checks the call stack and the message queue. When the call stack is empty, it takes the first function from the message queue (if any) and pushes it onto the call stack, allowing it to execute.

**Web Workers**: Although the main JavaScript thread is single-threaded, web workers provide a way to create separate threads for concurrent execution. Web workers allow you to run scripts in the background, independently of the main thread. They can communicate with the main thread via message passing.

While JavaScript can utilize mechanisms for asynchronous and concurrent-like behavior, it's important to clarify that it is fundamentally a single-threaded language at its core.

## Multi Threaded Languages

Multi-threaded languages support the concurrent execution of multiple threads within a single program. Threads are independent sequences of instructions that can be scheduled to run in parallel, allowing for better utilization of multi-core processors and improved program performance. Here are some common multi-threaded programming languages:

**Java**: Java is a popular, platform-independent, and strongly multi-threaded programming language. It provides built-in support for creating and managing threads through the `java.lang.Thread` class or by implementing the `java.lang.Runnable` interface.

**C++**: C++ has a standard library that supports multi-threading, known as the C++ Standard Library (std::thread). C++11 and later versions have introduced threading facilities to create and manage threads.

**Python**: Python has a threading module that allows for multi-threading. However, due to the Global Interpreter Lock (GIL), Python threads may not provide a significant performance boost for CPU-bound tasks. For I/O-bound tasks, threads can still be effective.

**C#**: C# is a language commonly used for developing applications on the .NET platform. It has robust support for multi-threading through features like the System.Threading namespace, Task Parallel Library (TPL), and asynchronous programming with async/await.

**Ruby**: Ruby has a standard library that includes threading support, allowing developers to create and manage threads using the Thread class.

**Go (Golang)**: Go is designed with concurrency in mind. It has goroutines (lightweight threads) and channels, which make concurrent programming more manageable and efficient.

**Scala**: Scala, a modern programming language that runs on the Java Virtual Machine (JVM), has built-in support for concurrent programming with the Actor model and the akka library.

**Rust**: Rust is a systems programming language that provides safe concurrency through its ownership and borrowing system. It allows for creating safe concurrent programs with threads.

**Swift**: Swift, the programming language for iOS, macOS, watchOS, and tvOS development, has support for concurrent programming with features like Grand Central Dispatch (GCD) and Operation Queues.

**Haskell**: Haskell is a functional programming language that supports concurrent programming through its lightweight threads and software transactional memory (STM).

These languages provide varying levels of support and features for concurrent and parallel programming, allowing developers to choose the best approach based on their specific use cases and requirements.