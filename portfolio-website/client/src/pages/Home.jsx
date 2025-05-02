// src/pages/Home.jsx
export default function Home() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 dark:text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Fredrick Lani</h2>
        <p className="text-xl md:text-2xl max-w-xl mb-6">Frontend Developer · Animator · Photographer · Video Editor</p>
        <a href="#projects" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl text-lg transition">
          View My Work
        </a>
      </section>
    );
  }
  