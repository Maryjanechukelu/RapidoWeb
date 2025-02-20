import React, { useState } from 'react';
import { Pen, Trash2 } from 'lucide-react';

const WaitingList = () => {
  const tabs = ["Waiting List", "Doctors", "Pharmacy's", "Therapist's", "Patient's"];
  const [activeTab, setActiveTab] = useState("Waiting List");

  // Restructured data object with arrays for each tab
  const tabData = {
    "Waiting List": [
      {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        date: "10/10/2020",
        visitTime: "09:15-09:45am"
      },
      {
        name: "Ronald Richards",
        email: "ronald.richards@example.com",
        date: "10/12/2020",
        visitTime: "12:00-12:45pm"
      },
      {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        date: "10/13/2020",
        visitTime: "01:15-01:45pm"
      },
      {
        name: "Robert Fox",
        email: "robert.fox@gmail.com",
        date: "10/14/2020",
        visitTime: "02:00-02:45pm"
      },
      {
        name: "Jenny Wilson",
        email: "jenny.wilson@example.com",
        date: "10/15/2020",
        visitTime: "12:00-12:45pm"
      }
    ],
    "Doctors": [],
    "Pharmacy's": [],
    "Therapist's": [],
    "Patient's": []
  };

  return (
    <div className="w-full">
      {/* Tab Container */}
      <div className="relative flex justify-center -mb-[1px]">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative z-${10 - index} 
              px-8 py-2.5 
              bg-white 
              rounded-t-2xl
              -ml-3 first:ml-0
              text-sm font-medium
              shadow-[0_-1px_2px_rgba(0,0,0,0.05)]
              ${activeTab === tab ? 'text-gray-900' : 'text-gray-400'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="bg-white w-auto rounded-b-2xl rounded-tr-2xl px-1 shadow-sm overflow-x-scroll">
        <table className="w-full border-spacing-x-4 border-separate">
          <thead>
            <tr>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Email</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-4 text-sm font-medium text-gray-600">Visit Time</th>
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody>
            {tabData[activeTab].map((item, index) => (
              <tr key={index} className="border-t border-gray-50 gap-3">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0" />
                    <span className="text-sm text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-600">{item.email}</td>
                <td className="py-4 text-sm text-gray-600">{item.date}</td>
                <td className="py-4 text-sm text-gray-600">{item.visitTime}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <button>
                      <Pen className="w-4 h-4 text-gray-400" />
                    </button>
                    <button>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitingList; 






// import React from 'react';

// function WaitingList() {
//   const doctors = [
//     { 
//       name: 'Brooklyn Simmons', 
//       email: 'brooklyn@gmail.com', 
//       specialty: 'Dermatologist', 
//       date: '21/12/2025', 
//       status: 'Approved' 
//     },
//     { 
//       name: 'Kristin Watson', 
//       email: 'kristin@gmail.com', 
//       specialty: 'Infectious Disease', 
//       date: '22/12/2025', 
//       status: 'Declined' 
//     },
//     // More doctors...
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-x-auto">
//       <div className="p-4 border-b flex flex-col md:flex-row justify-between items-center">
//         <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-0">Waiting List</h3>
//         <button className="text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm md:text-base">
//           Add new doctor
//         </button>
//       </div>
//       <div className="w-full overflow-x-scroll">
//         <table className="w-full min-w-[600px]">
//         <thead className="bg-gray-50">
//           <tr>
//             {['Name', 'Email', 'Profession', 'Date', 'Status'].map((header) => (
//               <th 
//                 key={header} 
//                 className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-3 flex items-center">
//                 <img 
//                   src="/path/to/avatar" 
//                   alt={doctor.name} 
//                   className="w-10 h-10 rounded-full mr-3" 
//                 />
//                 {doctor.name}
//               </td>
//               <td className="p-3">{doctor.email}</td>
//               <td className="p-3">{doctor.specialty}</td>
//               <td className="p-3">{doctor.date}</td>
//               <td className="p-3">
//                 <span 
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     doctor.status === 'Approved' 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-red-100 text-red-800'
//                   }`}
//                 >
//                   {doctor.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// }

// export default WaitingList;