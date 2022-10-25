import {Container} from './style';
import { Oval } from  'react-loader-spinner';

export const LoadingEffect = () => {
    return(
        <Container>
            <Oval
              height='20%'
              width='20%'
              color="grey"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
        </Container>
    );
}