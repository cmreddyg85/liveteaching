import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import "./index.css";
import { ref, set } from "firebase/database";
import { database } from "../../Firebase";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import reactData from "../../react-data";
import dotnetData from "../../dotnet-data";
import javaData from "../../java-data";
import hrData from "../../hr-data";
import azureData from "../../azure-data";

const MainPage = () => {
  const userId = localStorage.getItem("userInfo");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [genPopUp, setGenPopUp] = useState(false);
  const [userLink, setUserLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const [intText, setIntText] = useState("");
  const [selectedTech, setSelectedTech] = useState("react");

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const textDebounceRef = useRef(null);
  const intrTextDebounceRef = useRef(null);

  useEffect(() => {
    const userId = localStorage.getItem("userInfo");
    if (!userId) {
      navigate("/login");
    }
    if (userId) {
      axios
        .get(
          "https://livelearning-5e710-default-rtdb.firebaseio.com/users.json"
        )
        .then((response) => {
          const fetchedData = response.data;
          const userExisitingData = fetchedData[userId];
          console.log(fetchedData);

          const name = userExisitingData?.firstname;
          setuserName(name);
        });
    }
  }, [navigate]);

  const handleBeforeUnload = (event) => {
    try {
      const navigationTiming = performance.getEntriesByType("navigation")[0];
      if (
        navigationTiming.type !== "reload" &&
        navigationTiming.type !== "back_forward" &&
        navigationTiming.type !== "navigate"
      ) {
        localStorage.clear();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  // Live update text to Firebase as user types
  useEffect(() => {
    if (userId && (text || transcript)) {
      // Clear previous timeout
      if (textDebounceRef.current) {
        clearTimeout(textDebounceRef.current);
      }

      // Debounce the Firebase update (wait 500ms after user stops typing)
      textDebounceRef.current = setTimeout(() => {
        const chatInputData = text ? formatTextToHTML(text) : transcript;
        const chatRef = ref(database, `data${userId}`);
        set(chatRef, { chatInputData })
          .then(() => {
            console.log("Live update sent to Firebase");
          })
          .catch((error) => {
            console.error("Error adding data to Firebase: ", error);
          });
      }, 500);
    }

    return () => {
      if (textDebounceRef.current) {
        clearTimeout(textDebounceRef.current);
      }
    };
  }, [text, transcript, userId]);

  useEffect(() => {
    if (userId && intText) {
      // Clear previous timeout
      if (intrTextDebounceRef.current) {
        clearTimeout(intrTextDebounceRef.current);
      }

      // Debounce the Firebase update (wait 500ms after user stops typing)
      intrTextDebounceRef.current = setTimeout(() => {
        const chatInputData = formatTextToHTML(intText);
        const chatRef = ref(database, `instructor${userId}`);
        set(chatRef, { chatInputData })
          .then(() => {
            console.log("Live update sent to Firebase");
          })
          .catch((error) => {
            console.error("Error adding data to Firebase: ", error);
          });
      }, 500);
    }

    return () => {
      if (intrTextDebounceRef.current) {
        clearTimeout(intrTextDebounceRef.current);
      }
    };
  }, [intText, userId]);

  const commands =
    selectedTech === "react"
      ? reactData
      : selectedTech === "dotnet"
      ? dotnetData
      : selectedTech === "hr"
      ? hrData
      : selectedTech === "azure"
      ? azureData
      : javaData;

  const filteredCommands =
    commands?.filter((command) =>
      command.command.toLowerCase().includes(searchInput.toLowerCase())
    ) || commands;

  const handleSignOut = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      localStorage.removeItem("userInfo");
      navigate("/login");
    }
  };

  const formatTextToHTML = (text) => {
    let sentences = text
      .trim()
      .split(/[.\n]+/)
      .filter(Boolean);
    let formattedHTML = `${sentences
      .map((sentence) => `<br/>${sentence.trim()}`)
      .join("")}`;
    return formattedHTML;
  };

  // const handleSendButton = () => {
  //   const chatInputData = text ? formatTextToHTML(text) : transcript;

  //   if (userId && chatInputData.trim() !== "") {
  //     const chatRef = ref(database, `data${userId}`);
  //     set(chatRef, { chatInputData })
  //       .then(() => {
  //         console.log("Data sent to Firebase");
  //       })
  //       .catch((error) => {
  //         console.error("Error adding data to Firebase: ", error);
  //       });
  //   }

  //   SpeechRecognition.stopListening();
  // };

  const handleResetButton = () => {
    const chatRef = ref(database, `data${userId}`);
    set(chatRef, { chatInputData: "" })
      .then(() => {
        setText("");
        resetTranscript();
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  const handleIntrResetButton = () => {
    const chatRef = ref(database, `instructor${userId}`);
    set(chatRef, { chatInputData: "" })
      .then(() => {
        setIntText("");
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  const handleGenerateLink = () => {
    if (userId) {
      const url = window.location.href;
      console.log(url);
      const containsHash = url.includes("#");
      const urlMain = url.split("#")[0];
      const domain = window.location.hostname;
      let userLink;
      if (containsHash) {
        userLink =
          domain === "localhost"
            ? `http://localhost:3000/mainPage#/user/${userId}`
            : `${urlMain}#/user/${userId}`;
      } else {
        userLink =
          domain === "localhost"
            ? `http://localhost:3000/user/${userId}`
            : `https://${domain}/user/${userId}`;
      }
      setUserLink(userLink);
      setGenPopUp(true);
    }
  };

  const handleClosePopup = () => {
    setGenPopUp(false);
    setLinkCopied(false);
    setIsOpen(false);
  };

  const handleCommand = (item) => {
    setText(item.text);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(userLink)
      .then(() => {
        setLinkCopied(true);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleStartListening = () => {
    setText("");
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    setIsRecording(true);
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);
  };

  const handleTechChange = (tech) => {
    setSelectedTech(tech);
    setSearchInput("");
  };

  return (
    <div className="mainPageBackgroundContainer">
      <div className="mainPleftSectionContainer">
        <h1 className="CommandBoxHeading">Questions</h1>
        <div className="radioButtonsContainer">
          <label className="radioLabel">
            <input
              type="radio"
              name="technology"
              value="react"
              checked={selectedTech === "react"}
              onChange={() => handleTechChange("react")}
            />
            <span>React</span>
          </label>
          <label className="radioLabel">
            <input
              type="radio"
              name="technology"
              value="dotnet"
              checked={selectedTech === "dotnet"}
              onChange={() => handleTechChange("dotnet")}
            />
            <span>.NET</span>
          </label>
          <label className="radioLabel">
            <input
              type="radio"
              name="technology"
              value="java"
              checked={selectedTech === "java"}
              onChange={() => handleTechChange("java")}
            />
            <span>Java</span>
          </label>
          <label className="radioLabel">
            <input
              type="radio"
              name="technology"
              value="azure"
              checked={selectedTech === "azure"}
              onChange={() => handleTechChange("azure")}
            />
            <span>SQL/Azure</span>
          </label>
          <label className="radioLabel">
            <input
              type="radio"
              name="technology"
              value="hr"
              checked={selectedTech === "hr"}
              onChange={() => handleTechChange("hr")}
            />
            <span>HR/Manager</span>
          </label>
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="button" className="search-button">
            <BsSearch className="search-icon" />
          </button>
        </div>
        <div className="CommandsContainer" style={{ overflowY: "scroll" }}>
          {filteredCommands?.map((item, index) => (
            <li
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleCommand(item)}
            >
              {item.command}
            </li>
          ))}
        </div>
      </div>
      <div className="mainPrightSectionContainer">
        <div className="mainPrightSectionTopBar">
          <h1 className="appTitle">Teaching Assistant</h1>
          <div className="mainPrightSectionTopBarInfo">
            <button onClick={handleSignOut} className="signoutButton">
              Sign Out
            </button>
          </div>
        </div>

        <div className="rightSectionBottomContainer">
          <div
            className="MobileCommandsContainer"
            style={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="radioButtonsContainerMobile">
              <label className="radioLabel">
                <input
                  type="radio"
                  name="technology-mobile"
                  value="react"
                  checked={selectedTech === "react"}
                  onChange={() => handleTechChange("react")}
                />
                <span>React</span>
              </label>
              <label className="radioLabel">
                <input
                  type="radio"
                  name="technology-mobile"
                  value="dotnet"
                  checked={selectedTech === "dotnet"}
                  onChange={() => handleTechChange("dotnet")}
                />
                <span>.NET</span>
              </label>
              <label className="radioLabel">
                <input
                  type="radio"
                  name="technology-mobile"
                  value="java"
                  checked={selectedTech === "java"}
                  onChange={() => handleTechChange("java")}
                />
                <span>Java</span>
              </label>
              <label className="radioLabel">
                <input
                  type="radio"
                  name="technology-mobile"
                  value="azure"
                  checked={selectedTech === "azure"}
                  onChange={() => handleTechChange("azure")}
                />
                <span>SQL/Azure</span>
              </label>
              <label className="radioLabel">
                <input
                  type="radio"
                  name="technology-mobile"
                  value="hr"
                  checked={selectedTech === "hr"}
                  onChange={() => handleTechChange("hr")}
                />
                <span>HR/Manager</span>
              </label>
            </div>

            <div className="search-container-mobile">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <ul className="questions">
              {filteredCommands?.map((item, index) => (
                <li
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCommand(item)}
                >
                  {item.command}
                </li>
              ))}
            </ul>
          </div>

          <div className="btnTextContainer">
            {isRecording && (
              <div className="recordingIndicator">
                Recording<span className="blink">...</span>
              </div>
            )}
          </div>

          <textarea
            value={text || transcript}
            placeholder="Type or Speak... (Live typing updates automatically)"
            type="text"
            className="mainPbottomInputContainer"
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mainPbuttonsContainer">
            {listening ? (
              <button
                className="startButton button"
                onClick={handleStopListening}
              >
                Stop Listening
              </button>
            ) : (
              <button
                onClick={handleStartListening}
                className="startButton button"
              >
                Listen
              </button>
            )}

            {/* <button
              id="sendButton"
              onClick={handleSendButton}
              className="stopButton button"
            >
              Send Voice
            </button> */}

            <button onClick={handleResetButton} className="resetButton button">
              Reset
            </button>
          </div>
          <br />
          <br />
          <h1>Live Instructions to Candidate</h1>
          <textarea
            value={intText}
            placeholder="Type here"
            type="text"
            className="mainInstructionsInputContainer"
            onChange={(e) => setIntText(e.target.value)}
          />

          <div className="mainPbuttonsContainer">
            <button
              onClick={handleIntrResetButton}
              className="resetButton button"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="generateLink">
          <button className="generate button" onClick={handleGenerateLink}>
            Generate Link
          </button>
        </div>
        {genPopUp && (
          <div>
            <div className="overlay" onClick={handleClosePopup}></div>
            <div className="generateLinkPop">
              <h2>Use Below Link :-</h2>
              <div className="linkContainer">
                <p className="userLink">
                  {userLink}
                  <span
                    className="copyIcon"
                    onClick={copyToClipboard}
                    title="Click here to copy"
                  >
                    📋
                  </span>
                </p>
              </div>
              {linkCopied && <p>Link copied!</p>}
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
