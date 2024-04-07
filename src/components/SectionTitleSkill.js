const SectionTitleSkill = ({ heading, subHeading, text }) => {
    return (
        <div className="row section-heading">
            <div className="col-lg-12">
                <h6>
                    <span>{subHeading}</span>
                </h6>
                <h3>
                    <span>{heading}</span>
                </h3>
                {text && <p>{text}</p>}

            </div>
        </div>
    );
};
export default SectionTitleSkill;
