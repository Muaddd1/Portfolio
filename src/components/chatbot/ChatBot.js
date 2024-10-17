import React, { useState } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap"; // Import Nav from react-bootstrap
import { AiOutlineMessage } from "react-icons/ai"; // Import an icon for the chat toggle
import "./ChatBot.css"; // Import the CSS for styling

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility

  // Step 1: Define expanded personal information and custom replies for 50 questions
  const personalInfo = {
    name: "Mouad Sehli",
    skills: "Full Stack Developer, React, Node.js, JavaScript",
    experience: "Web Developer with Bac +2 in digital development",
    projects: "PC sales platform, React portfolio, logistics app",
    education: "Bac in Human Sciences and Bac +2 in Digital Development",
    contact: {
      email: "medchaibi182@gmail.com",
      phone: "06 72 88 58 73",
    },
    hobbies: "Gaming (Elden Ring), Anime editing, Trading",
    location: "Taourirt, Morocco",
    customReplies: {
      hello: "Hello! How can I assist you today?",
      greetings: "Greetings! How's your day going?",
      goodbye: "Goodbye! Feel free to ask more questions anytime.",
      age: "I was born on 01/04/2003, which makes me 21 years old.",
      job: "I work as a Web Developer and logistics technician.",
      company: "I focus on selling PCs.",
      portfolio: "I'm working on a sleek React JS portfolio project.",
      languages: "I speak Arabic, French, and English.",
      levelInEldenRing: "I reached level 181 in Elden Ring.",
      university: "I am interested in studying Arabic language at a private university.",
      address: "My address is 729 Hay Mojniba Bloc-B, Taourirt.",
      workExperience: "I have worked as a logistics technician and a web developer.",
      bac: "I have a BAC in human sciences and Bac +2 in digital development.",
      trading: "I recently started learning about trading.",
      tikTok: "I have a TikTok account where I share anime edits.",
      favoriteAnime: "My favorite anime is Naruto.",
      programmingLanguages: "I am proficient in JavaScript, Python, and SQL.",
      favoriteFood: "I enjoy Moroccan couscous and tagine.",
      favoriteSport: "My favorite sport is football.",
      favoriteTeam: "My favorite football team is Real Madrid.",
      favoriteMusic: "I enjoy listening to lo-fi beats while working.",
      dreamProject: "My dream project is to develop an AI-powered personal assistant.",
      futureGoal: "I aim to master AI and become an expert in full stack development.",
      gaming: "I love gaming, especially role-playing games like Elden Ring.",
      morningRoutine: "I usually start my day with a cup of coffee and a to-do list.",
      eveningRoutine: "I relax in the evening by watching anime or playing games.",
      favoriteColor: "My favorite color is blue.",
      favoriteMovie: "My favorite movie is 'Inception.'",
      favoriteBook: "I love reading 'The Alchemist' by Paulo Coelho.",
      codingExperience: "I have over 2 years of coding experience.",
      favoriteFramework: "I enjoy working with React because of its flexibility.",
      freelancing: "I’m open to freelance opportunities in web development.",
      travel: "I’d love to visit Japan and experience its culture.",
      sideProjects: "I'm working on a personal finance management app.",
      favoriteCar: "I love the Tesla Model S for its innovation.",
      favoriteSeason: "I prefer winter because it's a great time to code indoors!",
      roleModels: "My role models include Elon Musk and Steve Jobs.",
      currentLearning: "I'm currently learning advanced AI integration in web apps.",
      family: "I come from a close-knit family in Taourirt.",
      schoolLife: "I enjoyed my school years, particularly in science and technology.",
      workLifeBalance: "I value maintaining a healthy balance between work and play.",
      favoritePlace: "I enjoy spending time by the beach to unwind.",
      codingChallenges: "I love tackling coding challenges to improve my problem-solving skills.",
      personalGrowth: "I constantly strive to improve and stay curious.",
      mentor: "I look up to seasoned developers who mentor and inspire me.",
      innovation: "I believe AI and machine learning will revolutionize the tech industry.",
      socialMedia: "You can follow me on Twitter and LinkedIn to see my updates.",
      philosophy: "My life philosophy is to keep learning and growing.",
      techStack: "My current tech stack includes React, Node.js, Express, and MongoDB.",
      Hipo: "stop mne l3kes.",

    },
  };

  // Step 2: Function to check if the user is asking about personal info or custom phrases
  const checkForPersonalInfo = (message) => {
    const lowerMessage = message.toLowerCase();
    // Match questions based on user input
    if (lowerMessage.includes("hello")) return personalInfo.customReplies.hello;
    if (lowerMessage.includes("greetings")) return personalInfo.customReplies.greetings;
    if (lowerMessage.includes("goodbye")) return personalInfo.customReplies.goodbye;
    if (lowerMessage.includes("name")) return `My name is ${personalInfo.name}.`;
    if (lowerMessage.includes("skills")) return `I have skills in ${personalInfo.skills}.`;
    if (lowerMessage.includes("experience")) return `I have experience as ${personalInfo.experience}.`;
    if (lowerMessage.includes("projects")) return `Some of my projects include: ${personalInfo.projects}.`;
    if (lowerMessage.includes("education")) return `I have a ${personalInfo.education}.`;
    if (lowerMessage.includes("contact")) return `You can contact me via email: ${personalInfo.contact.email} or phone: ${personalInfo.contact.phone}.`;
    if (lowerMessage.includes("hobbies")) return `I enjoy ${personalInfo.hobbies}.`;
    if (lowerMessage.includes("location")) return `I am located in ${personalInfo.location}.`;
    if (lowerMessage.includes("age")) return personalInfo.customReplies.age;
    if (lowerMessage.includes("job")) return personalInfo.customReplies.job;
    if (lowerMessage.includes("company")) return personalInfo.customReplies.company;
    if (lowerMessage.includes("portfolio")) return personalInfo.customReplies.portfolio;
    if (lowerMessage.includes("languages")) return personalInfo.customReplies.languages;
    if (lowerMessage.includes("elden ring")) return personalInfo.customReplies.levelInEldenRing;
    if (lowerMessage.includes("university")) return personalInfo.customReplies.university;
    if (lowerMessage.includes("address")) return personalInfo.customReplies.address;
    if (lowerMessage.includes("work experience")) return personalInfo.customReplies.workExperience;
    if (lowerMessage.includes("bac")) return personalInfo.customReplies.bac;
    if (lowerMessage.includes("trading")) return personalInfo.customReplies.trading;
    if (lowerMessage.includes("tiktok")) return personalInfo.customReplies.tikTok;
    if (lowerMessage.includes("favorite anime")) return personalInfo.customReplies.favoriteAnime;
    if (lowerMessage.includes("programming languages")) return personalInfo.customReplies.programmingLanguages;
    if (lowerMessage.includes("favorite food")) return personalInfo.customReplies.favoriteFood;
    if (lowerMessage.includes("favorite sport")) return personalInfo.customReplies.favoriteSport;
    if (lowerMessage.includes("favorite team")) return personalInfo.customReplies.favoriteTeam;
    if (lowerMessage.includes("favorite music")) return personalInfo.customReplies.favoriteMusic;
    if (lowerMessage.includes("dream project")) return personalInfo.customReplies.dreamProject;
    if (lowerMessage.includes("future goal")) return personalInfo.customReplies.futureGoal;
    if (lowerMessage.includes("gaming")) return personalInfo.customReplies.gaming;
    if (lowerMessage.includes("morning routine")) return personalInfo.customReplies.morningRoutine;
    if (lowerMessage.includes("evening routine")) return personalInfo.customReplies.eveningRoutine;
    if (lowerMessage.includes("favorite color")) return personalInfo.customReplies.favoriteColor;
    if (lowerMessage.includes("favorite movie")) return personalInfo.customReplies.favoriteMovie;
    if (lowerMessage.includes("favorite book")) return personalInfo.customReplies.favoriteBook;
    if (lowerMessage.includes("coding experience")) return personalInfo.customReplies.codingExperience;
    if (lowerMessage.includes("favorite framework")) return personalInfo.customReplies.favoriteFramework;
    if (lowerMessage.includes("freelancing")) return personalInfo.customReplies.freelancing;
    if (lowerMessage.includes("travel")) return personalInfo.customReplies.travel;
    if (lowerMessage.includes("side projects")) return personalInfo.customReplies.sideProjects;
    if (lowerMessage.includes("favorite car")) return personalInfo.customReplies.favoriteCar;
    if (lowerMessage.includes("favorite season")) return personalInfo.customReplies.favoriteSeason;
    if (lowerMessage.includes("role models")) return personalInfo.customReplies.roleModels;
    if (lowerMessage.includes("current learning")) return personalInfo.customReplies.currentLearning;
    if (lowerMessage.includes("family")) return personalInfo.customReplies.family;
    if (lowerMessage.includes("school life")) return personalInfo.customReplies.schoolLife;
    if (lowerMessage.includes("work life balance")) return personalInfo.customReplies.workLifeBalance;
    if (lowerMessage.includes("favorite place")) return personalInfo.customReplies.favoritePlace;
    if (lowerMessage.includes("coding challenges")) return personalInfo.customReplies.codingChallenges;
    if (lowerMessage.includes("personal growth")) return personalInfo.customReplies.personalGrowth;
    if (lowerMessage.includes("mentor")) return personalInfo.customReplies.mentor;
    if (lowerMessage.includes("innovation")) return personalInfo.customReplies.innovation;
    if (lowerMessage.includes("social media")) return personalInfo.customReplies.socialMedia;
    if (lowerMessage.includes("philosophy")) return personalInfo.customReplies.philosophy;
    if (lowerMessage.includes("tech stack")) return personalInfo.customReplies.techStack;
    if (lowerMessage.includes("hipo")) return personalInfo.customReplies.Hipo;



    return null; // Return null if no matches found
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = input;
    const botMessage = checkForPersonalInfo(userMessage) || "I'm sorry, I don't understand that.";

    // Add messages to the state
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: "user", text: userMessage },
      { from: "bot", text: botMessage },
    ]);

    setInput(""); // Clear input field

    // Optional: Send userMessage to an API if needed
    // const response = await axios.post("/api/chat", { message: userMessage });
    // const botResponse = response.data.reply; // Use API response if applicable
    // setMessages((prevMessages) => [...prevMessages, { from: "bot", text: botResponse }]);
  };

  // Function to toggle chat window
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`chatbot ${isOpen ? "open" : "closed"}`}>
      <Nav.Item>
        <Nav.Link onClick={toggleChat} style={{ cursor: 'pointer' }}>
          <AiOutlineMessage style={{ marginBottom: "2px" }} />
          {isOpen ? " Close Chat" : " Open Chat"}
        </Nav.Link>
      </Nav.Item>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.from}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
