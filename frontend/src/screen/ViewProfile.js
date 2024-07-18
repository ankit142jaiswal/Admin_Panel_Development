import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ViewProfile() {


    const locations = useLocation();
    const [viewprofile, setViewprofile] = useState([]);

    async function getList() {
        let result = await fetch(`https://profile-management-system.onrender.com/api/viewprofile/${locations.state.email}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        });
        const data = await result.json();
        console.log(data[0]);
        setViewprofile(data[0]);


        if (data.success === false) {
            window.alert("No User Found");

        }
    }

    useEffect(() => {
        getList();

    }, [])





return (
    <div>

        {viewprofile != [] ?
            viewprofile.map((i) => {
                return (

                    <>
                        <div className='container  mt-5 ' >
                            <div className='row p-3' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                <h1>View Profile <hr /></h1>
                                <div className=" mb-2 pt-4">
                                    <img src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className='rounded-circle '
                                        alt="" style={{ height: "80px", width: "120px", boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)" }} />

                                </div>

                                <h1>{i.name}</h1>

                                <div className='container px-lg-5 text-start'>
                                    <hr />
                                    <div className='row m-1 '>

                                        <div className='col-4'>
                                            Email:
                                        </div>

                                        <div className='col-8'>
                                            {i.email}
                                        </div>
                                    </div>


                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            Location:
                                        </div>

                                        <div className='col-8'>
                                            {i.location}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            Github:
                                        </div>

                                        <div className='col-8'>
                                            {i.github}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            Website:
                                        </div>

                                        <div className='col-8'>
                                            {i.website}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            bio:
                                        </div>

                                        <div className='col-8'>
                                            {i.bio}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            Field of Interest:
                                        </div>

                                        <div className='col-8'>
                                            {i.fieldofinterest}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1'>
                                        <div className='col-4'>
                                            Seeking:
                                        </div>

                                        <div className='col-8'>
                                            {i.seeking}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='row m-1 pb-3'>
                                        <div className='col-4'>
                                            Tech Stack :
                                        </div>
                                        <div className='col-8'>
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </>
                )
            }) :

            <div>
                <div className='row bg-info p-2 m-2' style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)", borderRadius: "5px" }}>
                    <p>No Data Found !!</p>
                </div>
            </div>
        }
    </div >
)



}


export default ViewProfile