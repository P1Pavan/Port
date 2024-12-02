import React from "react";
import "../App.css";
import portfolio from "../images/portfolio.png"


const Project = () => {
  return (
    <div>
      <div
        className="project"
      >
        <h1 className="projectLogo">
          Projects
        </h1>
        <div>
          <div
          className="projectSection"
          >
            <div>
              <article class="card">
                <div class="temporary_text" style={{height:'100%'}}><img style={{width:'100%',height:"95%",borderRadius:'20px' }} src={portfolio} alt="nature"/></div>
                <div class="card_content">
                  <span class="card_title">My Portfolio</span>
                  <span class="card_subtitle">
                    {/* Thsi is a subtitle of this page. Let us see how it looks on
                    the Web. */}
                    
                  </span>
                  <p class="card_description" style={{}}>
                    Lorem ipsum dolor, sit amet expedita exercitationem
                    recusandae aut dolor tempora aperiam itaque possimus at,
                    cupiditate earum, quae repudiandae aspernatur? Labore minus
                    soluta consequatur placeat.
                  </p>
                </div>
              </article>
            </div>
            <div>
              <article class="card">
                <div class="temporary_text" style={{height:'100%'}}><img style={{width:'100%',height:"95%",borderRadius:'20px' }} src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fht09ok4drfaof4qma2t0.PNG" alt="nature"/></div>
                <div class="card_content">
                  <span class="card_title">Netflix Clone</span>
                  <span class="card_subtitle">
                    {/* Thsi is a subtitle of this page. Let us see how it looks on
                    the Web. */}
                    
                  </span>
                  <p class="card_description">
                    Lorem ipsum dolor, sit amet expedita exercitationem
                    recusandae aut dolor tempora aperiam itaque possimus at,
                    cupiditate earum, quae repudiandae aspernatur? Labore minus
                    soluta consequatur placeat.
                  </p>
                </div>
              </article>
            </div>
            <div>
              <article class="card">
                <div class="temporary_text" style={{height:'100%'}}><img style={{width:'100%',height:"95%",borderRadius:'20px' }} src="https://repository-images.githubusercontent.com/561289066/01862f25-1214-411b-a753-f38a9d8602ed" alt="nature"/></div>
                <div class="card_content">
                  <span class="card_title">Chat App</span>
                  <span class="card_subtitle">
                    {/* Thsi is a subtitle of this page. Let us see how it looks on
                    the Web. */}
                    
                  </span>
                  <p class="card_description">
                    Lorem ipsum dolor, sit amet expedita exercitationem
                    recusandae aut dolor tempora aperiam itaque possimus at,
                    cupiditate earum, quae repudiandae aspernatur? Labore minus
                    soluta consequatur placeat.
                  </p>
                </div>
              </article>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
