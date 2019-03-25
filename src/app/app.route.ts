import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './login/viewprofile/viewprofile.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { DishesComponent } from './dishes/dishes.component';
import { CusionsComponent } from './cusions/cusions.component';
import { PastComponent } from './past/past.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { BrowseAllCompanyComponent } from './browse-all-company/browse-all-company.component';
import { Template1Component } from './template1/template1.component';
import { AllCandidateComponent } from './all-candidate/all-candidate.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoblistComponent } from './joblist/joblist.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { SignupRecComponent } from './signup-rec/signup-rec.component';
import { SignupEmpComponent } from './signup-emp/signup-emp.component';
import { RecNotificationComponent } from './rec-notification/rec-notification.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ChangePasswordComponent } from './employee-profile/change-password/change-password.component';
import { EmpFieldWiseCompanyComponent } from './emp-field-wise-company/emp-field-wise-company.component';
import { EditProfileRecComponent } from './edit-profile-rec/edit-profile-rec.component';
import { ChangePasswordRecComponent } from './change-password-rec/change-password-rec.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SignupRecAngComponent } from './signup-rec-ang/signup-rec-ang.component';
import { SignupEmpAngComponent } from './signup-emp-ang/signup-emp-ang.component';
import { RecProfileForEmpComponent } from './rec-profile-for-emp/rec-profile-for-emp.component';
import { RecPostedJobForEmpComponent } from './rec-posted-job-for-emp/rec-posted-job-for-emp.component';
import { EmpNotificationComponent } from './emp-notification/emp-notification.component';
import { HeaderForVisitorComponent } from './header-for-visitor/header-for-visitor.component';
import { JobSingleComponent } from './job-single/job-single.component';

const arr:Routes=[
  {path:'',component:Template1Component},
  {path:'addproduct',component:AddproductComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'dishes',component:DishesComponent},
  {path:'past/:id',component:PastComponent},
  // {path:'',component:SignComponent},
    {path:'admin',component:AdminComponent},
    {path:'browseallcompany',component:BrowseAllCompanyComponent},
    {path:'allcandidates',component:AllCandidateComponent},
    {path:'recruiterprofile/:id',component:RecruiterProfileComponent},
    {path:'employee-profile/:id',component:EmployeeProfileComponent},
    {path:'contactUs',component:ContactusComponent},
    {path:'joblist',component:JoblistComponent},
    {path:'postjob',component:PostAJobComponent},
    {path:'postedjobs',component:PostedJobsComponent},
    {path:'signuprec',component:SignupRecComponent},
    {path:'signupemp',component:SignupEmpComponent},
    {path:'recNotification',component:RecNotificationComponent},
    {path:'addEducation',component:AddEducationComponent},
    {path:'editEducation',component:EditEmployeeComponent},
    {path:'updateEmployee',component:UpdateEmployeeComponent},
    {path:'changePassword',component:ChangePasswordComponent},
    {path:'Emp-field-wise-Company',component:EmpFieldWiseCompanyComponent},
    {path:'editprofile',component:EditProfileRecComponent},
    {path:'changepassword',component:ChangePasswordRecComponent},
    {path:'aboutUs',component:AboutUsComponent},
    {path:'howitworks',component:HowItWorksComponent},
    {path:'signuprecang',component:SignupRecAngComponent},
    {path:'signupempang',component:SignupEmpAngComponent},
    {path:'companyprofile',component:RecProfileForEmpComponent},
    {path:'companiespostedjobs',component:RecPostedJobForEmpComponent},
    {path:'empnotification',component:EmpNotificationComponent},
    {path:'headerforvisitor',component:HeaderForVisitorComponent},
    {path:'JobSingle',component:JobSingleComponent}
];

export const routing=RouterModule.forRoot(arr);
