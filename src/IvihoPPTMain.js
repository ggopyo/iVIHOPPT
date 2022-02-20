import React, { useEffect, useState } from "react";
import IvihoPPTPrimeHeader from "./IvihoPPTPrimeHeader";
import { folderArray } from "./folderArray";

const IvihoPPTMain = ({
  mainContent,
  index1,
  index2,
  props,
  moveDirection,
  setWhichArrowHide,
}) => {
  const [menuShown, setMenuShown] = useState(0);
  var elem = document.documentElement;
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
  const leftTrigger = () => {
    if (index1 !== 0) {
      sessionStorage.setItem("selected", JSON.stringify(null));
      sessionStorage.setItem("parentMenu", JSON.stringify(null));
      window.location.assign(`/${folderArray[index1 - 1]}`);
    }
  };
  const rightTrigger = () => {
    if (index1 !== folderArray.length - 1) {
      sessionStorage.setItem("parentMenu", JSON.stringify(null));
      sessionStorage.setItem("selected", JSON.stringify(null));
      window.location.assign(`/${folderArray[index1 + 1]}`);
    }
  };

  useEffect(() => {
    if (moveDirection === "right")
      if (index1 !== folderArray.length - 1) {
        rightTrigger();
      }
    if (moveDirection === "left")
      if (index1 !== 0) {
        leftTrigger();
      }
  }, [moveDirection]);
  useEffect(() => {
    if (index1 === folderArray.length - 1) setWhichArrowHide("right");
    else if (index1 === 0) setWhichArrowHide("left");
    else setWhichArrowHide(null);
  }, []);
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight")
      if (index1 !== folderArray.length - 1) {
        sessionStorage.setItem("parentMenu", JSON.stringify(null));
        sessionStorage.setItem("selected", JSON.stringify(null));
        window.location.assign(`/${folderArray[index1 + 1]}`);
      }

    if (event.key === "ArrowLeft") {
      if (index1 !== 0) {
        sessionStorage.setItem("parentMenu", JSON.stringify(null));
        sessionStorage.setItem("selected", JSON.stringify(null));

        window.location.assign(`/${folderArray[index1 - 1]}`);
      }
    }
  });

  return (
    <div>
      {" "}
      {index2 === 0 ? (
        <div>
          {" "}
          <div
            style={{
              position: "absolute",
              flexDirection: "column",
              backgroundColor: "white",
              // borderRadius: "10px",
              marginLeft: "-30px",
              paddingRight: "15px",
              // border: "solid 1px gray",
              borderRight: "solid 1px gray",
            }}
          >
            {mainContent.map((item, index) => (
              <IvihoPPTPrimeHeader
                key={index}
                mainContent={item}
                index={index}
                leftIndex1={index1}
                leftIndex2={index2}
                previousFolder={`${folderArray[index1 - 1]}`}
                menuShown={menuShown}
                setMenuShown={setMenuShown}
                props={props}
                openFullscreen={openFullscreen}
              />
            ))}
          </div>{" "}
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              paddingLeft: "20px",
              paddingRight:
                folderArray[index1] === "introduction" ||
                folderArray[index1] === "itskills"
                  ? "0px"
                  : "20px",
              marginLeft:
                index2 === 1
                  ? "130px"
                  : folderArray[index1] === "introduction" ||
                    folderArray[index1] === "itskills"
                  ? index2 === 3
                    ? "30px"
                    : "0px"
                  : "30px",
              borderRadius: "10px",
              // border: "solid 1px gray",
            }}
          >
            {mainContent.map((item, index) => (
              <IvihoPPTPrimeHeader
                key={index}
                mainContent={item}
                index={index}
                previousFolder={`${folderArray[index1 - 1]}`}
                index1={index1}
                index2={index2}
                props={props}
              />
            ))}
          </div>{" "}
        </div>
      )}
    </div>
  );
};
export default IvihoPPTMain;
