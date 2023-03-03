import { useState } from "react"
import "./DislikeButton.css"


const DislikeButton = ({message, isDisliked, setIsDisliked, setIsLiked}) => {
    
    // const [dislikeButton, setDislikeButton] = useState("inactive")

    // function dislikePost(){
    //     if (dislikeButton === "inactive"){
    //         setDislikeButton("active");
    //     }
    //     else{
    //         setDislikeButton("inactive")
    //     }
    // }
        return (
            <div>
                <button className={isDisliked?"actived":"inactive"} onClick={() => {setIsDisliked(!isDisliked);setIsLiked(false)}}>{message}</button>
            </div>
        )
}

export default DislikeButton