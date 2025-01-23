import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/utility";

 

const Appliedjob = () => {

    const jobs = useLoaderData()
     const[appliedJobs,setappliedJobs] = useState([]);
    useEffect(()=>
        {
            const storedJobIds  = getStoredJobApplication();
            if(jobs.length>0)
            {
                const jobsApplied = jobs.filter(job => storedJobIds.include(job.id) )

                setappliedJobs(jobsApplied);
                console.log(jobs,storedJobIds,jobsApplied);
            }
        },[])
    return (
        <div>
            <h1> welcome to applied job section</h1>
            <h1>Applied Jobs : {appliedJobs.length}</h1>
            
        </div>
    );
};

export default Appliedjob;