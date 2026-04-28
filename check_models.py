import google.generativeai as genai


genai.configure(api_key="AIzaSyCwkIHmR263nAYdxdNxMaWeGfzrzAySuQ")

print("Available models supporting generateContent:")
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        
        print(f"Name: {m.name}")