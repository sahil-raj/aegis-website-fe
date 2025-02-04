const GeneralDetails = () => (
  <div className="space-y-4 border-b border-white/30 pb-6 mb-6">
    <h3 className="text-xl font-semibold text-white mb-4">General Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-white mb-2">Full Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Email ID</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Phone Number (WhatsApp)</label>
        <input
          type="tel"
          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Department</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">USN</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Year of Study</label>
        <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white">
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>
    </div>
  </div>
);

export default GeneralDetails;
