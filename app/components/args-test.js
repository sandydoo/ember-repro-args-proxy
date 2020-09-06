import Component from '@glimmer/component';

export default class ArgsTestComponent extends Component {
  constructor() {
    super(...arguments);

    let proxy = new Proxy(this.args, {
      get(_target, prop) {
        return Reflect.get(_target, prop);
      }
    });

    console.log(proxy.exists);
    console.log(proxy.doesntExist);
  }
}
