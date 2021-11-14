import React from 'react'

function LeftAside() {
    const left = [1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,1,]

    return (
        <div className="w-3/12 px-2 fixed text-white overflow-y-scroll" style={{height : "90vh"}}>
            {left.map(()=>(
                <div className="text-left m-3 p-2 bg-gray-400 rounded-lg">
            <p>this is test</p>
          </div>
            ))}
          
          
        </div>  
    )
}

export default LeftAside
