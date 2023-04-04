const MazeLayout = ({ grid }) => {
  return (
    <div className="layout">
      {grid.map((row, rowIdx) => (
        <div style={{ display: "flex" }}>
          {row.map((col, colIdx) => {
            return col ? (
              rowIdx === 0 && colIdx === 8 ? (
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#c7c3c1",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: 45,
                      width: 45,
                      borderRadius: "50%",
                      backgroundColor: "red",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    style={{
                      height: 35,
                      width: 35,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: "50%",
                      backgroundColor: "red",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  <div
                    style={{
                      height: 5,
                      width: 5,
                      borderRadius: "50%",
                      backgroundColor: "red",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#c7c3c1",
                  }}
                />
              )
            ) : (
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "white",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MazeLayout;
