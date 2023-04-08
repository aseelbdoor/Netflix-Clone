// @ts-nocheck
import "./MovieList.css";
import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function MovieList(props) {
    return (
        <section>
            <div className="title">
                <h1>Trending Now</h1>
            </div>
            {/* <div className="movieSwiper">
                {
                    props.data.map((element)=>{
                        return(
                            <Link to={`/${element.id}`}><Movie name={element.title} image={element.poster_path} overview={element.overview} /></Link>
                        )
                    })
                }
            </div> */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </section>
    )
}