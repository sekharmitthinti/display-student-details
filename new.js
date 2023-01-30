const Book=(props)=>{
    const { Name ,RollNo, Marks}=props;
    return(
        <article className="book">
      <h1>Name={Name}</h1>
      <h1>RollNo={RollNo}</h1>
      <h1>Marks={Marks} </h1>
      <br/><br/>
    </article>
    )
}
export default Book