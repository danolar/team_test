import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono bg-black text-green-400 min-h-screen p-4">
      {/* Retro Computer Window Header */}
      <div className="bg-gray-800 border-2 border-gray-600 mb-6">
        <div className="bg-gray-700 px-4 py-2 border-b-2 border-gray-600 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 border border-gray-500"></div>
            <div className="w-3 h-3 bg-yellow-500 border border-gray-500"></div>
            <div className="w-3 h-3 bg-green-500 border border-gray-500"></div>
          </div>
          <div className="text-green-400 text-sm font-bold">CRUCIAL_TERMINAL.exe</div>
          <div className="w-4 h-4"></div>
        </div>
        
        {/* Main Content Area */}
        <div className="p-6 bg-gray-900 border-2 border-gray-600">
          <div className="text-center mb-8">
            <Image
              className="filter brightness-0 invert"
              src="/logo_crucial.svg"
              alt="Crucial Logo"
              width={200}
              height={42}
              priority
            />
          </div>

          {/* Retro Terminal Text */}
          <div className="space-y-4 mb-8">
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> Welcome to Crucial Terminal v1.0
            </div>
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> System initialized successfully
            </div>
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> Ready for user input...
            </div>
          </div>

          {/* Command List */}
          <div className="bg-black border border-green-400 p-4 mb-8">
            <div className="text-green-400 font-bold mb-3">Available Commands:</div>
            <ol className="font-mono text-sm text-green-400 space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">1.</span>
                <span>Edit source code at </span>
                <code className="bg-gray-800 text-yellow-400 px-2 py-1 border border-green-400 ml-2">
                  src/app/page.tsx
                </code>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">2.</span>
                <span>Save changes and reload</span>
              </li>
            </ol>
          </div>

          {/* Action Buttons - Square Borders */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="border-2 border-green-400 bg-black text-green-400 transition-all flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black font-mono text-sm h-12 px-6 w-full sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
              className="filter brightness-0 invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
              [DEPLOY_NOW]
            </a>
            <a
              className="border-2 border-blue-400 bg-black text-blue-400 transition-all flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-black font-mono text-sm h-12 px-6 w-full sm:w-auto"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              [READ_DOCS]
            </a>
          </div>
        </div>
      </div>

      {/* Footer with Retro Style */}
      <div className="bg-gray-800 border-2 border-gray-600">
        <div className="bg-gray-700 px-4 py-2 border-b-2 border-gray-600">
          <div className="text-green-400 text-sm font-bold">SYSTEM_NAVIGATION</div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 text-blue-400 hover:text-green-400 transition-colors font-mono text-sm border border-transparent hover:border-blue-400 px-2 py-1"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
                className="filter brightness-0 invert"
              />
              [LEARN]
            </a>
            <a
              className="flex items-center gap-2 text-blue-400 hover:text-green-400 transition-colors font-mono text-sm border border-transparent hover:border-blue-400 px-2 py-1"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
                className="filter brightness-0 invert"
              />
              [EXAMPLES]
            </a>
            <a
              className="flex items-center gap-2 text-blue-400 hover:text-green-400 transition-colors font-mono text-sm border border-transparent hover:border-blue-400 px-2 py-1"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
                className="filter brightness-0 invert"
              />
              [NEXTJS.ORG] →
            </a>
          </div>
        </div>
      </div>

      {/* Terminal Cursor */}
      <div className="mt-4 text-green-400 font-mono text-lg animate-pulse">
        <span className="text-yellow-400">$</span> <span className="bg-green-400 text-black">_</span>
      </div>
    </div>
  );
}
