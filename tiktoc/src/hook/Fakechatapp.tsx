import React, {useState , useEffect} from "react";
const  lessons = [
    {
        id: 1,
        name:'Reactjs là gi'
    },
    {
        id: 2,
        name:'SPA/MPA là gì'
    },
    {
        id: 3,
        name:'Arrow function'
    },
]

function Fakechatapp (){
    const [lessonId,setLessonId] = useState(1)
    useEffect(()=>{
        const handleComment = ({detail}:any) => {
            console.log(detail)

        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        return() =>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])
    return(
        <div>
            {
                lessons.map(lesson =>(
                    <li key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? 'red':'#333'
                    }}
                    onClick={()=> setLessonId(lesson.id)}>
                        {lesson.name}
                    </li>
                    )
                )
            }
        </div>
    )
}
export default Fakechatapp;