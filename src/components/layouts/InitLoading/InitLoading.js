import classes from './InitLoading.module.css';
const InitLoading = props =>{
    setTimeout(props.loadIntro,5000);
    return <section className={classes["loading__container"]}>
    <div className={classes["loading"]}>
        <h3 className={classes["loading__text"]}>
            BIG BANG IN <span className={classes["loading__count"]}></span>
        </h3>
        <div className={classes["loading__bang"]}></div>
    </div>
    </section>;
}
export default InitLoading;