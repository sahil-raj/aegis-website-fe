import GeneralDetails from "../components/GeneralDetails";

const Reelity = () => {
  return (
    <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        REELITY SHOW
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Social Media Handle</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
            placeholder="@username"
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="consent"
            className="w-4 h-4 rounded bg-black/50 border-white/30"
            required
          />
          <label htmlFor="consent" className="text-white">
            I consent to event branding and usage of my content on social media
          </label>
        </div>
      </div>
      <button type="submit" className="w-full neon-button py-3">
        Register for REELITY SHOW
      </button>
    </form>
  );
};

export default Reelity;
