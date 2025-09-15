import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      home: {
        welcome: string;
        createProperty: string;
      };
      property: {
        price: string;
        description: string;
      };
    };
  }
}
