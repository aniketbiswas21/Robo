const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

try {
  const greetings =
    "I am good. How are you? Stay Home, Stay Safe. Goodbye Human!";
  const weather = "Weather is fine, Beware of coronavirus tho!";
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = function () {
    console.log("voice is activated, you can speak to your microphone");
  };

  // add the listener to the button
  btn.addEventListener("click", () => {
    recognition.start();
  });

  recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
  };

  function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    if (message.includes("how are you")) {
      speech.text = greetings;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
    } else if (message.includes("how is the weather")) {
      speech.text = weather;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
    } else {
      speech.text =
        "I am sorry. The programmer was too lazy to programme this.";
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
    }

    window.speechSynthesis.speak(speech);
  }
} catch (err) {
  content.textContent = "Use a better browser, dumbass!";
  console.log("Use a better browser, dumbass!");
}
