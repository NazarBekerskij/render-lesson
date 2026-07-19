import clsx from "clsx";
import style from "./List.module.css";


function List({ products }) {
  return (
    <ul className={style.list}>
      {products.map(({ id, name, category, price, rating, inStock, status }) => {
        return (
          <li
            className={clsx(style.item, inStock ? style.activeitem : style.notactiveitem)}
            key={id}
          >
            <h2  className={clsx(style.title, rating >= 4 ? style.activetitle : style.notactivetitle)}>{name}</h2>
            <p className={style.category}>{category}</p>
            <p className={style.price}>{price}</p>
            <p className={style.rating}>{rating}</p>
            <p 
            className={inStock ? style.active : style.notactive}    
            >
              {inStock ? "новий" : "не новий"}
            </p>
            <p className={style.status}>{status}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;