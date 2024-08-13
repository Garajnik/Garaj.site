import { useState, useEffect } from "react";

function App() {
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    // Массив возможных цветов
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
    ];
    // Выбор случайного цвета из массива
    const randomIndex = Math.floor(Math.random() * colors.length);
    setTextColor(colors[randomIndex]);
  }, []);

  const openAS = () => {
    window.open("https://www.artstation.com/garajnik", "_blank");
  };
  const openYT = () => {
    window.open("https://www.youtube.com/@garajdev", "_blank");
  };
  const openGH = () => {
    window.open("https://github.com/Garajnik", "_blank");
  };

  return (
    <div className="flex items-center justify-center h-screen select-none">
      <div className="flex flex-col items-center gap-y-3">
        <div className="flex justify-evenly gap-x-3">
          <div className="ml-3.5">Leonid</div>
          <div className={`edu-vic-wa-nt-beginner-400 ${textColor} ml-4`}>
            (Garaj)
          </div>
          <div className="ml-3">Gorbunov</div>
        </div>

        <div className="flex justify-evenly gap-x-6 mt-3">
          <img
            src="./Garaj.site/src/Assets/artstationlogo.png"
            alt="ArtStation"
            className="w-12 h-12 cursor-pointer"
            onClick={openAS}
          />
          <img
            src="src/Assets/youtube_social_circle_dark.png"
            alt="YouTube"
            className="w-12 h-12 cursor-pointer"
            onClick={openYT}
          />
          <img
            src="/src/Assets/microIcon.png"
            onClick={openGH}
            alt="Image 3"
            className="w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
