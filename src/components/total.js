// import '../css/style.css';
import {useState} from 'react';
import MyMessage from './myMessage';
import MyProcess from './myProcess';
import MyTown from './myTown';



function Total() {

const [activeComponent, setActiveComponent] = useState("Fistpage");
const handleClick = (component) => {
  return () =>{
    setActiveComponent(component)
    }
  }

  return (
    <div className="total">
      <img className="img" src="images/01.jpg" alt="示例图片"/>
      <div className="topnav">
        <button className={activeComponent === "Fistpage" ? "change-color" : ""} onClick={handleClick("Fistpage")}>网站首页</button>
        <button className={activeComponent === "Process" ? "change-color" : ""} onClick={handleClick("Process")}>成长历程</button>
        <button className={activeComponent === "Town" ? "change-color" : ""} onClick={handleClick("Town")}>我的家乡 </button>
        <button className={activeComponent === "School" ? "change-color" : ""} onClick={handleClick("School")}>我的学校</button>
        <button className={activeComponent === "Food" ? "change-color" : ""} onClick={handleClick("Food")}>喜欢美食</button>
        <button className={activeComponent === "Message" ? "change-color" : ""} onClick={handleClick("Message")}>给我留言</button>
      </div>
      
      {activeComponent === "Process"  ? <MyProcess/>: null}
      {activeComponent === "Town"  ? <MyTown/> : null}
      {activeComponent === "Message"  ? <MyMessage/>: null}
    </div>
  );
}

export default Total;