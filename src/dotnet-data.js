const commandss = [

  {
    command: ".net",
    text: `
.NET is a cross-platform development platform used to build
web, desktop, mobile, cloud, and gaming applications.
It supports languages like C#, F#, and VB.NET.
.NET applications run on the Common Language Runtime (CLR),
which provides memory management, security,
exception handling, and garbage collection.
    `,
  },

  {
    command: ".clr",
    text: `
CLR (Common Language Runtime) is the execution engine of .NET.
It converts Intermediate Language (IL) into native code
using the Just-In-Time (JIT) compiler.
CLR manages memory allocation, garbage collection,
exception handling, security, and thread management.
    `,
  },

  {
    command: ".cts",
    text: `
CTS (Common Type System) defines how data types are declared
and used across all .NET languages.
It ensures type safety and consistency between languages.
Objects created in one language can be used in another
without compatibility issues.
    `,
  },

  {
    command: ".cls",
    text: `
CLS (Common Language Specification) is a set of rules
that .NET languages must follow.
It ensures cross-language interoperability.
Code that follows CLS rules can be consumed
by any CLS-compliant .NET language.
    `,
  },

  {
    command: ".dotnetversions",
    text: `
.NET Framework is Windows-only and mostly legacy.
.NET Core introduced cross-platform support and better performance.
.NET 5 and above unified the platform into a single .NET.
Modern .NET supports cloud-native apps, microservices,
containers, and high-performance applications.
    `,
  },

  {
    command: ".managed-vs-unmanaged",
    text: `
Managed code runs under CLR control and benefits from
automatic memory management and garbage collection.
Unmanaged code runs directly on the OS and requires
manual memory handling, such as C or C++ code.
    `,
  },

  {
    command: ".struct-vs-class",
    text: `
Structs are value types and stored on the stack or inline.
Classes are reference types stored on the heap.
Structs are faster for small immutable data.
Classes support inheritance, polymorphism, and extensibility.
Choose based on size, mutability, and behavior.
    `,
  },

  {
    command: ".abstract-vs-interface",
    text: `
Abstract classes can have fields, constructors,
and method implementations.
Interfaces define contracts and support multiple inheritance.
From C# 8 onwards, interfaces support default methods.
Use interfaces for loose coupling and abstraction.
    `,
  },

  {
    command: ".records",
    text: `
Records are immutable reference types introduced in C# 9.
They provide value-based equality by default.
Records are ideal for DTOs and API models.
They reduce boilerplate code and support with-expressions.
    `,
  },

  {
    command: ".garbagecollection",
    text: `
Garbage Collection automatically reclaims unused memory.
It uses a generational model for optimization.
Gen 0 holds short-lived objects.
Gen 1 and Gen 2 hold long-lived objects.
This improves application performance and memory usage.
    `,
  },

  {
    command: ".loh",
    text: `
Large Object Heap (LOH) stores objects larger than 85 KB.
LOH is not compacted frequently, which may cause fragmentation.
Large arrays often end up in LOH.
Object pooling helps reduce LOH memory pressure.
    `,
  },

  {
    command: ".dispose-vs-finalize",
    text: `
Dispose explicitly releases unmanaged resources.
Finalize is called automatically by the GC.
Dispose is deterministic and recommended.
Finalize timing is unpredictable and expensive.
Using blocks ensure proper resource cleanup.
    `,
  },

  {
    command: ".dependencyinjection",
    text: `
Dependency Injection removes tight coupling between components.
Dependencies are provided rather than created internally.
It improves testability and maintainability.
ASP.NET Core has built-in DI support.
Constructor injection is the recommended approach.
    `,
  },

  {
    command: ".servicelifetimes",
    text: `
Singleton creates one instance for the entire application.
Scoped creates one instance per HTTP request.
Transient creates a new instance every time.
Incorrect lifetime usage can cause memory leaks.
Never inject scoped services into singletons.
    `,
  },

  {
    command: ".middleware",
    text: `
Middleware components handle HTTP requests and responses.
Each middleware can inspect or modify the request.
Execution order in the pipeline is very important.
Authentication must run before authorization.
Incorrect ordering can break application behavior.
    `,
  },

  {
    command: ".use-run-map",
    text: `
Use adds middleware and continues the pipeline.
Run terminates the pipeline and handles the response.
Map branches the pipeline based on request path.
Use is the most commonly used method.
Wrong ordering can block downstream middleware.
    `,
  },

  {
    command: ".ienumerable-vs-iqueryable",
    text: `
IEnumerable executes queries in memory.
IQueryable executes queries at the database level.
IQueryable is suitable for large datasets.
IEnumerable is better for small in-memory collections.
Choosing incorrectly can severely impact performance.
    `,
  },

  {
    command: ".async-await",
    text: `
Async and await enable non-blocking asynchronous execution.
They improve scalability and responsiveness.
Async methods use compiler-generated state machines.
Avoid Task.Result and Task.Wait to prevent deadlocks.
Always await async calls properly.
    `,
  },

  {
    command: ".deadlock",
    text: `
Deadlocks occur when threads wait indefinitely for resources.
Using Task.Result or Wait can cause deadlocks.
ASP.NET synchronization context increases the risk.
Use async-await consistently end-to-end.
Avoid blocking asynchronous code.
    `,
  },

  {
    command: ".entityframework",
    text: `
Entity Framework is an ORM for database access.
It allows developers to work with data using .NET objects.
It supports LINQ queries and change tracking.
EF reduces boilerplate SQL code.
    `,
  },

  {
    command: ".ef-tracking",
    text: `
Tracking queries monitor entity state changes.
AsNoTracking improves performance for read-only queries.
Tracking consumes more memory.
Use tracking when updates are required.
Use no-tracking for read-heavy scenarios.
    `,
  },

  {
    command: ".nplusone",
    text: `
N+1 problem occurs due to lazy loading.
It results in excessive database queries.
Performance degrades with large datasets.
Use Include, projections, or eager loading to fix it.
Always analyze generated SQL queries.
    `,
  },

  {
    command: ".microservices",
    text: `
Microservices are independently deployable services.
Each service owns its own database.
Services communicate via HTTP or messaging.
They improve scalability and fault isolation.
Monitoring and observability are critical.
    `,
  },

  {
    command: ".circuitbreaker",
    text: `
Circuit Breaker prevents cascading service failures.
It stops calls to failing services temporarily.
Allows dependent systems to recover gracefully.
Polly is commonly used in .NET for resilience.
Retry and fallback policies improve stability.
    `,
  },

  {
    command: ".jwt",
    text: `
JWT is a stateless authentication mechanism.
It consists of header, payload, and signature.
Token is issued after successful authentication.
Client sends token in Authorization header.
JWT improves scalability of distributed systems.
    `,
  },

  {
    command: ".designpatterns",
    text: `
Design patterns solve recurring design problems.
Common .NET patterns include Singleton and Factory.
Repository abstracts data access logic.
Strategy enables dynamic behavior selection.
CQRS separates read and write responsibilities.
    `,
  },

  /* ================= SQL ================= */

  {
    command: "sql joins",
    text: `
Joins combine rows from multiple tables.
Types include INNER, LEFT, RIGHT, and FULL joins.
They are used to fetch related data.
Correct join selection impacts performance.
    `,
  },

  {
    command: "clustered vs nonclustered index",
    text: `
Clustered index defines physical data order.
Non-clustered index stores pointers to data.
Only one clustered index per table is allowed.
Indexes improve read performance but slow writes.
    `,
  },

  {
    command: "transactions and acid",
    text: `
Transactions ensure Atomicity, Consistency,
Isolation, and Durability.
They guarantee reliable data operations.
ACID properties are critical in banking systems.
    `,
  },

  {
    command: "delete vs truncate vs drop",
    text: `
DELETE removes selected rows and can be rolled back.
TRUNCATE removes all rows and is faster.
DROP removes the table structure completely.
    `,
  },

  {
    command: "cte",
    text: `
CTE (Common Table Expression) improves query readability.
It simplifies complex queries.
CTEs can be recursive.
They improve maintainability of SQL code.
    `,
  },

  {
    command: "sql injection",
    text: `
SQL Injection is a security vulnerability.
It allows attackers to manipulate queries.
Prevent it using parameterized queries.
Never concatenate user input directly into SQL.
    `,
  },

];

export default commandss;
