import React, { useEffect, useState } from 'react';
import send from '../send.svg';
import { Link, useLocation } from 'react-router-dom';

function DmUser() {

  const locations = useLocation();
  const [dmuser, setDmuser] = useState([]);

  async function getList() {
    let result = await fetch(`https://profile-management-system.onrender.com/api/dmuser/${locations.state.email}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    });
    const data = await result.json();
    console.log(data[0]);
    setDmuser(data[0]);


    if (data.success === false) {
      window.alert("No User Found");

    }
  }

  useEffect(() => {
    getList();

  }, [])




  return (
    <div>

      {
        dmuser != []
          ?
          dmuser.map((i) => {
            return (
              <>
                <div className='row bg-info p-2 m-2' style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)", borderRadius: "5px" }}>
                  <div className='row'>
                    <div className='col-auto'>
                      <Link to='/viewprofile' className='btn'>
                        <img src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className='rounded-circle '
                          alt="" style={{ height: "40px", width: "80px" }} />
                      </Link>
                    </div>
                    <div className='col-auto'>
                      <Link to='/viewprofile' className='btn'>
                        <h2>
                          {i.name}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='row justify-content-center p-2' style={{ backgroundColor: "white" }}>
                  <div className=''>
                    <img src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className='rounded-circle '
                      alt="" style={{
                        // boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)", 
                        height: "100px", width: "120px"
                      }} />
                    <div>
                      <div to='/viewprofile' className='btn'>
                        <h2>
                          {i.name}
                        </h2>
                      </div>
                    </div>
                    <Link className='btn btn-outline-secondary border-0' to='/viewprofile'>View Profile</Link>
                  </div>
                </div>
                <div className='Container' >
                  <div className='row fixed-bottom m-2 ' >
                    <div className=''>
                      <div className='col-auto input-group mb-1 border' style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.5)", borderRadius: "5px", }}>
                        <input type="text" className='form-control border-0 shadow-none bg-light' placeholder='enter your message' />
                        <div className='input-group-text'>
                          <button className='btn btn-light'>
                            <img src={send} alt="" />
                          </button>
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
    </div>
  )
}

export default DmUser;