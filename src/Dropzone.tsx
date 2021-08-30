import './App.css';
import { useDropzoneInteractJS } from "./dragzoneHooks";
import * as React from "react"

const App: React.FC = () => {
    const interact1 = useDropzoneInteractJS({x: 120, y: 120, width: 120, height: 120})
    const interact2 = useDropzoneInteractJS({x: 320, y: 120, width: 120, height: 120})
    return (
        <div className="grid-bg-x50-y50">
            <div className="dropzone" 
                id="outer-dropzone-1"
                ref={interact1.ref}
                style={{
                    ...interact1.style,
                }}
            >
                #MyDesk-1
            </div>
            <div className="dropzone" 
                id="outer-dropzone-2"
                ref={interact2.ref}
                style={{
                    ...interact2.style,
                }}
            >
                #MyDesk-2
            </div>
        </div>
    );
}
export default App;
