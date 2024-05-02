import React from 'react'
import { useEffect, useState } from 'react';

const ViewProfile = (props) => {


    //     const [userid, setUserid] = useState(null);
    //     const [name, setName] = useState("");
    //     const [hireable, setHireable] = useState("");
    //     const [email, setEmail] = useState("");
    //     const [password1, setPassword1] = useState("");
    //     const [password2, setPassword2] = useState("");
    //     const [date, setDate] = useState("");
    //     const [github, setGithub] = useState("");
    //     const [website, setWebsite] = useState("");
    //     const [location, setLocation] = useState("");
    // const [bio, setBio] = useState("");
    // const [picture, setPicture] = useState("");
    // const [fieldofinterest, setFieldofinterest] = useState([]);
    // const [seeking, setSeeking] = useState([]);
    // const [techstack, setTechstack] = useState([]);


    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //         getList()
    // }, [])


    // async function getList() {

    // fetch(`http://localhost:5000/api/browseprofile/`).then((result) => {
    //         result.json().then((resp) => {
    //         setUsers(resp)

    //     })
    // })

    // }
    console.log(props.data)








    return (

        <>
            <div className='container  ' >
                <h1>View Profile <hr /></h1>
            </div>
            <div className='m-2 bg-info ' style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)", borderRadius: "5px" }} >
                <div className=" mb-2 pt-4">
                    <img src="
https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='rounded-circle '
                        alt="" style={{ height: "80px", width: "120px", boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)" }} />

                </div>
                <div>Joe Allen</div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Email
                        </div>

                        <div className='col-8'>
                            joeallen@gmail.com
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Location
                        </div>

                        <div className='col-8'>
                            Poland
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Github
                        </div>

                        <div className='col-8'>
                            joeAllen@1432
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Website
                        </div>

                        <div className='col-8'>
                            www.red.com
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            bio
                        </div>

                        <div className='col-8'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nihil tempora, cupiditate nesciunt quos sit, quo animi sapiente ducimus tenetur alias asperio
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Fielg of Interest :
                        </div>

                        <div className='col-8'>
                            Information Technology
                        </div>
                    </div>
                </div>
                <div className='container '>
                    <hr />
                    <div className='row m-1'>
                        <div className='col-4'>
                            Seeking :
                        </div>

                        <div className='col-8'>
                            Remote
                        </div>
                    </div>
                </div>
                <div className='container '>
                    <hr />
                    <div className='row m-1 pb-3'>
                        <div className='col-4'>
                            Tech Stack :
                        </div>
                        <div className='col-8'>
                            React.js,Node.js,Ruby,Rail

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}





export default ViewProfile