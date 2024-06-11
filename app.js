var count = 0;

const users = [

{
myImg: "mypic.jpeg",
myName:"Riyan Ahmed",
myDesingnation:"WEB DEVELOPER",
myDescription:"Web development enthusiast with a passion for building dynamic and user-friendly web experiences. Currently learning and exploring HTML, CSS, JavaScript, and various frameworks and technologies to create responsive and engaging websites. Eager to continue learning and growing as a web developer, and excited to bring creative ideas to life on the web!",
idLink:"https://www.linkedin.com/in/riyan-qureshi-482302308?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTZD%2FM8%2BXRiWD0Tt%2FtZqChQ%3D%3D "

},

{


    myImg: "https://media.licdn.com/dms/image/D4D03AQGgXShuKQbiGQ/profile-displayphoto-shrink_200_200/0/1703087477579?e=1722470400&v=beta&t=WZzMJDP3W5GURRb8tuRxAxScsGudGrfGa9jEQ0e9ocE",
    myName:"Ghous Ahmed",
    myDesingnation:"Software Engineer",
    myDescription:"Highly skilled web developer with expertise in crafting responsive, user-friendly,  and scalable web applications. Proficient in HTML, CSS, JavaScript, and various frameworks such as React, Angular, and Vue.  Experienced in backend development with languages like Node.js, Ruby, and Python, and familiar with databases like MySQL, MongoDB, and PostgreSQL. Strong understanding of web security, performance optimization, and version control systems like Git. Passionate about staying up-to-date with the latest web development trends and technologies, and committed to delivering high-quality solutions that meet and exceed client expectations.",
idLink:"https://www.linkedin.com/in/ghousahmed?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMIZZERYvR5OqqyEpBzK3PQ%3D%3D"
},

{
    myImg: "https://media.licdn.com/dms/image/D4E03AQFOzrHgxHmXlw/profile-displayphoto-shrink_400_400/0/1699973502128?e=1722470400&v=beta&t=0WLG6P4coGLNkkvzO7fcIf64YOG85PsLmLNhj5Pa2mQ",
    myName:"Jaffar Aman",
    myDesingnation:"WEB DEVELOPER",
    myDescription:"Highly skilled web developer with expertise in crafting responsive, user-friendly,  and scalable web applications. Proficient in HTML, CSS, JavaScript, and various frameworks such as React, Angular, and Vue.  Experienced in backend development with languages like Node.js, Ruby, and Python, and familiar with databases like MySQL, MongoDB, and PostgreSQL. Strong understanding of web security, performance optimization, and version control systems like Git. Passionate about staying up-to-date with the latest web development trends and technologies, and committed to delivering high-quality solutions that meet and exceed client expectations.",
    idLink:"https://www.linkedin.com/in/riyan-qureshi-482302308?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTZD%2FM8%2BXRiWD0Tt%2FtZqChQ%3D%3D "
    



},
{

    myImg: "sirSufiyan.jpeg",
    myName:"MUHAMMAD SUFIYAN",
    myDesingnation:"WEB DEVELOPER",
    myDescription:"Highly skilled web developer with expertise in crafting responsive, user-friendly,  and scalable web applications. Proficient in HTML, CSS, JavaScript, and various frameworks such as React, Angular, and Vue.  Experienced in backend development with languages like Node.js, Ruby, and Python, and familiar with databases like MySQL, MongoDB, and PostgreSQL. Strong understanding of web security, performance optimization, and version control systems like Git. Passionate about staying up-to-date with the latest web development trends and technologies, and committed to delivering high-quality solutions that meet and exceed client expectations.",
    idLink:"https://www.linkedin.com/in/riyan-qureshi-482302308?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTZD%2FM8%2BXRiWD0Tt%2FtZqChQ%3D%3D "
    
    
}

]

function nextHandler(){
    count++;
    if (count >=users.length){
        count=0;
    }
    update()
}
function previousHandler(){
    count--;
    if(count<0){
        count=users.length;
    }
    update()
}

function update(){
    const newCount = users[count]
    document.querySelector('#name').innerHTML=newCount.myName
    document.querySelector('#designation').innerHTML=newCount.myDesingnation
    document.querySelector('#description').innerHTML=newCount.myDescription
    document.querySelector('#image ').src=newCount.myImg
}

