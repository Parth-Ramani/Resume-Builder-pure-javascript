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
function addExperince(){

 document.getElementById("experinceForm").insertAdjacentHTML("beforeend",document.getElementById("experinceForm").outerHTML) 
}

function setName(){

   document.getElementsByClassName("bigname")[0].innerText = event.target.value
}
const jobRole = () =>{
  document.getElementsByClassName('bigpost')[0].innerHTML = event.target.value
}
const summary = () =>{
  document.getElementsByClassName("about")[0].innerHTML = event.target.value
}
const submitName = () =>{
  event.preventDefault()
}
const email = () =>{
  document.getElementsByClassName("email")[0].innerText =event.target.value
}
const phNumber =() =>{
  document.getElementsByClassName("ph_number")[0].innerText = event.target.value
}
const address =() =>{
  document.getElementsByClassName("address")[0].innerText=event.target.value
}

function educationData(){
  let educationFormData ={}
  educationFormData["university"] = document.getElementById("university").value
  educationFormData["degree"] = document.getElementById("degree").value
  educationFormData["startYear"] = document.getElementById("startYear_education").value
  educationFormData["endYear"] = document.getElementById("endYear_education").value
  return educationFormData
}
function setEducation(obj){
  
  html =`  <div class="education-content">
  <i class="fa fa-pencil-square-o exp-position" aria-hidden="true" onclick="editExperience()" data-html2canvas-ignore="true"></i>
  <i class="fa fa-trash-o delete" onclick="removesection()" data-html2canvas-ignore="true"></i>
  <i class="fa fa-check exp-position"  onclick="rightExpeince()" id="check" data-html2canvas-ignore="true"></i>  
  <div class="duration">${obj.startYear}-${obj.endYear}</div>
  <div class="degree">${obj.degree}</div>
  <div class="university">${obj.university}</div>
</div>`
document.getElementsByClassName("education")[0].insertAdjacentHTML("beforeend",html)
}
const educationSubmit = () =>{
  event.preventDefault()
  // console.log(educationData());
  setEducation(educationData())
  event.target.parentElement.innerHTML = `  <form  onsubmit="educationSubmit()">
  <fieldset>
      <label for="startYear_education">Start Year</label>
      <select id="startYear_education">
          <option value="1940">1940</option>
          <option value="1941">1941</option>
          <option value="1942">1942</option>
          <option value="1943">1943</option>
          <option value="1944">1944</option>
          <option value="1945">1945</option>
          <option value="1946">1946</option>
          <option value="1947">1947</option>
          <option value="1948">1948</option>
          <option value="1949">1949</option>
          <option value="1950">1950</option>
          <option value="1951">1951</option>
          <option value="1952">1952</option>
          <option value="1953">1953</option>
          <option value="1954">1954</option>
          <option value="1955">1955</option>
          <option value="1956">1956</option>
          <option value="1957">1957</option>
          <option value="1958">1958</option>
          <option value="1959">1959</option>
          <option value="1960">1960</option>
          <option value="1961">1961</option>
          <option value="1962">1962</option>
          <option value="1963">1963</option>
          <option value="1964">1964</option>
          <option value="1965">1965</option>
          <option value="1966">1966</option>
          <option value="1967">1967</option>
          <option value="1968">1968</option>
          <option value="1969">1969</option>
          <option value="1970">1970</option>
          <option value="1971">1971</option>
          <option value="1972">1972</option>
          <option value="1973">1973</option>
          <option value="1974">1974</option>
          <option value="1975">1975</option>
          <option value="1976">1976</option>
          <option value="1977">1977</option>
          <option value="1978">1978</option>
          <option value="1979">1979</option>
          <option value="1980">1980</option>
          <option value="1981">1981</option>
          <option value="1982">1982</option>
          <option value="1983">1983</option>
          <option value="1984">1984</option>
          <option value="1985">1985</option>
          <option value="1986">1986</option>
          <option value="1987">1987</option>
          <option value="1988">1988</option>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
      </select>
      <label for="startYear_education">End Year</label>
      <select id="endYear_education">
          <option value="1940">1940</option>
<option value="1941">1941</option>
<option value="1942">1942</option>
<option value="1943">1943</option>
<option value="1944">1944</option>
<option value="1945">1945</option>
<option value="1946">1946</option>
<option value="1947">1947</option>
<option value="1948">1948</option>
<option value="1949">1949</option>
<option value="1950">1950</option>
<option value="1951">1951</option>
<option value="1952">1952</option>
<option value="1953">1953</option>
<option value="1954">1954</option>
<option value="1955">1955</option>
<option value="1956">1956</option>
<option value="1957">1957</option>
<option value="1958">1958</option>
<option value="1959">1959</option>
<option value="1960">1960</option>
<option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
          <option value="Present">Present</option>
      </select>
  <legend><span class="number">2</span> Education</legend>
  <input type="text" name="field1" id="university" placeholder="University *">
  <input type="text" name="field1" id="degree" placeholder="Course *" >
 <div class="button-container">

  <button type="submit">Submit Education</button> 

</div>
  </form>`
 
}
function editEdu(){
 let el = event.target.parentElement.querySelector("#editUniversity").setAttribute("contenteditable" , "true")
 event.target.parentElement.querySelector("#editUniversity").style.borderBottom = "1px solid"

}
// 
  function addSkill (){
    event.preventDefault()
    html =`<textarea name="field3" placeholder="Skill" class="skill_points"></textarea>`
    event.target.parentElement.insertAdjacentHTML("beforebegin",html)
    
  }
  function submitskill(){
    event.preventDefault()
   let points = document.getElementsByClassName("skill_points")
    for (const point of points) {
      document.getElementsByClassName("skill")[0].insertAdjacentHTML("beforeend",`<li>${point.value}</li>`)
    }
  event.target.parentElement.innerHTML = `<form  onsubmit="submitskill()">
  <fieldset>
  <legend><span class="number">3</span> Skill</legend>
  <textarea name="field3" placeholder="Skill" class="skill_points"></textarea>

 <div class="button-container">
  <button onclick="addSkill()">Add Skills</button>
  <button type="submit">Submit Skill</button> 
</div>
  </form>`
    // event.target.parentElement.querySelector("form").reset();
  }
// experince
function workData(){
  let formWorkData = {}
  formWorkData["company"]= document.getElementById("companyForm").value
  formWorkData["post"]= document.getElementById("jobform").value
  formWorkData["startYear"]= document.getElementById("startYear").value
  formWorkData["endYear"]= document.getElementById("endYear").value
  formWorkData["points"]= document.getElementsByClassName("exp_points")
  return formWorkData
}


function setExperince(data){

  let li =''
  for (const ele of data.points) {
    li = li +`<li>${ele.value}</li>`
  }
  html = `<div class="experince">
  <i class="fa fa-pencil-square-o exp-position" aria-hidden="true" onclick="editExperience()" data-html2canvas-ignore="true"></i>
  <i class="fa fa-check exp-position"  onclick="rightExpeince()" id="check" data-html2canvas-ignore="true"></i>  
  <i class="fa fa-trash-o delete " onclick="removesection()" data-html2canvas-ignore="true"></i>
  <div class="company">${data.company}</div>
  <div class="post-date">
      <div class="post">${data.post}</div>
      <div class="time">${data.startYear}-${data.endYear}</div>
  </div>
 <ul>
    ${li}
 </ul>
</div>`

document.getElementsByClassName("experince-container")[0].insertAdjacentHTML("beforeend",html)
}
function addEducationPoint(){
  event.preventDefault()
  html =`<textarea name="field3" placeholder="Point" class="exp_points"></textarea>`
  event.target.parentElement.insertAdjacentHTML("beforebegin",html)
}
function submitWork(){
  event.preventDefault()
  setExperince(workData())
  event.target.parentElement.innerHTML =
  ` <form  onsubmit="submitWork()">
  <fieldset>
  <legend><span class="number">4</span> Work Experince</legend>
  <input type="text" name="field1" placeholder="Company *"  id="companyForm">
  <input type="text" name="field1" placeholder="Post Role *" id="jobform" >
   <label for="startYear">Start Year</label>
  <select id="startYear">
      <option value="1940">1940</option>
      <option value="1941">1941</option>
      <option value="1942">1942</option>
      <option value="1943">1943</option>
      <option value="1944">1944</option>
      <option value="1945">1945</option>
      <option value="1946">1946</option>
      <option value="1947">1947</option>
      <option value="1948">1948</option>
      <option value="1949">1949</option>
      <option value="1950">1950</option>
      <option value="1951">1951</option>
      <option value="1952">1952</option>
      <option value="1953">1953</option>
      <option value="1954">1954</option>
      <option value="1955">1955</option>
      <option value="1956">1956</option>
      <option value="1957">1957</option>
      <option value="1958">1958</option>
      <option value="1959">1959</option>
      <option value="1960">1960</option>
      <option value="1961">1961</option>
      <option value="1962">1962</option>
      <option value="1963">1963</option>
      <option value="1964">1964</option>
      <option value="1965">1965</option>
      <option value="1966">1966</option>
      <option value="1967">1967</option>
      <option value="1968">1968</option>
      <option value="1969">1969</option>
      <option value="1970">1970</option>
      <option value="1971">1971</option>
      <option value="1972">1972</option>
      <option value="1973">1973</option>
      <option value="1974">1974</option>
      <option value="1975">1975</option>
      <option value="1976">1976</option>
      <option value="1977">1977</option>
      <option value="1978">1978</option>
      <option value="1979">1979</option>
      <option value="1980">1980</option>
      <option value="1981">1981</option>
      <option value="1982">1982</option>
      <option value="1983">1983</option>
      <option value="1984">1984</option>
      <option value="1985">1985</option>
      <option value="1986">1986</option>
      <option value="1987">1987</option>
      <option value="1988">1988</option>
      <option value="1989">1989</option>
      <option value="1990">1990</option>
      <option value="1991">1991</option>
      <option value="1992">1992</option>
      <option value="1993">1993</option>
      <option value="1994">1994</option>
      <option value="1995">1995</option>
      <option value="1996">1996</option>
      <option value="1997">1997</option>
      <option value="1998">1998</option>
      <option value="1999">1999</option>
      <option value="2000">2000</option>
      <option value="2001">2001</option>
      <option value="2002">2002</option>
      <option value="2003">2003</option>
      <option value="2004">2004</option>
      <option value="2005">2005</option>
      <option value="2006">2006</option>
      <option value="2007">2007</option>
      <option value="2008">2008</option>
      <option value="2009">2009</option>
      <option value="2010">2010</option>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
      <option value="2014">2014</option>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
  </select>
  <label for="startYear">End Year</label>
  <select id="endYear">
      <option value="1940">1940</option>
<option value="1941">1941</option>
<option value="1942">1942</option>
<option value="1943">1943</option>
<option value="1944">1944</option>
<option value="1945">1945</option>
<option value="1946">1946</option>
<option value="1947">1947</option>
<option value="1948">1948</option>
<option value="1949">1949</option>
<option value="1950">1950</option>
<option value="1951">1951</option>
<option value="1952">1952</option>
<option value="1953">1953</option>
<option value="1954">1954</option>
<option value="1955">1955</option>
<option value="1956">1956</option>
<option value="1957">1957</option>
<option value="1958">1958</option>
<option value="1959">1959</option>
<option value="1960">1960</option>
<option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
      <option value="Present">Present</option>
  </select>
  <textarea name="field3" class="exp_points" placeholder="Point"></textarea>
 <div class="button-container">
  <button onclick="addEducationPoint()">Add Points</button>
  <button type="submit">Submit Experince</button> 
</div>
  </form>`

  }
  function projectData () {
    let projectDataForm ={}
    projectDataForm["project"]= document.getElementById("project_form").value
    projectDataForm["points"]= document.getElementsByClassName("pointProject")
    return projectDataForm
  }
  function setProject(data){
    let li =''
    for (const ele of data.points) {
      li = li +`<li>${ele.value}</li>`
    }
    html = ` <div class="project">          
    <i class="fa fa-pencil-square-o exp-position" aria-hidden="true" onclick="editExperience()" data-html2canvas-ignore="true"></i>
    <i class="fa fa-check exp-position"  onclick="rightExpeince()" id="check" data-html2canvas-ignore="true"></i>  
    <i class="fa fa-trash-o delete " onclick="removesection()" data-html2canvas-ignore="true"></i>
    <div class="project-title">${data.project}</div>
    <ul>
        ${li}
    </ul>
  </div>`
    document.getElementsByClassName("project-container")[0].insertAdjacentHTML("beforeend",html)
  }
  function addProjectPoints(){
    event.preventDefault()
    html = `<textarea name="field3" placeholder="Point" class="pointProject" ></textarea>`
    event.target.parentElement.insertAdjacentHTML("beforebegin",html)
  }
  function submitProject(){
    event.preventDefault()
    setProject(projectData())
    event.target.parentElement.innerHTML = `<form  onsubmit="submitProject()">
    <fieldset>
    <legend><span class="number">5</span>Project</legend>
    <input type="text" name="field1" placeholder="Project *" id="project_form" >
    <textarea name="field3" placeholder="Point" class="pointProject" ></textarea>
   <div class="button-container">
    <button onclick="addProjectPoints()">Add Points</button>
    <button type="submit">Submit Project</button> 
</div>
    </form>`
  }
  function editSkill(){
    parent =event.target.parentElement
    parent.setAttribute("contenteditable","true")
    child = parent.querySelectorAll("li")
    for (const ele of child) {
      ele.style.borderBottom = "1px solid"
    }
    event.target.style.display = "none"
    parent.querySelector(".fa-check").style.display = "inline-block"
  }
  function rightSkill(){
    parent =event.target.parentElement
    parent.setAttribute("contenteditable","false")
    child = parent.querySelectorAll("li")
    for (const ele of child) {
      ele.style.borderBottom = "0"
    }
    event.target.style.display = "none"
    parent.querySelector(".fa-pencil-square-o").style.display = "inline-block"
  }
//////
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
/////
function editSkill(){
  parent =event.target.parentElement
  parent.setAttribute("contenteditable","true")
  child = parent.querySelectorAll("li")
  for (const ele of child) {
    ele.style.borderBottom = "1px solid"
  }
  event.target.style.display = "none"
  parent.querySelector(".fa-check").style.display = "inline-block"
}
///
function removesection(){
  event.target.parentElement.style.display = "none"
}
/////////
function pdfDownload(){
    // console.log(hi);
    let element = document.getElementById('page');
    // element.style.margin = 0
let opt = {
  margin:  [0 ,0, -2 ,0],  //top, left, buttom, right,
  filename:     `Resume.pdf`,
  pagebreak:{mode: ['css', 'legacy']},
  image:        { type: 'jpg', quality: 1 },
  enableLinks:true,
  html2canvas: {
    letterRendering: true,
    useCORS: true,
   scale: 4 
    },
  jsPDF:        {  format: 'a4', orientation: 'portrait',pagesplit: true, }
};

html2pdf().set(opt).from(element).save();

}

