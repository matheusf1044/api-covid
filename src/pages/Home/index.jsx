import {Container} from './style';
import { useEffect, useState } from 'react';
import { Oval } from  'react-loader-spinner';


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
        console.log(estados);
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
            <div>
              <ul>
                {estados.map((item, index) => {
                  return(
                    <li>
                      Estado: {item.state} ;
                      População: {item.estimated_population} ;
                      Casos Confirmados: {item.confirmed} ;
                      Mortes: {item.deaths} ;
                    </li>
                  )
                })}
              </ul>
            </div>
          }        
        </Container>
    );
}