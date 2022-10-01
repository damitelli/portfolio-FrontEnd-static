function login() {
  const loginButton = document.getElementById("btn-login");
  const addSectionButton = document.getElementById("add-section-btn");
  const allBtnRight = document.getElementsByClassName("btn-right");

  if (loginButton.innerText === "Cerrar sesión") {
    loginButton.innerText = "Iniciar sesión";
    addSectionButton.style = 'display:none';
    for (var i = 0; i < allBtnRight.length; i += 1) {
      allBtnRight[i].style = 'display:none';
    }

  } else {
    loginButton.innerText = "Cerrar sesión";
    addSectionButton.style = 'display:inline-block';
    for (var i = 0; i < allBtnRight.length; i += 1) {
      allBtnRight[i].style = 'display:inline-block';
    }
  }
}


function displayOnSimple(simpleSection) {

  const modalSelector = simpleSection;
  const modalTextArea = document.getElementById("modal-nodisplay");

  if (modalSelector.value == "4") {
    modalTextArea.style.display = "block";
  } else {
    modalTextArea.style.display = "none";
  }

}



//Create functions.



let newSectionId = 1;

function createSection() {

  const profile = document.getElementById("profile");

  const modalTitle = document.getElementById("modal-input-title");
  const modalText = document.getElementById("modal-textarea");
  const modalSelector = document.getElementById("modal-selector");

  const modalForm = document.getElementById("modal-form");


  const newSection = document.createElement("div");

  if (modalSelector.value === "1") {

    newSection.setAttribute("id", "new-section-" + newSectionId);
    newSection.setAttribute("class", "card");
    newSection.innerHTML = `

      <div class="card-body">
        <div class="card-title">

          <div class="section-title d-flex">
            <div class="d-block">

              <div class="d-flex">
                <h2>${modalTitle.value}</h2>
                <div class="btn-edit ms-3">
                  <a class="btn-right p-1" onclick="editSectionTitle(
                    '#new-section-${newSectionId} .section-title .input-title',              
                    '#new-section-${newSectionId} .section-title h2',
                    '#new-section-${newSectionId} .section-title .submit-button'                            
                    )">
                    <i class="fa-solid fa-pen"></i></a>
                  <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId}')">
                    <i class="fa-solid fa-x"></i></a>
                </div>
              </div>

              <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
              <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
                onclick="hideBoxes('#new-section-${newSectionId} .section-title .new-content-box')">

            </div>
          </div>

          <div class="btn-edit">
            <a class="btn-right" onclick="addInstitution(
              '#new-section-${newSectionId} .card-title'
              )">
              <i class="fa-solid fa-plus"></i></a>
          </div>
        </div>

        <div class="institution-3 d-lg-flex my-3">

          <div class="flex-shrink-0 text-center ms-md-3">
            <img class="logo-institution mb-3" src="./img/manzana.jpg" alt="Logo">

            <div class="input-file new-content-box" id="new-section-${newSectionId}-input-file-3">
              <label class="btn btn-secondary mb-4" for="new-section-${newSectionId}-img-input-3">
                Seleccione una imagen:</label>
              <input class="hidden-input" type="file" id="new-section-${newSectionId}-img-input-3" 
              name="new-section-${newSectionId}-img-input-3"
                accept="image/jpeg, image/png, image/jpg"
                onchange="previewIMG(
                  this, 
                  '#new-section-${newSectionId} .institution-3 .logo-institution'
                  )">
            </div>

          </div>

          <div class="container-fluid ms-3">

            <div class="d-flex">
              <h4 class="flex-grow-1">Nombre de institución</h4>
              <div class="btn-edit flex-shrink-0 p-0">
                <a class=" btn-right p-1" onclick="editInstitution(
                    '#new-section-${newSectionId} .institution-3 .input-file',
                    '#new-section-${newSectionId} .institution-3 .input-title',
                    '#new-section-${newSectionId} .institution-3 .input-text',
                    '#new-section-${newSectionId} .institution-3 .input-date',
                    '#new-section-${newSectionId} .institution-3 .submit-button',
                    '#new-section-${newSectionId} .institution-3 h4',
                    '#new-section-${newSectionId} .institution-3 .card-text',
                    '#new-section-${newSectionId} .institution-3 .date-text'
                    )">
                  <i class="fa-solid fa-pen"></i></a>
                <a class="btn-right p-1" onclick="deleteElement(
                  '#new-section-${newSectionId} .institution-3'
                  )">
                  <i class="fa-solid fa-x"></i></a>
              </div>
            </div>

            <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
            <p class="card-text mt-3 mb-1">
              Detalles de mi experiencia.</p>

            <textarea class="input-text new-content-box container-fluid" type="text"
              placeholder="Ingrese el nuevo texto."></textarea>
            <p class="date-text card-text mt-3 mb-1">Año de inicio - Año de finalización</p>
            <input class="input-date new-content-box" type="text" placeholder="Ingrese la nueva fecha.">
            <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
              onclick="hideBoxes(
                '#new-section-${newSectionId} .institution-3 .new-content-box'
                )">

          </div>

        </div>

        <div class="institution-2 d-lg-flex my-3">

          <div class="flex-shrink-0 text-center ms-md-3">
            <img class="logo-institution mb-3" src="./img/manzana.jpg" alt="Logo">

            <div class="input-file new-content-box" id="new-section-${newSectionId}-input-file-2">
              <label class="btn btn-secondary mb-4" for="new-section-${newSectionId}-img-input-2">
                Seleccione una imagen:</label>
              <input class="hidden-input" type="file" id="new-section-${newSectionId}-img-input-2" 
              name="new-section-${newSectionId}-img-input-2"
                accept="image/jpeg, image/png, image/jpg"
                onchange="previewIMG(
                  this,
                  '#new-section-${newSectionId} .institution-2 .logo-institution'
                  )">
            </div>

          </div>

          <div class="container-fluid ms-3">

            <div class="d-flex">
              <h4 class="flex-grow-1">Nombre de institución</h4>
              <div class="btn-edit flex-shrink-0 p-0">
                <a class=" btn-right p-1" onclick="editInstitution(
                    '#new-section-${newSectionId} .institution-2 .input-file',
                    '#new-section-${newSectionId} .institution-2 .input-title',
                    '#new-section-${newSectionId} .institution-2 .input-text',
                    '#new-section-${newSectionId} .institution-2 .input-date',
                    '#new-section-${newSectionId} .institution-2 .submit-button',
                    '#new-section-${newSectionId} .institution-2 h4',
                    '#new-section-${newSectionId} .institution-2 .card-text',
                    '#new-section-${newSectionId} .institution-2 .date-text'
                    )">
                  <i class="fa-solid fa-pen"></i></a>
                <a class="btn-right p-1" onclick="deleteElement(
                  '#new-section-${newSectionId} .institution-2'
                  )">
                  <i class="fa-solid fa-x"></i></a>
              </div>
            </div>

            <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
            <p class="card-text mt-3 mb-1">
              Detalles de mi experiencia.</p>

            <textarea class="input-text new-content-box container-fluid" type="text"
              placeholder="Ingrese el nuevo texto."></textarea>
            <p class="date-text card-text mt-3 mb-1">Año de inicio - Año de finalización</p>
            <input class="input-date new-content-box" type="text" placeholder="Ingrese la nueva fecha.">
            <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
              onclick="hideBoxes(
                '#new-section-${newSectionId} .institution-2 .new-content-box'
                )">

          </div>

        </div>

        <div class="d-lg-flex my-3 institution-1">

          <div class="flex-shrink-0 text-center ms-md-3">
            <img class="logo-institution mb-3" src="./img/manzana.jpg" alt="Logo">

            <div class="input-file new-content-box" id="new-section-${newSectionId}-input-file-1">
              <label class="btn btn-secondary mb-4" for="new-section-${newSectionId}-img-input-1">
                Seleccione una imagen:</label>
              <input class="hidden-input" type="file" id="new-section-${newSectionId}-img-input-1" 
              name="new-section-${newSectionId}-img-input-1"
                accept="image/jpeg, image/png, image/jpg"
                onchange="previewIMG(
                  this, 
                  '#new-section-${newSectionId} .institution-1 .logo-institution'
                  )">
            </div>

          </div>

          <div class="container-fluid ms-3">

            <div class="d-flex">
              <h4 class="flex-grow-1">Nombre de institución</h4>
              <div class="btn-edit flex-shrink-0 p-0">
                <a class="btn-right p-1" onclick="editInstitution(
                    '#new-section-${newSectionId} .institution-1 .input-file',
                    '#new-section-${newSectionId} .institution-1 .input-title',
                    '#new-section-${newSectionId} .institution-1 .input-text',
                    '#new-section-${newSectionId} .institution-1 .input-date',
                    '#new-section-${newSectionId} .institution-1 .submit-button',
                    '#new-section-${newSectionId} .institution-1 h4',
                    '#new-section-${newSectionId} .institution-1 .card-text',
                    '#new-section-${newSectionId} .institution-1 .date-text'
                    )">
                  <i class="fa-solid fa-pen"></i></a>
                <a class="btn-right p-1" onclick="deleteElement(
                  '#new-section-${newSectionId} .institution-1'
                  )">
                  <i class="fa-solid fa-x"></i></a>
              </div>
            </div>

            <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
            <p class="card-text mt-3 mb-1">
              Detalles de mi experiencia.</p>

            <textarea class="input-text new-content-box container-fluid" type="text"
              placeholder="Ingrese el nuevo texto."></textarea>
            <p class="date-text card-text mt-3 mb-1">Año de inicio - Año de finalización</p>
            <input class="input-date new-content-box" type="text" placeholder="Ingrese la nueva fecha.">
            <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
              onclick="hideBoxes(
                '#new-section-${newSectionId} .institution-1 .new-content-box'
                )">

          </div>

        </div>

      </div>

`;

    profile.insertAdjacentElement("afterend", newSection);


  } else if (modalSelector.value === "2") {
    newSection.setAttribute("id", "new-section-" + newSectionId);
    newSection.setAttribute("class", "card");
    newSection.innerHTML = `
    
      <div class="card-body">
        <div class="card-title">
          
          <div class="section-title d-flex">
            <div class="d-block">

              <div class="d-flex">
                <h2>${modalTitle.value}</h2>
                <div class="btn-edit ms-3">
                  <a class="btn-right p-1" onclick="editSectionTitle(
                    '#new-section-${newSectionId} .section-title .input-title',              
                    '#new-section-${newSectionId} .section-title h2',
                    '#new-section-${newSectionId} .section-title .submit-button'                            
                    )">
                    <i class="fa-solid fa-pen"></i></a>
                  <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId}')">
                    <i class="fa-solid fa-x"></i></a>
                </div>
              </div>

              <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
              <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
                onclick="hideBoxes('#new-section-${newSectionId} .section-title .new-content-box')">

            </div>
          </div>

          <div class="btn-edit">
            <a class="btn-right" onclick="addSkill('#new-section-${newSectionId} .card-title')">
              <i class="fa-solid fa-plus"></i></a>
          </div>
        </div>


        <div class="skill-2 text-center m-0">

          <div class="row pt-5">

            <!-- col vacia para establecer la estructura. -->
            <div class="col"></div>

            <div class="col">
              <h5 class="card-text">Hard Skill</h5>
              <input class="input-title new-content-box" type="text" placeholder="Ingrese la nueva habilidad.">
            </div>


            <div class="btn-edit col">
              <a class="btn-right p-1" onclick="editSkill(
                  '#new-section-${newSectionId} .skill-2 .input-title',
                  '#new-section-${newSectionId} .skill-2 .input-progress',
                  '#new-section-${newSectionId} .skill-2 h5',
                  '#new-section-${newSectionId} .skill-2 .progress-bar',
                  '#new-section-${newSectionId} .skill-2 .submit-button'
                  )">
                <i class="fa-solid fa-pen"></i></a>
              <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId} .skill-2')">
                <i class="fa-solid fa-x"></i></a>
            </div>

          </div>

          <div class="text-center">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 85%"
                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <input class="input-progress new-content-box" type="number" placeholder="Ingrese el nuevo procentaje."
              min="0" max="100">
          </div>
          <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
            onclick="hideBoxes('#new-section-${newSectionId} .skill-2 .new-content-box')">
        </div>

        <div class="skill-1 text-center m-0">

          <div class="row pt-5">

            <!-- col vacia para establecer la estructura. -->
            <div class="col"></div>

            <div class="col">
              <h5 class="card-text">Soft Skill</h5>
              <input class="input-title new-content-box" type="text" placeholder="Ingrese la nueva habilidad.">
            </div>


            <div class="btn-edit col">
              <a class="btn-right p-1" onclick="editSkill(
                  '#new-section-${newSectionId} .skill-1 .input-title',
                  '#new-section-${newSectionId} .skill-1 .input-progress',
                  '#new-section-${newSectionId} .skill-1 h5',
                  '#new-section-${newSectionId} .skill-1 .progress-bar',
                  '#new-section-${newSectionId} .skill-1 .submit-button'
                  )">
                <i class="fa-solid fa-pen"></i></a>
              <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId} .skill-1')">
                <i class="fa-solid fa-x"></i></a>
            </div>

          </div>

          <div class="text-center">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 85%"
                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <input class="input-progress new-content-box" type="number" placeholder="Ingrese el nuevo procentaje."
              min="0" max="100">
          </div>
          <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
            onclick="hideBoxes('#new-section-${newSectionId} .skill-1 .new-content-box')">
        </div>

      </div>
  
    `;

    profile.insertAdjacentElement("afterend", newSection);


  } else if (modalSelector.value === "3") {

    newSection.setAttribute("id", "new-section-" + newSectionId);
    newSection.setAttribute("class", "card");
    newSection.innerHTML = `

    <div class="card-body">
      <div class="card-title">

        <div class="section-title d-flex">
          <div class="d-block">

            <div class="d-flex">
              <h2>${modalTitle.value}</h2>
              <div class="btn-edit ms-3">
                <a class="btn-right p-1" onclick="editSectionTitle(
                  '#new-section-${newSectionId}  .section-title .input-title',              
                  '#new-section-${newSectionId}  .section-title h2',
                  '#new-section-${newSectionId}  .section-title .submit-button'                            
                  )">
                  <i class="fa-solid fa-pen"></i></a>
                <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId}')">
                  <i class="fa-solid fa-x"></i></a>
              </div>
            </div>

            <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
            <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
              onclick="hideBoxes('#new-section-${newSectionId}  .section-title .new-content-box')">

          </div>
        </div>

        <div class="btn-edit">
          <a class="btn-right" onclick="addProject('#new-section-${newSectionId} .card-title')">
            <i class="fa-solid fa-plus"></i></a>
        </div>
      </div>

      <div class="project-1 my-3 ms-md-5">

        <div class="d-flex pt-4">
          <a class="url-project-1 text-decoration-none flex-grow-1" href="#" target="_blank">
            <h3>Proyecto 1</h3>
          </a>

          <div class="btn-edit flex-shrink-0 text-end p-0">
            <a class="btn-right p-1" onclick="editProject(
                '#new-section-${newSectionId} .project-1 .input-title',
                '#new-section-${newSectionId} .project-1 .project-textarea',
                '#new-section-${newSectionId} .project-1 .input-file',
                '#new-section-${newSectionId} .project-1 h3',
                '#new-section-${newSectionId} .project-1 .card-text',
                '#new-section-${newSectionId} .project-1 .date-text',
                '#new-section-${newSectionId} .project-1 .input-date',
                '#new-section-${newSectionId} .project-1 .input-url',
                '#new-section-${newSectionId} .project-1 .submit-button'
                )">
              <i class="fa-solid fa-pen"></i></a>
            <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId} .project-1')">
              <i class="fa-solid fa-x"></i></a>
          </div>

        </div>

        <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
        <p class="card-text my-2">Descripcion de mi proyecto 1.</p>

        <textarea class="project-textarea new-content-box container-fluid"
          placeholder="Ingrese el nuevo texto."></textarea>

        <p class="date-text card-tex mt-3 mb-1">2020-2022</p>
        <input class="input-date new-content-box" type="text" placeholder="Ingrese la nueva fecha.">

        <a class="link-for-project-1-img" href="#" target="_blank">
          <img class="img-project mx-auto d-block mt-3 ms-md-5 rounded" src="./img/background-1487559_1920.jpg"
            alt="Imagen del Portfolio">
        </a>

        <div class="input-file new-content-box" id="poject-input-file-1">
          <label class="btn btn-secondary d-flex mx-auto ms-md-0 my-2" for="projects-img-input-1">
            Seleccione una imagen:</label>
          <input class="hidden-input" type="file" id="projects-img-input-1" name="projects-img-input-1"
            accept="image/jpeg, image/png, image/jpg"
            onchange="previewIMG(this, '#new-section-${newSectionId} .project-1 .img-project')">
        </div>

        <input class="input-url new-content-box my-2" type="text" id="projects-img-url-input-1"
          name="projects-img-url-input-1" placeholder="Ingrese la nueva url." oninput="editProjectUrl(
              '#new-section-${newSectionId} .project-1 .url-project-1',
              '#new-section-${newSectionId} .project-1 .link-for-project-1-img',
              '#new-section-${newSectionId} .project-1 .input-url'
              )">

        <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
          onclick="hideBoxes('#new-section-${newSectionId} .project-1 .new-content-box')">

      </div>
    </div>
    
    `;

    profile.insertAdjacentElement("afterend", newSection);


  } else if (modalSelector.value === "4") {

    newSection.setAttribute("id", "new-section-" + newSectionId);
    newSection.setAttribute("class", "card");
    newSection.innerHTML = `

      <div class="card-body">
        <div class="card-title">
          
          <div class="section-title d-flex">
            <div class="d-block">

              <div class="d-flex">
                <h2>${modalTitle.value}</h2>
                <div class="btn-edit ms-3">
                  <a class="btn-right p-1" onclick="editSimpleTextSection(
                    '#new-section-${newSectionId} .input-title',               
                    '#new-section-${newSectionId} h2',
                    '#new-section-${newSectionId} .simple-textarea',
                    '#new-section-${newSectionId} .card-text',
                    '#new-section-${newSectionId} .submit-button'             
                    )">
                    <i class="fa-solid fa-pen"></i></a>
                  <a class="btn-right p-1" onclick="deleteElement('#new-section-${newSectionId}')">
                    <i class="fa-solid fa-x"></i></a>
                </div>
              </div>

              <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
              
            </div>
          </div>

        </div>

        <p class="card-text mt-3 mb-1">${modalText.value}</p>
        <textarea class="simple-textarea new-content-box container-fluid mt-2"
            placeholder="Ingrese el nuevo texto."></textarea>

          <input class="submit-button new-content-box btn btn-primary my-3" type="submit"
                onclick="hideBoxes('#new-section-${newSectionId} .new-content-box')">

      </div>

    `;

    profile.insertAdjacentElement("afterend", newSection);
  }

  newSectionId++;

  modalForm.reset();

}


let newId = 1;

function addInstitution(sectionId) {

  const sectionSelector = document.querySelector(sectionId);

  const div = document.createElement("div");

  div.setAttribute("class", "d-lg-flex my-3");
  div.setAttribute("id", "new-institution-" + newId);
  div.innerHTML = `

  <div class="flex-shrink-0 text-center ms-md-3">
    <img class="mb-3 logo-institution" src="./img/manzana.jpg" alt="Logo">

    <div class="new-content-box input-file" id="new-institution-${newId}-input-file">
      <label class="btn btn-secondary mb-4" for="new-institution-${newId}-img-input">Seleccione una imagen:</label>
      <input class="hidden-input" type="file" id="new-institution-${newId}-img-input" 
        name="new-institution-${newId}-img-input"
        accept="image/jpeg, image/png, image/jpg"
        onchange="previewIMG(this, '#new-institution-${newId} .logo-institution')">
    </div>

  </div>

  <div class="container-fluid ms-3">

    <div class="d-flex">
      <h4 class="flex-grow-1">Nombre de institución</h4>
      <div class="btn-edit flex-shrink-0 p-0">
        <a class=" btn-right p-1"
          onclick="editInstitution(
            '#new-institution-${newId} .input-file',
            '#new-institution-${newId} .input-title',
            '#new-institution-${newId} .input-text',
            '#new-institution-${newId} .input-date',
            '#new-institution-${newId} .submit-button',
            '#new-institution-${newId} h4',
            '#new-institution-${newId} .card-text',
            '#new-institution-${newId} .date-text'
            )">
          <i class="fa-solid fa-pen"></i></a>
        <a class="btn-right p-1" onclick="deleteElement('#new-institution-${newId}')">
          <i class="fa-solid fa-x"></i></a>
      </div>
    </div>

    <input class="new-content-box input-title" type="text" placeholder="Ingrese el nuevo nombre.">
    <p class="card-text mt-3 mb-1">Detalles de mi experiencia.</p>

    <textarea class="container-fluid new-content-box input-text" type="text"
      placeholder="Ingrese el nuevo texto."></textarea>
    <p class="card-text date-text mt-3 mb-1">Año de inicio - Año de finalización</p>
    <input class="new-content-box input-date" type="text" placeholder="Ingrese la nueva fecha.">
    <input class="btn btn-primary my-2 new-content-box submit-button" type="submit"
      onclick="hideBoxes('#new-institution-${newId} .new-content-box')">

  </div>

  `;

  sectionSelector.insertAdjacentElement("afterend", div);

  newId++;

}


let skillN = 1;

function addSkill(skillSectionId) {

  const SkillId = document.querySelector(skillSectionId);

  const div = document.createElement("div");

  div.setAttribute("class", "text-center m-0");
  div.setAttribute("id", "new-skill-" + skillN);
  div.innerHTML = `
   
    <div class="row pt-5">
      <!-- col vacia para establecer la estructura. -->
      <div class="col"></div>

      <div class="col">
        <h5 class="card-text">Nueva habilidad</h5>
        <input class="new-content-box input-title" type="text" placeholder="Ingrese la nueva habilidad.">
      </div>

      <div class="col btn-edit">
        <a class="btn-right p-1" onclick="editSkill(
            '#new-skill-${skillN} .input-title',
            '#new-skill-${skillN} .input-progress',
            '#new-skill-${skillN} h5',
            '#new-skill-${skillN} .progress-bar',
            '#new-skill-${skillN} .submit-button'
            )">
          <i class="fa-solid fa-pen"></i></a>
        <a class="btn-right p-1" onclick="deleteElement('#new-skill-${skillN}')">
          <i class="fa-solid fa-x"></i></a>
      </div>

    </div>

    <div class="text-center">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 85%"
          aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
      <input class="new-content-box input-progress" type="number" placeholder="Ingrese el nuevo procentaje."
        min="0" max="100">
    </div>
    <input class="btn btn-primary my-2 new-content-box submit-button" type="submit"
      onclick="hideBoxes('#new-skill-${skillN} .new-content-box')">

  `;

  SkillId.insertAdjacentElement("afterend", div);

  skillN++;
}


let projectN = 1;

function addProject(sectionId) {

  const sectionSelector = document.querySelector(sectionId);

  const div = document.createElement("div");

  div.setAttribute("class", "ms-md-5 my-3");
  div.setAttribute("id", "new-project-" + projectN);
  div.innerHTML = `

      <div class="d-flex pt-4">
        <a class="url-project text-decoration-none flex-grow-1" href="#" target="_blank">
          <h3>Nuevo Proyecto ${projectN}</h3>
        </a>

        <div class="btn-edit flex-shrink-0 text-end p-0">
          <a class="btn-right p-1" onclick="editProject(
              '#new-project-${projectN} .input-title',
              '#new-project-${projectN} .project-textarea',
              '#new-project-${projectN} .input-file',
              '#new-project-${projectN} h3',
              '#new-project-${projectN} .card-text',
              '#new-project-${projectN} .date-text',
              '#new-project-${projectN} .input-date',
              '#new-project-${projectN} .input-url',
              '#new-project-${projectN} .submit-button'
              )">
            <i class="fa-solid fa-pen"></i></a>
          <a class="btn-right p-1" onclick="deleteElement('#new-project-${projectN}')">
            <i class="fa-solid fa-x"></i></a>
        </div>

      </div>

      <input class="input-title new-content-box" type="text" placeholder="Ingrese el nuevo nombre.">
      <p class="card-text my-2">Descripcion de mi proyecto.</p>

      <textarea class="project-textarea new-content-box container-fluid"
        placeholder="Ingrese el nuevo texto."></textarea>

      <p class="date-text card-tex mt-3 mb-1">2020-2022</p>
      <input class="input-date new-content-box" type="text" placeholder="Ingrese la nueva fecha.">

      <a class="link-for-project-img" href="#" target="_blank">
        <img class="img-project mx-auto d-block mt-3 ms-md-5 rounded" src="./img/background-1487559_1920.jpg"
          alt="Imagen del Portfolio">
      </a>

      <div class="input-file new-content-box" id="poject-input-file-${projectN}">
        <label class="btn btn-secondary d-flex mx-auto ms-md-0 my-2" for="projects-img-input-${projectN}">
          Seleccione una imagen:</label>
        <input class="hidden-input" type="file" id="projects-img-input-${projectN}" name="projects-img-input-${projectN}"
          accept="image/jpeg, image/png, image/jpg"
          onchange="previewIMG(this, '#new-project-${projectN} .img-project')">
      </div>

      <input class="input-url new-content-box my-2" type="text" id="projects-img-url-input"
        name="projects-img-url-input" placeholder="Ingrese la nueva url." oninput="editProjectUrl(
            '#new-project-${projectN} .url-project',
            '#new-project-${projectN} .link-for-project-img',
            '#new-project-${projectN} .input-url'
            )">

      <input class="submit-button new-content-box btn btn-primary my-2" type="submit"
        onclick="hideBoxes('#new-project-${projectN} .new-content-box')">
 
  `;

  sectionSelector.insertAdjacentElement("afterend", div);

  projectN++;
}



//Edit functions.



function editProfile(
  inputFile,
  inputTitle,
  inputText,
  inputLocation,
  textareaAbout,
  submit,
  subElementTitle,
  subElementText,
  subElementLocation,
  subElementAbout
) {

  const inputFileBox = document.querySelector(inputFile);
  const inputTitleBox = document.querySelector(inputTitle);
  const inputTextBox = document.querySelector(inputText);
  const inputLocationBox = document.querySelector(inputLocation);
  const textareaNewAbout = document.querySelector(textareaAbout);
  const editSubmitButton = document.querySelector(submit);

  const title = document.querySelector(subElementTitle);
  const profession = document.querySelector(subElementText);
  const location = document.querySelector(subElementLocation);
  const about = document.querySelector(subElementAbout);


  if (inputFileBox.style.display === "block" &&
    inputTextBox.style.display === "block" &&
    inputTitleBox.style.display === "block" &&
    inputLocationBox.style.display === "block" &&
    textareaNewAbout.style.display === "block" &&
    editSubmitButton.style.display === "block"
  ) {
    inputFileBox.style.display = "none";
    inputTitleBox.style.display = "none";
    inputTextBox.style.display = "none";
    inputLocationBox.style.display = "none";
    textareaNewAbout.style.display = "none";
    editSubmitButton.style.display = "none";

  } else {
    inputFileBox.style.display = "block";
    inputTextBox.style.display = "block";
    inputTitleBox.style.display = "block";
    inputLocationBox.style.display = "block";
    textareaNewAbout.style.display = "block";
    editSubmitButton.style.display = "block";
  }


  inputTitleBox.addEventListener('input', updateTitle);
  inputTextBox.addEventListener('input', updateText);
  inputLocationBox.addEventListener('input', updateLocation);
  textareaNewAbout.addEventListener('input', updateAbout);

  function updateTitle(e) {
    title.textContent = e.target.value;
  }

  function updateText(e) {
    profession.textContent = e.target.value;
  }

  function updateLocation(e) {
    location.textContent = e.target.value;
  }

  function updateAbout(e) {
    about.textContent = e.target.value;
  }


  inputTitleBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleBox.style.display = "none";
    }

  });

  inputTextBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTextBox.style.display = "none";
    }

  });

  inputLocationBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputLocationBox.style.display = "none";
    }

  });

}


function editSectionTitle(inputTitle, sectionTitle, submitButton) {

  const inputTitleBox = document.querySelector(inputTitle);
  const title = document.querySelector(sectionTitle);
  const editSubmitButton = document.querySelector(submitButton);


  if (inputTitleBox.style.display === "block" &&
    editSubmitButton.style.display === "block"
  ) {
    inputTitleBox.style.display = "none";
    editSubmitButton.style.display = "none";

  } else {
    inputTitleBox.style.display = "block";
    editSubmitButton.style.display = "block";
  }


  inputTitleBox.addEventListener('input', updateValue);

  function updateValue(e) {
    title.textContent = e.srcElement.value;
  }

  inputTitleBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleBox.style = "display: none";
    }

  })

}


function editInstitution(
  inputFile,
  inputTitle,
  inputText,
  inputDate,
  submit,
  subElementTitle,
  subElementText,
  subElementDate
) {

  const inputFileBox = document.querySelector(inputFile);
  const inputTitleBox = document.querySelector(inputTitle);
  const inputTextBox = document.querySelector(inputText);
  const InputDateBox = document.querySelector(inputDate);
  const editSubmitButton = document.querySelector(submit);

  const title = document.querySelector(subElementTitle);
  const text = document.querySelector(subElementText);
  const date = document.querySelector(subElementDate);


  if (inputFileBox.style.display === "block" &&
    inputTextBox.style.display === "block" &&
    inputTitleBox.style.display === "block" &&
    InputDateBox.style.display === "block" &&
    editSubmitButton.style.display === "block"
  ) {
    inputFileBox.style.display = "none";
    inputTitleBox.style.display = "none";
    inputTextBox.style.display = "none";
    InputDateBox.style.display = "none";
    editSubmitButton.style.display = "none";

  } else {
    inputFileBox.style.display = "block";
    inputTextBox.style.display = "block";
    inputTitleBox.style.display = "block";
    InputDateBox.style.display = "block";
    editSubmitButton.style.display = "block";
  }


  inputTitleBox.addEventListener('input', updateTitle);
  inputTextBox.addEventListener('input', updateText);
  InputDateBox.addEventListener('input', updateDate);

  function updateTitle(e) {
    title.textContent = e.target.value;
  }

  function updateText(e) {
    text.textContent = e.target.value;
  }

  function updateDate(e) {
    date.textContent = e.target.value;
  }


  inputTitleBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleBox.style.display = "none";
    }

  });

  inputTextBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTextBox.style.display = "none";
    }

  });

  InputDateBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      InputDateBox.style.display = "none";
    }

  });

}


function editSkill(
  inputTitle,
  inputNumber,
  skillTitle,
  progressBarWidth,
  submitButton
) {

  const inputTitleSkill = document.querySelector(inputTitle);
  const inputNumberProgress = document.querySelector(inputNumber);
  const actualSkillTitle = document.querySelector(skillTitle);
  const actualProgressBarWidth = document.querySelector(progressBarWidth);
  const editSubmitButton = document.querySelector(submitButton);

  if (inputTitleSkill.style.display === "inline-block" &&
    inputNumberProgress.style.display === "inline-block" &&
    editSubmitButton.style.display === "inline-block"
  ) {
    inputTitleSkill.style.display = "none";
    inputNumberProgress.style.display = "none";
    editSubmitButton.style.display = "none";

  } else {
    inputTitleSkill.style.display = "inline-block";
    inputNumberProgress.style.display = "inline-block";
    editSubmitButton.style.display = "inline-block";
  }

  inputTitleSkill.addEventListener('input', updateTitle);
  inputNumberProgress.addEventListener('input', updateProgressBar);

  function updateTitle(e) {
    actualSkillTitle.textContent = e.target.value;
  }

  function updateProgressBar(e) {
    actualProgressBarWidth.style.width = e.target.value + '%';
  }


  inputTitleSkill.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleSkill.style.display = "none";
    }

  });

  inputNumberProgress.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputNumberProgress.style.display = "none";
    }

  });

}


function editProject(
  inputTitle,
  textArea,
  inputFile,
  projectTitle,
  projectText,
  dateText,
  inputDate,
  inputUrl,
  submitButton
) {

  const inputTitleProject = document.querySelector(inputTitle);
  const textAreaProject = document.querySelector(textArea);
  const inputFileProject = document.querySelector(inputFile);

  const actualProjectTitle = document.querySelector(projectTitle);
  const actualProjectText = document.querySelector(projectText);
  const actualDateText = document.querySelector(dateText);
  const inputDateProject = document.querySelector(inputDate);
  const inputUrlProject = document.querySelector(inputUrl);

  const editSubmitButton = document.querySelector(submitButton);


  if (inputTitleProject.style.display === "block" &&
    textAreaProject.style.display === "block" &&
    inputFileProject.style.display === "flex" &&
    inputDateProject.style.display === "flex" &&
    inputUrlProject.style.display === "flex" &&
    editSubmitButton.style.display === "block"

  ) {
    inputTitleProject.style.display = "none";
    textAreaProject.style.display = "none";
    inputDateProject.style.display = "none";
    inputFileProject.style.display = "none";
    inputUrlProject.style.display = "none";
    editSubmitButton.style.display = "none";

  } else {
    inputTitleProject.style.display = "block";
    textAreaProject.style.display = "block";
    inputFileProject.style.display = "flex";
    inputDateProject.style.display = "flex";
    inputUrlProject.style.display = "flex";
    editSubmitButton.style.display = "block";
  }


  inputTitleProject.addEventListener('input', updateTitle);
  textAreaProject.addEventListener('input', updateText);
  inputDateProject.addEventListener('input', updateDate);

  function updateTitle(e) {
    actualProjectTitle.textContent = e.target.value;
  }

  function updateText(e) {
    actualProjectText.textContent = e.target.value;
  }

  function updateDate(e) {
    actualDateText.textContent = e.target.value;
  }


  inputTitleProject.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleProject.style.display = "none";
    }

  });

  inputUrlProject.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputUrlProject.style.display = "none";
    }

  });

  actualDateText.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      actualDateText.style.display = "none";
    }

  });

}


function editProjectUrl(linkProject, linkProjectImg, inputUrl) {

  const actualLinkProject = document.querySelector(linkProject);
  const actualLinkProjectImg = document.querySelector(linkProjectImg);
  const newUrl = document.querySelector(inputUrl);

  newUrl.addEventListener('input', updateUrl);
  newUrl.addEventListener('change', updateUrl);
  newUrl.addEventListener('click', updateUrl);
  newUrl.addEventListener('keyup', updateUrl);
  newUrl.addEventListener('paste', updateUrl);


  function updateUrl(e) {
    actualLinkProject.href = e.target.value;
    actualLinkProjectImg.href = e.target.value;
  }

}


function editSimpleTextSection(
  inputTitle,
  Title,
  inpuText,
  text,
  submit
) {

  const inputTitleBox = document.querySelector(inputTitle);
  const simpleTitle = document.querySelector(Title,);
  const inputNewText = document.querySelector(inpuText);
  const simpleText = document.querySelector(text);
  const submitButton = document.querySelector(submit);


  if (
    inputTitleBox.style.display === "block" &&
    inputNewText.style.display === "block" &&
    submitButton.style.display === "block"
  ) {
    inputTitleBox.style.display = "none";
    inputNewText.style.display = "none";
    submitButton.style.display = "none";

  } else {
    inputTitleBox.style.display = "block";
    inputNewText.style.display = "block";
    submitButton.style.display = "block";
  }


  inputTitleBox.addEventListener('input', updateTitle);
  inputNewText.addEventListener('input', updateText);

  function updateTitle(e) {
    simpleTitle.textContent = e.srcElement.value;
  }

  function updateText(e) {
    simpleText.textContent = e.srcElement.value;
  }


  inputTitleBox.addEventListener('keyup', (e) => {
    `Key "${e.key}" released [event: keyup]`;
    if (e.key == "Enter") {
      inputTitleBox.style = "display: none";
    }

  })

}



//Miscellaneous functions.



function previewIMG(input, selector) {
  const preview = document.querySelector(selector);
  const file = input.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}


function hideBoxes(contentBoxes) {
  const newContentBoxes = document.querySelectorAll(contentBoxes);

  for (var i = 0; i < newContentBoxes.length; i++) {
    newContentBoxes[i].style = "display: none;";

  }
}


function deleteElement(selector) {
  const element = document.querySelector(selector);

  const deleteAlert = confirm("¿Deseas eliminar ese elemento?");
  if (deleteAlert === true) {
    element.remove();
  }

}
