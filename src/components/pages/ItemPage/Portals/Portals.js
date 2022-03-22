import React, {useState} from 'react';
import styles from "./Portals.module.scss";
import Header from "../../../Header/Header";
import ReactDOM from "react-dom";

const Portals = () => {
    const [status, setStatus] = useState(false)
    const submit = () => {
        setStatus(!status)
    }



    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <section>
                    <h1 className={styles.pageTitle}>Portals</h1>
                    <form onSubmit={(e) => {e.preventDefault()}} className={styles.form}>
                        <div className={styles.item}>
                            <label>Email</label>
                            <input placeholder='Email'/>
                        </div>
                        <div className={styles.item}>
                            <label>Description</label>
                            <textarea cols={5} rows={10} placeholder='Description'/>
                        </div>
                        <button onClick={submit} className={styles.btn}>Submit</button>
                        {status ? <div role='status' className={styles.error}>Error</div> : null}
                        {status ? <Portal>
                            <Notification/>
                        </Portal> : null}
                    </form>
                </section>
            </main>
        </div>
    );
};

const Portal = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node)
}

const Notification = () => {
    return (
        <div role='status' className={styles.success}>Success</div>
    )
}

export default Portals;
