import React, { useEffect, useState } from 'react'
import { nav } from "../Links";

function PostText({text, img, dp}) {
    const [image, setImage] = useState('')
    useEffect(() => {
        if(img===undefined){
            setImage("hidden")
        }else{
            setImage("block")
        }
    }, [img])
    const date = new Date();
    const { avater, threedot } = nav;
    return (
        <div className="text-left m-2 bg-gray-800 w-4/12 rounded-lg">
        <div className="flex items-center p-2  justify-between h-14">
          <div className="flex items-center">
            <img
              className="w-9 h-9 rounded-full ring-2 ring-blue-700 cursor-pointer"
              src={dp || avater}
              alt="immmmage"
            />
            <div className="p-2 text-sm">
              <p className="cursor-pointer hover:underline">rahat</p>
              <p>{date.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <img
              className="w-11 p-3 rounded-full hover:bg-gray-700 cursor-pointer"
              src={threedot}
              alt="dots"
            />
          </div>
        </div>

        {/* image or text rendering condition */}
        <div className="text-sm p-1">
          <p className="px-2">
            {text}
          </p>
          <img className={`w-full py-3 ${image}`} src={img} alt="img" />
        </div>
      </div>
    )
}

export default PostText