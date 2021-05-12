import './styles/main.css';
import { Site, SideBar } from './components';
import { model } from './model';

const site = new Site('.content');

site.render(model);

const sidebar = new SideBar('#panel');
