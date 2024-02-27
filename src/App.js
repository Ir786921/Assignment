import Body from "./Component/Body";
import NavBar from "./Component/NavBar";
import RectangleCard from "./Component/RectangleCard";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
<NavBar/>      </header>
<main className=" flex justify-center" >
  <Body/>
 
</main>
 <footer>
      <div className=" h-[320px] bg-[#212731] p-2">
         <Footer/>
      </div>
  </footer>
    </div>
  );
}

export default App;
