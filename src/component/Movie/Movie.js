// @ts-nocheck
import "./Movie.css";
import OneMovie from "./OneMovie/OneMovie";

export default function Movie(props) {
    return (
        <>
            <div className="swiperGroup" style={{ 'position': 'static' }}>
                {
                    props.groupData.map((element) => {
                        console.log(element);
                        return (
                            <OneMovie image={element.poster_path} title={element.title} overview={element.overview} />
                        )
                    })
                }
            </div>
        </>
    )
}