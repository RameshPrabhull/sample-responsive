import {useState} from 'react';
function Ticket(){
    const [ticket,setTicket]=useState(0)
    if(ticket===0){
    return(
        <>
        <div className='text-'>Ticket 0</div>
        <button onClick={()=>{setTicket(ticket+1)}}>click</button>
        </>
    )
}
if(ticket===1){
    return(
        <>
        <div>Ticket 1</div>
        <button onClick={()=>{setTicket(ticket+1)}}>click</button>
        </>
    )
}
if(ticket===2){
    return(
        <>
        <div>Ticket 2</div>
        <button onClick={()=>{setTicket(0)}}>click</button>
        </>
    )
}
}
export default Ticket;