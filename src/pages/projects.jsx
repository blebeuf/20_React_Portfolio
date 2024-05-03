import projectOne from "../assets/portfolio/Home_Movie_1.gif"
import projectTwo from "../assets/portfolio/weather_2.png"
import projectThree from "../assets/portfolio/task_3.png"
import projectFour from "../assets/portfolio/medical_grp_4.png"
import projectFive from "../assets/portfolio/README.md_5.gif"
import projectSix from "../assets/portfolio/trivl_6.jpg"
import projectSeven from "../assets/portfolio/Sound_design_7.png"
import projectEight from "../assets/portfolio/SVG_logo_maker_8.gif"

import "./projects.css";

export default function Projects() {
    // Example data array for projects, you can replace or enhance this with actual project data
    const projects = [
        { id: 1, title: "Home Movie", description: "Video game utilizing 3D design, mutlimedia, primarily comprised of C+", imageUrl: projectOne, url: "https://bryan-lebeuf.itch.io/home-movie", github: "https://github.com/blebeuf/home_movie"},
        { id: 2, title: "Weather API", description: "Weather API dashboard project", imageUrl: projectTwo, url: "https://github.com/blebeuf/weather_api_project", github: "https://github.com/blebeuf/weather_api_project"},
        { id: 3, title: "Team Task Board", description: "The team task board is used to support collaborative workflow, while utilizing expiration dates", imageUrl: projectThree, url: "https://github.com/blebeuf/Team_task_board", github: "https://github.com/blebeuf/Team_task_board" },
        { id: 4, title: "Accessible HTML", description: "Description for Project Four.", imageUrl: projectFour, url: "https://github.com/blebeuf/01-horiseon-accesibilty", github: "https://github.com/blebeuf/01-horiseon-accesibilty" },
        { id: 5, title: "Readme.md Generator", description: "README.md generating that uses node.js to populate a README.md", imageUrl: projectFive, url: "https://github.com/blebeuf/09_README_generator", github: "https://github.com/blebeuf/09_README_generator"},
        { id: 6, title: "Trivl", description: "Daily word game", imageUrl: projectSix, url: "https://github.com/njohnson2897/trivl-project", github: "https://github.com/njohnson2897/trivl-project"},
        { id: 7, title: "Interactive Sound Design", description: "Sound and music compostion", imageUrl: projectSeven, url: "https://soundcloud.com/bryan-lebeuf" },
        { id: 8, title: "SVG Logo Maker", description: "Object-oriented Programming Challenge: SVG Logo Maker", imageUrl: projectEight, url: "https://github.com/blebeuf/10_SVG-Logo-Maker", github: "https://github.com/blebeuf/10_SVG-Logo-Maker"}
    ];

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.imageUrl} alt={project.title} />
                    <div className="overlay">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}