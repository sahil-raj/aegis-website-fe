import supabaseGlitchcraft from "@/lib/supabaseGlitchcraft";

const useGlitchSubmit = () => {
  const submitForm = async (
    table: string,
    formData: Record<string, string | number | boolean | File | null>
  ) => {
    try {
      const { data, error } = await supabaseGlitchcraft
        .from(table)
        .insert([formData]);

      if (error) {
        console.error("Error submitting form:", error);
        return { success: false, message: error.message };
      }

      if (data) {
        console.log(data);
      }

      return { success: true, message: "Registration successful!" };
    } catch (err) {
      console.error("Unexpected error:", err);
      return { success: false, message: "An unexpected error occurred." };
    }
  };

  return { submitForm };
};

export default useGlitchSubmit;
