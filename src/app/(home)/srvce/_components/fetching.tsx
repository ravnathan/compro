import Details from "./details";

export default async function Fetching() {

    const fet = await fetch('https://cdn.contentful.com/spaces/3082rkpnwhx1/environments/master/entries?access_token=dnOO9cIyXl4WmtKvAsb68OeGlPNjWv2hRR49_-_Cx80')
    const dat = await fet.json()


    return (
        <div>
            <Details name={dat.items[2].fields.name} content={dat.items[2].fields.content.content[0].content[0].value} img={dat.includes.Asset[0].fields.file.url}/>
            <Details name={dat.items[1].fields.name} content={dat.items[1].fields.content.content[0].content[0].value} img={dat.includes.Asset[1].fields.file.url}/>
            <Details name={dat.items[0].fields.name} content={dat.items[0].fields.content.content[0].content[0].value} img={dat.includes.Asset[2].fields.file.url}/>
        </div>
    )
}