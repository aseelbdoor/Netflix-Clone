// @ts-nocheck
import "./Movie.css";
import OneMovie from "./OneMovie/OneMovie";

export default function Movie(props) {
    return (
        <>
            <div className="swiperGroup" style={{ 'position': 'static' }}>
                {
                    props.groupData.map((element) => {
                        return (
                            <OneMovie data={element} />
                        )
                    })
                }
            </div>
        </>
    )
}