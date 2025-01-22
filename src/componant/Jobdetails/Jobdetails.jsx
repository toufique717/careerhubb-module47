import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { savejobapplication } from "../../utility/utility";

const jobdetailss = () =>
{

    
    toast('you successfully applied the job');
}

  
const Jobdetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idint = parseInt(id);
    const job = jobs.find(job =>job.id ===idint)
    console.log(job)
    return (
        <div>
            
            <h1>job details {id}</h1>
            <div className="border grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-lime-300">

                    <h1>Job details part 1</h1>

                </div>
                <div className="col-span-1 bg-slate-400">

                <h1>Job details part 2</h1>

                </div>
            </div>

            <div>
            <button onClick={jobdetailss} className="btn btn-wide m-5">Apply now</button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Jobdetails;