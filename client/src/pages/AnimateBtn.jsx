const AnimatedBorderButton = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <button className="relative px-6 py-3 text-white font-semibold rounded-lg overflow-hidden bg-transparent">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-border-gradient rounded-lg blur-md"></span>
                <span className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-border"></span>
                <span className="relative z-10">Click Me</span>
            </button>
        </div>
    );
};

export default AnimatedBorderButton;
