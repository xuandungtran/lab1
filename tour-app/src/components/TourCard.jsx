import Button from "./Button";

// tham so props
// {title: tieu de tour,
// image: hinh anh tour }
function TourCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} width={500} />
      <h3 className="font-semibold">{props.title}</h3>
      <Button label="Đặt Tour" />
      <Button label="Xem Thêm" />
    </div>
  );
}

export default TourCard;
