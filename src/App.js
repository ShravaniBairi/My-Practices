import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 grid  place-content-center h-screen ">

      <h1 class="text-white  max-w-sm mx-auto text-3xl m-6">Start Practice</h1>

      <div class=" max-w-sm mx-auto rounded-xl p-2 flex items-center space-x-2 shadow-lg bg-blue-200 ">
        
        <div class="h-18 w-18">
          <img class="h-12 w-12 rounded-full shadow-2xl"alt="Tailwind Logo" src="https://avatars.githubusercontent.com/u/30317862?s=280&v=4" />
       </div>

       <div>
         <h2 class="text-3xl font-bold text-black">Tailwind CSS</h2>
         <h3 class="text-base font-medium text-slate-700">By Shravani</h3>


        </div>
       

    </div>
    <button class="bg-blue-500 max-w-sm dark:text-blue-500 dark:bg-white text-white mt-2 p-1 text-base font-medium hover:text-black hover:bg-sky-200 mx-auto rounded-md shadow-white-lg">Click Me</button>
    <div class="text-white mx-auto md:text-pink-700 sm:text-green-600 font-semibold font-serif"><p>Responsive practice</p></div>



      <div class="md:max-w-xl items-center md:flex rounded-lg bg-white overflow-hidden  ">
        <div>
          <img class="sm-max-w-sm object-cover w-full h-48  md:h-64 md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29M1l-maFOatSFXhD9rwIxZbiV-rODE1f2g&usqp=CAU" alt="random img" />
        </div>
        <div class="text-black font-semibold p-3 ">
          <h2 >Practicing Tailwind css By creating an awsome card....</h2>
          <h3 class="uppercase hover:text-blue-700">By Shravani... a frontend Developer</h3>
        </div>


      </div>
    </div>
  );
}

export default App;
