import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/utility";

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // Correcting the typo from `include` to `includes`
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            setAppliedJobs(jobsApplied);
            console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <h1>Welcome to the applied job section</h1>
            <h1>Applied Jobs: {appliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJob;
