export const AUTHENTICATION_ROUTING=[
    {path :'',LoadChildren:()=>import("../authentication/authentication.module").then(x=>x.AuthenticationModule)}
];