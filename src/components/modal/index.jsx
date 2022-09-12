import Cross from '../../assets/icones_svg/xmark-solid.svg';
import CV from '../../assets/CV_Frédéric_Douville.jpg';

function Modal({ functionBtn }) {
    return (
        <div className="modal-bg d-flex j-c-center a-i-center">
            <div className="modal-ctn">
                <button
                    className="modal-btn d-flex j-c-center a-i-center"
                    onClick={functionBtn}
                >
                    <img src={Cross} alt="croix" className="modal-cross" />
                </button>
                <div className="modal-img-ctn">
                    <img src={CV} alt="CV" />
                </div>
            </div>
        </div>
    );
}

export default Modal;
