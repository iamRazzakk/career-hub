import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{job_description}</p>
                    <div className="flex">
                        <button className="btn btn-accent px-5 py-2 font-extrabold rounded border border-blue-300 mr-4">{remote_or_onsite}</button>
                        <button className="btn btn-accent px-5 py-2 font-extrabold rounded border border-blue-300 mr-4">{job_title}</button>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex"> <FaLocationDot className="text-2xl mr-2"></FaLocationDot>{location}</h2>
                        <h2 className="flex ml-3">
                            <AiFillDollarCircle className="text-2xl mr-2"></AiFillDollarCircle>{salary}
                        </h2>
                    </div>

                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;