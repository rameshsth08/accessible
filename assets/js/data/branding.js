
  document.addEventListener("DOMContentLoaded", function () {
    fetch('data/branding.json')
      .then(response => response.json())
      .then(data => {
        const template = document.getElementById('project-template');
        const container = document.querySelector('#branding-page .row.g-5');

        data.forEach(project => {
          // Clone the template structure
          const projectBoxClone = template.cloneNode(true);
          projectBoxClone.style.display = ''; // Remove display none
          
          // Populate project box with data
          projectBoxClone.querySelector('.project-box').innerHTML = `
            <div class="project-box-container">
              <a href="#">
              <div class="imganimator">
                <div class="project-img">
                  ${project.type === 'video' ? `
                    <div class="video">
                      <video class="videoembed jarallax-img" muted>
                        <source src="${project.video}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                      <img src="${project.image}" alt="">
                    </div>
                  ` : `
                    <img src="${project.image}" alt="">
                  `}
                </div>
                </div>
                <div class="content-overlay">
                  <div>
                    <div class="project-title">${project.title}</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="img-info img-info--left">
              <div class="img-info-wrap">
                <span>${project.title}</span>
              </div>
            </div>
            <div class="img-info img-info--right">
              <div class="img-info-wrap">
                <span>${project.infoRight}</span>
              </div>
            </div>
          `;

          // Append the cloned and populated project box to the container
          container.appendChild(projectBoxClone);
        });
      })
      .catch(error => console.error('Error loading project data:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch('data/branding.json')
      .then(response => response.json())
      .then(data => {
        const template = document.getElementById('project-template');
        const container = document.querySelector('#branding-data .row.g-5');

        // Limit to the first 3 items
        data.slice(0, 3).forEach(project => {
          const projectBoxClone = template.cloneNode(true);
          projectBoxClone.style.display = ''; // Remove display none

          // Populate project box with data
          projectBoxClone.querySelector('.project-box').innerHTML = `
            <div class="project-box-container">
              <a href="#">
              <div class="imganimator">
                <div class="project-img">
                  ${project.type === 'video' ? `
                    <div class="video">
                      <video class="videoembed jarallax-img" muted>
                        <source src="${project.video}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                      <img src="${project.image}" alt="">
                    </div>
                  ` : `
                    <img data-speed=".5" src="${project.image}" alt="">
                  `}
                </div>
                </div>
                <div class="content-overlay">
                  <div>
                    <div class="project-title">${project.title}</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="img-info img-info--left">
              <div class="img-info-wrap">
                <span>${project.title}</span>
              </div>
            </div>
            <div class="img-info img-info--right">
              <div class="img-info-wrap">
                <span>${project.infoRight}</span>
              </div>
            </div>
          `;

          container.appendChild(projectBoxClone);
        });
      })
      .catch(error => console.error('Error loading project data:', error));
  });
