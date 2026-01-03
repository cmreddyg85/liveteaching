// ================= CORE + ADVANCED JAVA QUESTIONS =================

const commands = [
  {
    command: "Difference between JDK, JRE and JVM",
    text: `
      <li>JVM executes Java bytecode.</li>
      <li>JRE provides JVM and runtime libraries.</li>
      <li>JDK provides JRE along with development tools.</li>
    `,
  },

  {
    command: "Why Java is platform independent?",
    text: `
      <li>Java code is compiled into bytecode.</li>
      <li>Bytecode runs on JVM.</li>
      <li>JVM is platform dependent but bytecode is not.</li>
    `,
  },

  {
    command: "What is Immutable Class?",
    text: `
      <li>Class whose objects cannot be modified.</li>
      <li>All fields should be private and final.</li>
      <li>No setters should be provided.</li>
      <li>String is the best example.</li>
    `,
  },

  {
    command: "Difference between == and equals()",
    text: `
      <li>== compares memory references.</li>
      <li>equals() compares content.</li>
      <li>equals() can be overridden.</li>
    `,
  },

  {
    command: "Why override equals() and hashCode()?",
    text: `
      <li>Hash-based collections use hashCode first.</li>
      <li>equals() checks logical equality.</li>
      <li>If equals() is true, hashCode must be same.</li>
    `,
  },

  {
    command: "Difference between final, finally and finalize",
    text: `
      <li>final is a keyword used to restrict modification.</li>
      <li>finally is a block used with try-catch.</li>
      <li>finalize() is a method called by Garbage Collector.</li>
    `,
  },

  {
    command: "What is Serialization?",
    text: `
      <li>Converting object into byte stream.</li>
      <li>Used to persist or transfer object.</li>
      <li>Implements Serializable interface.</li>
    `,
  },

  {
    command: "transient keyword",
    text: `
      <li>Used to skip fields during serialization.</li>
      <li>Transient variables are not persisted.</li>
    `,
  },

  {
    command: "What is Marker Interface?",
    text: `
      <li>Interface without methods.</li>
      <li>Used to provide metadata to JVM.</li>
      <li>Examples: Serializable, Cloneable.</li>
    `,
  },

  {
    command: "Difference between shallow copy and deep copy",
    text: `
      <li>Shallow copy copies references.</li>
      <li>Deep copy copies actual objects.</li>
      <li>Clone() creates shallow copy by default.</li>
    `,
  },

  {
    command: "Array vs Collection",
    text: `
      <li>Array size is fixed.</li>
      <li>Collections are dynamic.</li>
      <li>Collections provide utility methods.</li>
    `,
  },

  {
    command: "Fail-fast vs Fail-safe Iterators",
    text: `
      <li>Fail-fast throws ConcurrentModificationException.</li>
      <li>Fail-safe works on cloned copy.</li>
      <li>Example: Iterator vs ConcurrentHashMap.</li>
    `,
  },

  {
    command: "What is Comparable vs Comparator?",
    text: `
      <li>Comparable is used for natural ordering.</li>
      <li>Comparator is used for custom ordering.</li>
      <li>Comparable modifies class, Comparator does not.</li>
    `,
  },

  {
    command: "Difference between HashMap and TreeMap",
    text: `
      <li>HashMap does not maintain order.</li>
      <li>TreeMap maintains sorted order.</li>
      <li>TreeMap uses Red-Black Tree.</li>
    `,
  },

  {
    command: "What is Optional in Java?",
    text: `
      <li>Used to avoid NullPointerException.</li>
      <li>Represents optional values.</li>
      <li>Introduced in Java 8.</li>
    `,
  },

  {
    command: "What are Functional Interfaces?",
    text: `
      <li>Interface with single abstract method.</li>
      <li>Used with lambda expressions.</li>
      <li>Example: Runnable, Predicate.</li>
    `,
  },

  {
    command: "Difference between map() and flatMap()",
    text: `
      <li>map transforms one element.</li>
      <li>flatMap flattens nested structures.</li>
    `,
  },

  {
    command: "What is Stream API?",
    text: `
      <li>Used for processing collections.</li>
      <li>Supports functional programming.</li>
      <li>Introduced in Java 8.</li>
    `,
  },

  {
    command: "Intermediate vs Terminal Operations",
    text: `
      <li>Intermediate operations return stream.</li>
      <li>Terminal operations produce result.</li>
      <li>Example: filter vs collect.</li>
    `,
  },

  {
    command: "Difference between synchronized and volatile",
    text: `
      <li>synchronized ensures atomicity and visibility.</li>
      <li>volatile ensures only visibility.</li>
    `,
  },

  {
    command: "What is Deadlock?",
    text: `
      <li>Two threads waiting for each other.</li>
      <li>Occurs due to circular dependency.</li>
      <li>Avoid using proper locking order.</li>
    `,
  },

  {
    command: "Executor Framework",
    text: `
      <li>Manages thread pool.</li>
      <li>Improves performance.</li>
      <li>Introduced in Java 5.</li>
    `,
  },

  {
    command: "Callable vs Runnable",
    text: `
      <li>Runnable does not return result.</li>
      <li>Callable returns result.</li>
      <li>Callable can throw checked exceptions.</li>
    `,
  },

  {
    command: "Garbage Collection Types",
    text: `
      <li>Young Generation GC.</li>
      <li>Old Generation GC.</li>
      <li>Full GC.</li>
    `,
  },

  {
    command: "Common Memory Leaks in Java",
    text: `
      <li>Static references.</li>
      <li>Unclosed resources.</li>
      <li>Listener not removed.</li>
    `,
  },
  {
    command: "What is Spring Boot?",
    text: `
      <p>Spring Boot is a framework built on top of Spring that simplifies application development.</p>
      <li>Provides auto-configuration.</li>
      <li>Reduces boilerplate code.</li>
      <li>Uses embedded servers like Tomcat.</li>
    `,
  },

  {
    command: "Advantages of Spring Boot",
    text: `
      <li>No XML configuration required.</li>
      <li>Embedded server support.</li>
      <li>Production-ready features like Actuator.</li>
      <li>Easy microservices development.</li>
    `,
  },

  {
    command: "Spring Boot Auto Configuration",
    text: `
      <li>Automatically configures beans based on classpath.</li>
      <li>Enabled using @EnableAutoConfiguration.</li>
      <li>Uses spring.factories internally.</li>
    `,
  },

  {
    command: "@Component vs @Service vs @Repository",
    text: `
      <li>@Component is a generic stereotype.</li>
      <li>@Service is used for business logic.</li>
      <li>@Repository is used for DAO and provides exception translation.</li>
    `,
  },

  {
    command: "Spring Boot Actuator",
    text: `
      <li>Used for monitoring and management.</li>
      <li>Provides endpoints like /health, /metrics.</li>
      <li>Used in production systems.</li>
    `,
  },

  {
    command: "Spring Profiles",
    text: `
      <li>Used to manage environment-specific configurations.</li>
      <li>Examples: dev, test, prod.</li>
      <li>Activated using spring.profiles.active.</li>
    `,
  },

  // ================= MICROSERVICES =================

  {
    command: "What are Microservices?",
    text: `
      <p>Microservices architecture breaks application into small, independent services.</p>
      <li>Each service has its own database.</li>
      <li>Services communicate using REST or messaging.</li>
      <li>Independently deployable.</li>
    `,
  },

  {
    command: "Advantages of Microservices",
    text: `
      <li>Scalability.</li>
      <li>Independent deployments.</li>
      <li>Technology flexibility.</li>
      <li>Fault isolation.</li>
    `,
  },

  {
    command: "Microservices Challenges",
    text: `
      <li>Distributed system complexity.</li>
      <li>Data consistency.</li>
      <li>Network latency.</li>
      <li>Monitoring and logging.</li>
    `,
  },

  {
    command: "Service Discovery",
    text: `
      <li>Used to locate services dynamically.</li>
      <li>Example: Eureka.</li>
      <li>Avoids hardcoding service URLs.</li>
    `,
  },

  {
    command: "API Gateway",
    text: `
      <li>Single entry point for all microservices.</li>
      <li>Handles authentication and routing.</li>
      <li>Examples: Spring Cloud Gateway.</li>
    `,
  },

  {
    command: "Circuit Breaker",
    text: `
      <li>Prevents cascading failures.</li>
      <li>Stops calling failed services.</li>
      <li>Example: Resilience4j.</li>
    `,
  },

  {
    command: "Inter-service Communication",
    text: `
      <li>REST (synchronous).</li>
      <li>Kafka / RabbitMQ (asynchronous).</li>
      <li>Feign Client commonly used.</li>
    `,
  },

  // ================= DESIGN PATTERNS =================

  {
    command: "What are Design Patterns?",
    text: `
      <li>Reusable solutions to common problems.</li>
      <li>Improve maintainability and scalability.</li>
      <li>Widely used in enterprise applications.</li>
    `,
  },

  {
    command: "Singleton Pattern",
    text: `
      <li>Ensures only one instance of a class.</li>
      <li>Used for logging and configuration.</li>
      <li>Enum Singleton is thread-safe and recommended.</li>
    `,
  },

  {
    command: "Factory Pattern",
    text: `
      <li>Creates objects without exposing creation logic.</li>
      <li>Used when object creation depends on conditions.</li>
    `,
  },

  {
    command: "Builder Pattern",
    text: `
      <li>Used to create complex objects step by step.</li>
      <li>Improves code readability.</li>
    `,
  },

  {
    command: "Observer Pattern",
    text: `
      <li>Used for event-driven systems.</li>
      <li>One-to-many dependency.</li>
      <li>Common in messaging systems.</li>
    `,
  },

  // ================= SQL / DATABASE =================

  {
    command: "What is SQL?",
    text: `
      <li>Structured Query Language.</li>
      <li>Used to manage relational databases.</li>
      <li>Supports CRUD operations.</li>
    `,
  },

  {
    command: "Primary Key vs Foreign Key",
    text: `
      <li>Primary key uniquely identifies a record.</li>
      <li>Foreign key establishes relationship between tables.</li>
    `,
  },

  {
    command: "INNER JOIN vs LEFT JOIN",
    text: `
      <li>INNER JOIN returns matching records.</li>
      <li>LEFT JOIN returns all left table records.</li>
    `,
  },

  {
    command: "Indexes in SQL",
    text: `
      <li>Improve query performance.</li>
      <li>Created on frequently searched columns.</li>
      <li>Too many indexes slow down inserts.</li>
    `,
  },

  {
    command: "Normalization",
    text: `
      <li>Reduces data redundancy.</li>
      <li>Improves data integrity.</li>
      <li>Uses normal forms (1NF, 2NF, 3NF).</li>
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
    command: "Find Second Highest Salary (SQL)",
    text: `
      <p>SELECT MAX(salary) FROM employee WHERE salary &lt; (SELECT MAX(salary) FROM employee);</p>
    `,
  },

];
