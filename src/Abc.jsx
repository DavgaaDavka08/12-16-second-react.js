import React from "react";
import './style.css'
function Card(){
    return <div>Card</div>
}
function Header(){
    return<div className="header">header
    <div className="img">
        <h1>bfjkdsal</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" alt="" />
    </div>
    </div>

}

function App(){
    return<div>
        <Header />
        { Header.map((back)=>{
            const printle=[]
back.push(printle)
})}
    </div>
}

export default App;