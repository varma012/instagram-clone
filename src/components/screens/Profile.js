import React from 'react'


const Profile =()=>{
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px opx",
                borderBottom:"1px solid grey"
            }}>
                <div>
                 <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 />
                </div>
                <div>
                    <h4>ramesh verma</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>40 posts</h6>
                    <h6>40 followers</h6>
                    <h6>40 following</h6>
                   </div>
                </div>
            </div>

            <div className="gallery">
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
           
            </div>
        </div>
    )
}


export default Profile