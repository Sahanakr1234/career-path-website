/* ================= ROADMAP DATA ================= */
const roadmapData = {
  "Frontend Developer": {
    Beginner: ["web basics","HTML", "CSS", "JavaScript","Tools"],
    Intermediate: ["Advanced Css","javascript(core)","javascript advanced","library/framework","ResponsiveDesign", "DOM", "Git"],
    Advanced: ["React","typescript","next.js","UI libraries" ,"Performance Optimization", "Testing"]
  },

  "Backend Developer": {
    Beginner: ["Backend basics","programming language(choose one)","node.js","Express.js","Database basics"],
    Intermediate: ["Advanced Express.js","File handling","API Testing","REST API", "Authentication"],
    Advanced: ["Advanced architecture"," Advanced Databases", "Cloud Deployment","DevOps basic"]
  },

  "Full Stack Developer": {
    Beginner: ["HTML", "CSS", "JavaScript"],
    Intermediate: ["frontend + Backend", "Databases"],
    Advanced: ["Advanced frontend + Advanced backend","System Design", "DevOps"]
  },

  "Cyber Security": {
    Beginner: ["Computer and internet basics","Networking", "Linux","Security basics","Ethical hacking basics","Tool(intro)"],
    Intermediate: ["Advanced networking","web security","Ethical hacking tools","operating system security","scripting","Cryptography basics","vulnerability assessment"],
    Advanced: ["Penetration Testing", "Security Automation","Advanced web and API security","cloud security","Malware analysis"]
  },

  "Cloud Engineer": {
    Beginner: ["Computer and OS basics","Networking ","cloud fundamentals","AWS core services","Security"],
    Intermediate: ["Computer storage(advanced)","Networking","Database","DevOps"],
    Advanced: ["Cloud Architecture", "Cost Optimization"]
  },

    "UI/UX Designer": {
      Beginner: ["Design Principles", "Color Theory"],
      Intermediate: ["Wireframing", "Figma"],
      Advanced: ["User Research", "Design Systems"]
    },

    "Graphic Designer": {
      Beginner: ["Photoshop", "Illustrator"],
      Intermediate: ["Brand Design", "Typography"],
      Advanced: ["Motion Graphics", "Creative Direction"]
    },

    "Product Designer": {
      Beginner: ["UX Basics", "Sketching"],
      Intermediate: ["Prototyping", "Usability Testing"],
      Advanced: ["Product Strategy", "Design Leadership"]
    },

    "Digital Marketer": {
      Beginner: ["SEO Basics", "Social Media"],
      Intermediate: ["Google Ads", "Content Marketing"],
      Advanced: ["Marketing Analytics", "Growth Strategy"]
    },

    "Business Analyst": {
      Beginner: ["Excel", "Business Basics"],
      Intermediate: ["Power BI", "Data Analysis"],
      Advanced: ["Business Strategy", "Decision Making"]
    },

    "Project Manager": {
      Beginner: ["Planning", "Communication"],
      Intermediate: ["Agile", "Scrum"],
      Advanced: ["Risk Management", "Leadership"]
    },

    "Data Analyst": {
      Beginner: ["Excel", "SQL"],
      Intermediate: ["Python", "Data Visualization"],
      Advanced: ["Advanced Analytics", "Business Insights"]
    },

    "Data Scientist": {
      Beginner: ["Statistics", "Python"],
      Intermediate: ["Machine Learning", "Data Cleaning"],
      Advanced: ["Model Optimization", "AI Deployment"]
    },

    "Research Scientist": {
      Beginner: ["Research Methods", "Documentation"],
      Intermediate: ["Data Analysis", "Publications"],
      Advanced: ["Innovation", "Advanced Research"]
    },

    "Nutritionist": {
      Beginner: ["Nutrition Basics", "Diet Planning"],
      Intermediate: ["Health Assessment", "Meal Programs"],
      Advanced: ["Clinical Nutrition", "Consultation"]
    },

    "Physiotherapist": {
      Beginner: ["Anatomy", "Exercise Basics"],
      Intermediate: ["Rehabilitation", "Therapy Techniques"],
      Advanced: ["Sports Rehab", "Advanced Therapy"]
    },

    "Public Health Analyst": {
      Beginner: ["Health Awareness", "Statistics"],
      Intermediate: ["Epidemiology", "Policy Analysis"],
      Advanced: ["Health Strategy", "Program Management"]
    }

};

/* ================= LOGIN ================= */
function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }
  loadCareers();
  showPage("skillPage");
}

/* ================= LOAD CAREERS ================= */
function loadCareers() {
  const select = document.getElementById("careerSelect");
  select.innerHTML = `<option value="">-- Select Career --</option>`;

  Object.keys(roadmapData).forEach(career => {
    const option = document.createElement("option");
    option.value = career;
    option.textContent = career;
    select.appendChild(option);
  });
}

/* ================= SHOW ROADMAP ================= */
function showRoadmap() {
  const career = document.getElementById("careerSelect").value;
  if (!career) {
    alert("Please select a career");
    return;
  }

  const data = roadmapData[career];

  document.getElementById("resultText").innerHTML = `
    <h3>Beginner</h3>
    <ul>${data.Beginner.map(s => `<li>${s}</li>`).join("")}</ul>

    <h3>Intermediate</h3>
    <ul>${data.Intermediate.map(s => `<li>${s}</li>`).join("")}</ul>

    <h3>Advanced</h3>
    <ul>${data.Advanced.map(s => `<li>${s}</li>`).join("")}</ul>
  `;

  document.getElementById("linkedinLink").href =
    "https://www.linkedin.com/jobs/search/?keywords=" +
    encodeURIComponent(career);

  showPage("resultPage");
}

/* ================= NAVIGATION ================= */
function goBack() {
  showPage("skillPage");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p =>
    p.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}
