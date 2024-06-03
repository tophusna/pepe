import ImgButton from "./ImgButton";

const DownButton = (props) => {


    const scrollToSection = () => {
        const section = document.getElementById(props.target);

        if (section) {
            section.scrollIntoView({ behavior: 'instant' });
        }
    };



    return (
        <div className="flex justify-center">
            <ImgButton>
                <img className="btn" onClick={scrollToSection} src="/img/downBtn.png" width={50} />
            </ImgButton>
        </div>
    )
}

export default DownButton