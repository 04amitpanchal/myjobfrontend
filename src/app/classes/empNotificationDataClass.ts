export class empNotificatioonData{
  constructor(
    public res_id?:number,
    public fk_apply_id?:number,
    public res_status?:string,
    public res_desc?:string,
    public apply_id?:number,
    public fk_emp_id?:string,
    public fk_job_id?:number,
    public apply_date?:string,
    public job_id?:number,
    public job_title?:string,
    public posted_date?:string,
    public skill_req?:string,
    public job_desc?:string,
    public salary_min?:number,
    public salary_max?:number,
    public fk_rec_id?:string
  ){}
}
