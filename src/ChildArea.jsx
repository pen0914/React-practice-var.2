import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { opeN, onClickClosE } = props;

  const data = [...Array(20).keys()];
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {opeN ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClosE}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
