import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () => {
    const jobs = useLoaderData;
    const { id } = useParams;
    const int = parseInt(id)
    const job = jobs.find(job => job.id === int)
    console.log(job, id);
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div>
            <h1>job detail of: {job.job_title}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border col-span-3">
                    <h1>{job.company_name}</h1>
                </div>
                <div>
                    <h2>Side Things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;