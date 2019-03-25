export class jobR{
  constructor(
    public job_id:number,
    public job_title:string,
    public posted_date:string,
    public skill_req:string,
    public job_desc:string,
    public salary_min:number,
    public salary_max:number,
    public fk_rec_id?:string,
    public Job_field?:string,
    public rec_id?:string,
    public password?:string,
    public company_name?:string,
    public company_web?:string,
    public adderess?:string,
    public company_type?:string,
    public rec_photo?:string
  ){}
}
