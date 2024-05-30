import React, { useEffect } from 'react';
import './App.css';

function App() {
  const drumPads = [
    {
      key: 'Q',
      keyCode: 81,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
      name: 'Heater 1',
    },
    {
      key: 'W',
      keyCode: 87,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
      name: 'Heater 2',
    },
    {
      key: 'E',
      keyCode: 69,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
      name: 'Heater 3',
    },
    {
      key: 'A',
      keyCode: 65,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
      name: 'Heater 4',
    },
    {
      key: 'S',
      keyCode: 83,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
      name: 'Clap',
    },
    {
      key: 'D',
      keyCode: 68,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
      name: 'Open HH',
    },
    {
      key: 'Z',
      keyCode: 90,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
      name: 'Kick n\' Hat',
    },
    {
      key: 'X',
      keyCode: 88,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
      name: 'Kick',
    },
    {
      key: 'C',
      keyCode: 67,
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
      name: 'Closed HH',
    },
  ];

  function playSound(selector, name) {
    const audio = document.getElementById(selector);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      document.getElementById('display').innerText = name;
    }
  }

  useEffect(() => {
    function handleKeyPress(event) {
      const drumPad = drumPads.find(pad => pad.keyCode === event.keyCode);
      if (drumPad) {
        playSound(drumPad.key, drumPad.name);
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.key}
              onClick={() => {
                playSound(drumPad.key, drumPad.name);
              }}
              className="drum-pad"
              id={`drum-${drumPad.key}`}
            >
              {drumPad.key}
              <audio
                className="clip"
                id={drumPad.key}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
