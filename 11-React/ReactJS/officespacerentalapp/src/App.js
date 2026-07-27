function App() {

  const officeSpaces = [
    {
      name: "DBS",
      rent: 55000,
      address: "Chennai",
      image: "https://picsum.photos/300/200?1"
    },
    {
      name: "WeWork",
      rent: 75000,
      address: "Bangalore",
      image: "https://picsum.photos/300/200?2"
    },
    {
      name: "Regus",
      rent: 60000,
      address: "Hyderabad",
      image: "https://picsum.photos/300/200?3"
    }
  ];

  return (

    <div style={{padding:"20px"}}>

      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office,index)=>(

        <div key={index} style={{marginBottom:"30px"}}>

          <img
            src={office.image}
            alt={office.name}
            width="300"
          />

          <h2>{office.name}</h2>

          <h3
            style={{
              color:office.rent<60000
              ?"red"
              :"green"
            }}
          >
            Rent : ₹{office.rent}
          </h3>

          <h3>Address : {office.address}</h3>

          <hr/>

        </div>

      ))}

    </div>

  );

}

export default App;