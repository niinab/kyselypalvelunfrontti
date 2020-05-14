import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart extends Component {
  state = {
    loading: true,
    pieConfigs: {}
  };
  componentDidMount() {
    fetch("http://zoomerkysely.herokuapp.com/api/kysely/4/vastaus")
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false,
          pieConfigs: {
            type: "Pie3D",
            width: 600,
            height: 400,
            dataFormat: "json",
            dataSource: response
          }
        });
      });
  }
  render() {
    if (this.state.loading) return <>Loading..</>;
    return <ReactFC {...this.state.pieConfigs} />;
  }
}

ReactDOM.render(<Chart />, document.getElementById("root"));