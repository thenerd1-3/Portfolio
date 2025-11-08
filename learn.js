//Nav bar elements
//assign buttons for easy accsess
 let signupBtn = document.getElementById("signupBtn");
 let navbarbtn = document.getElementById("navbarbtn");
 let uploadBtn = document.getElementById("uploadBtn");
 let logoutBtn= document.getElementById("logoutBtn");
 
  // upload option elements
 let cancleBtn = document.getElementById("cancleBtn");
 let submitBtn = document.getElementById("submitBtn");
 let uploadDivId = document.getElementById("uploadDivId");
 //click signupBtn
 signupBtn.addEventListener("click", function(){
   navbarbtn.style.display = "block";
   signupBtn.style.display = "none";
 });
 //click logoutBtn
 logoutBtn.addEventListener("click", function(){
   navbarbtn.style.display = "none";
   signupBtn.style.display = "block";
   uploadDivId.style.display = "none";
 });
 
 //when upload button clicked
 uploadBtn.addEventListener("click", function(){
   uploadDivId.style.display = "flex";
 });
 // to cancle uploadDivId
 cancleBtn.addEventListener("click", function(){
   uploadDivId.style.display = "none";
 });
 //adding default
 let array = [
     {
    title: "Algebra"  ,
    subject: "Math",
    url: "https://youtu.be/LwCRRUa8yTU?si=1srRFqhNlOTxZ87H",
  },
  {
    title: "Atomic structure" ,
    subject: "Chemistry",
    url: "https://youtu.be/acdkMeEKCNQ?si=_cLUq5XBKQSFeoT4"
  },
  {
    title: "Si units",
    subject: "Physics",
    url: "https://youtu.be/O8oZFaaJTUc?si=rA0lxNoMoVaZP0qA"
  }
   ];
   

//display defualt videos
   array.forEach(function(video){
     let title = document.createElement("p");
     let subject = document.createElement("p");
     let url = document.createElement("a");
     //create div to add title,subject and newUrlrl
   let div = document.createElement("div");
   div.className = "videoDiv";
     title.textContent = video.title;
     subject.textContent = video.subject;
     url.href = video.url;
     url.target = "_blank";
     url.textContent = "Play Video";
     
     div.appendChild(title);
     div.appendChild(subject);
     div.appendChild(url);
     document.getElementById("mainDiv").appendChild(div);
   });
 submitBtn.addEventListener("click", function(){
   let element1 = document.getElementById("titleId");
   let element2 = document.getElementById("subjectId");
   let element3 = document.getElementById("urlId");
//conditions if no inputs
   if (
     element1.value === "" || 
     element2.value === "" ||
     element3.value === "" 
     ){
       alert(`please input all fields`);
       return;
     }
   
   let newTitle = document.createElement("p");
   let newSubject = document.createElement("p");
   let newUrl = document.createElement("a");
   //create div to add title,subject and newUrlrl
   let div = document.createElement("div");
   div.className = "videoDiv";
   
   newTitle.textContent = element1.value;
   newSubject.textContent = element2.value;
   newUrl.href = element3.value;
   newUrl.target = "_blank";
   newUrl.textContent = "Play Video";
   array.unshift({
     title: element1.value,
     subject: element2.value,
     url: element3.value
   });
   
   div.appendChild(newTitle);
   div.appendChild(newSubject);
   div.appendChild(newUrl);
   
  document.getElementById("mainDiv").prepend(div);
//reset inputs
document.getElementById("titleId").value = "";
document.getElementById("subjectId").value = "";
document.getElementById("urlId").value = "";
});