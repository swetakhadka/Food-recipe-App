const gtag = window.gtag


export function trackEvents(){
    window.gtag('event',event_categoty,{
        event_categoty: sub_sub_category,
        event_label:getValue,
    })
}