import React from "react";
import {Link} from 'react-scroll';

const ElectronicCard = ({item})=>{
      return(
        <div className="max-w-sm bg-white rounded-lg shadow-md">
        <img className="flex-shrink-0 rounded-lg w-full h-48 object-cover" src={item.image} alt={item.name} />
        <div className="p-4">
            <h5 className="text-gray-900 font-bold text-lg">{item.name}</h5>
            <p className="text-gray-700">{item.price}</p>
        </div>
        </div>
      )
}
export default ElectronicCard

