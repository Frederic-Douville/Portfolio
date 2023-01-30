import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';

function Credits() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });

    return (
        <div className="page d-flex f-d-column j-c-flexStart a-i-center">
            <div className="credits-ctn unfocus d-flex f-d-column j-c-spaceBetween a-i-center">
                <a
                    href="https://fontawesome.com"
                    target="_blank"
                    rel="noreferrer"
                    className="credits-link"
                >
                    Icônes par fontawesome
                </a>
                <a
                    href="https://fr.vecteezy.com/vecteur-libre/brush"
                    target="_blank"
                    rel="noreferrer"
                    className="credits-link"
                >
                    Brush Vecteurs par Vecteezy
                </a>
                <a
                    href="https://fr.vecteezy.com/vecteur-libre/nuage"
                    target="_blank"
                    rel="noreferrer"
                    className="credits-link"
                >
                    Nuage Vecteurs par Vecteezy
                </a>
            </div>
        </div>
    );
}

export default Credits;
