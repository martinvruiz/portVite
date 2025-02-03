


const ProjectContainer = () => {   
    

    
    const projects = [
        {
            id: 1,
            title: "Financer",
            description: "App para gestionar ingresos y gastos.",
            image: "/images/projects/Financer.png",
            link: "https://financermvr.vercel.app/"
          },
          {
            id: 2,
            title: "Notebook",
            description: "Registra tus notas y proximos eventos.",
            image: "/images/projects/Notebook.png",
            link: "https://notebookmvr.vercel.app/"
          }
    ]

    
    return (
        <div className="min-h-screen p-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
            <h3 className="text-xl text-black font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Ver más</a>
          </div>
        ))}
      </div>
    </div>
    )
}


export default ProjectContainer;