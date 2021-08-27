import { useRef, useEffect, useState, CSSProperties } from 'react'
import interact from 'interactjs'

type Partial<T> = {
    [P in keyof T]?: T[P]
}

const initPosition = {
    width: 100,
    height: 100,
    x: 0,
    y: 0,
}

export function useDropzoneInteractJS(
    postion: Partial<typeof initPosition> = initPosition
) {
    // position default value
    const [_postion, setPosition] = useState({
        ...initPosition,
        ...postion
    })

    // default siEnabled
    const [isEnabled, setEnable] = useState(true)

    const interactRef = useRef(null)
    let {x, y, width, height} = _postion

    const enable = () => {
        interact((interactRef.current as unknown) as HTMLElement)
            .draggable({
                modifiers: [
                interact.modifiers.snap({
                    targets: [
                    interact.snappers.grid({ x: 30, y: 30 })
                    ],
                    range: Infinity,
                    relativePoints: [ { x: 0, y: 0 } ]
                }),
                // interact.modifiers.restrict({
                //     restriction: element.parentNode,
                //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                //     endOnly: true
                // })
                ],
                inertia: true
            })
            // .draggable({
            //     inertia: false
            // })
            .resizable({
                edges: {left: true, right: true, bottom: true, top: true},
                preserveAspectRatio: false,
                inertia: false
            })
            .on('dragmove', event => {
                x += event.dx
                y += event.dy
                setPosition({
                    width,
                    height,
                    x,
                    y
                })
                let draggableElement = event.target;
                draggableElement.textContent = `dragmove: x:${x} y:${y}`;

            })
            .on('resizemove', event => {
                width = event.rect.width
                height = event.rect.height
                x += event.deltaRect.left
                y += event.deltaRect.top
                setPosition({
                    x,
                    y,
                    width,
                    height
                })
                let draggableElement = event.target;
                draggableElement.textContent = `dragmove: w:${width} h:${height}`;

            })

    }

    useEffect(() => {
        // enable it will be onshort
        // TODO: let's test it
        enable()
    }, [isEnabled])

    return {
        ref: interactRef,
        style: {
            transform: `translate3D(${_postion.x}px, ${_postion.y}px, 0)`,
            width: _postion.width + 'px',
            height: _postion.height + 'px',
            position: 'absolute' as CSSProperties['position'],
        },
        postion: _postion,
        isEnabled,
    }
}
