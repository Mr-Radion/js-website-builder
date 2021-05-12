import { Site, SideBar } from './components';

export class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    const site = new Site('.content');
    site.render(this.model);
    const updateCallback = (newBlock) => {
      this.model.push(newBlock);
      site.render(this.model);
    };
    new SideBar('#panel', updateCallback);
  }
}
