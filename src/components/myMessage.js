import {useState} from 'react';

function MyMessage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState([]);
  const [text, setText] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePwd = (event) => {
    setPassword(event.target.value);
  };

  const handleSex = (sex) => {
    return () => {
     setSex(sex);
    }
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };
  
  const handleHobby = (event) => {
    const { value, checked } = event.target;
    
    if (checked) {
      setHobby([...hobby,value]);
    } else {
      setHobby(hobby.filter((item) => item !==value));
    }
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const submit = () => {
    const result = {
      "name": name,
      "password": password,
      "sex": sex,
      "age": age,
      "hobby": hobby,
      "text": text,
    };

    alert(JSON.stringify(result));
  }
  return (
    <div className="myMessage">
      <div className="title">
        <div className="circle-text">
          <div className="black-circle"/>
          <span className="title-message">给我留言</span>
        </div>
        <hr className="dotted-line"/>
      </div>

      <div className="content">
        <div className="item">
          <div className="content-title">你的姓名：</div>
          <input className="inputnamepwd" maxLength="10" value={name} onChange={handleChangeName}/>
          <span className="red-text">（最大可以输入10位）</span>
        </div>

        <div className="item">
          <div className="content-title">你的密码：</div>
          <form>
            <input className="inputnamepwd" autoComplete="new-password" maxLength="6" type="password" value={password} onChange={handleChangePwd}/>
          </form>
          <span className="red-text">（最大可以输入6位）</span>
        </div>
        
        <div className="item"> 
          <div className="content-title">你的性别：</div>
          <input className="radio" type="radio"onChange={handleSex("男")}value={sex}checked={sex === "男"}/> 男 
          <input className="radio" type="radio" onChange={handleSex("女")}value={sex}checked={sex === "女"}/>女
        </div>

        <div className="item">
          <div className="content-title">你的年龄：</div>
          <select className="age"  defaultValue="18岁以下" onChange={handleAge}>
          <option value="18岁以下">18岁以下</option>
          <option value="18-65岁">18-65岁</option>
          <option value="65岁以上">65岁以上</option>
          </select>
        </div>

        <div className="item">
          <div className="content-title">你的爱好:</div>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="唱歌"
          onChange={handleHobby} checked={hobby.includes("唱歌")}/>
           <span>唱歌</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="旅游"
          onChange={handleHobby} checked={hobby.includes("旅游")}/>
           <span>旅游</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="上网"
          onChange={handleHobby} checked={hobby.includes("上网")}/>
           <span>上网</span>
          </label>
          <label className="checkbox">
           <input type="checkbox" name="hobby" value="交友"
          onChange={handleHobby} checked={hobby.includes("交友")}/>
           <span>交友</span>
          </label>
        </div>

        <div className="content-message"> 
          <div className="content-title">给我留言:</div>  
          <textarea className="text" maxLength="300" onChange={handleText} value={text}/>
          <span className="text-red-center"><span className="red-text">（最大可以输入300文字）</span></span>
        </div>

        <button className="submit" onClick={submit}>提交</button>
      </div>
   
    </div>
  );
}

export default MyMessage;
