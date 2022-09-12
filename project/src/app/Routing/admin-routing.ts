export const ADMIN_ROUTES =[
    {path:'',Loadchildren:()=>import("../admin/admin.module").then(x=>x.AdminModule)}
];