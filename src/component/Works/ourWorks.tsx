import { Card, CardImg } from 'react-bootstrap'
import './ourWorks.css'
import building1 from '../../assets/works/building.jpg'
import building2 from '../../assets/works/building2.jpg'
import building3 from '../../assets/works/building3.jpg'
import building4 from '../../assets/works/building4.jpg'
import door from '../../assets/works/door.jpg'
import kitchen from '../../assets/works/kitchen.jpg'
import fan from '../../assets/works/fan.jpg'
import stairs from '../../assets/works/stairs.jpg'
const Works = () => {
    const images = [

        { src: building1, alt: "stairs"},

        { src: stairs, alt: "ciling"},

        { src: building2, alt: "building"},

        { src: building3, alt: "building"},

        { src: door, alt: "door"},

        { src: kitchen, alt: "kitchen"},

        { src: building4, alt: "building"},

        { src: fan, alt: "false ciling"},
        
    ]

    return (
        <div id='work-wrapper'>
            <h2 className='title'>Past Projects</h2>
            <div id='work-images'>
                {images.map((images, index) => (

                    <Card key={index} className='work-card'>
                        <CardImg src={images.src} alt={images.alt} className='card-img work-img' />
                    </Card>
                ))}

            </div>
        </div>
    )
}
export default Works