import aboutImage from "../assets/about.png";

const AboutPage = () => {
    return (
        <div className="text-white px-6 sm:px-10 py-8 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-10 w-full max-w-4xl">
                <img
                    className="rounded-xl w-full sm:w-1/2 h-[200px] sm:h-[300px] object-cover"
                    src={aboutImage}
                    alt="Profile"
                />

                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start space-y-5">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                        <i className="italic underline decoration-orange-500">
                            About
                        </i>
                    </h1>
                    <p className="text-center sm:text-left">
                        Mohd Arbaz | Frontend Engineer | Pursuing BCA (2nd Year)
                        in Computer Application. Skilled in HTML, CSS,
                        JavaScript, and React. Passionate about creating
                        responsive, user-friendly web interfaces. Constantly
                        learning and exploring new technologies to enhance my
                        expertise. Eager to contribute to innovative projects
                        and grow in the tech industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
