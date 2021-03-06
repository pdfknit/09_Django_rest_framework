import React from "react";
import {useLocation} from "react-router-dom"
import styled from 'styled-components';

export const Monotype = styled.p`
  font-family : Courier New, monospace ! important;
  font-size: 10px;
`;
const Page404 = () => {
    var location = useLocation()
    return (
        <div>
            <h1> 404 Page not found </h1>
            <h4>{location.pathname}</h4>
            <Monotype>
                8888888888888888888888888888888888888888888888888888888<br/>
                8888888888__________________888888888888888888888888888<br/>
                88888888___8888888888888888______8888888888888888888888<br/>
                88888888__88_____________888888____88888888888888888888<br/>
                888888__888___________________8888____88888888888888888<br/>
                88888__888_______________________8888___888888888888888<br/>
                8888__88____________________________888___8888888888888<br/>
                888__8_________________________________88__888888888888<br/>
                88__8____________________________________88__8888888888<br/>
                8__88_____________________________________88___88888888<br/>
                8__88______________________888888___________88___888888<br/>
                8__88________8888_________88___88____________88___88888<br/>
                8__88_______88_8888_______888_888_____________888__8888<br/>
                8__88______88___888________88888________________88__888<br/>
                8_888______8888888_______________________________8__888<br/>
                8_88_____________________________________________88__88<br/>
                8_88______________________________________________88_88<br/>
                8_88______________________________________________88__8<br/>
                8_88______________________________________________88__8<br/>
                8_88_______________________________________________8__8<br/>
                8_88_______________________________________________8__8<br/>
                8_88_______________________________________________8__8<br/>
                8_88_______________________________________________8_88<br/>
                88_88____________________________________88________8_88<br/>
                88__8_______________88888888888888888888888________8_88<br/>
                88__88______________8888888888888888888____________8_88<br/>
                888__88______________88888888______________________8_88<br/>
                8888__88___________________________________________8_88<br/>
                88888__888________________________________________88_88<br/>
                888888___88_______________________________________8_888<br/>
                8888888___88_____________________________________88_888<br/>
                888888888__8888________________________________88___888<br/>
                8888888888____8888___________________________888__88888<br/>
                888888888888_____8888_____________________8888___888888<br/>
                888888888888888_____88888888888____88888888____88888888<br/>
                8888888888888888888_________________________88888888888<br/>
                888888888888888888888888888888____888888888888888888888<br/>
                888888888888888888888888888888____888888888888888888888<br/>
                8888888888888888888888888888888___888888888888888888888<br/>
                8888888888888888888888888888888____88888888888888888888<br/>
                8888888888888888888888888888888____88888888888888888888<br/>
                88888888888888888888888888888888____8888888888888888888<br/>
                88888888888888888888888888888888____8888888888888888888<br/>
                8888888888888888888888888888888888888888888888888888888<br/>
            </Monotype>
        </div>
    )
        ;
};
export default Page404;






