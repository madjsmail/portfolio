import { HoverEffect } from "../ui/card-hover-effect";

export default  function ServicesComponent() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl text-center font-bold uppercase">Services I provide</h1>
      <HoverEffect items={majorServices} />
    </div>
  );
}
export const majorServices = [
    {
      title: "Front-End Development",
      description: 
        "Creating visually appealing and user-friendly interfaces using HTML, CSS, Tailwind, Bootstrap, React, angular  and Vue.js to ensure seamless user experiences.",
      link: "https://yourportfolio.com/services/front-end-development",
    },
    {
      title: "Back-End Development",
      description: 
        "Building robust and scalable server-side applications using Express.js, Nest.js, Laravel, and Node.js to handle complex business logic and data processing.",
      link: "https://yourportfolio.com/services/back-end-development",
    },
    {
      title: "Document Management Systems",
      description: 
        "Designing and developing efficient systems for managing and storing documents securely, ensuring easy access and retrieval, and enhancing overall organizational productivity.",
      link: "https://yourportfolio.com/services/document-management-systems",
    },
    {
      title: "Performance Optimization",
      description: 
        "Enhancing the performance of web applications through code optimization, efficient database queries, and implementation of best practices to deliver fast and reliable solutions.",
      link: "https://yourportfolio.com/services/performance-optimization",
    },
    {
      title: "Comprehensive Testing",
      description: 
        "Conducting thorough testing, including unit tests, to ensure the functionality, reliability, and quality of web applications, identifying and resolving issues promptly.",
      link: "https://yourportfolio.com/services/comprehensive-testing",
    },
    {
      title: "Collaboration and Teamwork",
      description: 
        "Working closely with designers, QA teams, and clients to deliver high-quality projects that meet specific requirements, ensuring clear communication and efficient collaboration.",
      link: "https://yourportfolio.com/services/collaboration-teamwork",
    },
  ];