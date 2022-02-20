import React from "react";

const IvihoPPTStarter = () => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      window.location.href = `/IvihoPPT/introduction`;
    }
  });

  var elem = document.getElementById("myvideo");
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        paddingTop: "50px",
        // background: "url(/image/mainBackground.png)",
        overflow: "hidden",
      }}
    >
      <div style={{ margin: "0px 350px 0px 350px" }}>
        {" "}
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderTopLeftRadius: "5px",

            borderTopRightRadius: "5px",
            // marginBottom: "5px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
            marginBottom: "5px",
          }}
        >
          리액트 개인 프로젝트
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            // marginBottom: "5px",
          }}
        />
      </div>
      <div style={{ margin: "100px 550px 0px 550px" }}>
        {" "}
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            marginBottom: "5px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            marginBottom: "5px",
          }}
        >
          홍 휘 표
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            // marginBottom: "5px",
          }}
        />
      </div>
      <div style={{ margin: "50px 300px 0px 300px" }}>
        {" "}
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            marginBottom: "5px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            marginBottom: "5px",
          }}
        >
          개 발 기 간 : 12월 15일 ～2월 9일
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: "#FF6F61",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            // marginBottom: "5px",
          }}
        />
      </div>{" "}
      <div
        style={{
          margin: "120px 300px 0px 300px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div role="button" style={{ width: "45%" }}>
          {" "}
          <div
            style={{
              height: "3px",
              backgroundColor: "#34568B",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              marginBottom: "5px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              marginBottom: "5px",
            }}
          >
            전체화면으로 보기
          </div>
          <div
            style={{
              height: "3px",
              backgroundColor: "#34568B",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              // marginBottom: "5px",
            }}
          />
        </div>
        <div role="button" style={{ width: "45%" }}>
          {" "}
          <div
            style={{
              height: "3px",
              backgroundColor: "#34568B",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              marginBottom: "5px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              marginBottom: "5px",
            }}
          >
            스크롤하여 보기
          </div>
          <div
            style={{
              height: "3px",
              backgroundColor: "#34568B",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              // marginBottom: "5px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IvihoPPTStarter;
