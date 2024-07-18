import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function BrowseProfile() {

    const [search, setSearch] = useState('');
    const [browseprofile, setBrowseprofile] = useState([]);
    const navigate = useNavigate();
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



    async function deleteUser(userid) {

        let result = await fetch(`https://profile-management-system.onrender.com/api/deletebrowseuser/${userid}`, {
            method: 'DELETE',

        });
        const data = await result.json();
        if (data.success === true) {
            window.alert("Deleted Successfully!");
        }
        if (data.success === false) {
            window.alert(" Data Can't be Deleted !!");
            console.log(userid)
        }
        loadData()
    }
    async function viewProfile(email) {
        navigate('/viewprofile', { state: { email: email } });


    }

    async function dmUser(email) {
        navigate('/dmuser', { state: { email: email } });

    }

    return (
        <div>
            <div className='container mt-5'>
                <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                    <h1 style={{ textAlign: "center" }}>Browse Profile <hr /></h1>
                    
                    
                    <div className='row mb-3 justify-content-center'>

                        <div className='col-auto pt-1'>
                            Sort By
                        </div>
                        <div className='col-auto'>
                            <select className="form-select" aria-label="Default select example" id='fieldofinterest' >
                                <option selected>Field of Intrest</option>
                                <option value="Security">Security</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Bussiness Developement">Bussiness Developement</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='col-auto'>
                            <select className="form-select" id='techstack'  >
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

                        <div className='col-auto pt-1 '>
                            Sort By Cohort
                        </div>
                        <div className='col-auto'>
                            <input type="date" className="form-control" id="sortdate" />

                        </div>
                        <div className='col-2'>
                            <input type="text" className='form-control' id='searchInput' placeholder='Keyword Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        </div>
                        <div className='col-auto'>
                            <Link to={'/addnewuser'} className='btn btn-primary' >Add New User</Link>
                        </div>
                    
                    </div>
                    
                </div>
                <hr />

                <div className='mb-3'  >
                    {
                        browseprofile != [] ?
                            browseprofile.filter((item) => ((item.name.toLowerCase().includes(search.toLowerCase())) || (item.bio.toLowerCase().includes(search.toLowerCase()))))
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
                                                    <button type='butoon' className='btn btn-danger ' onClick={() => deleteUser(i._id)}>Delete User</button>
                                                </div>
                                                <div className='col-auto py-5'>
                                                    <button type='butoon' className='btn btn-warning' onClick={() => dmUser(i.email)} >DM User</button>
                                                </div>
                                                <div className='col-auto py-5'>
                                                    <button type='butoon' className='btn btn-info' onClick={() => viewProfile(i.email)} >View Profile</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                ) :
                            <div>
                                <div className='mb-3 row p-3' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                    <p>
                                        No Data Found !!
                                    </p>
                                </div>
                            </div>


                    }
                </div>
            </div>
        </div>
    )
}

export default BrowseProfile