import { Card, CardHeader, CardImg, CardText } from 'react-bootstrap'
import './product.css'
import wallpaper from '../../assets/products/wallpaper.png'
import sealing from '../../assets/products/sealing.png'
import cel_img1 from '../../assets/false-ceiling/img1.jpg'
import cel_img2 from '../../assets/false-ceiling/img2.jpg'
import cel_img3 from '../../assets/false-ceiling/img3.jpg'
import door from '../../assets/products/door.png'
import door_img1 from '../../assets/aluminium_doors/img1.jpg'
import door_img2 from '../../assets/aluminium_doors/img2.jpg'
import door_img3 from '../../assets/aluminium_doors/img3.jpg'
import wardrobe from '../../assets/products/wardrobe.png'
import window from '../../assets/products/window.png'
import window_img1 from '../../assets/windows/img1.jpg'
import window_img2 from '../../assets/windows/img2.jpg'
import window_img3 from '../../assets/windows/img3.jpg'
import kitchen from '../../assets/products/kitchen.png'
import kitchen_img1 from '../../assets/kitchen/img1.jpg'
import kitchen_img2 from '../../assets/kitchen/img2.jpg'
import kitchen_img3 from '../../assets/kitchen/img3.jpg'
import glass from '../../assets/products/glass.png'
import glass_img1 from '../../assets/glass/img1.jpg'
import glass_img2 from '../../assets/glass/img2.jpg'
import glass_img3  from '../../assets/glass/img3.jpg'
import furniture from '../../assets/products/furniture.png'
import plastic from '../../assets/products/plastc_grill.png'
import pvc_img1 from '../../assets/pvc/img1.jpg'
import pvc_img2 from '../../assets/pvc/img2.jpg'
import pvc_img3 from '../../assets/pvc/img3.jpg'
import repair from '../../assets/products/repair.png'
import stairs from '../../assets/products/stairs.png'
import alstr_img1 from '../../assets/aluminium_stairs/img1.jpg'
import alstr_img2 from '../../assets/aluminium_stairs/img2.jpg'
import alstr_img3 from '../../assets/aluminium_stairs/img3.jpg'
import pvc_panel from '../../assets/pvc_panel/pvc_panel_main.jpg'
import pvc_panel_img1 from '../../assets/pvc_panel/img1.png'
import pvc_panel_img2 from '../../assets/pvc_panel/img2.png'
import pvc_panel_img3 from '../../assets/pvc_panel/img3.jpg'

import { useNavigate } from "react-router-dom";
const Product = () => {
    const images = [

        { src: [stairs], alt: "stairs", title: "Aluminium Stairs", description: "Custom aluminum stairs fabrication: durable, lightweight, corrosion-resistant, sleek design,efficient.", long_des: "Our workshop specializes in crafting high-quality aluminum stairs, combining durability with modern aesthetics. Tailored to meet your specific needs, our lightweight, corrosion-resistant stairs ensure safety and longevity. Perfect for both indoor and outdoor applications, they offer sleek, maintenance-free solutions for any space. Transform your access points with our custom-designed aluminum stairs." ,img1 :[alstr_img1],img2 :[alstr_img2],img3 :[alstr_img3] },

        { src: [sealing], alt: "sealing", title: "False Ceiling", description: "A deceptive appearance of tightness, masking flaws or vulnerabilities, potentially leading to leaks, breaches, or compromised integrity over time.", long_des: "A deceptive facade of protection, falsely promising impermeability. Superficially appearing secure, yet allowing leaks and breaches to occur, betraying trust and jeopardizing integrity. Concealing vulnerabilities, it poses risks and undermines reliability, ultimately failing to uphold its intended purpose and leaving behind disappointment and frustration in its wake.",img1 :[cel_img1],img2 : [cel_img2],img3 : [cel_img3] },

        { src: [window], alt: "window", title: "UPVC and Aluminium Window", description: "Sleek, durable frames with aluminum construction, offering modern aesthetics, strength, and energy efficiency, enhancing interiors with abundant natural light.", long_des: "Aluminium windows offer sleek, modern aesthetics with durability and strength. Their lightweight yet robust frames provide ample natural light, while thermal efficiency enhances energy savings. Versatile designs accommodate various architectural styles, complementing both residential and commercial buildings, promising longevity and low maintenance for enduring performance.",img1 :[window_img1],img2 :[window_img2],img3 :[window_img3] },

        { src: [door], alt: "door", title: "Aluminium Door", description: "A sturdy barrier with a handle and hinges, providing access, security, and privacy, while complementing architectural styles with timeless elegance.", long_des: "A door, an essential entryway fixture, serves as a gateway between spaces, offering security, privacy, and aesthetics. Crafted from various materials like wood, metal, or fiberglass, doors come in diverse styles, from traditional to contemporary, each tailored to complement architectural designs while providing functionality and curb appeal.",img1 :[door_img1],img2 :[door_img2],img3 :[door_img3] },

        { src: [kitchen], alt: "kitchen", title: "Modular Kitchen", description: "Tailoring kitchen spaces to individual preferences, incorporating personalized designs, materials, layouts, and features for functional efficiency and aesthetic appeal.", long_des: "Tailoring kitchen spaces to individual preferences, from layout and cabinetry to appliances and finishes. Options abound, whether traditional or modern, minimalist or extravagant. Personalize with bespoke countertops, storage solutions, lighting, and ergonomic designs, crafting a functional yet stylish culinary haven that reflects one's unique tastes and lifestyle impeccably.",img1 :[kitchen_img1],img2 :[kitchen_img2],img3 :[kitchen_img3]  },

        { src: [glass], alt: "glass", title: "Glass Work", description: "Artisanal glasswork: molten magic spun into delicate creations, capturing light's dance in crystalline whispers.", long_des: "Dive into the mesmerizing world of glass work at our workshop! Experience the art of shaping molten glass into stunning pieces, from vibrant beads to elegant sculptures. Learn ancient techniques like blowing, casting, and fusing under expert guidance, and unleash your creativity in a supportive, inspiring environment. Join us and transform glass into art!",img1 :[glass_img1],img2 :[glass_img2],img3 :[glass_img3]  },

        { src: [plastic], alt: "plastic", title: "Plastic Grill", description: "Precision CNC plastic grill fabrication: intricate, durable, customizable, high-quality, efficient.", long_des: "Our workshop specializes in CNC plastic grill work, utilizing state-of-the-art technology to craft precision-designed grills for various applications. With unparalleled accuracy and attention to detail, we create custom grills that are durable, lightweight, and aesthetically pleasing. Let us elevate your project with our expertise in plastic grill fabrication.",img1 :[pvc_img1],img2 :[pvc_img2],img3 :[pvc_img3]  },

        { src: [pvc_panel], alt: "Pvc_Panel", title: "PVC Panel", description: "PVC panels are versatile, easy-to-install wall and ceiling coverings, offering durability and low maintenance. They come in various designs, ideal for enhancing interiors while being cost-effective and moisture-resistant.", long_des: "PVC panels revolutionize interior design with durability, versatility, and low maintenance. Available in various designs and colors, they're ideal for kitchens and bathrooms due to their moisture resistance. Easy installation saves time and labor compared to traditional materials.",img1 :[pvc_panel_img1],img2 :[pvc_panel_img2],img3 :[pvc_panel_img3]  },
        
        { src: [wardrobe], alt: "wardrobe", title: "Almirah", description: "Crafting personalized wardrobes with precision, utilizing quality materials, innovative designs, and meticulous construction to optimize storage and enhance interior aesthetics.", long_des: "Crafting bespoke wardrobes involves meticulous planning, precise measurements, and skilled craftsmanship. From selecting quality materials to designing storage solutions, every detail is tailored to meet the client's needs. The process includes cutting, assembling, and finishing, resulting in a functional and stylish wardrobe that optimizes space and organization." },

        { src: [wallpaper], alt: "wallpaper", title: "Wallpaper", description: "Abstract, vibrant colors swirling in harmony, creating a mesmerizing display that captivates the eye and sparks the imagination.", long_des: "A breathtaking landscape stretches across the wallpaper, showcasing a tranquil sunrise over mist-covered mountains reflected in a serene lake below. The vibrant hues of dawn paint the sky with warm oranges and pinks, while silhouettes of trees stand tall against the horizon, evoking a sense of peace and serenity." },

        { src: [furniture], alt: "furniture", title: "Furniture", description: "Crafting timeless furniture pieces blending artistry, functionality, and meticulous craftsmanship.", long_des: "At our workshop, we blend traditional craftsmanship with modern design to create stunning, durable furniture. Our skilled artisans work passionately, using quality materials to bring your vision to life. From bespoke tables to custom chairs, each piece is a testament to our dedication to excellence and sustainability. Welcome to where design meets artistry." },

        { src: [repair], alt: "repair", title: "Repair Work", description: "Expert glass and aluminum repair: precision, durability, efficiency, quality craftsmanship.", long_des: "Experience seamless glass and aluminum repair services at our workshop. From fixing cracks and chips in glass to repairing dents and scratches in aluminum frames, our skilled technicians ensure quality craftsmanship and efficient solutions. Trust us to restore the functionality and aesthetics of your glass and aluminum fixtures with precision and care." },


    ]


    const navigate = useNavigate();

    return (
        <div id='product-wrapper'>
            <h2 className='title'>Our Products</h2>
            <div id='products'>
                {images.map((images, index) => (

                    <Card key={index} className='product-card' onClick={() => { navigate('/details', { state: { images } }) }}>
                        <CardHeader className='mx-auto'>{images.title}</CardHeader>
                        <CardImg src={images.src[0]} alt={images.alt} className='card-img' />
                        <CardText className='des'>
                            {images.description}
                        </CardText>
                    </Card>
                ))}

            </div>
        </div>
    )
}
export default Product