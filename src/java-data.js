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

  {
  command: "SOLID Principles",
  text: `
    <li>
      <b>What is Single Responsibility Principle (SRP)?</b><br/>
      A class should have only one responsibility and one reason to change.
      This improves maintainability and readability.<br/><br/>

      <b>Live Example:</b><br/>
      <pre>
class InvoiceService {
    void generateInvoice() {}
}

class EmailService {
    void sendEmail() {}
}
      </pre>
    </li>

    <li>
      <b>What is Open/Closed Principle (OCP)?</b><br/>
      Classes should be open for extension but closed for modification.
      New behavior should be added without changing existing code.<br/><br/>

      <b>Live Example:</b><br/>
      <pre>
interface Discount {
    double apply();
}

class FestivalDiscount implements Discount {
    public double apply() { return 10; }
}
      </pre>
    </li>

    <li>
      <b>What is Liskov Substitution Principle (LSP)?</b><br/>
      Subclasses should be able to replace parent classes
      without breaking application behavior.<br/><br/>

      <b>Live Example:</b><br/>
      <pre>
class Bird {}

class Sparrow extends Bird {
    void fly() {}
}
      </pre>
    </li>

    <li>
      <b>What is Interface Segregation Principle (ISP)?</b><br/>
      Clients should not be forced to implement methods they do not use.
      Prefer small and specific interfaces.<br/><br/>

      <b>Live Example:</b><br/>
      <pre>
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}
      </pre>
    </li>

    <li>
      <b>What is Dependency Inversion Principle (DIP)?</b><br/>
      High-level modules should not depend on low-level modules.
      Both should depend on abstractions.<br/><br/>

      <b>Live Example:</b><br/>
      <pre>
interface Database {
    void save();
}

class OrderService {
    Database db;
    OrderService(Database db) {
        this.db = db;
    }
}
      </pre>
    </li>
  `,
}

];


export default commandss ;
