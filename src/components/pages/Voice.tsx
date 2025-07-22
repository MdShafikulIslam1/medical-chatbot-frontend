// 'use client';
// import { useRef, useState } from 'react';

// export default function VoiceRecorder() {
//   const [recording, setRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState<string | null>(null);
//   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//   const audioChunksRef = useRef<Blob[]>([]);

//   const handleStart = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(stream);
//     mediaRecorderRef.current = mediaRecorder;
//     audioChunksRef.current = [];

//     mediaRecorder.ondataavailable = (e) => {
//       audioChunksRef.current.push(e.data);
//     };

//     mediaRecorder.onstop = async () => {
//       const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
//       const url = URL.createObjectURL(audioBlob);
//       setAudioURL(url);

//       const formData = new FormData();
//       formData.append('file', audioBlob, 'voice.webm');

//       // Send to FastAPI
//     //   await fetch('http://localhost:8000/speech-to-text', {
//     //     method: 'POST',
//     //     body: formData,
//     //   });
//     };

//     mediaRecorder.start();
//     setRecording(true);
//   };

//   const handleStop = () => {
//     mediaRecorderRef.current?.stop();
//     setRecording(false);
//   };

//   return (
//     <div className="space-y-4">
//       <button onClick={recording ? handleStop : handleStart} className="px-4 py-2 bg-blue-600 text-white rounded">
//         🎤 {recording ? 'Stop Recording' : 'Voice'}
//       </button>

//       {audioURL && (
//         <div>
//           <audio controls src={audioURL} />
//         </div>
//       )}
//     </div>
//   );
// }


'use client';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function VoiceRecorderWithTranscription() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    setTranscript(null);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleSendToBackend = async () => {
    if (!audioURL) return;

    const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('file', blob, 'voice.webm');

    setLoading(true);
    setTranscript(null);

    const response = await axios.post('http://localhost:8080/speech-to-text', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;
    setTranscript(data.text);
    setLoading(false);
  };

  return (
    <div className="space-y-6 p-4 max-w-md mx-auto">
      <button
        onClick={recording ? handleStopRecording : handleStartRecording}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {recording ? '🛑 Stop Recording' : '🎤 Start Voice'}
      </button>

      {audioURL && (
        <div className="space-y-4">
          <audio controls src={audioURL} className="w-full" />
          <button
            onClick={handleSendToBackend}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            📤 Send for Transcription
          </button>
        </div>
      )}

      {loading && <p className="text-gray-500">⏳ Transcribing...</p>}

      {transcript && (
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold">📝 Transcribed Text:</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}
