import React, { useEffect, useState } from 'react'
import { getData } from '../restApi/RestApi';


export default function DriverTable() {
   // State to hold the search query and filtered Drivers
   const [drivers, setDrivers] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredDrivers, setFilteredDrivers] = useState([]);


   //Get the Drivers Data by running the function in rest api (GetData())
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const data = await getData();
        setDrivers(data);
        setFilteredDrivers(data);  // Initially, show all Drivers
      } catch (error) {
        console.error('Error fetching Drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

       
    // Handler to update search term and filter the Drivers
    // the some method check workareas name in the array one by one and return true if the name exist
    // so if the name exist we can see it in the filtered names.

    const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchTerm(query);
    
      const filtered = drivers.filter(driver =>
        driver.workAreas.some(area => area.name.toLowerCase().includes(query))
      );
      setFilteredDrivers(filtered);
    };


    return (
      <div >
      <h1>Drivers List</h1>
      
      {/* Search Field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />

      {/* Table */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>WorkAreas</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.firstName}</td>
              <td>{driver.lastName}</td>
              <td>{driver.phone}</td>
              <td>
              {driver.workAreas.map((area) => (
                <div key={area.id}>{area.name}</div>))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}