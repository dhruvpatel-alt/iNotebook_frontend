import React  from 'react'
function About() {
 
    return (
        <div className="container mx-1">
   <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       About iNotebook
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        This is the <strong> iNotebook App.</strong> This will help to save your important Notes easily also here you can <strong>update and delete</strong> notes ,here you can add whatever you want also how many you want no other can be able to see your notes its  fully secured , no one can able to excess your notes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
        How to use
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
          You have to first Login or  Sign up your account ,then only you will be access all your Notes.For adding Notes you have to  add <strong>Title</strong> of the Note and <strong>Description</strong> of it in which title should be atleast 3 letters and description must contain atleast 5 letters. You can view your notes at the bottom .For updating and deleting your note you have to click at icon of delete and edit of the notes you want to edit and delete. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
       Future Plans
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
          In Future ,we are planing to developed a app such like icloud where you can store the <strong>images ,videos ,music and many more</strong> also you can extract music from the video and make a video with lots of photos with pro level editing .
        Stay tunned!
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default About
