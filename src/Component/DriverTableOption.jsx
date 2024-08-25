import React, { useEffect, useState } from 'react';
import { getData, getWorkAreas } from '../restApi/RestApi';

export default function DriverTableOption() {
  // State to hold the drivers, filtered drivers, and work areas
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [workAreas, setWorkAreas] = useState([]);
  const [selectedWorkAreas, setSelectedWorkAreas] = useState([]);

  // Fetch drivers and work areas data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const driverData = await getData();
        const workAreaData = await getWorkAreas(); // Ensure this fetches your work areas
        setDrivers(driverData);
        setFilteredDrivers(driverData); // Initially, show all drivers
        setWorkAreas(workAreaData); // Set work areas
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter drivers based on selected work areas

   //####################  FILTER METHOD   ##############
    //I HAVE CHOSE THE CLIENT FILTER, ACCORDING TO:
    //For Small, Simple Datasets: Client-side filtering might be more appropriate, especially if you want a quick and responsive user experience without making multiple server requests. 
    //For Large, Complex, or Sensitive Datasets: Backend filtering is generally better, as it reduces data transfer, handles complex queries more efficiently, and keeps sensitive data secure.

  useEffect(() => {
    if (selectedWorkAreas.length === 0) {
      setFilteredDrivers(drivers);
    } else {
      const filtered = drivers.filter(driver =>
        driver.workAreas.some(area => selectedWorkAreas.includes(area.name))
      );
      setFilteredDrivers(filtered);
    }
  }, [selectedWorkAreas, drivers]);

  
  // Handle work area selection changes
  const handleWorkAreaChange = (e) => {
    const { options } = e.target;
    const selected = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setSelectedWorkAreas(selected);
  };

  return (
    <div>
      <h1>Drivers List</h1>

      {/* Work Areas Select */}
      <select multiple onChange={handleWorkAreaChange} style={{ marginBottom: '20px', padding: '10px', width: '300px' }}>
        {workAreas.map(area => (
          <option key={area.id} value={area.name}>
            {area.name}
          </option>
        ))}
      </select>

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
                  <div key={area.id}>{area.name}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
