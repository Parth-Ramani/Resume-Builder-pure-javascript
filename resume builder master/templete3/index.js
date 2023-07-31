const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
imginput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  let tempUrl = URL.createObjectURL(e.target.files[0]);
  // console.log(tempUrl);
  imgf.setAttribute("src", tempUrl);
});
//
// 
// 
// 
function addExperince(){
 document.getElementById("experinceForm").insertAdjacentHTML("beforeend",document.getElementById("experinceForm").outerHTML) 
}
let bigname=''
function setName(){
   document.getElementsByClassName("bigname")[0].innerText = event.target.value
}

const summary = () =>{
  document.getElementsByClassName("about")[0].innerHTML = event.target.value
}
const submitName = () =>{
  event.preventDefault()
}
const email = () =>{
  document.getElementById("email-form").innerText =event.target.value
}
const phNumber =() =>{
  document.getElementById("number-form").innerText = event.target.value
}
const address =() =>{
  document.getElementById("address-form").innerText=event.target.value
}

function educationData(){
  let educationFormData ={}
  educationFormData["university"] = document.getElementById("university").value
  educationFormData["degree"] = document.getElementById("degree").value
  return educationFormData
}
function setEducation(obj){
  
  html =`  <div class="eduContainer">
  <i class="fa fa-pencil-square-o exp-position" aria-hidden="true" onclick="editExperience()" data-html2canvas-ignore="true"></i>
  <i class="fa fa-check exp-position"  onclick="rightExpeince()" id="check" data-html2canvas-ignore="true"></i>  
  <i class="fa fa-trash-o delete " onclick="removesection()" data-html2canvas-ignore="true"></i>
  <p class="university">${obj.university}</p>
   <p>${obj.degree}</p>
  <br>
</div>`
document.getElementsByClassName("education")[0].insertAdjacentHTML("beforeend",html)
}
const educationSubmit = () =>{
  event.preventDefault()
  // console.log(educationData());
  setEducation(educationData())
 
   document.getElementById("university").value =''
   document.getElementById("degree").value = ''
}
// 

// experince
function workData(){
  let formWorkData = {}
  formWorkData["company"]= document.getElementById("companyForm").value
  formWorkData["post"]= document.getElementById("jobform").value
  formWorkData["points"]= document.getElementById("exp_points").value
  return formWorkData
}


function setExperince(data){
  html = `<div class="container">
  <i class="fa fa-pencil-square-o exp-position" aria-hidden="true" onclick="editExperience()" data-html2canvas-ignore="true"></i>
  <i class="fa fa-check exp-position"  onclick="rightExpeince()" id="check" data-html2canvas-ignore="true"></i>  
  <i class="fa fa-trash-o delete " onclick="removesection()" data-html2canvas-ignore="true"></i>
  <p class="Company">${data.company}</p>
  <p class="post">${data.post}</p>
  <p>${data.points}</p>
</div>`
document.getElementById("exp-container-form").insertAdjacentHTML("beforeend",html)
}
function submitWork(){
  event.preventDefault()
  setExperince(workData())
 event.target.reset()

  }
  //
  function removesection(){
    event.target.parentElement.style.display = "none"
  }
  ///
  function editExperience(){
    parent = event.target.parentElement
    child = parent.children
    for (const ele of child) {
      ele.style.borderBottom ="1px solid"
      ele.setAttribute("contenteditable","true")
    }
    event.target.style.display = "none"
    parent.querySelector(".fa-check").style.display = "inline-block"
    parent.querySelector(".fa-check").setAttribute("contenteditable","false")
  }
  function rightExpeince(){
    parent = event.target.parentElement
    child = parent.children
    for (const ele of child) {
      ele.style.borderBottom ="0"
      ele.setAttribute("contenteditable","false")
    }
    event.target.style.display = "none"
    parent.querySelector(".fa-pencil-square-o").style.display = "inline-block"
  }
  // //
function pdfDownload(){
    // console.log(hi);
    let element = document.getElementById('page');
    // element.style.margin = 0
let opt = {
  margin:  [0 ,0 , 0 ,0],  //top, left, buttom, right,
  filename:     `${bigname}Resume.pdf`,
  pagebreak:{mode: ['css', 'legacy']},
  image:        { type: 'jpg', quality: 1 },
  enableLinks:true,
  html2canvas: {
    // margin: 1,
    
    letterRendering: true,
    useCORS: true,
   scale: 4 
    },
  jsPDF:        {  format: 'a4', orientation: 'portrait',pagesplit: true, }
};

html2pdf().set(opt).from(element).save();
// element.style.margin = 'auto'
}

