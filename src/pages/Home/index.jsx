import {Container, Grid} from './style';
import { useEffect, useState } from 'react';
import {Doughnut, Pie} from 'react-chartjs-2';
import 'chart.js/auto';
import { PieChart } from '../../components/PieChart/index';
import { LoadingEffect } from '../../components/LoadingEffect/index';

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
           <LoadingEffect/>
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

