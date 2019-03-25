export class recNotificationData{
  constructor(
    public emp_id:string,
    public emp_password:string,
    public first_name:string,
    public last_name:string,
    public country:string,
    public state:string,
    public city:string,
    public emp_field:string,
    public emp_photo:string,
    public job_id:number,
    public fk_rec_id:string,
    public job_title:string,
    public posted_date:string,
    public skill_req:string,
    public job_desc:string,
    public salary_min:number,
    public salary_max:number,
    public apply_id:number,
    public fk_emp_id:string,
    public fk_job_id:number,
    public apply_date:string

  ){}
}
