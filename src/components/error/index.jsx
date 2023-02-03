import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';

function Error() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });
    return (
        <div className="error-ctn page">
            <span className="error-nbr">404</span>
            <span className="error-pitch">Cette page n'existe pas !</span>
            <Link to="/" className="error-link">
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default Error;
