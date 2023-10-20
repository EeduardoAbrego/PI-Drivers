


const Form = ( ) => {

    const [userData, setUserData] = useState({
        forename: ""  ,
        surname: "",
        nationality: "",
        image: "" ,
        dob: "",
        description: "",
        teams: "",
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

     


     const handleChange = (e) => {
       const proper = e.target.name;
       const value = e.target.value;
        
       setUserData({...userData, [proper]:value });
       
}

     const handleSubmit = (event) => {

      event.preventDefault();
      login(userData);

     }
    return (
        <div className={style.container} >
        <form onSubmit={handleSubmit}  >
          
           <div>
              <label htmlFor="email">Name</label>
              <input type="text" name="name" value={userData.name} onChange={handleChange} />
              <span>{errors.email} </span>
            </div>
        
           <div>
              <label htmlFor="password" >Password </label>
              <input type="text" name="password" value={userData.password} onChange={ handleChange} />
              <span>{errors.password} </span>
            </div>
 
           <div>
              <button type="submit" > Send </button>
            </div>
            
         </form>
         </div>
    )
}

export default Form