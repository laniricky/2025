import episodes from '../data/episodes';
import { Link } from 'react-router-dom';

function Home() {
  const latestEpisode = episodes[0];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 dark:text-yellow-300 mb-4">
          Welcome to Mtaanimation
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
          Home of thrilling animated storytelling.
        </p>
      </section>

      {/* Featured Video */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Featured Episode</h2>
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg"
            src={latestEpisode.videoUrl}
            title={latestEpisode.title}
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-semibold">
          {latestEpisode.title}
        </p>
      </section>

      {/* Recent Episodes */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Recent Episodes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <Link to={`/episodes/${ep.id}`} key={ep.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img src={ep.thumbnail} alt={ep.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-yellow-600">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ep.description}
                  </p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-500">
                    {ep.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
