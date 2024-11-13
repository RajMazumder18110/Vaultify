# Vaultify

Vaultify is a decentralized application (dApp) that allows users to securely lock their ERC20 tokens into a smart contract and unlock them after a predefined time period. Built with an event-driven architecture powered by Kafka and Elasticsearch, Vaultify ensures real-time, high-performance handling of token lock events, making it capable of scaling to millions of users seamlessly.

## Key Features

- **Token Locking & Unlocking:** Users can lock ERC20 tokens with a specified unlock time, enabling deferred access to their assets.

- **Event-Driven Architecture:** Leverages Kafka to process token lock and unlock events in real-time, ensuring scalability and robust event handling.

- **Elasticsearch for Fast Retrieval:** Optimized for high-speed querying and filtering of token lock records, allowing users to quickly access their locked assets and history.

- **Redis Cache Layer:** Reduces database load by caching frequently accessed data, enhancing response times for front-end requests.

- **RESTful API:** Built with Hono.js, providing endpoints for creating, retrieving, and querying token locks with comprehensive filters.
