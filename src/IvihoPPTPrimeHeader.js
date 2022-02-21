import React from "react";
import { folderArray, linkArray, parentMenuArray } from "./folderArray";

const IvihoPPTPrimeHeader = ({
  mainContent,
  previousFolder,
  index,
  index1,
  index2,
  leftIndex1,
  leftIndex2,
  menuShown,
  setMenuShown,
  props,
  openFullscreen,
}) => {
  const {
    content,
    color,
    identifier,
    fileheader,
    directory,
    width,
    height,
    align,
    ifThumbnail,
    ifHidden,
  } = mainContent;

  const selected = JSON.parse(sessionStorage.getItem("selected"));
  const parentMenu = JSON.parse(sessionStorage.getItem("parentMenu"));

  const linkTo = (index) => {
    if (index !== 0) {
      if (!parentMenuArray.some((i) => i === index)) {
        sessionStorage.setItem("selected", JSON.stringify(index));
        return window.location.assign("/" + linkArray[index]);
      }
      if (menuShown === index) setMenuShown(0);
      else {
        sessionStorage.setItem("parentMenu", JSON.stringify(index));
        setMenuShown(index);
      }
    } else {
      openFullscreen();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: identifier === "header" ? "flex-start" : "center",
        width:
          (folderArray[index1] === "introduction" ||
            folderArray[index1] === "itskills") &&
          index2 === 1
            ? "400px"
            : (folderArray[index1] === "introduction" ||
                folderArray[index1] === "itskills") &&
              index2 === 3
            ? folderArray[index1] === "itskills"
              ? "280px"
              : "280px"
            : (folderArray[index1] === "introduction" ||
                folderArray[index1] === "itskills") &&
              (index2 === 2 || index2 === 4)
            ? "140px"
            : "",
      }}
    >
      {identifier === "header" && (
        <div>
          <div
            style={{
              margin: "3px",
              marginTop: "10px",
              // marginRight: "50px",
            }}
          >
            <div
              style={{
                width: width && width !== "none" ? `${width}px` : "100%",
                height: "3px",
                marginLeft: "-10px",
                backgroundColor: color.split("/")[0],
              }}
            />
          </div>
          <div
            style={{
              padding: "5px",
              margin: "-8px 3px 3px 3px",
              // marginRight: "50px",
            }}
          >
            {" "}
            {!(content.includes(".jpg") || content.includes(".png")) ? (
              <div
                style={{
                  display: "flex",
                  width: width && width !== "none" ? `${width}px` : "100%",
                  height: height ? `${height}px` : "auto",
                  // minHeight: "100px",
                  paddingTop: "3px",
                  fontSize: "14px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  lineHeight: "25px",
                  letterSpacing: "0.5px",
                  backgroundColor: "white",
                  border: "solid 0.01px gray",
                }}
              >
                {content}
              </div>
            ) : (
              <div
                style={{
                  overflow: "hidden",
                  border: "solid 0.1px gray",
                  marginBottom: "5px",
                  width: width && width !== "none" ? `${width}px` : "100%",
                }}
              >
                <img
                  src={`${directory}${content}`}
                  style={{
                    width: width && width !== "none" ? `${width}px` : "100%",
                    // maxHeight: "200px",
                    marginLeft: fileheader ? "-20px" : "",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
      {identifier === ("content" || null) && ( //////////////////////
        <>
          {/* || menuShown === ifHidden */}
          {/* {ifHidden?ifHidden.split("/")[0] === "true" && ( */}
          {leftIndex2 !== null &&
            (!ifHidden ||
              menuShown === parseInt(ifHidden) ||
              parentMenu === parseInt(ifHidden)) && (
              <div
                style={{
                  padding: "5px",
                  margin: "3px",
                  marginTop:
                    leftIndex2 === 0 &&
                    (!ifHidden ||
                      menuShown === parseInt(ifHidden) ||
                      parentMenu === parseInt(ifHidden))
                      ? "0px"
                      : fileheader !== null && fileheader !== "FALSE"
                      ? "20px"
                      : "10px",
                  // marginRight: "50px",
                }}
              >
                {ifThumbnail && ifThumbnail.length !== 0 && (
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: ifThumbnail.includes("big")
                        ? "-140px"
                        : "-90px",
                      marginTop: "90px",
                    }}
                  >
                    <img
                      src={
                        ifThumbnail.includes(".png")
                          ? `/csv/${previousFolder}/${
                              ifThumbnail.split("/")[0]
                            }`
                          : `/csv/${previousFolder}/${content}`
                      }
                      style={{
                        position: "absolute",
                        width: ifThumbnail.includes("big") ? `150px` : "100px",
                        // maxHeight: "200px",
                        border: "1.5px solid blue",
                        borderRadius: "5px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />{" "}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: fileheader.split("/")[0].includes("l")
                      ? "flex-start"
                      : "flex-end",
                  }}
                >
                  {fileheader !== "FALSE" && fileheader.length > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        marginLeft: fileheader.split("/")[0].includes("l")
                          ? "-30px"
                          : "230px",
                        marginTop: fileheader.split("/")[0].includes("l")
                          ? "-20px"
                          : "-20px",
                        height: "30px",
                      }}
                    >
                      <div style={{}}>
                        {fileheader.split("/")[0].includes("r") && (
                          <div
                            style={{
                              width: "250px",
                              height: "3px",
                              marginLeft: "-10px",
                              // marginLeft: "-10px",
                              backgroundColor:
                                fileheader.split("/")[1] === "f"
                                  ? "black"
                                  : "black",
                              borderTopRightRadius: fileheader
                                .split("/")[0]
                                .includes("l")
                                ? "5px"
                                : "0",
                              borderTopLeftRadius: fileheader
                                .split("/")[0]
                                .includes("l")
                                ? "0px"
                                : "5px",
                            }}
                          />
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          height: "30px",
                          // minHeight: "100px",
                          fontSize: "14px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          lineHeight: "25px",
                          letterSpacing: "0.5px",
                          backgroundColor: "white",
                          border: "solid 0.01px gray",
                          borderBottomRightRadius: fileheader
                            .split("/")[0]
                            .includes("l")
                            ? "10px"
                            : "0px",
                          borderTopLeftRadius: fileheader
                            .split("/")[0]
                            .includes("l")
                            ? "10px"
                            : "0px",
                          borderBottomLeftRadius: fileheader
                            .split("/")[0]
                            .includes("l")
                            ? "0px"
                            : "10px",
                          borderTopRightRadius: fileheader
                            .split("/")[0]
                            .includes("l")
                            ? "0px"
                            : "10px",
                          justifyContent: align ? align : "",
                        }}
                      >
                        {fileheader.split("/")[0].includes("f") ||
                        fileheader.split("/")[0].includes("b") ? (
                          <>
                            {" "}
                            {fileheader.split("/")[0].includes("f") &&
                              `frontend/${fileheader.split("/")[1]}`}
                            {fileheader.split("/")[0].includes("b") &&
                              `backend/${fileheader.split("/")[1]}`}
                          </>
                        ) : (
                          <>
                            {" "}
                            {!fileheader.split("/")[0].includes("f") &&
                            !fileheader.split("/")[0].includes("b") &&
                            fileheader.split("/")[0] === "l"
                              ? fileheader.split("/")[1]
                              : fileheader.split("/")[0] === "r"
                              ? fileheader.split("/")[1]
                              : fileheader}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  style={{
                    width: width && width !== "none" ? `${width}px` : "100%",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "3px",
                      backgroundColor:
                        leftIndex2 === 0 && parentMenu === index
                          ? "#FF6F61"
                          : selected === index
                          ? "orange"
                          : content.includes(".jpg") ||
                            (content.includes(".png") && !fileheader)
                          ? "#34568B"
                          : fileheader.length !== 0
                          ? color.split("/")[0]
                            ? color.split("/")[0]
                            : "#FF6F61"
                          : "black",
                      marginTop:
                        (folderArray[index1] === "introduction" ||
                          folderArray[index1] === "itskills") &&
                        !(index === 0)
                          ? "25px"
                          : "",

                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  />
                  <div
                    style={{ display: "flex" }}
                    role={leftIndex2 === 0 ? `button` : undefined}
                    onClick={leftIndex2 === 0 ? () => linkTo(index) : undefined}
                  >
                    <div
                      style={{
                        display: "flex",
                        width:
                          width && width !== "none" ? `${width}px` : "100%",

                        height: height ? `${height}px` : "auto",
                        paddingTop: "3px",
                        fontSize: "14px",
                        paddingTop:
                          leftIndex2 === 0 &&
                          (!ifHidden ||
                            menuShown === parseInt(ifHidden) ||
                            parentMenu === parseInt(ifHidden))
                            ? "3px"
                            : "7px",
                        paddingBottom:
                          leftIndex2 === 0 &&
                          (!ifHidden ||
                            menuShown === parseInt(ifHidden) ||
                            parentMenu === parseInt(ifHidden))
                            ? "3px"
                            : "7px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                        color: color.split("/")[1]
                          ? color.split("/")[1]
                          : "black",
                        lineHeight: "25px",
                        letterSpacing: "0.5px",
                        backgroundColor:
                          leftIndex2 === 0 && !ifHidden
                            ? "#e1f5fe"
                            : leftIndex2 === 0 && "#fafafa",
                        border:
                          height === "none"
                            ? "transparent"
                            : "solid 0.01px gray",
                        // borderBottom: "solid 0.01px gray",
                        borderLeft: "none",
                        justifyContent: align ? align : "",
                        borderRight: content.split("/")[1]
                          ? "solid 0.01px gray"
                          : "none",
                      }}
                    >
                      {!(
                        content.split("/")[0].includes(".jpg") ||
                        content.split("/")[0].includes(".png")
                      ) ? (
                        content.split("/")[0]
                      ) : (
                        <img
                          src={`${directory}${content.split("/")[0]}`}
                          style={{
                            width: width && width !== "none" ? `100%` : "100%",
                            // maxHeight: "200px",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </div>
                    {content.split("/")[1] && (
                      <div
                        style={{
                          display: "flex",
                          width:
                            width && width !== "none" ? `${width}px` : "100%",
                          // minHeight: "100px",
                          height: height ? `${height}px` : "auto",
                          paddingTop: "3px",
                          fontSize: "14px",
                          paddingTop: "7px",
                          paddingBottom: "7px",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          color: color.split("/")[1]
                            ? color.split("/")[1]
                            : "black",
                          lineHeight: "25px",
                          letterSpacing: "0.5px",
                          // backgroundColor: "#fff59d",
                          border:
                            height === "none"
                              ? "transparent"
                              : "solid 0.01px gray",
                          // borderBottom: "solid 0.01px gray",
                          borderRight: "none",
                          borderLeft: content.split("/")[1]
                            ? "none"
                            : "solid 0.01px gray",
                        }}
                      >
                        {!(
                          content.split("/")[1].includes(".jpg") ||
                          content.split("/")[1].includes(".png")
                        ) ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "30px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "-30px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "30px",
                                  marginRight: "10px",
                                  marginTop: "-3px",
                                }}
                              >
                                ·
                              </span>
                              {content.split("/")[1]}
                            </div>
                          </div>
                        ) : (
                          <img
                            src={`${directory}${content.split("/")[1]}`}
                            style={{
                              width:
                                width && width !== "none" ? `100%` : "100%",
                              // maxHeight: "200px",
                              objectFit: "contain",
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      height: "3px",
                      backgroundColor:
                        leftIndex2 === 0 && parentMenu === index
                          ? "#FF6F61"
                          : selected === index
                          ? "orange"
                          : content.includes(".jpg") ||
                            (content.includes(".png") && !fileheader)
                          ? "#34568B"
                          : fileheader.length !== 0
                          ? color.split("/")[0]
                            ? color.split("/")[0]
                            : "#FF6F61"
                          : "black",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                      // marginBottom: "5px",
                    }}
                  />
                </div>
              </div>
            )}
        </>
      )}
      {identifier === ("text" || null) && ( //////////////////////
        <div
          style={{
            padding: "5px",
            margin: "10px 3px 3px 3px",
            // marginLeft:
            //   (folderArray[index1] === "introduction" ||
            //     folderArray[index1] === "itskills") &&
            //   !(index === 0)
            //     ? "5px"
            //     : "",
            // width:
            //   (folderArray[index1] === "introduction" ||
            //     folderArray[index1] === "itskills") &&
            //   index2 === 3
            //     ? folderArray[index1] === "itskills"
            //       ? "450px"
            //       : "280px"
            //     : index2 === 1
            //     ? "450px"
            //     : index2 === 1,
            // // marginRight: "50px",
          }}
        >
          <div
            style={{
              width: width && width !== "none" ? `${width}px` : "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: width && width !== "none" ? `${width}px` : "100%",
                // minHeight: "100px",
                height: height ? `${height}px` : "auto",
                paddingTop: "3px",
                fontSize:
                  folderArray[index1] === "introduction" ||
                  folderArray[index1] === "itskills"
                    ? "12px"
                    : "14px",
                paddingTop:
                  folderArray[index1] === "introduction" ||
                  folderArray[index1] === "itskills"
                    ? "0px"
                    : "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "black",
                lineHeight: "25px",
                justifyContent: align ? align : "",
                marginTop:
                  folderArray[index1] === "introduction" ||
                  folderArray[index1] === "itskills"
                    ? "-10px"
                    : "0",
                marginBottom: "5px",
                letterSpacing: "0.5px",
                backgroundColor: "white",
                // border: height === "none" ? "transparent" : "solid 0.01px gray",
                borderBottom: "solid 2px gray",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft:
                    (folderArray[index1] === "introduction" ||
                      folderArray[index1] === "itskills") &&
                    (index2 === 1 || index2 === 3)
                      ? "5px"
                      : ((folderArray[index1] === "introduction" ||
                          folderArray[index1] === "itskills") &&
                          index2 === 2) ||
                        index2 === 4
                      ? "0px"
                      : "-30px",
                }}
              >
                {folderArray[index1] === "introduction" ||
                folderArray[index1] === "itskills" ? (
                  <></>
                ) : (
                  <span
                    style={{
                      fontSize: "30px",
                      marginRight: "10px",
                      marginTop: "-3px",
                    }}
                  >
                    ·
                  </span>
                )}
                <div
                  style={{
                    justifyContent:
                      (folderArray[index1] === "introduction" ||
                        folderArray[index1] === "itskills") &&
                      (index2 === 2 || index2 === 4)
                        ? "center"
                        : "",
                  }}
                ></div>{" "}
                {content.split("/")[0]}
              </div>
              {content.split("/")[1] && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "30px", marginRight: "10px" }}>
                    ·
                  </span>
                  {content.split("/")[1]}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IvihoPPTPrimeHeader;
