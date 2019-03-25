export class recNotification{
  constructor(
    public rn_id:number,
    public fk_emp_id?:string,
    public fk_job_id?:number,
    public fk_apply_id?:number,
    public fk_rec_id?:string

  ){}
}
