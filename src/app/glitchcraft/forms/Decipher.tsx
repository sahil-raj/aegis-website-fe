import { useState } from "react";
import GeneralDetails from "../components/GeneralDetails";
import useGlitchSubmit from "@/hooks/useGlitchcraftSubmit";

const Decipher = () => {
  const { submitForm } = useGlitchSubmit();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const response = await submitForm("DECIPHER_BLITZ", formData);
    alert(response.message);

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid"
    >
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        DECIPHER BLITZ
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Team Name</label>
          <input
            name="Team_Name"
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
          />
        </div>
        {/* <div>
            <label className="block text-white mb-2">
              Number of Team Members
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
              required
            />
          </div> */}
      </div>
      <button type="submit" className="w-full neon-button py-3">
        {loading ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default Decipher;
