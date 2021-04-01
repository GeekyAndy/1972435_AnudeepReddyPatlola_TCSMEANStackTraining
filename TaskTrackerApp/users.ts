export class tasksForEmployees
{
    id:string;
    name:string;
    task:string;
    deadline: Date;


    constructor(id:any,name:any, task:any,deadline:any)
    {
        this.id = id;
        this.name = name;
        this.task = task;
        this.deadline = deadline;
    }


}