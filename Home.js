import "./Home.css"
const Home = (props) => {
    return (<>
    <div className="bg-gray-700 w-full h-screen text-gray-500 sm:bg-gray-900"> 
    
<div className="flex justify-between "><p className="para">
  <h1 className="text-sm font-bold  mx-5 sm:text-2xl mx-20">I'm {props.name}</h1>
  My name is ABHISHEK SINGH, I am a frontend web developer. <br/> 
  I am a good programmer as well as a enthusiastic person. <br/>
  This one is one of the my Project. To design this website i have <br/>
  use React webdevelopment technology. </p>
<img className="img" src="/my-image.jpg" alt=" image not found" />
  </div> 
  <div className="mx-10 my-10">
        <p className="p h ">“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. </p> 
        <p className="p h">They're not fond of rules. And they have no respect for the status quo.You can quote them, disagree with them, glorify or vilify them. About the </p>
        <p className="p h">only thing you can't do is ignore them. Because they change things. They pushthe human race forward. And while some may see them as    </p>
        <p className="p h">the crazy  ones,we see genius.  Because the people who are crazy enough to think they can change the world, are the ones who do.”</p> 
        </div> 
     
   

     </div>
    
    
    </>);
  };
  
  export default Home;