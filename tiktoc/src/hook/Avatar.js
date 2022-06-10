import React, {useState , useEffect} from "react";

function Avatar (){
    const [avatar, setAvatar] = useState();

     useEffect(() => {

        return () => {
            avatar &&  URL.revokeObjectURL(avatar.preview)
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        console.log(e)
        const file = e.target.files[0];
      file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return(
        <div>
            <input type={"file"}
            onChange={handlePreviewAvatar}/>
            {
                avatar && (
                <img src={avatar.preview} alt='' width='80%'/>
            ) }
        </div>
    )
}
export default Avatar;