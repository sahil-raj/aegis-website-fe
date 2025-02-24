import { useState, useRef } from "react";
import GeneralDetails from "../components/GeneralDetails";
import useGlitchSubmit from "@/hooks/useGlitchcraftSubmit";
import { toast } from "react-hot-toast";

const Bgmi = () => {
  const { submitForm } = useGlitchSubmit();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const response = await submitForm("BGMI_BATTLE", formData);

    if (response.success) {
      formRef.current?.reset();
      toast.success(
        response.message +
          "\n You'll be redirected to join the official whatsapp group"
      );
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/F4T7WdnITBx85Wm3WmQ1Z7");
      }, 2000);
    } else {
      toast.error("Error submitting form: " + "Potential duplicate entry");
    }

    setLoading(false);
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid"
    >
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        BGMI BATTLE BLITZ
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Entry Type</label>
          <select
            name="Entry_Type"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
            required
          >
            <option value="squad">Squad</option>
          </select>
        </div>

        <>
          <div>
            <label className="block text-white mb-2">Team Name</label>
            <input
              name="Team_Name"
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
              required
            />
          </div>
          <div className="space-y-4">
            {/* Team Leader */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">
                  Team Leader IGN (In Game Name)
                </label>
                <input
                  name="Team_Leader_IGN"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">BGMI Player ID</label>
                <input
                  name="BGMI_Player_ID"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">Member 2 IGN</label>
                <input
                  name="IGN_2"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">BGMI Player ID</label>
                <input
                  name="BGMI_ID_2"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">Member 3 IGN</label>
                <input
                  name="IGN_3"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">BGMI Player ID</label>
                <input
                  name="BGMI_ID_3"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>

            {/* Member 4 */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">Member 4 IGN</label>
                <input
                  name="IGN_4"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-white mb-2">BGMI Player ID</label>
                <input
                  name="BGMI_ID_4"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>
          </div>
        </>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="rules"
            className="w-4 h-4 rounded bg-black/50 border-white/30"
            required
          />
          <label htmlFor="rules" className="text-white">
            I accept the gaming rules and fair play agreement
          </label>
        </div>
      </div>
      <button type="submit" className="w-full neon-button py-3">
        {loading ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default Bgmi;
