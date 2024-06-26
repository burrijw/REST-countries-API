import { Link } from "react-router-dom";

function HeaderPanel() {
    return (
        <div className="flex justify-between items-center p-4 py-8 shadow-sm bg-white">
            <p className="font-bold text-lg text-balance text-light-theme-text md:ml-10">
                <Link to='/'>Where in the world?</Link>
            </p>

            <button
                className="flex items-center font-semibold ml-2 md:mr-10"
                aria-pressed="false"
                >
                <svg className="w-6 h-6 mx-3" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>

                Dark Mode
            </button>
        </div>

    );
}

export default HeaderPanel