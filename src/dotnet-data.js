const commandss = [
  {
  "command": "Professional Introduction",
  "text": `
    <p>Hi! I am [Your Name],</p>

    <p>I have over five years of experience in developing scalable and user-friendly web applications using <b>React.js</b> and <b>.NET</b>.</p>

    <p>On the front end, I specialize in building interactive and responsive user interfaces with React, HTML, CSS, and JavaScript.</p>

    <p>On the backend, I work with <b>.NET Core</b> and <b>Entity Framework</b> to design robust APIs and handle business logic.</p>

    <p>I have strong experience working with <b>SQL</b> for database design, query optimization, and data integrity.</p>

    <p>I also have hands-on experience deploying and monitoring applications on <b>Azure</b>, including App Services and Azure SQL.</p>

    <p>I collaborate closely with designers and cross-functional teams to deliver high-quality solutions.</p>

    <p>I continuously learn new technologies and follow best practices to build reliable and high-performance applications.</p>
  `
}
,
{
  "command": "Roles and Responsibilities",
  "text": `
    <p><b>Roles and Responsibilities</b></p>

    <ul>
      <li>Design and develop scalable web applications using <b>React.js</b> and <b>.NET Core</b>.</li>
      <li>Build reusable and responsive UI components following best practices.</li>
      <li>Develop and maintain RESTful APIs using <b>.NET Core</b> and <b>Entity Framework</b>.</li>
      <li>Design and optimize <b>SQL</b> queries, indexes, and database schemas.</li>
      <li>Implement authentication, authorization, and secure data access.</li>
      <li>Deploy, monitor, and troubleshoot applications on <b>Azure</b>.</li>
      <li>Collaborate with designers, QA, and cross-functional teams.</li>
      <li>Participate in code reviews and ensure high code quality.</li>
      <li>Identify performance bottlenecks and implement optimizations.</li>
      <li>Follow Agile practices and contribute to sprint planning and delivery.</li>
    </ul>
  `

},
{
  "command": "Day-to-Day Responsibilities",
  "text": `
    <p><b>Day-to-Day Responsibilities</b></p>

    <ul>
      <li>Develop and enhance UI features using <b>React.js</b> based on business requirements.</li>
      <li>Implement backend APIs using <b>.NET Core</b> and <b>Entity Framework</b>.</li>
      <li>Write, review, and optimize <b>SQL</b> queries for daily data operations.</li>
      <li>Fix bugs, handle production issues, and perform root cause analysis.</li>
      <li>Participate in daily stand-up meetings and sprint activities.</li>
      <li>Collaborate with UI/UX designers to implement pixel-perfect screens.</li>
      <li>Perform code reviews and ensure coding standards are followed.</li>
      <li>Deploy builds and monitor application health on <b>Azure</b>.</li>
      <li>Write unit tests and support QA during testing cycles.</li>
      <li>Continuously refactor code to improve performance and maintainability.</li>
    </ul>
  `
}
,
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
  },

  {
  "command": "SQL Experience or what have you done in sql",
  "text": `
    <p>Extensive experience in designing and managing relational databases using SQL.</p>
    <ul>
      <li>Written complex <b>SELECT</b> queries using <b>JOINs, subqueries, CTEs, and window functions</b>.</li>
      <li>Handled <b>CRUD operations</b> and optimized queries using <b>indexes and execution plans</b>.</li>
      <li>Created and maintained <b>tables, views, stored procedures, and functions</b>.</li>
      <li>Ensured <b>data integrity, constraints, transactions, and security</b> in production systems.</li>
    </ul>
  `
  },
{
  "command": "SQL View",
  "text": `
    <p>A <b>View</b> is a virtual table created using a SQL query. It does not store data but shows data from one or more tables.</p>
    <ul>
      <li>Used to simplify complex queries.</li>
      <li>Helps improve security by exposing only required columns.</li>
      <li>Makes query reuse easier and cleaner.</li>
    </ul>
    <p><b>Example:</b></p>
    <pre>
CREATE VIEW EmployeeView AS
SELECT Id, Name, Department
FROM Employees
WHERE IsActive = 1;
    </pre>
    <p>This view shows only active employees and hides sensitive columns.</p>
  `
}
,

{
  "command": "Stored Procedure and Function",
  "text": `
    <p><b>Stored Procedure</b> is a set of SQL statements saved in the database and executed when called.</p>
    <ul>
      <li>Used to perform business logic and complex operations.</li>
      <li>Can return multiple values using OUT parameters.</li>
      <li>Can perform INSERT, UPDATE, DELETE operations.</li>
    </ul>

    <p><b>Function</b> is a database object that returns a single value or a table.</p>
    <ul>
      <li>Mainly used for calculations and reusable logic.</li>
      <li>Must return a value.</li>
      <li>Can be used inside SELECT statements.</li>
    </ul>

    <p><b>Procedure vs Function</b></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Procedure</th>
        <th>Function</th>
      </tr>
      <tr>
        <td>May or may not return a value</td>
        <td>Must return a value</td>
      </tr>
      <tr>
        <td>Cannot be used in SELECT</td>
        <td>Can be used in SELECT</td>
      </tr>
      <tr>
        <td>Supports transactions</td>
        <td>Does not support transactions</td>
      </tr>
      <tr>
        <td>Used for business logic</td>
        <td>Used for calculations</td>
      </tr>
    </table>
  `
}
,

{
  "command": "SQL Index",
  "text": `
    <p>An <b>Index</b> is used to speed up data retrieval from a table, similar to an index in a book.</p>

    <p><b>Advantages</b></p>
    <ul>
      <li>Significantly improves SELECT query performance.</li>
      <li>Reduces full table scans.</li>
      <li>Helps in faster sorting and filtering of data.</li>
    </ul>

    <p><b>Disadvantages</b></p>
    <ul>
      <li>Uses additional disk storage.</li>
      <li>Slows down INSERT, UPDATE, and DELETE operations.</li>
      <li>Requires maintenance to keep indexes updated.</li>
    </ul>

    <p><b>Index Types</b></p>
    <ul>
      <li><b>Clustered Index</b> – Stores table data in sorted order physically.</li>
      <li><b>Non-Clustered Index</b> – Separate structure pointing to table data.</li>
      <li><b>Unique Index</b> – Prevents duplicate values.</li>
      <li><b>Composite Index</b> – Created using multiple columns.</li>
    </ul>

    <p><b>Examples:</b></p>
    <pre>
-- Clustered Index
CREATE CLUSTERED INDEX idx_emp_id ON Employees(Id);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_emp_dept ON Employees(Department);

-- Unique Index
CREATE UNIQUE INDEX idx_emp_email ON Employees(Email);

-- Composite Index
CREATE INDEX idx_emp_name_dept ON Employees(Name, Department);
    </pre>
  `
}
,

{
  "command": "Clustered vs Non-Clustered Index",
  "text": `
    <p><b>Clustered Index</b> defines the physical order of data in a table. A table can have only one clustered index.</p>
    <ul>
      <li>Data is stored in sorted order.</li>
      <li>Faster for range queries.</li>
      <li>Usually created on primary key.</li>
    </ul>

    <p><b>Non-Clustered Index</b> is a separate structure that points to the data rows. A table can have multiple non-clustered indexes.</p>
    <ul>
      <li>Does not change physical order of data.</li>
      <li>Stores key values and row references.</li>
      <li>Slower than clustered for range scans.</li>
    </ul>

    <p><b>Differences</b></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Clustered Index</th>
        <th>Non-Clustered Index</th>
      </tr>
      <tr>
        <td>Only one per table</td>
        <td>Multiple per table</td>
      </tr>
      <tr>
        <td>Physically sorts table data</td>
        <td>Logical ordering only</td>
      </tr>
      <tr>
        <td>Faster for range queries</td>
        <td>Needs extra lookup</td>
      </tr>
    </table>

    <p><b>Examples:</b></p>
    <pre>
-- Clustered Index
CREATE CLUSTERED INDEX idx_emp_id ON Employees(Id);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_emp_dept ON Employees(Department);
    </pre>
  `
}

,
{
  "command": "SQL Keys",
  "text": `
    <p><b>Keys</b> in SQL are used to uniquely identify records in a table and to create relationships between tables.</p>

    <p><b>Types of Keys</b></p>
    <ul>
      <li><b>Primary Key</b> – Uniquely identifies each record and does not allow NULL values.</li>
      <li><b>Foreign Key</b> – Links one table to another table’s primary key.</li>
      <li><b>Unique Key</b> – Ensures all values in a column are unique.</li>
      <li><b>Candidate Key</b> – A column (or columns) that can be a primary key.</li>
      <li><b>Composite Key</b> – A key made using more than one column.</li>
      <li><b>Alternate Key</b> – Candidate keys not chosen as the primary key.</li>
    </ul>

    <p><b>Examples:</b></p>
    <pre>
-- Primary Key
CREATE TABLE Employees (
  Id INT PRIMARY KEY,
  Email VARCHAR(100) UNIQUE
);

-- Foreign Key
CREATE TABLE Orders (
  OrderId INT PRIMARY KEY,
  EmployeeId INT,
  FOREIGN KEY (EmployeeId) REFERENCES Employees(Id)
);

-- Composite Key
CREATE TABLE StudentMarks (
  StudentId INT,
  SubjectId INT,
  PRIMARY KEY (StudentId, SubjectId)
);
    </pre>

    <p>Keys help maintain <b>data integrity</b>, avoid duplicates, and define relationships between tables.</p>
  `
}
,
{
  "command": "SQL Query Optimization",
  "text": `
    <p><b>SQL Query Optimization</b> is the process of improving query performance to reduce execution time and resource usage.</p>

    <p><b>Best Practices</b></p>
    <ul>
      <li>Use proper <b>indexes</b> on frequently filtered and joined columns.</li>
      <li>Avoid using <b>SELECT *</b>; fetch only required columns.</li>
      <li>Use <b>WHERE</b> clause to filter records early.</li>
      <li>Prefer <b>JOINs</b> over subqueries when possible.</li>
      <li>Use <b>EXPLAIN</b> or execution plans to analyze queries.</li>
      <li>Avoid functions on indexed columns in WHERE clause.</li>
    </ul>

    <p><b>Example</b></p>
    <pre>
-- Non-Optimized Query
SELECT *
FROM Employees
WHERE YEAR(JoiningDate) = 2024;

-- Optimized Query
SELECT Id, Name
FROM Employees
WHERE JoiningDate >= '2024-01-01'
  AND JoiningDate < '2025-01-01';
    </pre>

    <p>Optimized queries improve <b>performance</b>, reduce <b>CPU and memory usage</b>, and scale better in production systems.</p>
  `
}
,
{
  "command": "Second Highest Salary",
  "text": `
    <p>The <b>Second Highest Salary</b> query is used to find the employee with the second highest salary from a table.</p>

    <p><b>Approaches</b></p>
    <ul>
      <li>Using <b>ORDER BY</b> and <b>LIMIT / OFFSET</b></li>
      <li>Using <b>Subquery</b></li>
      <li>Using <b>Dense Rank</b> (recommended)</li>
    </ul>

    <p><b>Examples</b></p>

    <p><b>1. Using ORDER BY</b></p>
    <pre>
SELECT Salary
FROM Employees
ORDER BY Salary DESC
OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;
    </pre>

    <p><b>2. Using Subquery</b></p>
    <pre>
SELECT MAX(Salary)
FROM Employees
WHERE Salary < (SELECT MAX(Salary) FROM Employees);
    </pre>

    <p><b>3. Using DENSE_RANK (Best Approach)</b></p>
    <pre>
SELECT Salary
FROM (
  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk
  FROM Employees
) t
WHERE rnk = 2;
    </pre>

    <p><b>Note:</b> <b>DENSE_RANK</b> handles duplicate salaries correctly.</p>
  `
}
,
{
  "command": "SQL PIVOT",
  "text": `
    <p><b>PIVOT</b> is used to convert rows into columns, making data easier to read and analyze.</p>

    <p><b>Why use PIVOT?</b></p>
    <ul>
      <li>Transforms row-based data into column format.</li>
      <li>Helpful for reports and summaries.</li>
      <li>Improves data readability.</li>
    </ul>

    <p><b>Example</b></p>
    <pre>
SELECT *
FROM (
  SELECT EmployeeName, Month, Salary
  FROM EmployeeSalary
) src
PIVOT (
  SUM(Salary)
  FOR Month IN ([Jan], [Feb], [Mar])
) pvt;
    </pre>

    <p>This converts month-wise salary rows into columns for each employee.</p>
  `
}
,

{
  "command": "SQL CTE",
  "text": `
    <p><b>CTE (Common Table Expression)</b> is a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.</p>

    <p><b>Advantages</b></p>
    <ul>
      <li>Makes complex queries more readable and maintainable.</li>
      <li>Helps break large queries into logical steps.</li>
      <li>Can be referenced multiple times within the same query.</li>
      <li>Useful for hierarchical and recursive queries.</li>
    </ul>

    <p><b>Examples</b></p>

    <p><b>1. Simple CTE</b></p>
    <pre>
WITH EmployeeCTE AS (
  SELECT Id, Name, Department, Salary
  FROM Employees
)
SELECT *
FROM EmployeeCTE
WHERE Salary > 50000;
    </pre>

    <p><b>2. CTE with JOIN</b></p>
    <pre>
WITH DeptCTE AS (
  SELECT d.Id, d.DepartmentName, e.Name
  FROM Departments d
  JOIN Employees e ON d.Id = e.DepartmentId
)
SELECT *
FROM DeptCTE;
    </pre>

    <p><b>3. Recursive CTE</b></p>
    <pre>
WITH OrgCTE AS (
  SELECT Id, Name, ManagerId
  FROM Employees
  WHERE ManagerId IS NULL
  UNION ALL
  SELECT e.Id, e.Name, e.ManagerId
  FROM Employees e
  JOIN OrgCTE o ON e.ManagerId = o.Id
)
SELECT *
FROM OrgCTE;
    </pre>

    <p>CTEs exist only during query execution and do not store data permanently.</p>
  `
}
,
{
  "command": "SQL Joins",
  "text": `
    <p><b>JOIN</b> is used to combine data from two or more tables based on a related column.</p>

    <p><b>Types of Joins</b></p>

    <p><b>1. INNER JOIN</b> – Returns only matching records from both tables.</p>
    <pre>
SELECT e.Name, d.DepartmentName
FROM Employees e
INNER JOIN Departments d
ON e.DepartmentId = d.Id;
    </pre>

    <p><b>2. LEFT JOIN</b> – Returns all records from left table and matching records from right table.</p>
    <pre>
SELECT e.Name, d.DepartmentName
FROM Employees e
LEFT JOIN Departments d
ON e.DepartmentId = d.Id;
    </pre>

    <p><b>3. RIGHT JOIN</b> – Returns all records from right table and matching records from left table.</p>
    <pre>
SELECT e.Name, d.DepartmentName
FROM Employees e
RIGHT JOIN Departments d
ON e.DepartmentId = d.Id;
    </pre>

    <p><b>4. FULL OUTER JOIN</b> – Returns all records when there is a match in either table.</p>
    <pre>
SELECT e.Name, d.DepartmentName
FROM Employees e
FULL OUTER JOIN Departments d
ON e.DepartmentId = d.Id;
    </pre>

    <p><b>5. CROSS JOIN</b> – Returns the Cartesian product of both tables.</p>
    <pre>
SELECT e.Name, d.DepartmentName
FROM Employees e
CROSS JOIN Departments d;
    </pre>

    <p><b>Summary</b></p>
    <ul>
      <li><b>INNER</b> – Matching data only</li>
      <li><b>LEFT</b> – All left + matching right</li>
      <li><b>RIGHT</b> – All right + matching left</li>
      <li><b>FULL</b> – All records from both tables</li>
      <li><b>CROSS</b> – Every combination</li>
    </ul>
  `
}

,
{
  "command": "SQL Self Join",
  "text": `
    <p><b>SELF JOIN</b> is a join where a table is joined with itself.</p>
    <p>It is mainly used to compare rows within the same table.</p>

    <p><b>Use Case</b></p>
    <ul>
      <li>Employee–Manager relationship</li>
      <li>Comparing records in the same table</li>
    </ul>

    <p><b>Example: Employee and Manager</b></p>
    <pre>
SELECT 
  e.Name AS EmployeeName,
  m.Name AS ManagerName
FROM Employees e
LEFT JOIN Employees m
ON e.ManagerId = m.Id;
    </pre>

    <p>
      In this example:
      <ul>
        <li><b>e</b> represents employee records</li>
        <li><b>m</b> represents manager records</li>
        <li>Both come from the same <b>Employees</b> table</li>
      </ul>
    </p>
  `
}
,

{
  "command": "RANK vs DENSE_RANK vs ROW_NUMBER",
  "text": `
    <p>These are <b>window functions</b> used to assign ranking numbers to rows based on ordering.</p>

    <p><b>Differences</b></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Function</th>
        <th>Description</th>
        <th>Duplicate Values</th>
        <th>Gaps in Ranking</th>
      </tr>
      <tr>
        <td>ROW_NUMBER()</td>
        <td>Assigns a unique number to each row</td>
        <td>No</td>
        <td>No</td>
      </tr>
      <tr>
        <td>RANK()</td>
        <td>Same rank for duplicates</td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>DENSE_RANK()</td>
        <td>Same rank for duplicates</td>
        <td>Yes</td>
        <td>No</td>
      </tr>
    </table>

    <p><b>Example</b></p>
    <pre>
SELECT Name, Salary,
ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum,
RANK() OVER (ORDER BY Salary DESC) AS RankNum,
DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRankNum
FROM Employees;
    </pre>

    <p><b>Result Explanation</b></p>
    <ul>
      <li>If two employees have the same salary:</li>
      <li><b>ROW_NUMBER</b> gives different numbers</li>
      <li><b>RANK</b> skips the next number</li>
      <li><b>DENSE_RANK</b> does not skip numbers</li>
    </ul>
  `
}
,
   /* ================= Azure Questions ================= */

{
  "command": "What have you done in Azure?",
  "text": `
    <p>I have worked extensively on designing, deploying, securing, and monitoring cloud-native applications in Azure.</p>
    <ul>
      <li>Hosted enterprise applications using <b>Azure App Service</b> and <b>AKS</b>.</li>
      <li>Designed CI/CD pipelines using <b>Azure DevOps</b>.</li>
      <li>Implemented monitoring, logging, and alerts using <b>Application Insights</b> and <b>Azure Monitor</b>.</li>
      <li>Handled security using <b>Azure AD, Key Vault, Managed Identity</b>.</li>
      <li>Optimized cost, performance, and scalability for production workloads.</li>
    </ul>
  `
},
{
  "command": "Azure Services",
  "text": `
    <p>I have worked with multiple Azure services across compute, storage, security, and integration layers.</p>
    <ul>
      <li><b>Compute</b>: App Service, Azure Functions, AKS</li>
      <li><b>Data</b>: Azure SQL, Blob Storage, Cosmos DB</li>
      <li><b>Integration</b>: Service Bus, Event Grid</li>
      <li><b>Security</b>: Azure AD, Key Vault, Managed Identity</li>
      <li><b>Monitoring</b>: Application Insights, Log Analytics</li>
      <li><b>DevOps</b>: Azure DevOps Pipelines</li>
    </ul>
  `
}

,

{
  "command": "Azure Functions",
  "text": `
    <p>Azure Functions are serverless components used for event-driven and background processing.</p>

    <p><b>Real-Time Usage</b></p>
    <ul>
      <li>Background jobs</li>
      <li>Message processing from Service Bus</li>
      <li>Scheduled cleanup tasks</li>
    </ul>

    <p><b>Example</b></p>
    <pre>
[FunctionName("ProcessOrders")]
public async Task Run(
  [ServiceBusTrigger("orders")] string message,
  ILogger log)
{
  log.LogInformation(message);
}
    </pre>
  `
}
,
{
  "command": "Azure Application Insights",
  "text": `
    <p>Used for end-to-end monitoring and performance diagnostics in production systems.</p>
    <ul>
      <li>Tracked API latency, failure rates, and dependencies</li>
      <li>Monitored SQL and external service calls</li>
      <li>Configured alerts for SLA breaches</li>
    </ul>
  `
}
,

{
  "command": "Azure Key Vault & Blob Storage",
  "text": `
    <p><b>Key Vault</b> is used to store secrets securely, and <b>Blob Storage</b> is used for unstructured data.</p>
    <ul>
      <li>Stored DB passwords, API keys, certificates in Key Vault</li>
      <li>Used Managed Identity to access secrets</li>
      <li>Stored documents, images, logs in Blob Storage</li>
    </ul>
  `
}
,
{
  "command": "AKS (Azure Kubernetes Service)",
  "text": `
    <p>AKS is used to run containerized microservices at scale.</p>
    <ul>
      <li>Deployed multiple microservices</li>
      <li>Enabled auto-scaling and rolling updates</li>
      <li>Used Helm and YAML for deployments</li>
    </ul>
  `
}
,
{
  "command": "Azure Active Directory",
  "text": `
    <p>Azure AD is used for authentication, authorization, and identity management.</p>
    <ul>
      <li>Integrated OAuth2 and OpenID Connect</li>
      <li>Enabled role-based access control (RBAC)</li>
      <li>Secured APIs using Azure AD tokens</li>
    </ul>
  `
}
,
{
  "command": "Managed Identity",
  "text": `
    <p>Managed Identity allows Azure services to access other resources securely without credentials.</p>
    <p><b>Example</b>: App Service accessing Key Vault and Azure SQL without storing secrets.</p>
  `
}
,

{
  "command": "Secure App Service",
  "text": `
    <ul>
      <li>Enabled HTTPS and TLS</li>
      <li>Used Azure AD authentication</li>
      <li>Integrated Key Vault for secrets</li>
      <li>Configured IP restrictions and private endpoints</li>
    </ul>
  `
}
,
{
  "command": "Azure Service Bus",
  "text": `
    <p>Service Bus is used for reliable asynchronous communication.</p>
    <p><b>Use Case</b>: Decoupling order processing and payment services.</p>
  `
}
,
{
  "command": "Deploy .NET / React App",
  "text": `
    <ul>
      <li>React hosted on App Service or Blob Storage</li>
      <li>.NET APIs hosted on Azure App Service</li>
      <li>CI/CD implemented using Azure DevOps</li>
    </ul>
  `
}
,
{
  "command": "Blue-Green Deployment",
  "text": `
    <p>Two identical environments are maintained. Traffic is switched after validation.</p>
    <p>Implemented using <b>App Service Slots</b>.</p>
  `
}
,
{
  "command": "Canary Deployment",
  "text": `
    <p>New version is released to a small percentage of users before full rollout.</p>
    <p>Used for minimizing risk in production.</p>
  `
}
,
{
  "command": "Rollback Strategy",
  "text": `
    <ul>
      <li>Swap deployment slots</li>
      <li>Redeploy previous build</li>
      <li>Automated rollback using pipelines</li>
    </ul>
  `
}
,
{
  "command": "Track Application Performance",
  "text": `
    <ul>
      <li>Application Insights dashboards</li>
      <li>Distributed tracing</li>
      <li>Custom telemetry and alerts</li>
    </ul>
  `
}
,
{
  "command": "Secret Management",
  "text": `
    <p>Secrets are never stored in code. All secrets are managed using Key Vault and Managed Identity.</p>
  `
}
,
{
  "command": "Fault Tolerance in Azure",
  "text": `
    <ul>
      <li>Availability Zones</li>
      <li>Load balancing</li>
      <li>Auto-scaling</li>
      <li>Health probes</li>
    </ul>
  `
}
,
{
  "command": "Secure Public API",
  "text": `
    <ul>
      <li>Azure API Management</li>
      <li>Azure AD authentication</li>
      <li>Rate limiting and throttling</li>
    </ul>
  `
}
,
{
  "command": "Scalable Microservices Architecture",
  "text": `
    <ul>
      <li>Microservices hosted on AKS</li>
      <li>API Gateway using APIM</li>
      <li>Service Bus for async communication</li>
      <li>Centralized logging and monitoring</li>
    </ul>
  `
}
,
{
  "command": "On-Prem to Azure Migration",
  "text": `
    <ul>
      <li>Assessment using Azure Migrate</li>
      <li>Database migration to Azure SQL</li>
      <li>Application modernization</li>
      <li>Security and networking setup</li>
    </ul>
  `
}





];

export default commandss;
