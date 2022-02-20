import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
// 거의 정사각형 562x557  // 코드사진 : 740x295 // 경로 : 669 x 34

import IvihoPPTMain from "./IvihoPPTMain";
import csvJSON from "./csvJson";
import { folderArray } from "./folderArray";
import { SpinnerCircular } from "spinners-react";
import { ArrowBackIosNew, ArrowForwardIos, Face } from "@mui/icons-material";

const IvihoPPT = () => {
  const [article, setArticle] = useState([]);
  const [selected, setSelected] = useState(null);
  const [parentMenu, setParentMenu] = useState(null);
  const [whichArrowHide, setWhichArrowHide] = useState(null);
  let [enabled, setEnabled] = useState(true);
  let [moveDirection, setMoveDirection] = useState(null);

  const saveMenu = (index) => {
    setParentMenu(index);
  };
  const props = { selected, setSelected, parentMenu, setParentMenu, saveMenu };

  let totalArray = [];
  // console.log(folderArray);
  async function loop() {
    for (var j = 0; j < 26; j++) {
      let tempArray = [];
      let iValue;
      if (folderArray[j] === "introduction" || folderArray[j] === "itskills")
        iValue = 5;
      else if (folderArray[j] === "one") iValue = 6;
      else iValue = 3;
      for (var i = 0; i < iValue; i++) {
        await fetch(`../csv/${folderArray[j]}/${i}.csv`)
          .then((response) => response.text())
          .then((responseText) => {
            const result = csvJSON(responseText, `/csv/${folderArray[j]}/`);
            if (result.length !== 0) tempArray.push(result);
          });
      }
      totalArray.push(tempArray);
    }

    // console.log("totalArray", totalArray);

    setArticle(() => totalArray);
    if (totalArray.length !== 0) {
      // sessionStorage.setItem("key", JSON.stringify(totalArray));
    }
    setEnabled(false);
    sessionStorage.setItem("rendered", JSON.stringify("on"));
  }
  const leftClick = () => {
    setMoveDirection("left");
  };

  const rightClick = () => {
    setMoveDirection("right");
  };
  useEffect(() => {
    loop();
  }, []);

  // const newLocal = JSON.parse(sessionStorage.getItem("key"));
  const rendered = JSON.parse(sessionStorage.getItem("rendered"));

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          width: "100vw",
          height: "100vh",
          paddingLeft: enabled ? "0px" : "50px",
          paddingTop: enabled ? "0px" : "20px",
          // background: "url(/image/mainBackground.png)",
        }}
      >
        {!enabled && (
          <>
            {whichArrowHide !== "left" && (
              <div
                role="button"
                onClick={leftClick}
                style={{
                  position: "absolute",
                  left: "150px",
                  width: "30px",
                  top: "40%",
                  display: "flex",
                  zIndex: "999",
                  border: "solid 0.1px black",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <ArrowBackIosNew
                  style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "-11px",
                  }}
                />
              </div>
            )}
            {whichArrowHide !== "right" && (
              <div
                role="button"
                onClick={rightClick}
                style={{
                  position: "absolute",
                  right: "10px",
                  width: "30px",
                  top: "40%",
                  display: "flex",
                  zIndex: "999",
                  border: "solid 0.1px black",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <ArrowForwardIos
                  style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "-11px",
                  }}
                />
              </div>
            )}
          </>
        )}

        {enabled ? (
          <>
            {rendered === "on" ? (
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <SpinnerCircular enabled={enabled} size={200} />
              </div>
            ) : (
              <div>
                <div
                  style={{
                    position: "absolute",
                    marginLeft: "40px",
                    marginTop: "200px",
                  }}
                >
                  <SpinnerCircular enabled={enabled} size={100} />
                </div>
                <img
                  src="https://i.imgur.com/jPvuof5.png"
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            )}
          </>
        ) : (
          <>
            {" "}
            {article.map((item1, index1) => {
              return (
                <div
                  key={index1}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    overflow: "hidden",
                    backgroundColor: "white",
                    // justifyContent: "center",
                  }}
                >
                  {item1.map((item2, index2) => {
                    return (
                      <Routes key={index2}>
                        <Route
                          path={`${folderArray[index1]}`}
                          element={
                            <IvihoPPTMain
                              key={index2}
                              mainContent={item2}
                              index1={index1}
                              index2={index2}
                              props={props}
                              moveDirection={moveDirection}
                              setWhichArrowHide={setWhichArrowHide}
                            />
                          }
                        />{" "}
                        <Route
                          path="/"
                          element={<Navigate replace to="/introduction" />}
                        />
                      </Routes>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default IvihoPPT;
