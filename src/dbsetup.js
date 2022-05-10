import {connectionString} from './settings.js'
import pg from 'pg';


export let DB_connect = async ()=> {
    const client = new pg.Client(connectionString)
    await client.connect()
let arrayout = [];
    let result = await client.query({rowMode: 'array',text:"SELECT * FROM skid_question_mc"})
    
return result.rows
}
