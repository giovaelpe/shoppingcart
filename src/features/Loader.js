import './Loader.css';

export function Loader(props) {
    return (
        <div className="loader">
            <span className="material-symbols-outlined loader-icon">
                sync
            </span>
            <span className="loader-text">Loading...</span>
        </div>
    );
}