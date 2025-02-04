import GeneralDetails from "../components/GeneralDetails";

const Escape = () => {
  return (
    <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        ESCAPE THE ENIGMA
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Team Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
          />
        </div>
      </div>
      <button type="submit" className="w-full neon-button py-3">
        Enter the Challenge
      </button>
    </form>
  );
};

export default Escape;
