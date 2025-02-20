import { useState, useEffect, useRef } from "react";
import GeneralDetails from "../components/GeneralDetails";
import useGlitchSubmit from "@/hooks/useGlitchcraftSubmit";
import supabaseGlitchcraft from "@/lib/supabaseGlitchcraft";
import { toast } from "react-hot-toast";

const Escape = () => {
  const { submitForm } = useGlitchSubmit();
  const [loading, setLoading] = useState(false);
  const [registeredTeamsCount, setRegisteredTeamsCount] = useState(0); // Track registered teams count
  const formRef = useRef<HTMLFormElement>(null);
  const MAX_TEAMS = 20;

  useEffect(() => {
    const fetchRegisteredTeamsCount = async () => {
      const { data, error } = await supabaseGlitchcraft.rpc(
        "count_unique_teams"
      );

      if (error) {
        console.error("Error fetching team count:", error);
        return;
      }

      setRegisteredTeamsCount(data || 0);
    };

    fetchRegisteredTeamsCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const response = await submitForm("ESCAPE_ROOM", formData);
    if (response.success) {
      formRef.current?.reset();
      toast.success(
        "Registration Success and you are Shortlisted! \n You will be notified when you are selected! "
      );
      // setTimeout(() => {
      //   window.open("https://chat.whatsapp.com/xxxx");
      // }, 2000);
    } else {
      toast.error("Error submitting form: " + "Potential duplicate entry");
    }
    setLoading(false);
  };
  return (
    <div className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
      <h2 className="text-3xl font-bold text-center mb-4 neon-text">
        ESCAPE THE ENIGMA
      </h2>
      {/* Display registration status */}
      <div className="text-center mb-2 text-white">
        {registeredTeamsCount >= MAX_TEAMS && (
          <p className="text-red-500 font-bold">
            Registration Closed: Maximum teams registered.
          </p>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className={`space-y-6 ${
          registeredTeamsCount >= MAX_TEAMS
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
      >
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
        </div>
        <button type="submit" className="w-full neon-button py-3">
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Escape;
