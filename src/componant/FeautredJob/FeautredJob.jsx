import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

 

const FeautredJob = () => {

    const [jobs,setjobs] = useState([])

    const [datalength,setdatalength] = useState(4)
    useEffect(()=>
        {
            fetch('jobs.json')
            .then(res =>res.json())
            .then(data =>setjobs(data))
        },[])

    return (
        <div className="">
            <h1 className="text-4xl">This is feautre job section</h1>
            <h1>Job {jobs.length}</h1>

            <div className="grid grid-cols-2">
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            
            <div className= { datalength === jobs.length && 'hidden'}>
            <button 
            
            onClick={()=>setdatalength()}
            className="btn glass">Show More</button>
            </div>
        </div>

         

         
    );
};

export default FeautredJob;