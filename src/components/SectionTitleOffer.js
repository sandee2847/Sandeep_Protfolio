const SectionTitleOffer = ({ heading, subHeading, text }) => {
    return (
        <div className="row section-heading">
            <div className="col-lg-12">
                <h6>
                    <span>{subHeading}</span>
                </h6>
                <h3>
                    <span>{heading}</span>
                </h3>
                {text && <p><b>React.js:</b> {text}</p>}
                <p><b>Front-End Development:</b> Crafting engaging and responsive user interfaces using modern technologies like HTML5, CSS3, and JavaScript frameworks such as React.js.</p>
                <p><b>React.js Development:</b> Leveraging the power of React.js to build interactive and dynamic web applications with reusable components and efficient state management.</p>
                <p><b>UI/UX Design: </b> Creating intuitive and visually appealing designs that prioritize user experience, ensuring seamless navigation and interaction across devices.</p>
                <p><b>Responsive Web Design: </b> Developing websites that adapt and perform flawlessly on various devices and screen sizes, enhancing user engagement and satisfaction.</p>
                <p><b>Custom Web Application Development: </b> Designing and developing tailored web applications that meet specific business requirements, delivering solutions that drive growth and efficiency.</p>
                <p><b>API Integration: </b> Integrating RESTful APIs to enable seamless communication between front-end interfaces and backend systems, facilitating data exchange and functionality.</p>
                <p><b>E-commerce Solutions: </b> Building secure and scalable e-commerce platforms with robust features like shopping carts, payment gateways, and inventory management systems.</p>
                <p><b>Maintenance and Support: </b> Providing ongoing maintenance and support services to ensure the continuous operation and optimal performance of web applications, including updates and troubleshooting.</p>
                <p><b>Consultation and Collaboration: </b> Offering expert advice and collaborative partnership throughout the development lifecycle, from initial ideation to deployment and beyond.</p>
                <p><b>Code Review and Optimization: </b> Conducting thorough code reviews and optimizations to enhance performance, scalability, and maintainability of existing web applications.</p>
                <p>Let's discuss how I can help bring your vision to life and achieve your goals.</p>
            </div>
        </div>
    );
};
export default SectionTitleOffer;
