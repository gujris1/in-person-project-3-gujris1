// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Gujri Singh",
        title: "UX Engineer",
        email: "gujri.singh@berkeley.edu",
        location: "Berkeley, CA",
        bio: "Current graduate student at UC Berkeley passionate about the intersection of UX and engineering."
    },
    
    // Skills as an array
    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals",
        "Prototyping",
        "Usability Testing",
        "Python",
        "R"
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Evaluating Auto-Generated Subject Tags",
            description: "Evaluated an NLP-based auto-classification system for a document management platform, comparing subject tags generated for technical reports with domain terminology to identify gaps affecting search and discovery.",
            technologies: ["Information Architecture", "UX Research", "Wireframing"], // Array of technologies used
            completionDate: "2026-08-07",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Diabetes Social Media Sentiment Analysis", 
            description: "Analyzed diabetes-related social media posts using Python and NLP techniques to identify sentiment and patterns in patient experiences with diabetes technologies and care.",
            technologies: ["Python", "VADER", "NLP"],
            completionDate: "2026-05-01",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);
console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);

// Create summary statistics
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}