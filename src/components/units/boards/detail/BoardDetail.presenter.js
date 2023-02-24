export default function BoardDetailUI(props) {
  return (
    <>
      <div>
        제목 : {props.data ? props.data.fetchProduct.name : "Loading..."}
      </div>
      <div>
        판매자 : {props.data ? props.data.fetchProduct.seller : "Loading..."}
      </div>
      <div>
        내용 : {props.data ? props.data.fetchProduct.detail : "Loading..."}
      </div>
      <div>
        가격 : {props.data ? props.data.fetchProduct.price : "Loading..."}
      </div>
    </>
  );
}
