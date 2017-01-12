var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
           {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
           {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
           {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
           {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
           {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
           {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
           {"period": "2006 Q4", "licensed": 3245, "sorned": null},
           {"period": "2005 Q4", "licensed": 3289, "sorned": null}
      ];
      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'Off the road'],
        lineColors:['#8075c4','#6883a3']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: 'BOI', value: 25 },
          {label: 'PMO', value: 40 },
          {label: 'AMO', value: 25 },
          {label: 'AGG', value: 10 }
        ],
          colors: ['#41cac0', '#49e2d7', '#34a39b'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {period: '2010 Q1', boi: 2666, pmo: null, amo: 2647},
          {period: '2010 Q2', boi: 2778, pmo: 2294, amo: 2441},
          {period: '2010 Q3', boi: 4912, pmo: 1969, amo: 2501},
          {period: '2010 Q4', boi: 3767, pmo: 3597, amo: 5689},
          {period: '2011 Q1', boi: 6810, pmo: 1914, amo: 2293},
          {period: '2011 Q2', boi: 5670, pmo: 4293, amo: 1881},
          {period: '2011 Q3', boi: 4820, pmo: 3795, amo: 1588},
          {period: '2011 Q4', boi: 15073, pmo: 5967, amo: 5175},
          {period: '2012 Q1', boi: 10687, pmo: 4460, amo: 2028},
          {period: '2012 Q2', boi: 8432, pmo: 5713, amo: 1791}
        ],

          xkey: 'period',
          ykeys: ['boi', 'pmo', 'amo'],
          labels: ['BOI', 'PMO', 'AMO'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#4a8bc2', '#ff6c60', '#a9d86e'],
          fillOpacity: 0.5,
          smooth: true
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'January', geekbench: 136},
          {device: 'February', geekbench: 137},
          {device: 'March', geekbench: 275},
          {device: 'April', geekbench: 380},
          {device: 'May', geekbench: 655},
          {device: 'June', geekbench: 1571}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#6883a3']
      });

      // new Morris.Line({
      //   element: 'examplefirst',
      //   xkey: 'year',
      //   ykeys: ['value'],
      //   labels: ['Value'],
      //   data: [
      //     {year: '2008', value: 20},
      //     {year: '2009', value: 10},
      //     {year: '2010', value: 5},
      //     {year: '2011', value: 5},
      //     {year: '2012', value: 20}
      //   ]
      // });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




