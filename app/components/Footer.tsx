import Link from "next/link";
import { FaGithub, FaSteam, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full text-neutral-500 text-sm py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 TrackZone by HSKdev. All rights reserved.</p>
          <p>TrackZone is not affiliated with Valve, Faceit or any platform.</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center space-x-4">
            <span>Follow Me:</span>
            <Link
              href="https://steamcommunity.com/id/__hsk/"
              target="_blank"
              className="hover:text-slate-200 transition duration-200"
            >
              <FaSteam className="text-lg" />
            </Link>
            <Link
              href="https://x.com/hskdaking"
              target="_blank"
              className="hover:text-slate-200 transition duration-200"
            >
              <FaTwitter className="text-lg" />
            </Link>
            <Link
              href="https://github.com/karolhas"
              target="_blank"
              className="hover:text-slate-200 transition duration-200"
            >
              <FaGithub className="text-lg" />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-slate-200 transition duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-slate-200 transition duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
