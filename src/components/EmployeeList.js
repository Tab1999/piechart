import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Loading from './Loading';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/files/employees.json');
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    fetchData();
  }, []);


  const getGenderData = () => {
    const genderCount = {
      male: 0,
      female: 0,
    };

    employees.forEach((employee) => {
      genderCount[employee.gender]++;
    });

    const totalEntries = employees.length;

    return Object.entries(genderCount).map(([gender, count]) => ({
      title: `${gender} (${((count / totalEntries) * 100).toFixed(2)}%)`,
      value: count,
      color: gender === 'male' ? '#3498db' : '#e74c3c',
    }));
  };

  const getExperienceData = () => {
    const experienceCount = {
      '0-1 years': 0,
      '2-5 years': 0,
      '6-10 years': 0,
      '11+ years': 0,
    };

    employees.forEach((employee) => {
      if (employee.years_of_experience <= 1) {
        experienceCount['0-1 years']++;
      } else if (employee.years_of_experience <= 5) {
        experienceCount['2-5 years']++;
      } else if (employee.years_of_experience <= 10) {
        experienceCount['6-10 years']++;
      } else {
        experienceCount['11+ years']++;
      }
    });

    const totalEntries = employees.length;

    return Object.entries(experienceCount).map(([experience, count]) => ({
      title: `${experience} (${((count / totalEntries) * 100).toFixed(2)}%)`,
      value: count,
      color: '#2ecc71',
    }));
  };

  return (
    <div style={{margin: "2rem"}}>
      <h1 style={{textAlign:"center"}}>Employees Experience Indicator</h1>
      {loading ? (
       <Loading/>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightGrey', padding: '2rem', margin: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>Gender Distribution</h2>
            <PieChart
              data={getGenderData()}
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={{ fontSize: '5px', fontFamily: 'sans-serif' }}
              radius={50}
              lineWidth={85}
              paddingAngle={2}
            />
            <p style={{ backgroundColor: 'lightGrey', borderRadius: '5px', padding: '5px', marginTop: '10px' }}>
              Total Entries: {employees.length}<br />
              Male: {getGenderData()[0].value}<br />
              Female: {getGenderData()[1].value}
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2>Experience Distribution</h2>
            <PieChart
              data={getExperienceData()}
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={{ fontSize: '5px', fontFamily: 'sans-serif' }}
              radius={50}
              lineWidth={85}
              paddingAngle={2}
            />
            <p style={{ backgroundColor: 'lightgray', borderRadius: '5px', padding: '5px', marginBottom: '2rem', marginTop: '10px' }}>
              Total Entries: {employees.length}<br />
              0-1 years: {getExperienceData()[0].value}<br />
              2-5 years: {getExperienceData()[1].value}<br />
              6-10 years: {getExperienceData()[2].value}<br />
              11+ years: {getExperienceData()[3].value}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;