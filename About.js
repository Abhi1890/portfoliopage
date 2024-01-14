
import "./About.css"
const wind=(a)=>{  window.scrollTo(0,a);}

const About = () => {
    return (<> 

    
    <div className="bg-gray-500  w-full h-min ">
      <div className="flex ">
      <img className="w-1/2" src="/my-image2.jpg" />
      <img className="w-1/2" src="/my-image3.jpeg" />
      </div>
    <h1 className="py-10 px-5 text-4xl font-bold text-stone-600">About Me</h1>
    <div className="font-bold text-xl underline hover:cursor-pointer sm:ml-96" onClick={() =>wind(400)}> Biography</div>
    <div className="font-bold text-xl underline hover:cursor-pointer sm:ml-96" onClick={() =>wind(600)}> Skill</div>
    <div className="font-bold text-xl underline hover:cursor-pointer sm:ml-96" onClick={() =>wind(1000)}> Projects</div>
    
    <div className="font-bold text-xl underline hover:cursor-pointer sm:ml-96" onClick={() =>wind(1300)}> Interest</div>
    <ul className=""> 
      <li className="px-10 text-xl font-bold"> Biography... 
      <p className=" font-normal mx=0 sm:mx-20"> Hi.. My name is Abhishek Singh.My residency is Deoria Utter Pradesh
      . I am a  B.Tech 3rd year student in NIT SRINAGAR. I am a fullstack developer. </p>
      </li>
      <li className="px-10 pt-5 text-xl font-bold">Skill Set...
      <p><ol className="mx-20 font-normal list-decimal" ><li>C-Programming</li>
      <li>CPP</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>My-SQL</li>
       <li>DSA</li>
       <li>Machine Learning</li>
       <li>Operating System-Linux</li>
      </ol> 
        </p></li>
        <li className="px-10 pt-5 text-xl font-bold  bg-stone-500">Projects...
        <ol className="list-decimal ml-20">
          <li>Digital/Analog signals Encoder <p className="font-normal">For this project we use CPP programming language
            and Graphic.h library for signals graphics.</p></li>
          <li>Calculator <p className="font-normal">By using HTML , CSS ,JavaScript these three basic technology 
            we have built Calculator.</p></li>
            <li>Portfolio <p className="font-normal">To make our portfolio website i have use React.</p></li>

          <li>Wine Quality <p className="font-normal">It is a machine learning basic project
          . I have done this project on KAGGLE. which is a online platform to learn and 
          do machine learning projects. I have use classification algorithm Decision Tree.</p></li>
          <li>Email spam and ham Detection <p className="font-normal">
            By this model we can detect any email is spam or ham on the basis of there content.
            For this project we have use nlpt (natural language processing toolkit).We have use 
            gaussian navie bays algorithm because it have good precision. </p></li>
        </ol>
        </li>
        <li className="px-10 text-xl font-bold pb-40">Interest...<p className="font-normal">
          I have much interest in coding . Power of Machine learnig also attracts my interest. I also have curiosity in physics.
          </p></li>
    </ul>
    
    <p></p>

    </div>
    
    
    </>)
  };
  
  export default About;