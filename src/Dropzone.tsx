import './App.css';
import { useDropzoneInteractJS } from "./dragzoneHooks";
import * as React from "react"

const App: React.FC = () => {
    const interact = useDropzoneInteractJS({x: 120, y: 110, width: 120, height: 120})
    return (
        <div className="gridX50Y50">
            <div className="dropzone" 
                id="outer-dropzone"
                ref={interact.ref}
                style={{
                    ...interact.style,
                }}
            >
                #MyDesk
            </div>
        </div>
    );
}
export default App;
