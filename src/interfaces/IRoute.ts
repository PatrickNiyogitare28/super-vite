export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}