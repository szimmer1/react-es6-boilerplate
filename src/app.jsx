import ReactDOM from 'react-dom';
import Timer from './timer/timer';
import Menu from './menu/menu';

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <Timer></Timer>,
        document.getElementById('timer')
    );

    ReactDOM.render(
        <Menu items={['Home','Posts','Store','About','Contact']} initial="Home"></Menu>,
        document.getElementById('menu')
    )

});