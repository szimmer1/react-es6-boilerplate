import ReactDOM from 'react-dom';
import Timer from './timer/timer';
import Menu from './menu/menu';

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <Menu items={['Home','Blog','Products','About']}></Menu>,
        document.getElementById('menu')
    );

    ReactDOM.render(
        <Timer times={[5,10,15]}></Timer>,
        document.getElementById('timer')
    );

});