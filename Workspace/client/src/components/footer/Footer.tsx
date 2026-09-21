import { Briefcase } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mx-4 mb-4 flex justify-between items-center text-gray-500 text-sm bg-white rounded-2xl shadow-sm py-6 px-6 sm:px-10 border border-gray-100">
      <div className="text-left">
        &copy; {new Date().getFullYear()} Lucas (Lahiru) H. Released under the{" "}
        <a
          href="https://github.com/hvlhasanka/todo_app-web_app/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-semibold hover:text-gray-700 transition-colors"
        >
          MIT License
        </a>
        .
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/hvlhasanka/todo_app-web_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold transition-all px-5 py-3 -my-2 rounded-full hover:bg-gray-100 hover:text-gray-900"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Github</span>
        </a>
        <a
          href="https://lucaslhhdev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold transition-all px-5 py-3 -my-2 rounded-full hover:bg-gray-100 hover:text-gray-900"
        >
          <Briefcase className="w-4 h-4" />
          <span>Portfolio</span>
        </a>
      </div>
    </footer>
  );
}
