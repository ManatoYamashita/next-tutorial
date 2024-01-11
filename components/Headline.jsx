import { Header } from './header';
import style from '../styles/header.module.css';

const Headline = (props) => {
    return (
        <>
            <h1 className={style.center}>{ props.title }</h1>
            <Header page={props.page} />
        </>
    );
  };

export default Headline;