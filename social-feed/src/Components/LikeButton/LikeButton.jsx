
import "./LikeButton.css"


const LikeButton = ({message, isLiked, setIsLiked, setIsDisliked}) => {
    
    // const [likeButton, setLikeButton] = useState("inactive")

    // function likePost(){
    //     if (likeButton === ("inactive")){
    //         setLikeButton("active");
    //     }
    //     else{
    //         setLikeButton("inactive")
    //     }
    // }
        return (
            <div>
                <button className={isLiked?"active":"inactive"} onClick={() => {setIsLiked(!isLiked);setIsDisliked(false)}}>{message}</button>
            </div>
        )
}

export default LikeButton