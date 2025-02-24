import { useState, useRef } from "react";
import GeneralDetails from "../components/GeneralDetails";
import useGlitchSubmit from "@/hooks/useGlitchcraftSubmit";
import { toast } from "react-hot-toast";

const Reelity = () => {
  const { submitForm } = useGlitchSubmit();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const response = await submitForm("REELITY_SHOW", formData);

    if (response.success) {
      formRef.current?.reset();
      toast.success(
        response.message +
          "\n You'll be redirected to join the official whatsapp group"
      );
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/IwftapmEgv5BlUv3x7gDDx");
      }, 2000);
    } else {
      toast.error("Error submitting form: " + "Potential duplicate entry");
    }

    setLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid"
    >
      <h2 className="text-3xl font-bold text-center mb-8 neon-text">
        REELITY SHOW
      </h2>
      <GeneralDetails />
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Social Media Handle</label>
          <input
            name="Social_Media_Handle"
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
        {loading ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default Reelity;
