import { http } from './config'

export default {
    listar: () => {
        return http.get('produto')
    }
    ,
    salvar: (produto) => {
        return http.post('produto',produto)
    }
}