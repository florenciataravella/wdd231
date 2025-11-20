const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
function createCoursesCard(courses){
courses.forEach(course=>{
    let card=document.createElement("section");
    let courseSubject=document.createElement("p");
    let courseNumber=document.createElement("p");
  

    courseSubject.textContent=course.subject;
    courseNumber.textContent=course.number;
   

    card.appendChild(courseSubject);
    card.appendChild(courseNumber);
    
    
    card.classList.add("coursesCard", "hidden"); 
    if (course.completed) card.classList.add("completed");
    document.querySelector("#courses").appendChild(card);
    
})

}
/*function completedCourse(courses){
    const completedCourses=courses.filter(course=>course.completed==true);
    completedCourses.forEach(course=>{
        let card=document.createElement("section");
        let courseSubject=document.createElement("p");
        let courseNumber=document.createElement("p");

        courseSubject.textContent=course.subject;
        courseNumber.textContent=course.number;
  

    card.appendChild(courseSubject);
    card.appendChild(courseNumber);
    card.classList.add("completedCourse","coursesCard");
    if(course.completed == true) {
        card.classList.add("completed");
        };
    document.querySelector("#courses").appendChild(card);
    })
}*/
function createWDDCoursesCard(courses){
    const WDDcourses=courses.filter(course=>course.subject=="WDD");
    WDDcourses.forEach(course=>{
        let card=document.createElement("section");
        let courseSubject=document.createElement("p");
        let courseNumber=document.createElement("p");
       

    courseSubject.textContent=course.subject;
    courseNumber.textContent=course.number;
  

    card.appendChild(courseSubject);
    card.appendChild(courseNumber);
  

    card.classList.add("WDDcoursesCard","hidden");
    document.querySelector("#courses").appendChild(card);
    
})
}
function createCSECoursesCard(courses){
    const CSEcourses=courses.filter(course=>course.subject=="CSE");
    
    CSEcourses.forEach(course=>{
        let card=document.createElement("section");
        let courseSubject=document.createElement("p");
        let courseNumber=document.createElement("p");
        

    courseSubject.textContent=course.subject;
    courseNumber.textContent=course.number;
    

    card.appendChild(courseSubject);
    card.appendChild(courseNumber);


    card.classList.add("CSEcoursesCard","hidden");
    document.querySelector("#courses").appendChild(card);

    card.addEventListener("click",()=>{
        displayCourseDetails(course)
    })
    })

}
createCoursesCard(courses);

createWDDCoursesCard(courses);

createCSECoursesCard(courses);


const coursesCardjs=document.querySelectorAll(".coursesCard");
const allCoursesbtn=document.querySelector("#allCourses");

const WDDcoursesCardjs=document.querySelectorAll(".WDDcoursesCard");
const WDDcoursesbtn=document.querySelector("#WDDcourses");

const CSEcoursesCardjs=document.querySelectorAll(".CSEcoursesCard");
const CSEcoursesbtn=document.querySelector("#CSEcourses");

const completedCoursejs=document.querySelectorAll(".completed");


allCoursesbtn.addEventListener("click", ()=>{
        coursesCardjs.forEach(card=>(
            card.classList.toggle("hidden")));
    });
WDDcoursesbtn.addEventListener("click", ()=>{
    coursesCardjs.forEach(card=>(
        card.classList.add("hidden")));
        WDDcoursesCardjs.forEach(card=>(
            card.classList.toggle("hidden")));
        
    });
CSEcoursesbtn.addEventListener("click", ()=>{
    coursesCardjs.forEach(card=>(
        card.classList.add("hidden")));
        CSEcoursesCardjs.forEach(card=>(
            card.classList.toggle("hidden")));
        
    });

function displayCourseDetails(course) {
    const courseDetails=document.querySelector("#course-details")
    const closeModal=document.querySelector("#closeModal")

courseDetails.innerHTML =" ";
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;

    courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}