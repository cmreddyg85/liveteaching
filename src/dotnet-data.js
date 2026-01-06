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

  {
    command: "What is .NET?",
    text: `
      <p>.NET is a comprehensive development platform used for building a wide variety of applications, including web, mobile, desktop, and gaming. It supports multiple programming languages, such as C#, F#, and Visual Basic.</p>
      <ul>
        <li><strong>FCL:</strong> Provides a large class library called Framework Class Library.</li>
        <li><strong>CLR:</strong> Runs on a Common Language Runtime which offers services like memory management, security, and exception handling.</li>
      </ul>
          `,
  },
  {
    command: "Common Language Runtime (CLR)",
    text: `
      <p>The CLR is a virtual machine component of the .NET framework that manages the execution of .NET programs.</p>
      <ul>
        <li><strong>Services:</strong> Provides memory management, type safety, exception handling, garbage collection, and thread management.</li>
        <li><strong>JIT Compilation:</strong> Converts Intermediate Language (IL) code into native machine code through Just-In-Time compilation.</li>
      </ul>
          `,
  },
  {
    command: "Managed vs Unmanaged Code",
    text: `
      <p><strong>Managed Code:</strong> Executed by the CLR, which handles garbage collection, exception handling, and type checking.</p>
      <p><strong>Unmanaged Code:</strong> Executed directly by the operating system; programmers must manually handle memory allocation, type safety, and security (e.g., C or C++).</p>
    `,
  },
  {
    command: "C# Program Structure",
    text: `
      <p>A basic C# program consists of:</p>
      <ul>
        <li><strong>Namespace declaration:</strong> Organizes code and controls scope.</li>
        <li><strong>Class declaration:</strong> Defines a new type with data and function members.</li>
        <li><strong>Main method:</strong> The entry point where execution begins and ends.</li>
        <li><strong>Statements/Expressions:</strong> Actions like calling methods or looping.</li>
      </ul>
    `,
  },
  {
    command: "Value vs Reference Types",
    text: `
      <p>This distinction affects how values are stored and manipulated:</p>
      <ul>
        <li><strong>Value Types:</strong> Store data directly on the <strong>stack</strong>; assigning one to another creates a direct copy (e.g., int, bool, structs).</li>
        <li><strong>Reference Types:</strong> Store a pointer to data on the <strong>heap</strong>; assignments point to the same memory object (e.g., classes, strings, arrays).</li>
      </ul>
          `,
  },
  {
    command: "Garbage Collection Basics",
    text: `
      <p>GC is an automatic memory management feature that frees up memory from objects no longer accessible. It operates in three phases:</p>
      <ol>
        <li><strong>Marking:</strong> Identifies heap objects still in use.</li>
        <li><strong>Relocating:</strong> Updates references to objects that will be moved.</li>
        <li><strong>Compacting:</strong> Reclaims space and packs remaining objects to optimize allocation.</li>
      </ol>
    `,
  },
  {
    command: "Exception Handling",
    text: `
      <p>Mechanism to handle runtime errors using try, catch, and finally blocks:</p>
      <ul>
        <li><strong>Try:</strong> Code that might throw an exception.</li>
        <li><strong>Catch:</strong> Code to handle the specific exception.</li>
        <li><strong>Finally:</strong> Executes regardless of an exception, often for cleanup.</li>
      </ul>
    `,
  },
  {
    command: "C# Class Types",
    text: `
      <p>Classes are categorized by functionality:</p>
      <ul>
        <li><strong>Static:</strong> Cannot be instantiated; contains only static members.</li>
        <li><strong>Sealed:</strong> Cannot be inherited from.</li>
        <li><strong>Abstract:</strong> Meant for inheritance; cannot be instantiated directly.</li>
        <li><strong>Partial:</strong> Splits a definition across multiple files.</li>
        <li><strong>Generic:</strong> Uses placeholders for types.</li>
      </ul>
    `,
  },
  {
    command: "Namespaces",
    text: `
      <p>Namespaces organize code into a hierarchical structure and group logically related types. They prevent naming conflicts by qualifying the uniqueness of each type.</p>
    `,
  },
  {
    command: "Encapsulation",
    text: `
      <p>Encapsulation bundles data and methods into a single unit (class) while restricting access to internals via modifiers like <strong>private</strong> or <strong>protected</strong>. It promotes data integrity and reduces complexity through "data hiding".</p>
    `,
  },

  // --- INTERMEDIATE ---
  {
    command: "Polymorphism",
    text: `
      <p>Allows objects to be treated as instances of their parent class.</p>
      <ul>
        <li><strong>Static (Compile-time):</strong> Method or operator overloading.</li>
        <li><strong>Dynamic (Runtime):</strong> Method overriding using <code>virtual</code> and <code>override</code>.</li>
      </ul>
    `,
  },
  {
    command: "Delegates",
    text: `
      <p>Type-safe function pointers that allow methods to be passed as parameters. Types include single-cast, multicast (pointing to multiple methods), and anonymous/lambdas.</p>
    `,
  },
  {
    command: "LINQ",
    text: `
      <p>Language Integrated Query provides a uniform way to query various data sources like collections, databases, or XML. It is strongly typed and supports compile-time checking.</p>
    `,
  },
  {
    command: "Abstract Class vs Interface",
    text: `
      <ul>
        <li><strong>Abstract Class:</strong> Can contain implementations, fields, and constructors; supports single inheritance.</li>
        <li><strong>Interface:</strong> Only declarations (contracts); implicitly public members; supports multiple inheritance.</li>
      </ul>
      [Image comparing Abstract Classes and Interfaces]
    `,
  },
  {
    command: "Memory Management Management",
    text: `
      <p>Managed by the GC, but developers should use the <strong>Dispose Pattern</strong> (IDisposable) for unmanaged resources and <strong>using statements</strong> for automatic cleanup. Large objects are handled in a specific Large Object Heap (LOH).</p>
    `,
  },
  {
    command: "Threading in .NET",
    text: `
      <p>Allows simultaneous operations via:</p>
      <ul>
        <li><strong>System.Threading.Thread:</strong> Low-level direct control.</li>
        <li><strong>ThreadPool:</strong> Managed worker threads for short tasks.</li>
        <li><strong>TPL (Task Parallel Library):</strong> Higher-level abstraction using Tasks.</li>
      </ul>
    `,
  },
  {
    command: "Async/Await",
    text: `
      <p>Simplifies asynchronous programming by allowing non-blocking operations. <code>async</code> marks a method as asynchronous, and <code>await</code> pauses execution until the task completes, freeing the thread for other work.</p>
    `,
  },
  {
    command: "Entity Framework Advantages",
    text: `
      <p>EF is an ORM that abstracts database operations. Benefits include increased productivity, maintainability via migrations, LINQ support, and database agnosticism.</p>
    `,
  },
  {
    command: "Extension Methods",
    text: `
      <p>Allow adding new methods to existing types without modifying the original source code. They are defined as static methods in static classes using the <code>this</code> keyword on the first parameter.</p>
    `,
  },
  {
    command: "Async Exception Handling",
    text: `
      <p>Exceptions in Tasks are captured in the Task object. They can be handled via try-catch inside the async method, awaiting the task in a try-catch, or using <code>Task.ContinueWith</code>.</p>
    `,
  },

  // --- ADVANCED ---
  {
    command: "Reflection",
    text: `
      <p>Allows runtime inspection of assemblies and metadata. Use cases include dynamically loading assemblies, invoking methods, and reading custom attributes.</p>
    `,
  },
  {
    command: "Middleware in ASP.NET Core",
    text: `
      <p>Software assembled into an application pipeline to handle requests/responses. Each component can pass the request to the next or short-circuit the pipeline.</p>
    `,
  },
  {
    command: "Dependency Injection (DI)",
    text: `
      <p>Removes direct dependencies between components to facilitate loose coupling. Registered in <code>Startup.ConfigureServices</code> with lifetimes: <strong>Singleton</strong>, <strong>Scoped</strong>, or <strong>Transient</strong>.</p>
          `,
  },
  {
    command: "Purpose of .NET Standard",
    text: `
      <p>A formal specification of APIs intended to be available on all .NET implementations (Core, Framework, Xamarin) to ensure uniformity and code reuse.</p>
    `,
  },
  {
    command: ".NET Core vs Framework vs Xamarin",
    text: `
      <ul>
        <li><strong>Framework:</strong> Original Windows-centric implementation.</li>
        <li><strong>Core:</strong> Cross-platform, open-source, and modular.</li>
        <li><strong>Xamarin:</strong> Specific for native mobile (iOS/Android) apps.</li>
      </ul>
    `,
  },
  {
    command: "GC Optimization",
    text: `
      <p>Optimization techniques include minimizing allocations, understanding generations (0, 1, 2), using structs for small data, and implementing <strong>IDisposable</strong>.</p>
    `,
  },
  {
    command: "Attributes in C#",
    text: `
      <p>Declarative metadata added to code elements. Used for compiler instructions (e.g., [Serializable]), validation (e.g., [Required]), or custom domain logic.</p>
    `,
  },
  {
    command: "Code Compilation Process",
    text: `
      <p>Steps:</p>
      <ol>
        <li><strong>Source to IL:</strong> Compiler (Roslyn) creates Intermediate Language and metadata.</li>
        <li><strong>IL to Native:</strong> CLR's JIT compiler converts IL to machine code at runtime.</li>
      </ol>
    `,
  },
  {
    command: "Global Assembly Cache (GAC)",
    text: `
      <p>A machine-wide cache for shared assemblies with strong names. It facilitates side-by-side versioning in .NET Framework but is not used in .NET Core/5+.</p>
    `,
  },
  {
    command: "Securing ASP.NET Core",
    text: `
      <p>Involves authentication, authorization, enforcing HTTPS redirection, and protecting data.</p>
    `,
  },

  // --- FRAMEWORK-SPECIFIC ---
  {
    command: "MVC Pattern",
    text: `
      <p>Separates apps into:</p>
      <ul>
        <li><strong>Model:</strong> Data and business logic.</li>
        <li><strong>View:</strong> Presentation layer.</li>
        <li><strong>Controller:</strong> Handles input and updates the model.</li>
      </ul>
    `,
  },
  {
    command: "Razor Pages vs MVC",
    text: `
      <p>MVC uses controllers; Razor Pages uses built-in page handlers (OnGet, OnPost). Razor Pages is ideal for simple, page-focused apps; MVC is better for large, complex structures.</p>
    `,
  },
  {
    command: "ASP.NET Core Validations",
    text: `
      <p>Performed using <strong>Data Annotations</strong> (e.g., [Required], [EmailAddress]) or <strong>Fluent Validation</strong>.</p>
    `,
  },
  {
    command: "SignalR",
    text: `
      <p>A library for real-time communication using WebSockets to enable interactive features like chat.</p>
    `,
  },
  {
    command: "Blazor Benefits",
    text: `
      <p>Allows building web UIs using C# and .NET instead of JavaScript, leveraging the same code on client and server.</p>
    `,
  },
  {
    command: "Web API Versioning",
    text: `
      <p>Ensures backward compatibility; implemented using versioning middleware to handle different API versions (e.g., 1.0, 2.0).</p>
    `,
  },
  {
    command: "IApplicationBuilder",
    text: `
      <p>Used in <code>Startup.Configure()</code> to define and order the middleware pipeline.</p>
    `,
  },
  {
    command: "Areas in ASP.NET Core",
    text: `
      <p>Used to organize large MVC apps by grouping related controllers, views, and models into functional units (e.g., "Admin").</p>
    `,
  },
  {
    command: "Session Management",
    text: `
      <p>Provides state management using <code>ISession</code> to store user data across requests.</p>
    `,
  },
  {
    command: "Caching in ASP.NET Core",
    text: `
      <p>Supports <strong>In-Memory Caching</strong> for local storage and <strong>Distributed Caching</strong> for shared environments.</p>
    `,
  },

  // --- TESTING & BEST PRACTICES ---
  {
    command: "Unit Testing",
    text: `
      <p>The practice of testing individual components in isolation, typically using frameworks like NUnit.</p>
    `,
  },
  {
    command: "Mocking",
    text: `
      <p>Simulating dependencies in unit tests using libraries like <strong>Moq</strong> to isolate the component being tested.</p>
    `,
  },
  {
    command: "SOLID Principles Detailed",
    text: `
      <ol>
        <li><strong>S:</strong> Single Responsibility.</li>
        <li><strong>O:</strong> Open/Closed.</li>
        <li><strong>L:</strong> Liskov Substitution.</li>
        <li><strong>I:</strong> Interface Segregation.</li>
        <li><strong>D:</strong> Dependency Inversion.</li>
      </ol>
    `,
  },
  {
    command: "CI/CD in .NET",
    text: `
      <p>Automates code integration, testing, and deployment (e.g., using GitHub Actions) to improve release speed and quality.</p>
    `,
  },
  {
    command: "C# Security Best Practices",
    text: `
      <p>Key measures: Parameterized queries, hashing/salting passwords, enabling HTTPS, validating input, and using DI for secrets.</p>
    `,
  },
  {
    command: "Performance Issues",
    text: `
      <p>Common issues: Memory leaks (address with IDisposable), slow DB queries (optimize SQL), and excessive allocations (use object pooling).</p>
    `,
  },
  {
    command: "Repository Pattern",
    text: `
      <p>Abstracts the data layer to centralize access logic, improve testability, and separate concerns.</p>
    `,
  },
  {
    command: "Database Migrations",
    text: `
      <p>Allow changes to DB schema while preserving data using CLI commands like <code>dotnet ef migrations add</code> and <code>update</code>.</p>
    `,
  },
  {
    command: "Debugging & Profiling Tools",
    text: `
      <p>Tools: Visual Studio Debugger, dotTrace (CPU), BenchmarkDotNet (performance), and dotMemory (memory leaks).</p>
    `,
  },
  {
    command: "Staying Updated",
    text: `
      <p>Recommended: Microsoft .NET Blog, conferences like Build, and communities like GitHub or Stack Overflow.</p>
    `,
  },

  // --- SQL ---
  {
    command: "SQL Join Differences",
    text: `
      <ul>
        <li><strong>INNER:</strong> Matching rows in both tables.</li>
        <li><strong>LEFT:</strong> All from left + matches from right.</li>
        <li><strong>RIGHT:</strong> All from right + matches from left.</li>
        <li><strong>FULL:</strong> All rows when there is a match in either.</li>
      </ul>
          `,
  },
  {
    command: "Primary Key vs Unique Key",
    text: `
      <p><strong>Primary Key:</strong> Unique ID, cannot be NULL, only one per table.</p>
      <p><strong>Unique Key:</strong> Ensures uniqueness but allows NULLs; multiple allowed per table.</p>
    `,
  },
  {
    command: "Foreign Keys",
    text: `
      <p>Constraints linking tables to enforce referential integrity. They prevent invalid references and restrict deleting parent rows referenced by child rows.</p>
    `,
  },
  {
    command: "SQL Normalization",
    text: `
      <p>Process to reduce redundancy:</p>
      <ul>
        <li><strong>1NF:</strong> Atomic values.</li>
        <li><strong>2NF:</strong> 1NF + no partial functional dependency.</li>
        <li><strong>3NF:</strong> 2NF + no transitive dependency.</li>
      </ul>
          `,
  },
  {
    command: "Clustered vs Non-Clustered Index",
    text: `
      <p><strong>Clustered:</strong> Determines physical order of data; only one per table.</p>
      <p><strong>Non-Clustered:</strong> Separate structure pointing to data; multiple allowed.</p>
    `,
  },
  {
    command: "SQL Transactions & ACID",
    text: `
      <p>Transactions are single logical units of work following ACID: <strong>Atomicity</strong>, <strong>Consistency</strong>, <strong>Isolation</strong>, and <strong>Durability</strong>.</p>
    `,
  },
  {
    command: "DELETE vs TRUNCATE vs DROP",
    text: `
      <ul>
        <li><strong>DELETE:</strong> Row-by-row, supports WHERE, can be rolled back.</li>
        <li><strong>TRUNCATE:</strong> Removes all rows, faster, minimal logging.</li>
        <li><strong>DROP:</strong> Removes entire table structure and data.</li>
      </ul>
    `,
  },
  {
    command: "Window Functions",
    text: `
      <p>Perform calculations across rows related to the current row without grouping (e.g., ROW_NUMBER, RANK, SUM OVER).</p>
    `,
  },
  {
    command: "CTE vs Subquery",
    text: `
      <p><strong>CTE:</strong> Named temporary result set using <code>WITH</code>; improves readability and supports recursion.</p>
      <p><strong>Subquery:</strong> Nested query; can be messier and cannot be recursive.</p>
    `,
  },
  {
    command: "Stored Procedures",
    text: `
      <p>Precompiled SQL statements. Advantages: performance, security, reusability. Disadvantages: complexity, portability issues.</p>
    `,
  },
  {
    command: "Preventing SQL Injection",
    text: `
      <p>Techniques: Parameterized queries, using ORMs like EF Core, input validation, and least privilege principle.</p>
    `,
  },
  {
    command: "EXISTS vs IN",
    text: `
      <p><strong>IN:</strong> Compares value to a list; subquery loads into memory.</p>
      <p><strong>EXISTS:</strong> Checks for existence; stops at first match; often faster for large sets.</p>
    `,
  },
  {
    command: "Indexing & Slow Queries",
    text: `
      <p>Indexes improve retrieval speed using B-trees. Slow queries are identified via execution plans and tools like SQL Profiler.</p>
    `,
  },
  {
    command: "EXPLAIN / QUERY PLAN",
    text: `
      <p>Shows how the engine executes a query, identifying bottlenecks like full table scans and index usage.</p>
          `,
  },
  {
    command: "Aggregate Functions & GROUP BY",
    text: `
      <p>Aggregates (COUNT, SUM, AVG) return single values from sets. <code>GROUP BY</code> organizes summary rows; <code>HAVING</code> filters results <strong>after</strong> aggregation.</p>
    `,
  },
  {
    command: "Composite Keys",
    text: `
      <p>Combination of multiple columns used as a primary key to uniquely identify rows when single columns aren't unique.</p>
    `,
  },
  {
    command: "Materialized View vs Regular View",
    text: `
      <p><strong>View:</strong> Virtual table recomputed on access.</p>
      <p><strong>Materialized View:</strong> Physically stored result set; faster for heavy queries but can be stale.</p>
    `,
  },
  {
    command: "Handling NULL Values",
    text: `
      <p>Check using <code>IS NULL</code>. Use <code>COALESCE</code> or <code>ISNULL</code> to provide fallback values for unknown/missing data.</p>
    `,
  },
  {
    command: "Scalar vs Table-Valued Functions",
    text: `
      <p><strong>Scalar:</strong> Returns a single value (e.g., YEAR).</p>
      <p><strong>Table-Valued:</strong> Returns a set of rows; can be used in the <code>FROM</code> clause.</p>
    `,
  },
  {
    command: "Multi-tenant Schema Design",
    text: `
      <p>Approaches: Single DB/Shared Schema (TenantId column), Single DB/Separate Schema per tenant, or Database per tenant.</p>
          `,
  }

];

export default commandss;
