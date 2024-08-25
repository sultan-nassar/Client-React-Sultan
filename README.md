# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Filter Method

### Client-Side Filtering:
Advantages:
Reduced Server Load: Once the data is fetched, filtering is done on the client, reducing the number of requests to the server.
Faster User Experience: For small datasets, filtering can be very fast since there is no need to make additional server requests.
Offline Capability: If the data is already loaded, filtering can be done without an active internet connection.
Disadvantages:

Performance Issues: Filtering large datasets on the client side can be slow and resource-intensive, especially on lower-end devices.
Initial Data Load: All data needs to be fetched from the server initially, which can lead to longer load times and increased bandwidth usage.
Security Concerns: Exposing all data to the client can lead to potential security risks, especially if sensitive information is included.

### Backend-Side Filtering:
Advantages:

Efficiency: Only the filtered data is sent to the client, which can significantly reduce the amount of data transferred and improve performance, especially with large datasets.
Security: Sensitive data remains on the server, and only relevant information is sent to the client, reducing the risk of data exposure.
Complex Queries: The backend can handle more complex filtering logic, such as database queries with multiple conditions, joins, and aggregations.
Disadvantages:

Increased Server Load: The server needs to handle filtering logic, which can increase processing time and server load, especially with many concurrent users.
Latency: Each filter operation requires a request to the server, which can introduce latency, especially if the server is far away or slow.
Dependency on Internet Connection: Filtering requires an active internet connection, and the user experience can suffer if the connection is slow or unreliable.

## Conclusion:
For Small, Simple Datasets: Client-side filtering might be more appropriate, especially if you want a quick and responsive user experience without making multiple server requests.
For Large, Complex, or Sensitive Datasets: Backend filtering is generally better, as it reduces data transfer, handles complex queries more efficiently, and keeps sensitive data secure.

# FOR THAT REASONS I HAVE CHOSE THE CLIENT FILTER.
