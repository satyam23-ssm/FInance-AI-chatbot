export async function getChatResponse(input: string) {
  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    if (!response.ok) throw new Error("Server error");
    
    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("API Error:", error); // Check this in Browser Console
    return "Error connecting to AI.";
  }
}