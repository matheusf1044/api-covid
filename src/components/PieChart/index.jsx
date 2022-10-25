import {Container} from './style';
import {Pie} from 'react-chartjs-2';



export const PieChart = ({item}) => {
    return(
        <Container>
            <Pie 
                data={{
                    labels: ['população', 'casos confirmado', 'mortes'],
                    datasets: [{
                    label: 'test',
                    backgroundColor: ['green', 'blue', 'red'],
                    borderColor: 'black',
                    borderWidth: 0.5,
                    data: [item.estimated_population, item.confirmed, item.deaths]
                    }]
                }}
            />
        </Container>
    );
}