export default function Home() {
  return (
    <main className="bg-[#fdf6ef] text-[#3b2f2f] min-h-screen font-sans">
      <section
        className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/wheatfield_sunset.jpg')" }}
      >
        <div className="bg-black/40 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">The Farm California</h1>
          <p className="text-xl mb-6">Reviving local food, one community at a time.</p>
          <button className="bg-white text-[#3b2f2f] px-6 py-3 rounded hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}
