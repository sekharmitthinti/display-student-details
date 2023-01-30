
import ReactDOM  from "react-dom/client";
import books from "./details";
import Book from "./new";

function Booklist(props){
    return(
        <>
        <h1>{props.message}</h1>
        <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
        </section>
        </>
    )
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
export default Booklist;