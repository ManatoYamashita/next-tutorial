import { Header } from './header';
import style from '../app/page.module.css';

const Headline = (props) => {
    return (
        <>
            <h1 className={style.title}>{ props.title }</h1>
            <Header page={props.page} />
        </>
    );
  };

export default Headline;