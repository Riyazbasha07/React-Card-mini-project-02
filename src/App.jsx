import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default function App()
{
  return(
    <>
      <body>
        <div className="cards-container">
          <div class="card">
          <Header/>
          <Body/>
          <Footer/>
        </div>
        </div>
      </body> 
    </>
  );
}