// @ts-nocheck
import "./MovieList.css";
import Movie from "../Movie/Movie";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function MovieList(props) {
    let newArr=[];
    let combine=[];
    for (let i = 0; i < props.data.length; i++) {
        const element = props.data[i];
        combine.push(element);
        if(combine.length===4){
            newArr.push(combine);
            combine=[];
        }
    }
    if(combine>0){
        newArr.push(combine);
    }
    return (
        <section>
            <div className="title">
                <h1>Trending Now</h1>
            </div>
            <Swiper style={{'position':'static'}} navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    newArr.map((element) => {
                        return (
                            <SwiperSlide style={{'position':'static'}}>
                                <Movie groupData={element} style={{'position':'static'}} / >
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}