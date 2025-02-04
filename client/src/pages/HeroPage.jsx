const HeroPage = () => {
    return (
        <div
            style={{ height: "calc(100vh - 64px)" }}
            className="relative flex flex-col items-center justify-center h-screen  text-white"
        >
            {/* Logo */}
            {/* <div className="absolute top-5 left-5 text-2xl font-bold">✖</div> */}

            {/* Main Content */}
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I'm{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-orange-500">
                        Arbaz
                    </span>
                    ,
                    <br />
                   another{" "}
                    <i className="italic underline decoration-orange-500">
                        frontend
                    </i>{" "}
                    developer.
                </h1>

                {/* Circle and Arrow */}
                <div className="flex flex-col items-center mt-10">
                    <div className="border-2 border-white rounded-full px-4 py-2 text-sm uppercase tracking-wider">
                        Frontend • Full-Stack-devloper 
                    </div>
                    <div className="mt-4 text-2xl animate-bounce">⬇</div>
                </div>
            </div>

            {/* Contact Button */}
            {/* <button className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                Contact
            </button> */}
        </div>
    );
};

export default HeroPage;
