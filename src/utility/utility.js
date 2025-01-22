const getstoredjobapplication = () =>
{
    const storedjobapplication = localStorage.getItem('jobapplication');
    if (storedjobapplication)
    {
        return JSON.parse(storedjobapplication);
    }
    return[];
}

const savejobapplication = id =>
{
    const savejobapplication = getstoredjobapplication();
    const exists = savejobapplication.find(jobid => jobid === id);
    if(!exists)
    {
        savejobapplication.push(id);
        localStorage.setItem('jobapplication',JSON.stringify(savejobapplication))
    }
}

export {savejobapplication,getstoredjobapplication}