// ================= SPRING BOOT =================

const commandss = [
  {
    command: "angular?",
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

export default commandss;
