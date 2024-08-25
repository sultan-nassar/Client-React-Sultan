# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
<p>
1. install git on your computer from the link https://git-scm.com/downloads <br>
2.  Clone the repository to your local machine: <br>
<p> Open a new VS code in a new folder <br>  </p> 
<p> Open the terminal <br>  </p> 
   Bash
   <br>
   git clone -b master https://github.com/sultan-nassar/CardReactApp.git <br>
 <strong>split two terminal</strong>:<br>
 <br>
<p>
<strong> at the second terminal</strong> you have to navigate to the project directory by writing: <br>
 Cd Client-React-Sultan <br>
  
 npm i <br>
 npm start <br>  
   


# Filter Method
# I HAVE CHOSE THE CLIENT FILTER, ACCORDING TO ADVANTAGES AND DISADVANTAGES BELOW:

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

