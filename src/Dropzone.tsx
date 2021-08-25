import './App.css';
import { useDropzoneInteractJS } from "./dragzoneHooks";
import * as React from "react"

const App: React.FC = () => {
    const interact = useDropzoneInteractJS({x: 100, y: 100, width: 300, height: 300})
    return (
        <div>
            <div className="dropzone" 
                id="outer-dropzone"
                ref={interact.ref}
                style={{
                    ...interact.style,
                }}
            >
                #outer-dropzone
            </div>
        </div>
    );
}
export default App;
