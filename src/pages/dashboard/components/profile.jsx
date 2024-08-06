// src/pages/dashboard/components/Profile.jsx
import React, { useState, useEffect, useRef } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    // email: '',
    phoneNumber: '',
    bio: '',
    // address: '',
    // dob: '',
    // major: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    // Assuming there's a function fetchUserData that fetches the user's data
    const fetchUserData = async () => {
      // Fetch the user data from an API or local storage
      const userData = await fetchUserDataFromAPI();
      setFormData(userData);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save logic here, e.g., sending data to an API
    console.log('Form Data:', formData);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="container mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                ref={inputRef}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            {/* <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div> */}
            {/* <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div> */}
          </div>
          {/* <div className="mt-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div> */}
          <div className="mt-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="5"
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-[#065535] text-white px-4 py-2 rounded hover:bg-[#0e8c5f] transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

async function fetchUserDataFromAPI() {
  // Simulate fetching user data from an API
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        bio: '',
        address: '',
        dob: '',
        major: '',
      });
    }, 1000)
  );
}


// const Profile = ({ userData, onSave }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     phoneNumber: '',
//     bio: '',
//     address: '',
//     dob: '',
//     major: '',
//   });

//   useEffect(() => {
//     // Initialize form data with userData prop
//     setFormData(userData);
//   }, [userData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle save logic here, e.g., sending data to an API
//     onSave(formData);
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="container mx-auto bg-white p-4 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <div>
//               <label className="block text-gray-700">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <div>
//               <label className="block text-gray-700">Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Date of Birth</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded mt-1"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700">Major</label>
//             <input
//               type="text"
//               name="major"
//               value={formData.major}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-700">Bio</label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               rows="5"
//             ></textarea>
//           </div>
//           <div className="mt-4">
//             <button
//               type="submit"
//               className="bg-[#065535] text-white px-4 py-2 rounded hover:bg-[#0e8c5f] transition-colors duration-200"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

