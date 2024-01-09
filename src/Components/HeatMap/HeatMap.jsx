import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import CalendarHeatMap from "react-calendar-heatmap";
// import CalendarHeatMap from "@uiw/react-heat-map";
// import Tooltip from "@uiw/react-tooltip";

import "react-calendar-heatmap/dist/styles.css";
import { connect } from "react-redux";

const containerStyle = {
  bgColor: "#d3d3d3",
  padding: "50px",
};

const heatMap = {
  width: "100%",
};

const HeatMap = ({ heatMap }) => {
  const [currentValues, setCurrentValues] = useState([]);

  return (
    <Box sx={containerStyle}>
      <CalendarHeatMap
        style={heatMap}
        startDate={new Date("2023/12/31")}
        endDate={new Date("2024/12/31")}
        values={heatMap ? heatMap : []}
      />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  //   heatMap: state.tracker.heatMap,
});
export default connect(mapStateToProps)(HeatMap);
