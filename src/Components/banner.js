import bannerImage from '../images/banner_image.jpg'

const Banner = () => {
    return (
     <div className='banner'>
        <img src={bannerImage} alt='forest' className='banner-image'/>
     </div>
    )
}

export default Banner