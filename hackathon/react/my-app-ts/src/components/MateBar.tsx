import React from 'react'
import {userPost} from "../types/User"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type Props ={
    mates: userPost[];
}


const MateBar = async(props :Props) => {
    
    const labels = props.mates.map((item) =>{
        return(
            item.name
        )
    })

    const datas = props.mates.map((item) =>{
        return(
            item.points
        )
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: datas,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    // const options: {} = {
    //     maintainAspectRatio: false,
    // };
    
    // const divStyle: React.CSSProperties = {
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     margin: "10px",
    //     width: "500px",
    // };

    return (
        <div className="bar"> 
        {/* style={divStyle} */}
            <Bar
                id="chart-key"
                // height={300}
                // width={300}
                options={options}
                data={data}
            />
        </div>
    )
}

export default MateBar
