import './App.css';
import { useDropzoneInteractJS } from "./dragzoneHooks";
import * as React from "react"

const App: React.FC = () => {
    const interact = useDropzoneInteractJS()
    return (
        <div>
            <div className="dropzone" 
                id="outer-dropzone"
                ref={interact.ref}
                style={{
                    ...interact.style,
                    border: "2px solid #0489B1",
                    backgroundColor: "#A9D0F5"
                }}
            >
                #outer-dropzone
            </div>
        </div>
    );
}
export default App;
