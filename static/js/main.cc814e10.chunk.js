(this.webpackJsonpenrollment=this.webpackJsonpenrollment||[]).push([[0],{29:function(e,t,a){},41:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(39),o=a.n(r),c=(a(29),a(3)),s=a(4),i=a(6),m=a(5),u=a(10),d=a(7),p=a(16),E=a.n(p),h=(p.initializeApp({apiKey:"AIzaSyAEyrvcmK75JwrmIVVFzoS5KZsy2XiRvUM",authDomain:"novum-student-enrollment.firebaseapp.com",databaseURL:"https://novum-student-enrollment.firebaseio.com",projectId:"novum-student-enrollment",storageBucket:"novum-student-enrollment.appspot.com",messagingSenderId:"267610275875",appId:"1:267610275875:web:9adf9b9aae776c1a127196"}).database().ref(),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"logout",value:function(){p.auth().signOut()}},{key:"render",value:function(){return l.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-light bg-info"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement(u.b,{to:"/home"},l.a.createElement("i",{className:"fas fa-user-graduate"})),l.a.createElement(u.b,{to:"/home",className:"navbar-brand text-white"},"Novum Student Enrollment"),l.a.createElement("ul",{className:"navbar-nav mx-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.b,{to:"/home",className:"nav-link text-white"},"Home")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.b,{to:"/weightingsystem",className:"nav-link text-white"},"Weighting System")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/courses",className:"nav-link text-white"},"Courses")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/admin",className:"nav-link text-white"},"Admin")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{onClick:this.logout,className:"btn bg-info",style:{color:"white"}},"Logout")))))}}]),a}(n.Component)),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"space3"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1601854036/enrollment/nesa-by-makers-IgUR1iX0mqM-unsplash_l4oprg.jpg",className:"d-block w-100",alt:"university student learning"}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h2",null,"Welcome to Novum Student Enrollment"),l.a.createElement("p",null,"We make the application process for straight-out-highschool students much easier! See what courses are available to you in the University of your choice"))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleFade",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleFade",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))))),l.a.createElement("section",{className:"centralize"},l.a.createElement("h3",null,"Enroll for a Course of your choice with Novum Student Enrollment"),l.a.createElement("p",null,"Find out how the weighting System works."),l.a.createElement(u.b,{to:"/weightingsystem"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"Weighting System")),l.a.createElement("div",{className:"space"},l.a.createElement("p",null,"Choose a course of your choice from all the listed courses offered by the University and apply."),l.a.createElement(u.b,{to:"/courses"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"Courses")))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"login",value:function(){var e=document.querySelector("#email").value,t=document.querySelector("#password").value;E.a.auth().signInWithEmailAndPassword(e,t).then((function(e){console.log("Successfully Logged In")})).catch((function(e){console.log("Error: "+e.toString())}))}},{key:"signup",value:function(){var e=document.querySelector("#email").value,t=document.querySelector("#password").value;E.a.auth().createUserWithEmailAndPassword(e,t).then((function(e){console.log("Successfully Signed up")})).catch((function(e){console.log("Error: "+e.toString())}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"height"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"d-flex justify-content-center h-100"},l.a.createElement("div",{className:"user_card"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"brand_logo_container"},l.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1601854035/enrollment/adrian-dascal-Ar4uu5YKLK4-unsplash_qgubfe.jpg",className:"brand_logo",alt:"Logo"}))),l.a.createElement("div",{className:"d-flex justify-content-center form_container"},l.a.createElement("form",null,l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("input",{type:"text",name:"email",className:"form-control input_user",id:"email",placeholder:"email"})),l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-key"}))),l.a.createElement("input",{type:"password",name:"password",className:"form-control input_pass",id:"password",placeholder:"password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customControlInline"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customControlInline"},"Remember me"))),l.a.createElement("div",{className:"d-flex justify-content-center mt-3 login_container"},l.a.createElement("button",{type:"button",name:"button",className:"btn login_btn",onClick:this.login},"Login")))),l.a.createElement("div",{className:"mt-4"},l.a.createElement("div",{className:"d-flex justify-content-center links"},l.a.createElement("p",null,"Don't have an account? ")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn login_btn",onClick:this.signup},"Sign Up")),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("button",{className:"btn login_btn"},"Forgot your password?"))))))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container space3"},l.a.createElement("h2",null," DETAILED WEIGHTING SYSTEM FOR PROGRAMMES OFFERED AT UNIVERSITY "),l.a.createElement("p",{className:"importantToNote"},"IMPORTANT TO NOTE:    That the existing Weighting System shown below applies to all the five Public Universities. Candidates are therefore advised to study and understand the weighting system before completing PUJAB forms and ensure that they get access to an updated weighting system for 2013/2014 Admissions."),l.a.createElement("div",{className:"space1"},l.a.createElement("h2",null," WEIGHTING CRITERIA "),l.a.createElement("p",{className:"weightingCriteria"},"All subjects taken at the Advanced Level of Education are grouped into four categories and weighted as follows for purposes of admission to any programme of Undergraduate study in the University."),l.a.createElement("table",{class:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," Subject "),l.a.createElement("th",{scope:"col"}," Category "),l.a.createElement("th",{scope:"col"}," Weight "))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"(i)"),l.a.createElement("td",null," Essential "),l.a.createElement("td",null," 3 ")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"(ii)"),l.a.createElement("td",null," Relevant"),l.a.createElement("td",null,"2")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"(iii)"),l.a.createElement("td",null," Desirable"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"(iv)"),l.a.createElement("td",null," Others"),l.a.createElement("td",null,"0.5")))),l.a.createElement("p",null,"The Essential A\u2019 Level subjects for University Programmes must be passed with at least a Principal Pass."),l.a.createElement("p",null,"For a given candidate, not more than three subjects taken at the principal level shall carry a weight of 3, 2, or 1."),l.a.createElement("p",null,"For a given candidate, principal level subjects in excess of the three defined in 1.1 (i) to (iii) above, shall be designated as \u201cOthers\u201d and shall carry a weight of 0.5"),l.a.createElement("p",null,"Not more than two subjects shall be designated as \u201cEssential\u201d."),l.a.createElement("p",null,"A pass in a subject taken at subsidiary level such as General Paper, shall carry one point. A subsidiary pass ranges from grades 1 to 6."),l.a.createElement("p",null,"In case of programmes where \u201cEssential\u201d subjects may be three or more, an \u201cEssential set\u201d of subjects is defined. The best-performed two subjects of the essential set shall be designated as \u201cEssential Subjects\u201d and weighted three. The 3rd best done subjects from the Essential Set shall be designated as the \u201cRelevant Subject\u201d and weighted two."),l.a.createElement("p",null,"When computing points special programme requirements are also taken into     consideration."),l.a.createElement("p",null,"For \u2018O\u2019 level grades, Distinctions 1 & 2 carry 0.3 points, Credits 3 to 6 carry 0.2 ,Passes 7 & 8 carry 0.1 and Fail (9) carry  0.0 weights respectively."),l.a.createElement("p",null,"For A\u2019 Level grades, the conversion scale is A=6, B=5, C=4, D=3, E=2, O=1, F=0 points."),l.a.createElement("p",{className:"weightingCriteria"},l.a.createElement("div",null," ",l.a.createElement("h5",null,"    THE COMBINED WEIGHT OF A CANDIDATE FOR ADMISSION TO THE UNIVERSITY")," "),"a)    The O\u2019Level weight of a candidate for any programme in the University, is obtained by multiplying the numbers of Distinctions/Credits/Passes, by the relevant weights and adding up for the Distinctions, Credits and passes actually obtained by the candidate."),l.a.createElement("p",null,"b)    The A\u2019Level weight, for a given programme, of a candidate is obtained by multiplying each subject grade point by the relevant weighting factor and adding up for all the subjects taken and passed."),l.a.createElement("p",null,"c)    The combined weight of a candidate for a given programme, is obtained by adding the O\u2019Level weight obtained (a) above to the A\u2019Level weight obtained (b) above.  The best candidate for each programme is the one with the highest combined weight."),l.a.createElement("p",null,"d)    Candidates are selected on merit from those who apply for a programme as their first choice plus those who apply for the programme as 2nd, 3rd, 4th choice etc., if they have not been admitted to programmes of their earlier choices.  All choices are considered."),l.a.createElement("p",null,"Additionally, Makerere University has 10 Constituent Colleges whose weighting systems are unique."),l.a.createElement("p",null,"Please ",l.a.createElement("a",{href:"https://news.mak.ac.ug/2016/11/public-universities-joint-admissions-information-2017-2018/"},"click here ")," to view the detailed waiting system by Academic Unit."),l.a.createElement(u.b,{to:"/courses"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"Apply for a Course  here "))))}}]),a}(n.Component),v=a(20),N=a.n(v),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("b",null,this.props.onecourse.college)),l.a.createElement("td",null," ",this.props.onecourse.programme),l.a.createElement("td",null," ",this.props.onecourse.essentialSubjects),l.a.createElement("td",null," ",this.props.onecourse.relevantSubjects),l.a.createElement("td",null," ",this.props.onecourse.desirableSubjects),l.a.createElement("td",null," ",l.a.createElement(u.b,{to:"/apply"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"Enroll"))," "))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={courses:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:8000/courses/").then((function(t){e.setState({courses:t.data})})).catch((function(e){return console.log(e)}))}},{key:"listCourses",value:function(){return this.state.courses.map((function(e){return l.a.createElement(y,{onecourse:e,key:e._id})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"space3"},l.a.createElement("h2",{className:"space"}," ENROLL FOR A COURSE"),l.a.createElement("p",{className:"importantToNote"},"Enroll for  a course of your choice."),l.a.createElement("table",{className:"table table-striped",style:{marginTop:30}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"COLLEGE"),l.a.createElement("th",null,"PROGRAMME"),l.a.createElement("th",null,"ESSENTIAL SUBJECTS"),l.a.createElement("th",null,"RELEVANT SUBJECTS"),l.a.createElement("th",null,"DESIRABLE SUJECTS"),l.a.createElement("th",null," Action "))),l.a.createElement("tbody",null,this.listCourses())))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeProgramme=function(e){n.setState({programme:e.target.value})},n.onChangeCollege=function(e){n.setState({college:e.target.value})},n.state={college:"",programme:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:8000/courses"+this.props.match.params.id).then((function(t){e.setState({college:t.data.college,programme:t.data.programme})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"space3"},l.a.createElement("div",null,l.a.createElement("h1",null," OFFICE OF THE ACADEMIC REGISTRAR"),l.a.createElement("h4",{className:"space2"},"APPLICATION FORM FOR ADMISSION TO THE DEGREE PROGRAMME FOR 2020/2021 ACADEMIC YEAR")),l.a.createElement("section",null,l.a.createElement("h5",{className:"space2"}," Guidelines for Application "),l.a.createElement("article",null,l.a.createElement("p",null,"(i) This form should be completed and submitted to the Academic Registrar (Admissions) Makerere University."),l.a.createElement("p",null,"(ii) Each candidate MUST attach copies of the \u2018O\u2019, A\u2019Level Certificates (or their equivalent) and a Certified copy of the relevant Diploma Transcript from the Awarding Institution."),l.a.createElement("p",null,"(iii) Each candidate MUST attach the original receipt for payment of the application fee."),l.a.createElement("p",null,"(iv) Names should be those that appear on the \u2018O\u2019, A\u2019Level and Diploma Certificates/Transcripts."),l.a.createElement("p",null,"(v) Applicants who hold 3rd Class or Pass Diplomas need not apply since they do not meet the admission requirements."),l.a.createElement("p",null,"(vi) Indicate the subject combination you are applying for (see appendix on page 3) B.ED"))),l.a.createElement("section",{className:"space"},l.a.createElement("form",{action:"https://formspree.io/f/xaylqnnj",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{hmtlFor:"inputProgramme"},"DEGREE/ PROGRAMME"),l.a.createElement("input",{type:"text",className:"form-control",id:"programme",name:"degree_programme"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputCollege"},"College Attached"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Options")),l.a.createElement("select",{className:"custom-select",id:"inputGroupSelect01",name:"college_selected"},l.a.createElement("option",{defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"College of Agricultural and Environmental"}," College of Agricultural and Environmental Sciences "),l.a.createElement("option",{value:"College of Humanities and Social Sciences",name:"college_selected"}," College of Humanities and Social Sciences "),l.a.createElement("option",{value:"College of Education and External Studies",name:"college_selected"}," College of Education and External Studies "),l.a.createElement("option",{value:"College of Health Sciences",name:"college_selected"}," College of Health Sciences "),l.a.createElement("option",{value:"College of Natural Sciences",name:"college_selected"}," College of Natural Sciences "),l.a.createElement("option",{value:"College of Business and Management Studies",name:"college_selected"}," College of Business and Management Studies "),l.a.createElement("option",{value:"College of Engineering, Design,  Art and Technology",name:"college_selected"}," College of Engineering, Design,  Art and Technology "),l.a.createElement("option",{value:"College of Veterinary Medicine, Animal Resources and Bio-Security",name:"college_selected"}," College of Veterinary Medicine, Animal Resources and Bio-Security "),l.a.createElement("option",{value:"School of LawSchool of Law",name:"college_selected"}," School of Law ")))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputEmail4"},"Surname (in Block letters)"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputEmail4",name:"surname"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputPassword4"},"Other Names (as they appear on Academic Documents)"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputPassword4",name:"other_names"}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputAddress"},"Date of Birth"),l.a.createElement("input",{type:"date",className:"form-control",id:"input Date",name:"date_of_birth"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputAddress"},"Upload Birth Certificate"),l.a.createElement("div",{className:"custom-file mb-3"},l.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",name:"birth_certificate"}),l.a.createElement("label",{className:"custom-file-label",for:"customFile"},"Choose file")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputAddress2"},"Home District"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress2",name:"home_district"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputAddress2"},"Nationality"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress2",name:"nationality"})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputCity"},"Personal Contact Address"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputCity",name:"personal_contact_address"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputState"},"Permanent Address"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputCity",name:"permanent_address"}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputTelephone"}," Telephone Number"),l.a.createElement("input",{type:"number",className:"form-control",id:"inputTelephone",name:"telephone_number"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputEmail4"},"E-mail"),l.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail4",name:"email"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null," Give full details of all Education qualifications obtained "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"(a). Uganda Certificate of Education or its equivalent"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputIndex"}," INDEX NO: "),l.a.createElement("input",{type:"text",className:"form-control",id:"inputIndex",name:"index_no_uce"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputIndex"}," YEAR OF EXAMINATION: "),l.a.createElement("input",{type:"number",className:"form-control",id:"inputExam Year",name:"exam_year_uce"})))),l.a.createElement("li",null,l.a.createElement("p",null,"(a). Uganda Advanced Certificate of Education or its equivalent"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputIndex"}," INDEX NO: "),l.a.createElement("input",{type:"text",className:"form-control",id:"inputIndex",name:"index_no_uace"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputIndex"}," YEAR OF EXAMINATION: "),l.a.createElement("input",{type:"number",className:"form-control",id:"inputExamYear",name:"exam_year_uace"}))),l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," Subject "),l.a.createElement("th",{scope:"col"}," Grade "))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputSubject",name:"subject_1",placeholder:"e.g Physics"}),"  "),l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputGrade",name:"grade_1",placeholder:"e.g A"})," ")),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputSubject",name:"subject_2",placeholder:"e.g Economics"}),"  "),l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputGrade",name:"grade_2",placeholder:"e.g B"})," ")),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputSubject",name:"subject_3",placeholder:"e.g Math"}),"  "),l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputGrade",name:"grade_3",placeholder:"e.g C"})," ")),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputSubject",name:"subject_4",placeholder:"e.g Sub-IT"}),"  "),l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",className:"form-control",id:"inputGrade",name:"grade_4",placeholder:"e.g 1"})," "))))),l.a.createElement("li",null,l.a.createElement("p",null,"(c). Other Qualifications. (Attach documents if necessary)"),l.a.createElement("div",{className:"form-row"},l.a.createElement("textarea",{type:"text",className:"form-control",id:"inputQualifications",name:"other_qualifications"}))))),l.a.createElement("div",{className:"space"},l.a.createElement("p",null,"It should be NOTED by all applicants that cases of impersonation, Falsification of Documents or giving false/incomplete information whenever discovered either at Registration or afterwards will lead to automatic CANCELLATION of admission and prosecution in the Uganda Courts of Law."),l.a.createElement("p",null,l.a.createElement("b",null,"Declaration by the applicant"),"I have noted and understood the implication of giving incorrect information, I confirm that the information given on this form, to the best of my knowledge, is correct")),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputSignature"}," ",l.a.createElement("b",null,"Signature of Applicant: ")," "),l.a.createElement("input",{type:"text",className:"form-control",id:"inputSignature",name:"signature"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{for:"inputDateSigned"}," ",l.a.createElement("b",null," Date: ")," "),l.a.createElement("input",{type:"date",className:"form-control",id:"inputDateSigned",name:"date_of_Signage"}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit Application"))))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeCollege=function(e){n.setState({college:e.target.value})},n.onChangeProgramme=function(e){n.setState({programme:e.target.value})},n.onChangeEssentialSubjects=function(e){n.setState({essentialSubjects:e.target.value})},n.onChangeRelevantSubjects=function(e){n.setState({relevantSubjects:e.target.value})},n.onChangeDesirableSubjects=function(e){n.setState({desirableSubjects:e.target.value})},n.onSubmit=function(e){e.preventDefault(),console.log("Form Submitted");var t={college:n.state.college,programme:n.state.programme,essentialSubjects:n.state.essentialSubjects,relevantSubjects:n.state.relevantSubjects,desirableSubjects:n.state.desirableSubjects};N.a.post("http://localhost:8000/courses/admin",t).then((function(e){return console.log(e.data)})).catch((function(){return console.log("Error creating new course")})),n.setState({college:"",programme:"",essentialSubjects:"",relevantSubjects:"",desirableSubjects:""})},n.state={college:"",programme:"",essentialSubjects:"",relevantSubjects:"",desirableSubjects:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"space3"},l.a.createElement("h3",null,"Add a Course to the Database"),l.a.createElement("form",{autoComplete:"on",onSubmit:this.onSubmit,className:"space"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"COLLEGE OF STUDY"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Options")),l.a.createElement("select",{className:"custom-select",id:"inputGroupSelect01",onChange:this.onChangeCollege},l.a.createElement("option",{defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"College of Agricultural and Environmental"}," College of Agricultural and Environmental Sciences "),l.a.createElement("option",{value:"College of Humanities and Social Sciences",onChange:this.onChangeCollege}," College of Humanities and Social Sciences "),l.a.createElement("option",{value:"College of Education and External Studies"}," College of Education and External Studies "),l.a.createElement("option",{value:"College of Health Sciences"}," College of Health Sciences "),l.a.createElement("option",{value:"College of Natural Sciences"}," College of Natural Sciences "),l.a.createElement("option",{value:"College of Business and Management Studies"}," College of Business and Management Studies "),l.a.createElement("option",{value:"College of Engineering, Design,  Art and Technology"}," College of Engineering, Design,  Art and Technology "),l.a.createElement("option",{value:"College of Veterinary Medicine, Animal Resources and Bio-Security"}," College of Veterinary Medicine, Animal Resources and Bio-Security "),l.a.createElement("option",{value:"School of LawSchool of Law"}," School of Law ")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Programme"),l.a.createElement("input",{type:"text",className:"form-control",name:"programme",value:this.state.programme,onChange:this.onChangeProgramme})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Essential Subjects"),l.a.createElement("input",{type:"text",className:"form-control",name:"essentialSubjects",value:this.state.essentialSubjects,onChange:this.onChangeEssentialSubjects})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Relevant Subjects"),l.a.createElement("input",{type:"text",className:"form-control",name:"relevantSubjects",value:this.state.relevantSubjects,onChange:this.onChangeRelevantSubjects})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Desirable Subjects"),l.a.createElement("input",{type:"text",className:"form-control",name:"desirableSubjects",value:this.state.desirableSubjects,onChange:this.onChangeDesirableSubjects})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,"Copyright \xa9 2020 Novum Student Enrollment. All rights reserved.")}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authListener=function(){p.auth().onAuthStateChanged((function(e){e?n.setState({user:e}):n.setState({user:null})}))},n.state={user:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.user?l.a.createElement(g,null):l.a.createElement(f,null))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(h,null),l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{path:"/",exact:!0,component:A}),l.a.createElement(d.a,{path:"/home",component:g}),l.a.createElement(d.a,{path:"/signup",component:f}),l.a.createElement(d.a,{path:"/weightingsystem",component:b}),l.a.createElement(d.a,{path:"/courses",component:S}),l.a.createElement(d.a,{path:"/apply",component:C}),l.a.createElement(d.a,{path:"/admin",component:j})),l.a.createElement(O,null))}}]),a}(n.Component);o.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cc814e10.chunk.js.map