const bar_chart = echarts.init(document.getElementById('bar_chart'));

// 指定图表的配置项和数据:柱状图
const option_bar_chart = {
  title: {
    text: 'ECharts 柱状图'
  },
  tooltip: {},
  legend: {
    data: ['销量', '对手']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "毛衣", "大衣", "绒裤", "棉衣"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#f39',
      }
    },
    data: [5, 20, 6, 10, 40, 20, 33, 21, 9, 12]
  }, {
    name: '对手',
    type: 'line',
    itemStyle: {
      normal: {
        color: '#2ef',
      }
    },
    areaStyle: {
      normal: {
        color: '#f40',
        opacity: 0.6
      }
    },
    smooth: true,
    smoothMonotone: 'x',
    data: [20, 5, 10, 40, 20, 13, 21, 9, 12, 6]
  }]
};

bar_chart.setOption(option_bar_chart);

bar_chart.on('click', function (params) {
  const data = `${params.name}-${params.seriesName}-${params.value}`;
  alert(data);
});


//饼图

const pie_chart = echarts.init(document.getElementById('pie_chart'));

const option_pie_chart = {
  title: {
    text: 'ECharts 饼图'
  },
  backgroundColor: '#DBFFFA',
  series: [{
    name: '访问来源',
    type: 'pie',
    roseType: 'angle',
    radius: '55%',
    data: [
      {value: 293, name: '视频广告'},
      {value: 274, name: '联盟广告'},
      {value: 100, name: '邮件营销'},
      {value: 135, name: '直接访问'},
      {value: 400, name: '搜索引擎'}
    ]
  }],
  itemStyle: {
    emphasis: {
      shadowBlur: 100,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  }
};

pie_chart.setOption(option_pie_chart);

//散点图

const scatter_chart = echarts.init(document.getElementById('scatter_chart'));

const option_scatter_chart = {
  title: {
    text: 'ECharts 散点图'
  },
  legend: {
    data: ['scatter', 'scatter2']
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [{   // 这个dataZoom组件，默认控制x轴。
    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    xAxisIndex: 0,
    start: 10,      // 左边在 10% 的位置。
    end: 60         // 右边在 60% 的位置。
  }, {   // 这个dataZoom组件，也控制x轴。
    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
    xAxisIndex: 0,
    start: 10,      // 左边在 10% 的位置。
    end: 60         // 右边在 60% 的位置。
  }, {   // 这个dataZoom组件，默认控制x轴。
    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    yAxisIndex: 0,
    start: 20,      // 左边在 10% 的位置。
    end: 100         // 右边在 60% 的位置。
  }, {   // 这个dataZoom组件，也控制x轴。
    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
    yAxisIndex: 0,
    start: 20,      // 左边在 10% 的位置。
    end: 100         // 右边在 60% 的位置。
  }],
  series: [{
    name: 'scatter',
    type: 'scatter', // 这是个『散点图』
    itemStyle: {
      normal: {
        opacity: 0.8
      }
    },
    symbolSize: function (val) {
      return val[2] * 30;
    },
    data: [["14.616", "7.241", "0.896"], ["3.958", "5.701", "0.955"], ["2.768", "8.971", "0.669"], ["9.051", "9.710", "0.171"], ["14.046", "4.182", "0.536"], ["12.295", "1.429", "0.962"], ["4.417", "8.167", "0.113"], ["0.492", "4.771", "0.785"], ["7.632", "2.605", "0.645"], ["14.242", "5.042", "0.368"]]
  }, {
    name: 'scatter2',
    type: 'scatter', // 这是个『散点图』
    itemStyle: {
      normal: {
        opacity: 0.8
      }
    },
    symbolSize: function (val) {
      return val[2] * 30;
    },
    data: [["4.616", "5.241", "0.96"], ["13.958", "2.701", "0.55"], ["12.768", "5.971", "0.69"], ["19.051", "19.710", "0.71"], ["1.046", "5.182", "0.36"], ["1.295", "11.429", "0.62"], ["4.417", "4.167", "0.13"], ["10.492", "14.771", "0.85"], ["7.32", "12.605", "0.45"], ["1.242", "15.042", "0.68"]]
  }]
};

scatter_chart.setOption(option_scatter_chart);

const line_chart = echarts.init(document.getElementById('line_chart'));

// 指定图表的配置项和数据:柱状图
const option_line_chart = {
  title: {
    text: 'ECharts 折线图'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'line',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

line_chart.setOption(option_line_chart);

const dataBJ = [[14,59,56,2.6,90, 89, 112]];

const radar_chart = echarts.init(document.getElementById('radar_chart'));

const option_radar_chart = {
  title: {
    text: 'ECharts 雷达图'
  },
  radar: {
    indicator: [
      {name: 'AQI', max: 300},
      {name: 'PM2.5', max: 250},
      {name: 'PM10', max: 300},
      {name: 'CO', max: 5},
      {name: 'NO2', max: 200},
      {name: 'TEST', max: 400},
      {name: 'LO', max: 300}
    ],
    shape: 'circle',
    splitNumber: 5,
    name: {
      textStyle: {
        color: 'rgb(238, 197, 102)'
      }
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
          'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
          'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [{
    name: '北京',
    type: 'radar',
    lineStyle: {
      normal: {
        width: 1,
        opacity: 0.5
      }
    },
    data: dataBJ,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#29743C'
      }
    },
    areaStyle: {
      normal: {
        opacity: 0.23
      }
    }
  }]
};

radar_chart.setOption(option_radar_chart);