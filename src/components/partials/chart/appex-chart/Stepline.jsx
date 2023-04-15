import dynamic from 'next/dynamic'
import useDarkMode from '@/hooks/useDarkMode'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Stepline = () => {
  const [isDark] = useDarkMode()
  const series = [
    {
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ]
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? '#CBD5E1' : '#475569',
          fontFamily: 'Inter',
        },
      },
    },
    grid: {
      show: true,
      borderColor: isDark ? '#334155' : '#e2e8f0',
      position: 'back',
    },
    legend: {
      labels: {
        colors: isDark ? '#CBD5E1' : '#475569',
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: isDark ? '#CBD5E1' : '#475569',
          fontFamily: 'Inter',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
  }

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        height="350"
        width="100%"
      />
    </div>
  )
}

export default Stepline
