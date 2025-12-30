import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col bg-black pt-20">
    <div class= "flex flex-col items-center">
      <img src="/Quran.jpg" class="w-24 h-24 rounded-full mb-4 " />
      <div class="text-base/4 text-white">
        <p>Abthal Radifan</p>
        <p>Common person with big dreams</p>
      </div>
    </div>
    <div class="flex flex-col items-center p-8 w-96" >
      <a href="https://vite.dev" class="w-full bg-slate-700 py-2 mb-2 rounded-xl border" target="_blank">
        <div class="flex justify-center items-center">
          <p>🍌 Linkedin</p>
        </div>
      </a>
      <a href="https://vite.dev" class="w-full bg-slate-700 py-2 mb-2 rounded-xl border" target="_blank">
        <div class="flex justify-center items-center">
          <p>🍌 X / Twitter</p>
        </div>
      </a>
      <a href="https://vite.dev" class="w-full bg-slate-700 py-2 mb-2 rounded-xl border" target="_blank">
        <div class="flex justify-center items-center">
          <p>🍌 Explore</p>
        </div>
      </a>
      <a href="https://vite.dev" class="w-full bg-slate-700 py-2 mb-2 rounded-xl border" target="_blank">
        <div class="flex justify-center items-center">
          <p>🍌 sup</p>
        </div>
      </a>
      <a href="https://vite.dev" class="w-full py-2 mb-2 text-3xl mt-6" target="_blank">
        <div class="flex justify-center items-center">
          <p>📫</p>
        </div>
      </a>
    </div>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
