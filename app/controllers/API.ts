const BASE_URL: string = 'https://racing-server.herokuapp.com/';

type t_methods = {
    get?:string
    post?: string
}

const headers: object = {
    'Content-Type': 'application/json'
}

const methods: t_methods = {
    get: 'GET',
    post: 'POST'
}

export async function getRacers(){
    return await fetch(
        BASE_URL + 'racers',
        {
            method: methods.get,
            ...headers
        }
    )
    .then(
        response => {
            if(response.status != 200){
                throw new Error('Something went wrong.');
            }

            return response.json();
        }
    )
}