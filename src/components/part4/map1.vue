<!-- <template>
  <div ref="chartRef" style="width: 100%; height: 500px"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import 'echarts/extension-src/bmap';
export default {
  name: 'Map',
  setup() {
    const chartRef = ref(null);
    
    onMounted(() => {
      const chart = echarts.init(chartRef.value);
      const data = [
        { name: '海门', value: 112, text: '1111' },
        { name: '鄂尔多斯', value: 122, text: '2222' },
      ];
    
      const geoCoordMap = {
        海门: [121.15, 31.89],
        鄂尔多斯: [109.781327, 39.608266],
      };
      
      const convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              text: data[i].text,
            });
          }
        }
        return res;
      };
    
      const option = {
        backgroundColor: 'transparent',
        title: {
          text: '中国科幻产业布局',
          subtext: '',
          sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            var data = params.data;
            var name = data.name;
            var value = data.value[2];
            var text = data.text;
            return name + ': ' + value + ' ' + text;
          }
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
                {
                        featureType: 'water',
                        elementType: 'all',
                        stylers: {
                          color: '#044161'
                        }
                      },
                      {
                        featureType: 'land',
                        elementType: 'all',
                        stylers: {
                          color: '#004981'
                        }
                      },
                      {
                        featureType: 'boundary',
                        elementType: 'geometry',
                        stylers: {
                          color: '#064f85'
                        }
                      },
                      {
                        featureType: 'railway',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'highway',
                        elementType: 'geometry',
                        stylers: {
                          color: '#004981'
                        }
                      },
                      {
                        featureType: 'highway',
                        elementType: 'geometry.fill',
                        stylers: {
                          color: '#005b96',
                          lightness: 1
                        }
                      },
                      {
                        featureType: 'highway',
                        elementType: 'labels',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'arterial',
                        elementType: 'geometry',
                        stylers: {
                          color: '#004981'
                        }
                      },
                      {
                        featureType: 'arterial',
                        elementType: 'geometry.fill',
                        stylers: {
                          color: '#00508b'
                        }
                      },
                      {
                        featureType: 'poi',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'green',
                        elementType: 'all',
                        stylers: {
                          color: '#056197',
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'subway',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'manmade',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'local',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'arterial',
                        elementType: 'labels',
                        stylers: {
                          visibility: 'off'
                        }
                      },
                      {
                        featureType: 'boundary',
                        elementType: 'geometry.fill',
                        stylers: {
                          color: '#029fd4'
                        }
                      },
                      {
                        featureType: 'building',
                        elementType: 'all',
                        stylers: {
                          color: '#1a5787'
                        }
                      },
                      {
                        featureType: 'label',
                        elementType: 'all',
                        stylers: {
                          visibility: 'off'
                        }
                      }
            ],
          },
        },
        series: [
           {
              name: 'pm2.5',
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: convertData(data),
              encode: {
                value: 2,
                tooltip: 3 // 添加tooltip字段
              },
              symbolSize: function (val) {
                return val[2] / 10;
              },
              label: {
                formatter: '{b}',
                position: 'right'
              },
              itemStyle: {
                color: '#ddb926'
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
              {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                encode: {
                  value: 2
                },
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                label: {
                  formatter: '{b}',
                  position: 'right'
                },
                itemStyle: {
                  color: '#ddb926'
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(
                  data
                    .sort(function (a, b) {
                      return b.value - a.value;
                    })
                    .slice(0, 6)
                ),
                encode: {
                  value: 2
                },
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                },
                itemStyle: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                },
                zlevel: 1
              },
    
        ],
      };
    
      chart.setOption(option);
    });
    
    return {
      chartRef,
    };
  },
};
</script> -->