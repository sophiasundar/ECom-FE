import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import axios from 'axios';
import ElectronicCard from './cards/electronicCards'

const Electronics = ()=>{
  const backgroundColor = `bg-white`;
  const [electronicsData, setElectronicsData ] = useState([])

  useEffect(() => {
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API}/electronic`);
           setElectronicsData(response.data);
        } catch (error) {
            console.error('Error fetching electronics data:', error);
        }
    };

    fetchData();
}, []);
     
      return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-4">Electronics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {electronicsData.map((item) => (
                    <ElectronicCard key={item.id} item={item} />
                ))}
            </div>
        </div>
      )
}
export default Electronics