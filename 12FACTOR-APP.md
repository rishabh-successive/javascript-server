# 12-Factor App Methodology:
The 12-Factor App defines a methodology for developing and deploying web applications, specifically software-as-a-service apps. Modern web applications are complex beasts. You need to provide for every step of the process: from virtualization, deployment, setting up the runtime and developer environments to managing databases and networking. All while keeping performance at a maximum. 

1. Codebase:
Your codebase should be tracked in a central version control system is that easily  accessible to all your developers.you can use various platforms like git and github so your code is share with you developer and easily access to all developer.

2. Dependencies:
Explicitly declare and isolate dependencies
Your application might rely on external libraries and packages to run. You should never assume that these packages exist on the target system.

3. Configuration:Store config in the environment
   Configuration options should never be hardcoded, for two reasons:

    (1)You do not want sensitive information like database credentials or API keys to be committed into the repository to prevent security leaks.

    (2)Your configuration varies per environment. For example, you might want to enable debugging on your local environment while this would be overkill on production.

4. Backing Services
A backing service is one that requires a network connection to run, like MySQL or Memcached. If the location or connection details of such a service changes, you should not have to make code changes. Instead, these details should be available in the configuration. 

5. Build, release, run:
Build, release, and run stages should be treated as completely distinct from one another:

    1-The build stage is fully controlled by the developer. This is where we tag a new release and fix bugs.
    2-The release stage prepares the build for execution in the target environment. In this stage, you can run tests to verify if the code behaves as intented.
    3-The run stage executes the application and should not need any intervention.


6. Processes:
Stateless applications are designed to degrade gracefully. That means if a part of your application stack fails, the app itself does not become a failure. In other words, the state of your system is completely defined by your databases and shared storage, and not by each individual running application instance.


7. Port Binding:
Export services via port binding
Your application service should also be accessible via a URL.

8. Concurrency:
Every process inside your application should be treated as a first-class citizen. That means that each process should be able to scale, restart, or clone itself when needed. This approach will improve the sustainability and scalability of your application as a whole. 


9. Disposability:
Maximize robustness with fast startup and graceful shutdown


10. Dev/prod parity:
Keep development, staging, and production as similar as possible
Your development environment should resemble production as close as possible. That means working on the same operating system, using the same backing services and the same dependencies, and so on. This reduces the number of bugs and downtime and allows your organisation to have a much more rapid development cycle. 

11. Logs:
Logging is important for debugging and checking up on the general health of your application. However, your application should not be concerned with the storage and management of these logs. Instead, log entries should be treated as an event stream that is routed to a separate service for archival and analysis. 

12. Admin Processes:
Run admin/management tasks as one-off processes
Once your application is running in production, you'll want to do a lot of simple administrative tasks from time to time. You could need to run a database migration or fetch analytical data to gather business insights. 