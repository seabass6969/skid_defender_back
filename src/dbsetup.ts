import {connectionString} from './settings'
import {Client} from 'pg';
declare module 'pg';

interface MC_Question_structure {
    id: number;
    question: String;
    a: String;
    b: String;
    c: String;
    d: String;
    ans: String;
}
interface MC_Question_arr {
    [key:number]:{
    id: number;
    question: String;
    a: String;
    b: String;
    c: String;
    d: String;
    ans: String;
    }
}
function create_MC_object<T extends MC_Question_arr> (object: T){return object}

export let DB_connect = async ()=> {
    const client = new Client(connectionString)
    await client.connect()
let arrayout: MC_Question_structure[] = [];
    let result = await client.query({rowMode: 'array',text:"SELECT * FROM skid_question_mc"})

return result.rows
}
