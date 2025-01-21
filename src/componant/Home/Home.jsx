import Banner from "../Banner/Banner";
import FeautredJob from "../FeautredJob/FeautredJob";
import Jobcatagory from "../Jobcatagory/Jobcatagory";

 
const Home = () => {
    return (
        <div>
            <h1>welcome to Home section</h1>
            <Banner></Banner>
            <Jobcatagory></Jobcatagory>
             <div className="mx-40 my-5 p-2">
             <FeautredJob ></FeautredJob>
             </div>
        
        </div>
    );
};

export default Home;