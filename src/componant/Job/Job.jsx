 
 
import { IoLocationOutline } from "react-icons/io5";
 
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({job}) => {
    const{job_title,logo,remote_or_onsite,job_type,company_name,location,salary} = job
    return (
        <div className="p-10">

<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={logo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{job_title}</h2>
    <p> {company_name}</p>

    <div className="text-bold flex gap-4">
        <p >{remote_or_onsite}</p>
        <p>{job_type}</p>

    </div>

    <div className="flex gap-6">
         <div className="flex">
         <p className="mt-1"><IoLocationOutline /></p>
         <p>{location}</p>
         </div>

         <div className="flex">
         <p className="mt-1"><AiOutlineDollar /></p>
         <p> Salary:{salary}</p>
         </div>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary"> Vew Details</button>
    </div>
  </div>
</div>
               
        </div>
    );
};

export default Job;