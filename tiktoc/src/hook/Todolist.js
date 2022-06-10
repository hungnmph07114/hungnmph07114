import React,{useState } from "react";


function Todolist () {

    const [job , setJob] = useState('')
    const [jobs , setJobs] = useState(() => {
        const  localStorageJob = JSON.parse(localStorage.getItem('job'))
        return localStorageJob
    })
  const  handleSubmit = () =>{
setJobs(prev =>{
    const newJob = [...prev,job]
    const  json = JSON.stringify(newJob)
    localStorage.setItem('job',json)
    return  newJob
})
      setJob('')
    }
    return(
        <div style={{padding:32}}>
            <input value={job}
            onChange={e =>setJob(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
<ul>
    {jobs.map((job,index) =>(
        <li key={index}>{job}</li>
    ))}
</ul>
        </div>
    )
}
export default Todolist;