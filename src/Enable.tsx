import './App.css';
import { useInteractJS } from "./dragResizeHooks";
import * as React from "react"

const App: React.FC = () => {
    const interact = useInteractJS()
    return (
        <div className="App">
            <button onClick={() => interact.enable()}>有效化</button>
            <button onClick={() => interact.disable()}>无效化</button>
            <div>{interact.isEnabled ? "有效" : "无效"}</div>
            <div
                ref={interact.ref}
                style={{
                    ...interact.style,
                    border: "2px solid #0489B1",
                    backgroundColor: "#A9D0F5"
                }}
            >
                <p>x:{interact.postion.x} y:{interact.postion.y}</p>
                <p>w:{interact.postion.width}</p>
                <p>h:{interact.postion.height}</p>
            </div>
        </div>
    );
}
export default App;
