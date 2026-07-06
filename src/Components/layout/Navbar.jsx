import Logo from "../icons/Logo";
import ReviewIcon from "../icons/ReviewIcon";
import LearnWordsIcon from "../icons/LearnWord";
import PlusIcon from "../icons/PlusIcon";

function Navbar() {
    return (
        // *******Navbar********
        <nav className="flex justify-between px-3 py-3 border border-gray-200">
            {/* left side */}
            {/* logo */}
            <div className="flex gap-3">
                <div className="flex items-center gap-2 font-semibold">
                    <Logo />
                    <span>Read Smart</span>
                    <div className="ml-2 h-6 w-px bg-gray-200"></div>
                </div>

                {/* add pdf */}
                <div className="flex items-center gap-1 px-2 py-2 text-sm font-semibold hover:bg-gray-100 rounded-xl cursor-pointer">
                    <PlusIcon />
                    <span>Add PDF</span>
                </div>
            </div>

            {/* right side */}
            {/* review and learnword */}

            <div className="flex gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-100 py-0.5 px-2 rounded-lg shadow-md cursor-pointer">
                    <ReviewIcon />
                    <span>Review</span>
                </button>

                <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-100 py-1 px-2 rounded-lg shadow-md cursor-pointer">
                    <LearnWordsIcon />
                    <span>Learn Words</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;