import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../../Firebase";
import { useParams } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./index.css";

const UserPage = () => {
  const { userId } = useParams();
  const [dataFromDatabase, setDataFromDatabase] = useState("");
  const [topInputName, setTopInputName] = useState("");
  const [isTopRecording, setIsTopRecording] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    // Real-time listener for live chat updates
    const dataRef = ref(database, `data${userId}`);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDataFromDatabase(data.chatInputData || "");
      } else {
        setDataFromDatabase("");
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [userId]);

  const handleTopStartRecording = () => {
    // if (!topInputName.trim()) {
    //   // alert("Please enter a name for the recording");
    //   return;
    // }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    setIsTopRecording(true);
  };

  const handleTopEndRecording = () => {
    SpeechRecognition.stopListening();
    setIsTopRecording(false);

    // Save to Firebase
    if (userId && transcript.trim() !== "") {
      const currentDateTime = new Date().toISOString().replace(/[:.]/g, "-");
      const fieldName = `${topInputName || "Recording"}_${currentDateTime}`;
      // const dataRef = ref(database, `recordings/${userId}/${fieldName}`);
      const dataRef = ref(database, `recordings/${fieldName}`);

      set(dataRef, {
        name: topInputName,
        transcript: transcript,
        timestamp: new Date().toISOString(),
        dateTime: new Date().toLocaleString(),
      })
        .then(() => {
          // console.log("Recording saved to Firebase");
          // alert("Recording saved successfully!");
          setTopInputName("");
          resetTranscript();
        })
        .catch((error) => {
          // console.error("Error saving recording to Firebase: ", error);
          // alert("Error saving recording");
        });
    } else {
      // alert("No speech detected or user not logged in");
    }
  };

  return (
    <div className="mainBackgroundContainer">
      <div className="rightSectionContainer">
        {/* Top Input and Recording Section */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            alignItems: "center",
            padding: "15px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Enter name..."
            value={topInputName}
            onChange={(e) => setTopInputName(e.target.value)}
            disabled={isTopRecording}
            style={{
              flex: 1,
              padding: "10px 15px",
              fontSize: "16px",
              border: "2px solid #ccc",
              borderRadius: "6px",
              outline: "none",
            }}
          />
          {isTopRecording ? (
            <button
              onClick={handleTopEndRecording}
              style={{
                padding: "10px 25px",
                fontSize: "16px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                minWidth: "100px",
              }}
            >
              End
            </button>
          ) : (
            <button
              onClick={handleTopStartRecording}
              style={{
                padding: "10px 25px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                minWidth: "100px",
              }}
            >
              Start
            </button>
          )}
        </div>

        {/* Recording Indicator */}
        {/* {isTopRecording && (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#ffebee",
              border: "2px solid #f44336",
              borderRadius: "6px",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#d32f2f",
            }}
          >
            🔴 Recording in progress... Speak now!
            {transcript && (
              <div
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  fontSize: "14px",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                <strong>Transcript:</strong> {transcript}
              </div>
            )}
          </div>
        )} */}

        {/* Live Data Display Section */}
        <div
          style={{
            border: "2px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            minHeight: "200px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {dataFromDatabase ? (
            <div
              style={{
                padding: "25px",
                backgroundColor: "#fff3e0",
                borderRadius: "6px",
                border: "1px solid #FF9800",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: "#333",
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: dataFromDatabase }} />
              </div>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                color: "#999",
                fontSize: "18px",
              }}
            >
              <p>⏳ Waiting for live input...</p>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                Start typing on the main page to see updates here in real-time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
