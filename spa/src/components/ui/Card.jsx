function Card({ title, children }) {
  return (
    <div className="Card">
      <div>{title}</div>
      <div className="content">{children}</div>
    </div>
  );
}
export default Card;
