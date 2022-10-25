import {Container, Grid} from './style';
import { useEffect, useState } from 'react';
import { Oval } from  'react-loader-spinner';
import {Doughnut, Pie} from 'react-chartjs-2';
import 'chart.js/auto';
import { PieChart } from '../../components/PieChart/index';




export const Home = () => {

    const [estados, setEstados] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadApi = async() => {
        setLoading(true);
        const response = await fetch('https://api.brasil.io/dataset/covid19/caso/data?is_last=True&place_type=state', {
          method: 'GET',
          headers: {
            "Authorization": "Token 83f106c97c41ee22bef2de26c44c8eb474a4baf1",
          }
        });
        const json = await response.json();
        setEstados(json.results);
        setLoading(false);
        console.log(json);
    }
    
    useEffect(() => {
        loadApi();        
    }, []);

   



    

    return(
        <Container>
          {loading &&
           <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          }
          {!loading &&
            <Grid>
              {estados.map((item, index) => {
                return(
                  <div key={index}>
                    <p>Estado: {item.state} ;</p>
                    <p>População: {item.estimated_population} ;</p>
                    <p>Casos Confirmados: {item.confirmed} ;</p>
                    <p>Mortes: {item.deaths} ;</p>
                    <br/>
                    <PieChart item={item}/>
                  </div>
                );
              })}
            </Grid>
          }  
        </Container>
    );
}

/*<div style={{width: 300, height: 300}}>
              <Doughnut 
                data={{
                  labels: ['população', 'casos confirmado', 'mortes'],
                  datasets: [{
                    label: 'test',
                    backgroundColor: ['green', 'blue', 'red'],
                    borderColor: 'black',
                    borderWidth: 0.5,
                    data: [estados.estimated_population, estados.confirmed, estados.deaths]
                  }]
                }}
              />
            </div>*/