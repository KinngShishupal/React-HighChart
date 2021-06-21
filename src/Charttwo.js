import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Charttwo() {

  const options = {
    chart: {
      type: "pie",
      spacingLeft: 50,
      size:'100%',
      center: ["35%", "50%"]
    },
    title: {
      text: '30% <br/> <small>X-Months</small>',
      verticalAlign:'middle',
      y:0,
      x:-50,
      style:{fontSize:'30px', textAlign:'center'},
      useHTML:true, // to use html in text

    },
    series: [
      {
        data: [
          { name: "test1", y: 1 },
          { name: "test2", y: 1 },
          { name: "test3", y: 1 }
        ]
      }
    ],
    plotOptions: {
      pie: {
        innerSize: "85%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        // center:['20%']  to move graph left and right 
      }
    }
  };
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}


// to move legewnd in middle
// legend: {
//     y: -168,
//     floating: true
//   },