// document.addEventListener("DOMContentLoaded", () => {
//     const professionalsSection = document.getElementById("professionals-results");
//     const professionalModalOpen = document.getElementById("professional-modal");
  
//     const availableJobsSection = document.getElementById("posted-jobs-available");
//     const postJobForm = document.getElementById("post-job-form");
  
//     const educationalArticles = document.getElementById("article-content");
//     const postEducationalArticle = document.getElementById("educational-content-form");
  
//     const modalClose = document.getElementsByClassName("btn-close");
  
//     const viewProfileBtns = document.querySelectorAll(".view-profile-btn");
  
//     const userAuthenticationContainer = document.getElementById("user-authentication")
//     const signupForm = document.getElementById("signup-form");
//     const signupBtn = document.querySelector(".signup-btn");
//     const loginForm = document.getElementById("logIn-form");
//     const userProfileBtn = document.getElementById("user-profile-btn");
//     let signupPassword = document.getElementById("signup-password").value;
  
//     const userProfileInfo = document.getElementById("professional-profile-modal");
//     const profileModalContent = document.getElementById("modal-content");
//     const updatePortfolio = document.getElementById("add-content-portfolio");
  
//     const websiteContent = document.getElementById("website-content");
  
//     const hamburgerIcon = document.getElementById('hamburger-icon');
//     const menuContainer = document.querySelector('.menu-container');
  
//     hamburgerIcon.addEventListener('click', () => {
//       menuContainer.classList.toggle('open');
//     });
  
//     // Function to display signup form when button is clicked on
//     function displayUserAuthForm(event) {
//       event.preventDefault();
//       signupForm.style.display = "flex";
//       loginForm.style.display = "none";
  
//       const closeUserAuthForm = signupForm.querySelector(".btn-close");
//       closeUserAuthForm.addEventListener("click", () => {
//         userAuthenticationContainer.style.display = "none";
//       });
//     }
  
//     document.querySelector(".signup-btn").addEventListener("click", displayUserAuthForm);
//     document.querySelector("#signin-btn").addEventListener("click", displayLoginForm);
    
//     document.querySelector("#signup-redirect-btn").addEventListener("click", () => {
//       signupForm.style.display = "flex";
//       loginForm.style.display = "none";
//     });
  
//     // Function to display login form when button is clicked on
//     function displayLoginForm(event){
//       event.preventDefault();
//       loginForm.style.display = "flex";
//       signupForm.style.display = "none";
  
//       const closeLoginForm = loginForm.querySelector(".btn-close");
//       closeLoginForm.addEventListener("click", () => {
//         userAuthenticationContainer.style.display = "none";
//       });
//     };
  
//     async function fetchProfessionals() {
//       const response = await fetch('http://localhost:3000/professionals');
//       const professionals = await response.json();
//       return professionals;
//   };
  
//   async function fetchCurrentUser() {
//     const response = await fetch('http://localhost:3000/currentUser');
//     const currentUser = await response.json();
//     return currentUser;
//   };
  
//   async function updateUI() {
//     const currentUser = await fetchCurrentUser();
//     if (currentUser) {
//         userAuthenticationContainer.style.display = 'none';
//         signupBtn.style.display = "none"
//         websiteContent.style.display = 'block';
//         userProfileInfo.style.display = 'none';
//         userProfileInfo.innerText = `
//         <div class="profile-modal-content">
//             <h4>Your Profile</h4>
//             <button type="button" class="btn-close" id="btn-profile-close" aria-label="Close"></button>
//             <div id="professional-profile-modal">
//               <div id="profile-prt1">
//                 <img src="${currentUser.profileImage}" alt="">
//                 <div class="profile-text">
//                   <h4>${currentUser.signupName}</h4>
//                   <h5>${currentUser.userProfession}</h5>
//                   <p>${currentUser.signupServices}</p>
//                 </div>
//                 <button class = "edit-profile-btn">Edit Profile</button>
//                 <button class = "delete-profile-btn">Delete profile</button>
//               </div>
//               <div id="profile-prt2">
//                 <div class="profile-portfolio">
//                   <img src="Images/Projects/concept render 2.jpg" alt="">
//                   <h5>Mixed use developemnt project</h5>
//                   <p>This type of development promotes a vibrant, sustainable community by providing residents and visitors with a convenient blend of living, working, shopping, and leisure opportunities in one location. </p>
//                 </div>
//                 <div class="profile-portfolio">
//                   <img src="Images/Projects/Interior side.jpg" alt="">
//                   <h5>Affordable housing project</h5>
//                   <p>A residential building designed to provide comfortable, modern living spaces for individuals and families. This project features a variety of unit types, from cozy studios to spacious multi-bedroom apartments, all equipped with high-quality finishes and contemporary amenities. </p>
//                 </div>
//               </div> 
//               <button class = "logout-btn">Logout</button>
//             </div>
//           </div>
//         `;
//     } else {
//         userAuthenticationContainer.style.display = 'block';
//         websiteContent.style.display = 'none';
//         userProfileInfo.style.display = 'none';
//     }
//   };
  
//     // Function to submit signup details to the server
//     function signupFormSubmit(event) {
//       event.preventDefault();
  
//       let signupName = document.getElementById("signup-name").value.trim();
//       let signupEmail = document.getElementById("signup-email").value.trim();
//       let profileImage = document.getElementById("signup-profile-photo").value.trim();
//       let userProfession = document.getElementById("signup-profession").value.trim();
//       let signupServices = document.getElementById("signup-services").value.trim();
//       let signupPassword = document.getElementById("signup-password").value.trim();
//       let signupReEnterPassword = document.getElementById("signup-reEnter-password").value.trim();
  
//       if (!signupEmail || !signupPassword || !profileImage || !signupName) {
//         alert("Please fill in all required fields.");
//         return;
//       }
  
//       async function checkUserName(signupName) {
//         try {
//           const response = await fetch("http://localhost:3000/professionals");
      
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
      
//           const professionalsData = await response.json();
      
//           const existingUser = professionalsData.find(professional => professional.signupName === signupName);
      
//           if (existingUser) {
//             alert(`${signupName} already exists`);
//           } else {
//             alert(`${signupName} is available`);
//           }
//         } catch (error) {
//           console.error("There was a problem with the fetch operation:", error);
//         }
//       }
//       checkUserName();
  
//       let newUser = {
//         profileImage,
//         signupName,
//         userProfession,
//         signupServices,
//         signupEmail,
//         signupPassword,
//         portfolioImages: []
//       };
  
//       fetch("http://localhost:3000/professionals", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(newUser),
//       })
//         .then((response) => response.json())
//         .then((data) => {
          
//           signupForm.style.display = "none",
//           signupBtn.style.display = "none";
  
//           const profileBtn = document.createElement("button");
//           profileBtn.classList.add("profile-btn");
//           profileBtn.textContent = "Your Profile";
//           document.querySelector("header").appendChild(profileBtn);
  
//           profileBtn.addEventListener("click", () => {
//             showUserProfile(data);
//           })  
          
//         })
//         .catch((error) => console.error("Error signing up:", error));
//     }
//     signupForm.addEventListener("submit", signupFormSubmit);
  
//     // Function to use login form
//     async function loginFormSubmit(event) {
//       event.preventDefault();
  
//       let loginEmail = document.getElementById("login-email").value;
//       let loginPassword = document.getElementById("login-password").value;
  
//       let professionals = await fetchProfessionals();
//       let professional = professionals.find(professional => professional.signupEmail === loginEmail)
//       if(!professional){
//         alert("No email found. Please check")
//         return;
//       }
  
//       if(professional.signupPassword === loginPassword) {
//         await fetch('http://localhost:3000/currentUser', {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(professional),
//         });
//         updateUI();
//       } else {
//         alert('Invalid password.');
//       }
//     };
//     loginForm.addEventListener("submit", loginFormSubmit);
  
//     // Function to show the profile of user
//     function showUserProfile(user) {
//       profileModal.style.display = "block";
  
//       let addToPorfolioBtn = document.createElement("button");
//       addToPorfolioBtn.textContent = "Add to portfolio";
//       addToPorfolioBtn.className = "add-portfolio-btn";
  
//       let updateProfileBtn = document.createElement("button");
//       updateProfileBtn.textContent = "Update profile";
//       updateProfileBtn.className = "edit-profile-btn";
  
//       let deleteAccountBtn = document.createElement("button");
//       deleteAccountBtn.textContent = "Delete Account";
//       deleteAccountBtn.className = "delete-profile-btn";
  
//       const profileModal = document.createElement("div");
//       modalClose.classList.add("profile-modal");
  
//       // let profileItems = "";
//       //   profileItems += `
//       //     <div class="portfolio-item">
//       //     <img src="${user.imageUrl}" alt="${user.projectTitle}">
//       //       <h5>${user.projectTitle}</h5>
//       //       <p>${user.projectDescription}</p>
//       //     </div>`;
//       // ;
  
//       profileModal.innerHTML = `
//       <div class="profile-modal-content">
//         <button type="button" class="btn-close" aria-label="Close"></button>
//         <div id="profile-prt1">
//           <img src="${user.profileImage}" alt="${user.signupName}">
//           <div class="profile-text">
//             <h4>${user.professionalName}</h4>
//             <h5>${user.profession}</h5>
//             <p>${user.professionalServices}</p>
//           </div>
//           <div class="profile-portfolio">
//             ${user.portfolioImages.map(image => `
//               <div class="portfolio-profile-item">
//               <img src="${image.imageUrl}" alt="${image.projectTitle}">
//               <h5>${image.projectTitle}</h5>
//               <p>${image.projectDescription}</p>
//           </div>
//           `).join('')}
//           </div>
  
//       </div>
//         `;
        
//         document.body.appendChild(profileModal);
  
//         profileModal.appendChild(addToPorfolioBtn);
//         profileModal.appendChild(updateProfileBtn);
//         profileModal.appendChild(deleteAccountBtn);
  
        
  
//         modal.querySelector('.close').addEventListener('click', () => {
//           document.body.removeChild(modal);
//       });
//     }
  
//     document.getElementById("user-profile-btn").addEventListener("click", showUserProfile);
  
//     // document.getElementById("signup-profile-photo").addEventListener("click", function() {
//     //   showUserProfile({
//     //     profileImage: this.value,
//     //     signupName: document.getElementById("signup-name").value,
//     //     userProfession: document.getElementById("signup-profession").value,
//     //     signupServices: document.getElementById("signup-services").value
//     //   });
//     // });
  
//   // Function to GET the professionals profile
//     function fetchProfessionalProfile() {
//       fetch("http://localhost:3000/professionals")
//         .then((response) => response.json())
//         .then((data) => {
//           displayProfessionals(data);
//         })
//         .catch((error) => console.error("Error fetching profile:", error));
//     }
  
//     // Function to dynamically display professionals and some of their details
//     function displayProfessionals() {
//       fetch("http://localhost:3000/professionals")
//         .then((response) => response.json())
//         .then((data) => {
//           professionalsSection.innerHTML = "";
  
//           data.forEach((item) => {
//             const professionalCard = document.createElement("li");
  
//             professionalCard.innerHTML = `
//                   <div class="professional-card">
//                     <img src="${item.profileImage}" alt="${item.signupName}">
//                     <div class="professional-info">
//                       <h4>${item.signupName}</h4>
//                       <h5>${item.userProfession}</h5>
//                       <h6>${item.signupServices}</h6>
//                       <button class="view-profile-btn" data-id="${item.id}">View profile</button>
//                     </div>
//                   </div>
//                 `;
  
//             professionalsSection.appendChild(professionalCard);
//           });
  
//           const viewProfileBtns = document.querySelectorAll(".view-profile-btn");
//           viewProfileBtns.forEach((btn) => {
//             btn.addEventListener("click", openProfileModal);
//           });
//         })
//         .catch((error) => console.error("Error fetching professional:", error));
//     };
  
//     // Function to show the professionals' details individually
//     function openProfileModal(event) {
//       event.preventDefault();
//       const professionalId = event.target.getAttribute("data-id");
  
//       fetch(`http://localhost:3000/professionals/${professionalId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           professionalModalOpen.style.display = "block";
  
//           let porfolioMessageBtn = document.createElement("button");
//           porfolioMessageBtn.textContent = "Message professional";
//           porfolioMessageBtn.className = "portfolio-message-btn";
  
//           let portfolioItems = "";
//           data.portfolioImages.forEach((image) => {
//             portfolioItems += `
//                   <div class="portfolio-item">
//                     <img src="${image.imageUrl}" alt="${image.projectTitle}">
//                     <h5>${image.projectTitle}</h5>
//                     <p>${image.projectDescription}</p>
//                   </div>`;
//           });
  
//           professionalModalOpen.innerHTML = `
//                 <button type="button" class="btn-close" aria-label="Close"></button>
//                 <div id="profile-part1">
//                   <img src="${data.profileImage}" alt="${data.signupName}">
//                   <div class="profile-text">
//                     <h4>${data.signupName}</h4>
//                     <h5>${data.userProfession}</h5>
//                     <p>${data.signupServices}</p>
//                     <h6>${data.signupEmail}</h6>
//                   </div>
//                 </div>
//                 <div id="profile-part2">
//                   <div class="portfolio">${portfolioItems}</div>
//                 </div>
//               `;
  
//           professionalModalOpen.appendChild(porfolioMessageBtn);
  
//           const closeModalBtn = professionalModalOpen.querySelector(".btn-close");
//           closeModalBtn.addEventListener("click", () => {
//             professionalModalOpen.style.display = "none";
//           });
//         })
//         .catch((error) =>
//           console.error("Error fetching professional profile:", error)
//         );
//     };
  
//   // A function that displays the different projects on the website
//     function displayProjectTypes() {
//       fetch("http://localhost:3000/professionals")
//         .then((response) => response.json())
//         .then((data) => {
//           const projectTypeContainer = document.getElementById("project-type-results");
//           projectTypeContainer.innerHTML = "";
  
//           data.forEach((professional) => {
//             professional.portfolioImages.forEach((image) => {
//               const projectCard = document.createElement("div");
//               projectCard.className = "project-card";
  
//               const img = document.createElement("img");
//               img.src = image.imageUrl;
//               img.alt = image.projectTitle;
  
//               const title = document.createElement("h4");
//               title.textContent = image.projectTitle;
  
//               const description = document.createElement("h5");
//               description.textContent = image.projectDescription;
  
//               const accountName = document.createElement("a");
//               accountName.href = "#";
//               accountName.textContent = professional.signupName;
//               accountName.setAttribute("data-id", professional.id);
//               accountName.addEventListener("click", openProfileModal);
  
//               projectCard.appendChild(img);
//               projectCard.appendChild(title);
//               projectCard.appendChild(description);
//               projectCard.appendChild(accountName);
  
//               projectTypeContainer.appendChild(projectCard);
//             });
//           });
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     }
  
//     // Function to display post job form when button is clicked on
//     function displayPostJobForm() {
//       postJobForm.style.display = "flex";
  
//       const closeJobForm = postJobForm.querySelector(".btn-close");
//       closeJobForm.addEventListener("click", () => {
//         postJobForm.style.display = "none";
//       });
//     }
//     document.querySelectorAll(".post-job-btn").forEach((button) => {button.addEventListener("click", displayPostJobForm);});
  
//   // Function to display portfolio form
//     function displayAddToPortfolioForm() {
//       const updatePortfolio = document.getElementById("add-content-portfolio");
//       updatePortfolio.style.display = "block";
  
//       const closeAddPortfolioForm = updatePortfolio.querySelector(".btn-close");
//       closeAddPortfolioForm.addEventListener("click", () => {
//         updatePortfolio.style.display = "none";
//       });
//     }
  
//     const addToPortfolioButtons = document.querySelectorAll(".add-portfolio-btn");
//     addToPortfolioButtons.forEach((button) => {button.addEventListener("click", displayAddToPortfolioForm);
//     });
  
//     // Function to display post new educational article form
//     function displayEducationalArticleForm() {
//       postEducationalArticle.style.display = "flex";
  
//       const closeArticleForm = postEducationalArticle.querySelector(".btn-close");
//       closeArticleForm.addEventListener("click", () => {
//         postEducationalArticle.style.display = "none";
//       });
//     };
//     document.querySelector(".post-article").addEventListener("click", displayEducationalArticleForm);
  
//   // Function to display available jobs
//     function displayAvailableJobs() {
//       fetch("http://localhost:3000/job-posts")
//         .then((response) => response.json())
//         .then((data) => {
//           availableJobsSection.innerHTML = "";
  
//           data.forEach((item) => {
//             let postedJobCard = document.createElement("li");
  
//             postedJobCard.innerHTML = `
//                       <div class="job-post">
//                         <div class="job-header">
//                           <h4 class="job-edit">${item.postedJobTitle}</h4>
//                           <p>${item.jobLocation}</p>
//                         </div> 
//                           <p class="job-edit">${item.postedJobDescription}</p>
//                           <h6>${item.clientName}</h6>
//                           <p>${item.clientEmail}</p>
//                           <button class="edit-job-btn" data-id="${item.id}">Edit</button>
//                           <button class="delete-job-btn" data-id="${item.id}">Delete</button>
//                       </div>
//                   `;
//             availableJobsSection.appendChild(postedJobCard);
  
//             postedJobCard.querySelector(".edit-job-btn").addEventListener("click", () => editJob(item));
//             postedJobCard.querySelector(".delete-job-btn").addEventListener("click", () => deleteJob(item.id));
//           });
//         })
//         .catch((error) => console.error("Error fetching job:", error));
//     };
  
//     // Function to edit content on available jobs
//     function editJob(item) {
//       const jobCard = document.querySelector(`[data-id="${item.id}"]`).closest(".job-post");
//       const titleElement = jobCard.querySelector("h4.job-edit");
//       const descriptionElement = jobCard.querySelector("p.job-edit");
  
//       titleElement.contentEditable = true;
//       descriptionElement.contentEditable = true;
  
//       titleElement.focus();
  
//       titleElement.addEventListener("blur", () => saveJob(item.id, titleElement.textContent, descriptionElement.textContent));
//       descriptionElement.addEventListener("blur", () => saveJob(item.id, titleElement.textContent, descriptionElement.textContent));
//   };
  
//     function saveJob(id, newTitle, newDescription) {
//       const updatedJob = {
//           postedJobTitle: newTitle,
//           postedJobDescription: newDescription
//       };
  
//       fetch(`http://localhost:3000/job-posts/${id}`, {
//           method: "PATCH",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(updatedJob)
//       })
//       .then((response) => response.json())
//       .then(() => {
//           displayAvailableJobs();
//       })
//       .catch((error) => console.error("Error updating job:", error));
//   };
  
//   // Function to delete content on available jobs
//     function deleteJob(id) {
//       fetch(`http://localhost:3000/job-posts/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(() => displayAvailableJobs())
//       .catch(error => console.error("Error deleting job:", error));
//   };
  
//   // Function to display educational content
//     function displayEducationalArticles() {
//       fetch("http://localhost:3000/educational-articles")
//         .then((response) => response.json())
//         .then((data) => {
//           const educationalArticles = document.getElementById("educational-articles");
//           educationalArticles.innerHTML = "";
  
//           data.forEach((item) => {
//             let articleCard = document.createElement("li");
  
//             articleCard.innerHTML = `
//                   <div id="article">
//                       <img src="${item.newArticleImage}" alt="" />
//                       <h4 class="editable-article">"${item.newArticleTitle}"</h4>
//                       <p class= "editable-article">"${item.newArticleDescription}"</p>
//                       <button class="update-article" data-id="${item.id}">Update</button>
//                       <button class="delete-article" data-id="${item.id}">Delete</button>
//                   </div>
//                   `;
            
//             educationalArticles.appendChild(articleCard);
  
//             articleCard.querySelector(".update-article").addEventListener("click", () => editArticle(item));
//             articleCard.querySelector(".delete-article").addEventListener("click", () => deleteArticle(item.id));
//           });
//         })
//         .catch((error) => console.error("Error fetching articles:", error));
//   };
  
//   // Function to edit educational content
//     function editArticle(item) {
//       const articleCard = document.querySelector(`[data-id="${item.id}"]`).parentNode;
//       const titleElement = articleCard.querySelector("h4");
//       const descriptionElement = articleCard.querySelector("p");
  
//       titleElement.contentEditable = true;
//       descriptionElement.contentEditable = true;
  
//       titleElement.focus();
  
//       titleElement.addEventListener("blur", () => saveArticle(item.id, titleElement.textContent, descriptionElement.textContent));
//       descriptionElement.addEventListener("blur", () => saveArticle(item.id, titleElement.textContent, descriptionElement.textContent));
//     }
  
//     function saveArticle(id, newTitle, newDescription) {
//       const updatedArticle = {
//           newArticleTitle: newTitle,
//           newArticleDescription: newDescription
//       };
  
//     fetch(`http://localhost:3000/educational-articles/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(updatedArticle)
//     })
//     .then((response) => response.json())
//     .then(() => {
//         displayEducationalArticles();
//     })
//     .catch((error) => console.error("Error updating article:", error));
//   };
  
//   // Function to delete educational content
//   function deleteArticle(articleId) {
//       fetch(`http://localhost:3000/educational-articles/${articleId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(() => displayEducationalArticles())
//       .catch(error => console.error("Error deleting article:", error));
//   };
  
//   // Function to submit post job form info to the server
//     function postJobFormSubmit(event) {
//       event.preventDefault();
  
//       let postedJobTitle = document.getElementById("posted-job-title").value;
//       let jobLocation = document.getElementById("job-location").value;
//       let postedJobDescription = document.getElementById("posted-project-description").value;
//       let clientName = document.getElementById("client-name").value;
//       let clientEmail = document.getElementById("client-email").value;
  
//       let postedJobInfo = {
//         postedJobTitle,
//         jobLocation,
//         postedJobDescription,
//         clientName,
//         clientEmail,
//       };
  
//       fetch("http://localhost:3000/job-posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(postedJobInfo),
//       })
//         .then((response) => response.json())
//         .then((data) => data);
//     }
  
//     postJobForm.addEventListener("submit", postJobFormSubmit);
  
//     // Function to submit update portfolio form
//     function updatePortfolioFormSubmit(event) {
//       event.preventDefault();
  
//       let newProjectType = document.getElementById("add-portolio-project-type").value;
//       let newProjectTitle = document.getElementById("add-portolio-project-title").value;
//       let newProjectDescription = document.getElementById("add-portolio-project-description").value;
//       let newProjectImage = document.getElementById("add-portolio-project-image").value;
  
//       let newPortfolioContent = {
//         imageUrl: newProjectImage,
//         projectTitle: newProjectTitle,
//         projectDescription: newProjectDescription,
//       };
  
//       fetch(`http://localhost:3000/professionals/${professionalId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           data.portfolioImages.push(newPortfolioContent);
  
//           return fetch(`http://localhost:3000/professionals/${professionalId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//           });
//         })
//         .then((response) => response.json())
//         .then((updatedData) => {
//           let newPortfolioItems = updatedData.portfolioImages
//             .map(
//               (image) => `
//               <div class="portfolio-item">
//                   <img src="${image.imageUrl}" alt="${image.projectTitle}">
//                   <h5>${image.projectTitle}</h5>
//                   <p>${image.projectDescription}</p>
//               </div>`
//             )
//             .join("");
  
//           findProfessionalForm.style.display = "block";
//           professionalModalOpen.innerHTML = `
//                 <button type="button" class="btn-close" aria-label="Close"></button>
//                 <div id="profile-part1">
//                   <img src="${updatedData.profileImage}" alt="${updatedData.professionalName}">
//                   <div class="profile-text">
//                     <h4>${updatedData.professionalName}</h4>
//                     <h5>${updatedData.profession}</h5>
//                     <p>${updatedData.professionalServices}</p>
//                   </div>
//                 </div>
//                 <div id="profile-part2">
//                   <div class="portfolio">${newPortfolioItems}</div>
//                 </div>
//               `;
//           const closeModalBtn = professionalModalOpen.querySelector(".btn-close");
//           closeModalBtn
//             .addEventListener("click", () => {
//               professionalModalOpen.style.display = "none";
//             })
//             .catch((error) =>
//               console.error("Error fetching professional profile:", error)
//             );
//         });
//     }
//     updatePortfolio.addEventListener("submit", updatePortfolioFormSubmit);
  
//     // Function to submit new educational content
//     function educationalArticleFormSubmit(event) {
//       event.preventDefault();
  
//       let newArticleTitle = document.getElementById("post-article-title").value;
//       let newArticleImage = document.getElementById("post-article-image").value;
//       let newArticleDescription = document.getElementById("post-article-description").value;
//       let newArticleContent = document.getElementById("post-article-content").value;
      
  
//       let postEducationalArticle = {
//         newArticleImage,
//         newArticleTitle,
//         newArticleDescription,
//         newArticleContent,
//       };
  
//       fetch("http://localhost:3000/educational-articles", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(postEducationalArticle),
//       })
//         .then((response) => response.json())
//         .then((data) => data);
  
//         educationalArticles.appendChild(editArticleBtn);
//         educationalArticles.appendChild(deleteArticleBtn);
//     }
//     postEducationalArticle.addEventListener("submit", educationalArticleFormSubmit);
  
//     // Function for the chat feature
//     const chatUsers = [
//       { id: 1, name: 'User 1', messages: [] },
//       { id: 2, name: 'User 2', messages: [] },
//       { id: 3, name: 'User 3', messages: [] }
//     ];
  
//     const userList = document.getElementById('user-list');
//     const chatModal = document.getElementById('chat-modal');
//     const closeBtn = document.querySelector('.close-btn');
//     const chatHeader = document.getElementById('chat-header');
//     const messageHistory = document.getElementById('message-history');
//     const messageForm = document.getElementById('message-form');
//     const messageInput = document.getElementById('message-input');
  
//     chatUsers.forEach(user => {
//       const userItem = document.createElement('li');
//       userItem.textContent = user.name;
//       userItem.addEventListener('click', () => openChat(user));
//       userList.appendChild(userItem);
//     });
  
//     function openChat(user) {
//         chatHeader.textContent = `Chat with ${user.name}`;
//         messageHistory.innerHTML = '';
//         user.messages.forEach(msg => {
//             const msgDiv = document.createElement('div');
//             msgDiv.textContent = msg;
//             messageHistory.appendChild(msgDiv);
//         });
//         chatModal.style.display = 'block';
//         messageForm.onsubmit = (event) => {
//             event.preventDefault();
//             const message = messageInput.value;
//             user.messages.push(message);
//             const msgDiv = document.createElement('div');
//             msgDiv.textContent = message;
//             messageHistory.appendChild(msgDiv);
//             messageInput.value = '';
//         };
//     }
  
//     closeBtn.onclick = () => {
//         chatModal.style.display = 'none';
//     };
  
//     window.onclick = (event) => {
//         if (event.target === chatModal) {
//             chatModal.style.display = 'none';
//         }
//     };
  
//     // Functions to enable filtering of various items on the website
//     const searchProfessional = () => {
//       const professionalSearchBox = document.getElementById("search-professionals").value.toUpperCase();
//       professionalsSection;
//       const professionalsFilterCard = document.querySelectorAll(".professional-card");
  
//       for(var i=0; i < professionalsFilterCard.length; i++){
//           let match = professionalsFilterCard[i].getElementsByTagName("h5")[0];
  
//           if(match){
//             let textValue = match.textContent || match.innerHTML;
  
//             if(textValue.toUpperCase().indexOf(professionalSearchBox) > -1) {
//               professionalsFilterCard[i].style.display = "";
//             } else {
//               professionalsFilterCard[i].style.display = "none";
//             }
//           }
//       }
//     };
//     document.getElementById("search-professionals").addEventListener("keyup", searchProfessional);
  
//     const searchProjectType = () => {
//       const projectTypeSearchBox = document.getElementById("search-project-type").value.toUpperCase();
//       const projectTypeContainer = document.getElementById("project-type-results");
//       const projectFilterCard = document.querySelectorAll(".project-card");
  
//       for(var i=0; i < projectFilterCard.length; i++){
//           let match = projectFilterCard[i].getElementsByTagName("h4")[0];
  
//           if(match){
//             let textValue = match.textContent || match.innerHTML;
  
//             if(textValue.toUpperCase().indexOf(projectTypeSearchBox) > -1) {
//               projectFilterCard[i].style.display = "";
//             } else {
//               projectFilterCard[i].style.display = "none";
//             }
//           }
//       }
//     };
//     document.getElementById("search-project-type").addEventListener("keyup", searchProjectType);
    
//     const searchPostedJob = () => {
//       const jobSearchBox = document.getElementById("search-job").value.toUpperCase();
//       const postedJobContainer = document.getElementById("posted-jobs-available");
//       const jobFilterCard = document.querySelectorAll(".job-post");
  
//       for(var i=0; i < jobFilterCard.length; i++){
//           let match = jobFilterCard[i].getElementsByTagName("h4")[0];
  
//           if(match){
//             let textValue = match.textContent || match.innerHTML;
  
//             if(textValue.toUpperCase().indexOf(jobSearchBox) > -1) {
//               jobFilterCard[i].style.display = "";
//             } else {
//               jobFilterCard[i].style.display = "none";
//             }
//           }
//       }
//     };
//     document.getElementById("search-job").addEventListener("keyup", searchPostedJob);
  
//     displayProfessionals();
  
//     fetchProfessionalProfile();
  
//     displayProjectTypes();
  
//     displayAvailableJobs();
  
//     displayEducationalArticles();
//   });
  