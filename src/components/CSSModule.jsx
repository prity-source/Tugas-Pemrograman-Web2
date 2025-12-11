import React from 'react';
import styles from './CSSModules.module.css';

function CSSModules() {
    return (
        <div classname={styles.container}>
            <button className={styles.button}>
                CSS Modules Button
            </button>
            <p className={styles.text}>
                This is uses CSS Modules for scoped styling
            </p>
        </div>
    );
}

export default CSSModules;