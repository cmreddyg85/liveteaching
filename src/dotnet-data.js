const commandss = [

  {
    command: ".net",
    text: `
.NET is a development platform for building web, desktop, mobile,
cloud, and gaming applications. It supports multiple languages
like C#, F#, and VB.NET and runs on the Common Language Runtime.
    `,
  },

  {
    command: "clr",
    text: `
CLR stands for Common Language Runtime.
It manages memory, garbage collection, security,
exception handling, and JIT compilation.
    `,
  },

  {
    command: "managed vs unmanaged code",
    text: `
Managed code runs under CLR control and benefits from
automatic memory management.
Unmanaged code runs directly on the OS and requires
manual memory handling.
    `,
  },

  {
    command: "c# program structure",
    text: `
A C# program consists of using statements, namespace,
class definition, and a Main method
which acts as the entry point.
    `,
  },

  {
    command: "value types vs reference types",
    text: `
Value types store data directly and are allocated on the stack.
Reference types store references to data allocated on the heap.
    `,
  },

  {
    command: "garbage collection",
    text: `
Garbage Collection automatically frees memory
used by unreachable objects.
It works using generations to improve performance.
    `,
  },

  {
    command: "exception handling",
    text: `
Exception handling uses try, catch, and finally blocks
to handle runtime errors gracefully.
    `,
  },

  {
    command: "types of classes",
    text: `
C# supports static, abstract, sealed, partial,
and generic classes for different use cases.
    `,
  },

  {
    command: "namespace",
    text: `
Namespaces organize code and prevent naming conflicts
by grouping related classes and interfaces.
    `,
  },

  {
    command: "encapsulation",
    text: `
Encapsulation hides internal data and exposes
only required functionality using access modifiers.
    `,
  },

  {
    command: "polymorphism",
    text: `
Polymorphism allows methods to behave differently
based on object type using overloading and overriding.
    `,
  },

  {
    command: "delegates",
    text: `
Delegates are type-safe references to methods.
They are used for callbacks and event handling.
    `,
  },

  {
    command: "linq",
    text: `
LINQ provides a unified way to query collections,
databases, and XML using C# syntax.
    `,
  },

  {
    command: "abstract class vs interface",
    text: `
Abstract classes can have implementations
and support inheritance.
Interfaces define contracts and support multiple inheritance.
    `,
  },

  {
    command: "memory management",
    text: `
Memory is managed automatically using garbage collection.
Unmanaged resources are released using IDisposable
and using statements.
    `,
  },

  {
    command: "threading",
    text: `
Threading allows multiple operations to run concurrently.
It is implemented using Thread, ThreadPool, and Tasks.
    `,
  },

  {
    command: "async await",
    text: `
Async and await enable non-blocking asynchronous programming
and improve application responsiveness.
    `,
  },

  {
    command: "entity framework",
    text: `
Entity Framework is an ORM that allows database access
using .NET objects instead of SQL queries.
    `,
  },

  {
    command: "extension methods",
    text: `
Extension methods add new functionality
to existing types without modifying them.
    `,
  },

  {
    command: "task exception handling",
    text: `
Exceptions in async methods are handled using try-catch
while awaiting tasks or inside async methods.
    `,
  },

  {
    command: "reflection",
    text: `
Reflection allows runtime inspection of assemblies,
types, methods, and attributes.
    `,
  },

  {
    command: "middleware",
    text: `
Middleware components form the HTTP request pipeline
and process requests and responses sequentially.
    `,
  },

  {
    command: "dependency injection",
    text: `
Dependency Injection promotes loose coupling
by providing dependencies through constructors.
    `,
  },

  {
    command: ".net standard",
    text: `
.NET Standard defines a common API set
supported across all .NET platforms.
    `,
  },

  {
    command: ".net core vs framework vs xamarin",
    text: `
.NET Framework is Windows-only,
.NET Core is cross-platform,
Xamarin is used for mobile development.
    `,
  },

  {
    command: "garbage collection optimization",
    text: `
GC can be optimized by minimizing allocations,
disposing unmanaged resources,
and avoiding large object heap misuse.
    `,
  },

  {
    command: "attributes",
    text: `
Attributes add metadata to code
and are used for validation, serialization,
and behavior control.
    `,
  },

  {
    command: "code compilation",
    text: `
Source code is compiled to Intermediate Language,
then JIT compiled to native code at runtime.
    `,
  },

  {
    command: "gac",
    text: `
Global Assembly Cache stores shared strong-named assemblies
used by multiple applications.
    `,
  },

  {
    command: "asp.net core security",
    text: `
Security is implemented using authentication,
authorization, HTTPS, and input validation.
    `,
  },

  {
    command: "mvc",
    text: `
MVC separates application into Model,
View, and Controller layers.
    `,
  },

  {
    command: "razor pages vs mvc",
    text: `
Razor Pages are page-focused,
MVC is controller-based and suitable
for large applications.
    `,
  },

  {
    command: "validation",
    text: `
Validation is done using data annotations
or fluent validation libraries.
    `,
  },

  {
    command: "signalr",
    text: `
SignalR enables real-time communication
using WebSockets.
    `,
  },

  {
    command: "blazor",
    text: `
Blazor allows building web apps using C#
instead of JavaScript.
    `,
  },

  {
    command: "api versioning",
    text: `
API versioning ensures backward compatibility
of web APIs.
    `,
  },

  {
    command: "iapplciationbuilder",
    text: `
IApplicationBuilder is used to configure
the middleware pipeline.
    `,
  },

  {
    command: "areas",
    text: `
Areas help organize large MVC applications
by grouping related features.
    `,
  },

  {
    command: "session management",
    text: `
Session state stores user-specific data
across multiple requests.
    `,
  },

  {
    command: "caching",
    text: `
Caching improves performance by storing
frequently accessed data.
    `,
  },

  {
    command: "unit testing",
    text: `
Unit testing validates individual components
in isolation.
    `,
  },

  {
    command: "mocking",
    text: `
Mocking simulates dependencies
to test components independently.
    `,
  },

  {
    command: "solid principles",
    text: `
SOLID principles improve maintainability
and scalability of code.
    `,
  },

  {
    command: "ci cd",
    text: `
CI/CD automates build, test,
and deployment pipelines.
    `,
  },

  {
    command: "secure c# code",
    text: `
Security includes parameterized queries,
input validation, HTTPS, and encryption.
    `,
  },

  {
    command: "performance issues",
    text: `
Performance issues are addressed using caching,
indexing, memory optimization, and profiling.
    `,
  },

  {
    command: "repository pattern",
    text: `
Repository pattern abstracts data access
and improves testability.
    `,
  },

  {
    command: "ef migrations",
    text: `
Migrations manage database schema changes
without data loss.
    `,
  },

  {
    command: "debugging tools",
    text: `
Debugging tools include Visual Studio debugger,
profilers, and memory analyzers.
    `,
  },

  {
    command: "stay updated",
    text: `
Stay updated by following blogs,
communities, conferences, and documentation.
    `,
  },

  /* SQL */

  {
    command: "sql joins",
    text: `
Joins combine rows from multiple tables
using INNER, LEFT, RIGHT, and FULL joins.
    `,
  },

  {
    command: "primary key vs unique key",
    text: `
Primary key uniquely identifies records.
Unique key enforces uniqueness but allows NULLs.
    `,
  },

  {
    command: "foreign key",
    text: `
Foreign keys enforce referential integrity
between related tables.
    `,
  },

  {
    command: "normalization",
    text: `
Normalization reduces data redundancy
using normal forms like 1NF, 2NF, and 3NF.
    `,
  },

  {
    command: "clustered vs nonclustered index",
    text: `
Clustered index defines physical order.
Non-clustered index stores pointers to data.
    `,
  },

  {
    command: "transactions and acid",
    text: `
Transactions ensure Atomicity, Consistency,
Isolation, and Durability.
    `,
  },

  {
    command: "delete vs truncate vs drop",
    text: `
DELETE removes rows,
TRUNCATE removes all rows,
DROP removes the table.
    `,
  },

  {
    command: "window functions",
    text: `
Window functions perform calculations
across related rows.
    `,
  },

  {
    command: "cte",
    text: `
CTE improves readability and reusability
of complex queries.
    `,
  },

  {
    command: "stored procedures",
    text: `
Stored procedures encapsulate SQL logic
and improve security and performance.
    `,
  },

  {
    command: "sql injection",
    text: `
SQL injection is prevented using
parameterized queries.
    `,
  },

  {
    command: "exists vs in",
    text: `
EXISTS checks existence,
IN compares values in a list.
    `,
  },

  {
    command: "indexing",
    text: `
Indexes improve query performance
but slow down write operations.
    `,
  },

  {
    command: "explain plan",
    text: `
Query plan shows how SQL executes queries
and helps identify bottlenecks.
    `,
  },

  {
    command: "group by having",
    text: `
GROUP BY groups rows,
HAVING filters aggregated results.
    `,
  },

  {
    command: "composite key",
    text: `
Composite key uses multiple columns
to uniquely identify a row.
    `,
  },

  {
    command: "materialized view",
    text: `
Materialized views store query results
physically for faster access.
    `,
  },

  {
    command: "null handling",
    text: `
NULLs are handled using IS NULL,
COALESCE, and constraints.
    `,
  },

  {
    command: "scalar vs table functions",
    text: `
Scalar functions return single values,
table functions return result sets.
    `,
  },

  {
    command: "multi tenant schema",
    text: `
Multi-tenant schemas isolate data
using tenant IDs or separate databases.
    `,
  },
];


export default commandss;
