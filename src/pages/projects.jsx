export default function Projects() {
    // Example data array for projects, you can replace or enhance this with actual project data
    const projects = [
        { id: 1, title: "Project One", description: "Description for Project One.", imageUrl: "https://via.placeholder.com/150" },
        { id: 2, title: "Project Two", description: "Description for Project Two.", imageUrl: "https://via.placeholder.com/150" },
        { id: 3, title: "Project Three", description: "Description for Project Three.", imageUrl: "https://via.placeholder.com/150" },
        { id: 4, title: "Project Four", description: "Description for Project Four.", imageUrl: "https://via.placeholder.com/150" },
        { id: 5, title: "Project Five", description: "Description for Project Five.", imageUrl: "https://via.placeholder.com/150" },
        { id: 6, title: "Project Six", description: "Description for Project Six.", imageUrl: "https://via.placeholder.com/150" },
        { id: 7, title: "Project Seven", description: "Description for Project Seven.", imageUrl: "https://via.placeholder.com/150" },
        { id: 8, title: "Project Eight", description: "Description for Project Eight.", imageUrl: "https://via.placeholder.com/150" }
    ];

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
