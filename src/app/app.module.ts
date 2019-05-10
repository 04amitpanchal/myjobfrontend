import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { routing } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewprofileComponent } from './login/viewprofile/viewprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule,MatInputModule,MatSortModule,MatCardModule, MatIconModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatOptionModule, MatSelectModule } from '@angular/material';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { DishesComponent } from './dishes/dishes.component';
import { CusionsComponent } from './cusions/cusions.component';
import { PastComponent } from './past/past.component';
import { SignComponent } from './sign/sign.component';
import { AdminComponent } from './admin/admin.component';
// import { TemplateComponent } from './template/template.component';
import { Template1Component } from './template1/template1.component';
import { BrowseAllCompanyComponent } from './browse-all-company/browse-all-company.component';
import { HeaderComponent } from './header/header.component';
import { AllCandidateComponent } from './all-candidate/all-candidate.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoblistComponent } from './joblist/joblist.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
// import { recNotification } from './classes/recNotificationClass';
import { SignupEmpComponent } from './signup-emp/signup-emp.component';
import { SignupRecComponent } from './signup-rec/signup-rec.component';
import { HeaderRecComponent } from './header-rec/header-rec.component';
import { RecNotificationComponent } from './rec-notification/rec-notification.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { EmpHeaderComponent } from './emp-header/emp-header.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ChangePasswordComponent } from './employee-profile/change-password/change-password.component';
import { EmpFieldWiseCompanyComponent } from './emp-field-wise-company/emp-field-wise-company.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChangePasswordRecComponent } from './change-password-rec/change-password-rec.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { EditProfileRecComponent } from './edit-profile-rec/edit-profile-rec.component';
import { App1headerComponent } from './app1header/app1header.component';
import { SignupRecAngComponent } from './signup-rec-ang/signup-rec-ang.component';
import { SignupEmpAngComponent } from './signup-emp-ang/signup-emp-ang.component';
import { RecProfileForEmpComponent } from './rec-profile-for-emp/rec-profile-for-emp.component';
import { RecPostedJobForEmpComponent } from './rec-posted-job-for-emp/rec-posted-job-for-emp.component';
import { EmpNotificationComponent } from './emp-notification/emp-notification.component';
import { HeaderForVisitorComponent } from './header-for-visitor/header-for-visitor.component';
import { JobSingleComponent } from './job-single/job-single.component';
import { CompanyPostedJobsComponent } from './company-posted-jobs/company-posted-jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { RecProfileForVisitorComponent } from './rec-profile-for-visitor/rec-profile-for-visitor.component';
import { CandidateForRecComponent } from './candidate-for-rec/candidate-for-rec.component';
import { EmpProfileRecComponent } from './emp-profile-rec/emp-profile-rec.component';
import { EmpProfileForVisitorComponent } from './emp-profile-for-visitor/emp-profile-for-visitor.component';
import { ContactusForRecComponent } from './contactus-for-rec/contactus-for-rec.component';
import { ContactusForEmpComponent } from './contactus-for-emp/contactus-for-emp.component';
import { RelatedCandidatesForRecComponent } from './related-candidates-for-rec/related-candidates-for-rec.component';
import { JobsForEmpComponent } from './jobs-for-emp/jobs-for-emp.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
// import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewprofileComponent,
    ProductComponent,
    AddproductComponent,
    RestaurentComponent,
    DishesComponent,
    CusionsComponent,
    PastComponent,
    SignComponent,
    AdminComponent,
    Template1Component,
    BrowseAllCompanyComponent,
    HeaderComponent,
    AllCandidateComponent,
    RecruiterProfileComponent,
    EmployeeProfileComponent,
    FooterComponent,
    ContactusComponent,
    JoblistComponent,
    Template1Component,
    PostAJobComponent,
    PostedJobsComponent,
    RecNotificationComponent,
    SignupEmpComponent,
    SignupRecComponent,
    HeaderRecComponent,
    AddEducationComponent,
    EmpHeaderComponent,
    EditEmployeeComponent,
    UpdateEmployeeComponent,
    ChangePasswordComponent,
    EmpFieldWiseCompanyComponent,
    AboutUsComponent,
    ChangePasswordRecComponent,
    HowItWorksComponent,
    TermsConditionsComponent,
    EditProfileRecComponent,
    App1headerComponent,
    SignupRecAngComponent,
    SignupEmpAngComponent,
    RecProfileForEmpComponent,
    RecPostedJobForEmpComponent,
    EmpNotificationComponent,
    HeaderForVisitorComponent,
    JobSingleComponent,
    CompanyPostedJobsComponent,
    AppliedJobsComponent,
    RecProfileForVisitorComponent,
    CandidateForRecComponent,
    EmpProfileRecComponent,
    EmpProfileForVisitorComponent,
    ContactusForRecComponent,
    ContactusForEmpComponent,
    RelatedCandidatesForRecComponent,
    JobsForEmpComponent,
    UploadCvComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
