import { useEffect, useState } from "react";
import axios from "axios"


const Form = ( ) => {

   
  const [driverData, setDriverData] = useState({
    forename: "hola",
    surname: "soy",
     image: "",
    nationality: "arg",
   description: "holahola",
     dob:"25-8-25",
     teams:"48d852af-db85-4443-bb7c-994100b22f26"
   }); 

   const [errors, setErrors] = useState({
      forename: ""  ,
      surname: "",
      nationality: "",
      image: "" ,
      dob: "",
      description: "",
      teams: "",
   });


   const [allTeams, setAllTeams] = useState([])



   useEffect(() => {
    const asyncFn = async () => { 
        const {data} = await  axios("http://localhost:3001/teams")
         setAllTeams(data) 
       };
    asyncFn();
  }, []);

   const createDriver = async (driver) => {
    await axios.post("http://localhost:3001/drivers", driver)
    alert("usuario creado")
   }



   const handleChange = (e) => {
     const proper = e.target.name;
     const value = e.target.value;
     setDriverData({...driverData, [proper]:value });
    }
     
  const handleSubmit = (event) => {

      event.preventDefault();
      createDriver(driverData);
    }

     const handleSelect = (e) => {
        const {value} = e.target;
        setDriverData({...driverData, teams:[...driverData.teams  ,value] })
     }
    return (
      <div className="" >
        <form onSubmit={handleSubmit} >

         <div>
           <label htmlFor="Name">Name</label>
              <input type="text" name="forename" value={driverData.forename} onChange={handleChange} />
              <p>{errors.forename} </p>

         </div>

           <div>
           <label htmlFor="Apellido" >Apellido </label>
              <input type="text" name="surname" value={driverData.surname} onChange={ handleChange} />
              <p>{errors.surname} </p>

            </div>

            <div>
              <label htmlFor="Nationality" >Nationality </label>
              <input type="text" name="nationality" value={driverData.nationality} onChange={ handleChange} />
              <p>{errors.nationality} </p>

            </div>

            <div>
              <label htmlFor="Image" >Image </label>
              <input type="text" name="image" value={driverData.image} onChange={ handleChange} />
              <p>{errors.image} </p>

            </div>

            <div>
              <label htmlFor="Date of Birthday" > Date of Birthday </label>
              <input type="text" name="dob" value={driverData.dob} onChange={ handleChange} />
              <p>{errors.dob} </p>

            </div>

            <div>
              <label htmlFor="Description" > Description </label>
              <input type="text" name="description" value={driverData.description} onChange={ handleChange} />
              <p>{errors.description} </p>

            </div>

            <div>
              <div>
                <label htmlFor="Teams" > Teams </label>
                <input type="text" name="teams" value={driverData.teams} onChange={ handleChange}  />

                  <select   onChange={ handleSelect} >
                  <option selected disabled >Teams</option>
                     {allTeams.map((team) =>  <option value={team} >{team}</option>
                     )}
                  </select>

              </div>
              <p>{errors.teams} </p>

            </div>

           <div>
              <button type="submit" > Send </button>
            </div>
            
         </form>
         </div>
   )
}

export default Form