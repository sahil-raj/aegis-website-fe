import GeneralDetails from "../components/GeneralDetails";

const HackANote = () => {
  return (
    <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        HACK-A-NOTE
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Type of Performance</label>
          <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white ">
            <option value="singing">Solo Singing</option>
            <option value="instrumental">Instrumental</option>
          </select>
        </div>
        <div>
          <label className="block text-white mb-2">
            Instrument Name (if applicable)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Genre of Music</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">
            Performance Duration (minutes)
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
          />
        </div>
      </div>
      <button type="submit" className="w-full neon-button py-3">
        Register Performance
      </button>
    </form>
  );
};

export default HackANote;
