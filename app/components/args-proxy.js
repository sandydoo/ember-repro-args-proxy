import Component from '@glimmer/component';

export default class ArgsProxyComponent extends Component {
  constructor() {
    super(...arguments);

    let proxy = new Proxy(this.args, {
      get() {
        // return 'staticProp';
        return Reflect.get(...arguments);
      },

      getOwnPropertyDescriptor() {
        return Reflect.getOwnPropertyDescriptor(...arguments);
      }
    });

    console.log(
`Getting a defined prop from args.
Expecting ‘definedProp’ to be ‘true’.
definedProp = ${proxy.definedProp}`
    );

    console.log(
`Getting an undefined prop from args. Expected to get an undefined value.
undefinedProp = ${proxy.undefinedProp}`
    );
  }
}
