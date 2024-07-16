function Widget() {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-4">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">playdaily</h1>
            <button className="text-zinc-800 dark:text-zinc-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </header>
          <section className="mb-4">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Current theme</h2>
            <div className="relative">
              <img src="https://placehold.co/600x200" alt="Current theme" className="w-full rounded-lg mb-2"/>
              <div className="absolute bottom-2 right-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded">June 5</div>
            </div>
            <div className="flex justify-between">
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">19</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">20</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">21</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">22</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">23</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">24</button>
              <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded">25</button>
            </div>
          </section>
          <section className="mb-4">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Today's Games</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-2">
                <img src="https://placehold.co/150x150" alt="Game 1" className="w-full rounded mb-2" />
                <p className="text-zinc-800 dark:text-zinc-200 text-center">Play fill in the blanks</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-2">
                <img src="https://placehold.co/150x150" alt="Game 2" className="w-full rounded mb-2" />
                <p className="text-zinc-800 dark:text-zinc-200 text-center">Play fill in the blanks</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-2">
                <img src="https://placehold.co/150x150" alt="Game 3" className="w-full rounded mb-2" />
                <p className="text-zinc-800 dark:text-zinc-200 text-center">Play fill in the blanks</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-2">
                <img src="https://placehold.co/150x150" alt="Game 4" className="w-full rounded mb-2" />
                <p className="text-zinc-800 dark:text-zinc-200 text-center">Play fill in the blanks</p>
              </div>
            </div>
          </section>
          <section className="mb-4 text-center">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">New Games live in</h2>
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">24:12:44</p>
          </section>
          <section className="mb-4 text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">Refer and Earn Rewards</button>
          </section>
          <footer className="flex justify-around bg-zinc-200 dark:bg-zinc-800 p-2 rounded-lg">
            <button className="text-zinc-800 dark:text-zinc-200 flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"></path>
              </svg>
              Home
            </button>
            <button className="text-zinc-800 dark:text-zinc-200 flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M21 5h-4M19 3v4M5 21v-4M3 19h4M21 19h-4M19 21v-4M12 7v10M9 10l3-3 3 3"></path>
              </svg>
              Scores
            </button>
            <button className="text-zinc-800 dark:text-zinc-200 flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
              </svg>
              Collection
            </button>
            <button className="text-zinc-800 dark:text-zinc-200 flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M21 5h-4M19 3v4M5 21v-4M3 19h4M21 19h-4M19 21v-4M12 7v10M9 10l3-3 3 3"></path>
              </svg>
              Club
            </button>
          </footer>
        </div>
    )
}

export default Widget;