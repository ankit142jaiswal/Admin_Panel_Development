import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import ViewProfile from './ViewProfile';
import DmStudent from './DmStudent';


function BrowseProfile() {

    const [search, setSearch] = useState('');
    const [browseprofile, setBrowseprofile] = useState([]);
    // const [userid , setUserid]= useState("");

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [github, setGithub] = useState("");
    // const [website, setWebsite] = useState("");
    // const [location, setLocation] = useState("");
    // const [bio, setBio] = useState("");
    // const [picture, setPicture] = useState("");
    // const [fieldofinterest, setFieldofinterest] = useState([]);
    // const [seeking, setSeeking] = useState([]);
    // const [techstack, setTechstack] = useState([]);
    const navigate =  useNavigate();
    useEffect(() => {
        loadData()
    }, []);

    async function loadData() {
        let result = await fetch("https://profile-management-system.onrender.com/api/browseprofile", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.log(data[0]);
        setBrowseprofile(data[0]);

        // if (browseprofile.length ===0){
        //     window.alert("No profile Found !!")
        // }
    
}



async function deleteData(userid) {
    
    let result = await fetch(`http://localhost:5000/api/deletebrowseuser/${userid}`,{
        method:'DELETE',
       
      });
      const data = await result.json();
      if(data.success === true){
          window.alert("Deleted Successfully!");  
          
        
        }    
        
        
        if (data.success === false ){
            window.alert(" Data Can't be Deleted !!");
            console.log(userid)
        }
        loadData()
}
async function selectUser(userid){
    
        
        let data = browseprofile[userid]
        
        // setName(item.name)
        // setEmail(item.email)
        // setGithub(item.github)
        // setWebsite(item.website)
        // setLocation(item.location)
        // setSeeking(item.seeking)
        // setPicture(item.picture)
        // setFieldofinterest(item.fieldofinterest)
        // setTechstack(item.techstack)
        // setBio(item.bio)

        // let data = {name, email, github, website, picture, location, bio, fieldofinterest, seeking, techstack }



            navigate('/viewprofile')
            console.log(data)
            
            return (
            <>
            <ViewProfile data={data} />
            </>

)

    }

async function dmStudent(userid){
    let data = browseprofile[userid]
        // setName(item.name)
        // setEmail(item.email)
        // setGithub(item.github)
        // setWebsite(item.website)
        // setLocation(item.location)
        // setSeeking(item.seeking)
        // setPicture(item.picture)
        // setFieldofinterest(item.fieldofinterest)
        // setTechstack(item.techstack)
        // setBio(item.bio)

        // let data = {name, email, github, website, picture, location, bio, fieldofinterest, seeking, techstack }

        navigate('/dmstudent')
        console.log(data)
    return(
        <>
        <DmStudent data={data}/>
        </>
    )
    
    
}

return (
    <div>
        <div className='container'>
            <h1 style={{ textAlign: "center" }}>Browse Profile <hr /></h1>
            <div className='mb-3 row p-3' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                <p className="form-label">Sort By</p>

                <div className='col-auto'>

                    <select class="form-select" aria-label="Default select example" id='fieldofinterest' >
                        <option selected>Field of Intrest</option>
                        <option value="Security">Security</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Bussiness Developement">Bussiness Developement</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='col-auto'>
                    <select class="form-select" id='techstack'  >
                        <option value="0">Tech Stack</option>
                        <option value="Ruby">Ruby</option>
                        <option value="React.js">Reactjs</option>
                        <option value="Rail">Rail</option>
                        <option value="JavaScripts">Javascripts</option>
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="Python">Python</option>
                        <option value="Laravel">Laravel</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Java">Java</option>


                    </select>

                </div>

                <div className='col-auto pt-1'>
                    Sort By Cohort
                </div>
                <div className='col-auto'>
                    <input type="date" className="form-control" id="sortdate" />

                </div>

                <div className='col-4'>
                    <input type="text" className='form-control' id='searchInput' placeholder='Keyword Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
                <div className='col-auto'>
                    <button type='button' className='btn btn-primary' >Search</button>
                </div>
            </div>
            <hr />

            <div className='mb-3'  >
                {   
                    browseprofile !=[]?
                    browseprofile.filter((item)=>((item.name.toLowerCase().includes(search.toLowerCase())) || (item.bio.toLowerCase().includes(search.toLowerCase())) ))
                    .map((i) => {
                        
                        return (
                            <>
                                <div className='mb-3 row border py-3' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >
                                    <div className='col-auto'>
                                        <img id="selectedImage" src={i.picture}
                                            alt="example placeholder " style={{ width: "180px", height: "180px" }} />


                                    </div>
                                    <div className='col-6'>
                                        <p> 
                                            {i.name},<br />
                                            {i.bio}<br />
                                            <button className='btn btn-outline-secondary'>
                                                {i.fieldofinterest}
                                            </button><br />
                                            {   
                                                i.techstack
                                                .map((j) => {
                                                    return (
                                                        <>
                                                            <button className='btn btn-outline-secondary'>
                                                                {j}

                                                            </button>
                                                        </>
                                                    )
                                                })

                                            }
                                        </p>
                                    </div>
                                    <div className='col-auto py-5 '>
                                        <button type='butoon' className='btn btn-danger '  onClick={()=>deleteData(i._id)}>Delete</button>
                                    </div>
                                    <div className='col-auto py-5'>
                                        <button type='butoon' className='btn btn-warning' onClick={()=>dmStudent(i.userid)} >DM Student</button>
                                    </div>
                                    <div className='col-auto py-5'>
                                        <button type='butoon' className='btn btn-info' onClick={() => selectUser(i.userid)} >View Profile</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    ): 
                    <div>""""""""""""""""""""""</div>


                }
            </div>
        </div>
    </div>
)
}

export default BrowseProfile