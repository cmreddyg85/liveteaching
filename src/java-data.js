// ================= COMPLETE JAVA INTERVIEW COMMANDS =================

const commandss = [

  // ================= CORE JAVA =================

  {
    command: "What is Java?",
    text: `
      <li>Java is an object-oriented, platform-independent programming language.</li>
      <li>Follows Write Once Run Anywhere (WORA).</li>
      <li>Used for enterprise, web, and microservices applications.</li>
    `,
  },

  {
    command: "OOPS Concepts",
    text: `
      <li>Encapsulation – Binding data and methods together.</li>
      <li>Inheritance – One class acquiring another class properties.</li>
      <li>Polymorphism – Same method, different behavior.</li>
      <li>Abstraction – Hiding implementation details.</li>
    `,
  },

  {
    command: "Abstract Class vs Interface",
    text: `
      <li>Abstract class can have method implementation.</li>
      <li>Interface supports multiple inheritance.</li>
      <li>Abstract class supports constructors.</li>
      <li>Java 8 interfaces support default and static methods.</li>
    `,
  },

  {
    command: "Why String is Immutable?",
    text: `
      <li>Improves security.</li>
      <li>Thread-safe.</li>
      <li>String pool memory optimization.</li>
      <li>Improves performance.</li>
    `,
  },

  {
    command: "String vs StringBuilder vs StringBuffer",
    text: `
      <li>String – Immutable, thread-safe.</li>
      <li>StringBuilder – Mutable, not thread-safe.</li>
      <li>StringBuffer – Mutable, thread-safe.</li>
    `,
  },

  {
    command: "equals() vs ==",
    text: `
      <li>== compares references.</li>
      <li>equals() compares content.</li>
    `,
  },

  {
    command: "final vs finally vs finalize",
    text: `
      <li>final – Restricts modification.</li>
      <li>finally – Executes always.</li>
      <li>finalize – Called by GC.</li>
    `,
  },

  {
    command: "Collections Framework",
    text: `
      <li>List – Allows duplicates.</li>
      <li>Set – No duplicates.</li>
      <li>Map – Key-value pairs.</li>
    `,
  },

  {
    command: "HashMap Internal Working",
    text: `
      <li>Uses hashCode and equals.</li>
      <li>Collision handled using LinkedList / Red-Black Tree.</li>
    `,
  },

  {
    command: "HashMap vs ConcurrentHashMap",
    text: `
      <li>HashMap is not thread-safe.</li>
      <li>ConcurrentHashMap is thread-safe.</li>
      <li>No null keys allowed.</li>
    `,
  },

  {
    command: "Checked vs Unchecked Exception",
    text: `
      <li>Checked – Compile time.</li>
      <li>Unchecked – Runtime.</li>
    `,
  },

  {
    command: "Multithreading",
    text: `
      <li>Multiple threads executing concurrently.</li>
      <li>Improves performance.</li>
    `,
  },

  {
    command: "synchronized vs volatile",
    text: `
      <li>synchronized ensures atomicity and visibility.</li>
      <li>volatile ensures visibility only.</li>
    `,
  },

  // ================= JAVA 8 =================

  {
    command: "Java 8 Features",
    text: `
      <li>Lambda Expressions.</li>
      <li>Streams API.</li>
      <li>Functional Interfaces.</li>
      <li>Optional.</li>
      <li>Default methods.</li>
    `,
  },

  {
    command: "Lambda Expression",
    text: `
      <li>Anonymous function.</li>
      <li>Reduces boilerplate code.</li>
    `,
  },

  {
    command: "Stream API",
    text: `
      <li>Used to process collections.</li>
      <li>Supports functional programming.</li>
    `,
  },

  {
    command: "map vs flatMap",
    text: `
      <li>map – One-to-one mapping.</li>
      <li>flatMap – Flattens nested objects.</li>
    `,
  },

  {
    command: "Optional Class",
    text: `
      <li>Used to avoid NullPointerException.</li>
      <li>Represents optional values.</li>
    `,
  },

  // ================= JAVA 11 / 17 / LATEST =================

  {
    command: "Java 11 Features",
    text: `
      <li>var in lambda parameters.</li>
      <li>New String methods.</li>
      <li>HTTP Client API.</li>
    `,
  },

  {
    command: "Java 17 Features",
    text: `
      <li>Sealed classes.</li>
      <li>Pattern matching.</li>
      <li>Strong encapsulation.</li>
    `,
  },

  {
    command: "Records in Java",
    text: `
      <li>Immutable data carriers.</li>
      <li>Reduces boilerplate code.</li>
    `,
  },

  {
    command: "Sealed Classes",
    text: `
      <li>Restricts which classes can extend a class.</li>
      <li>Improves security and design.</li>
    `,
  },

  // ================= SPRING BOOT =================

  {
    command: "What is Spring Boot?",
    text: `
      <li>Simplifies Spring development.</li>
      <li>Provides auto configuration.</li>
      <li>Uses embedded servers.</li>
    `,
  },

  {
    command: "Spring Boot Auto Configuration",
    text: `
      <li>Automatically configures beans.</li>
      <li>Based on classpath.</li>
    `,
  },

  {
    command: "Spring Boot Actuator",
    text: `
      <li>Used for monitoring.</li>
      <li>Provides health and metrics endpoints.</li>
    `,
  },

  {
    command: "Dependency Injection",
    text: `
      <li>Objects are injected by Spring container.</li>
      <li>Reduces tight coupling.</li>
    `,
  },

  // ================= MICROSERVICES =================

  {
    command: "What are Microservices?",
    text: `
      <li>Application split into small independent services.</li>
      <li>Each service has its own database.</li>
    `,
  },

  {
    command: "Service Discovery",
    text: `
      <li>Used to locate services dynamically.</li>
      <li>Example: Eureka.</li>
    `,
  },

  {
    command: "API Gateway",
    text: `
      <li>Single entry point.</li>
      <li>Handles routing and security.</li>
    `,
  },

  {
    command: "Circuit Breaker",
    text: `
      <li>Prevents cascading failures.</li>
      <li>Example: Resilience4j.</li>
    `,
  },

  // ================= DESIGN PATTERNS =================

  {
    command: "Singleton Pattern",
    text: `
      <li>Ensures only one instance.</li>
      <li>Enum Singleton is best.</li>
    `,
  },

  {
    command: "Factory Pattern",
    text: `
      <li>Creates objects without exposing logic.</li>
    `,
  },

  {
    command: "Builder Pattern",
    text: `
      <li>Used for creating complex objects.</li>
    `,
  },

  {
    command: "Observer Pattern",
    text: `
      <li>One-to-many dependency.</li>
      <li>Used in event-driven systems.</li>
    `,
  },

  // ================= SQL =================

  {
    command: "What is SQL?",
    text: `
      <li>Structured Query Language.</li>
      <li>Used for relational databases.</li>
    `,
  },

  {
    command: "Primary Key vs Foreign Key",
    text: `
      <li>Primary key uniquely identifies a row.</li>
      <li>Foreign key creates relationship.</li>
    `,
  },

  {
    command: "Indexes",
    text: `
      <li>Improve query performance.</li>
      <li>Should be used carefully.</li>
    `,
  },

  {
    command: "ACID Properties",
    text: `
      <li>Atomicity.</li>
      <li>Consistency.</li>
      <li>Isolation.</li>
      <li>Durability.</li>
    `,
  },

  {
    command: "Second Highest Salary SQL",
    text: `
      <p>SELECT MAX(salary) FROM employee WHERE salary < (SELECT MAX(salary) FROM employee);</p>
    `,
  },
];


export default commandss ;
