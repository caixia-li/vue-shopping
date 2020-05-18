export default {
    state:{
        token:'',
        username:'',
        type_flag:true,
        list:[],
        data:[]
    },
    mutations:{
        updated_token(state,token) {
            state.token = token;
        },
        updated_username(state,username) {
            state.username = username;
        },
        updated_list(state,list){
            state.list = list
        },
        updated_data(state,data){
            state.data = data
        }
    },
    actions:{
        updated_token_async({commit},token){
            commit('updated_token',token);
        },
        updated_username_async({commit},username){
            commit('updated_username',username);
        },
        updated_list_async({commit},list){
            commit('updated_list',list)
        },
        updated_data_async({commit},data){
            commit('updated_data',data)
        }
    }
}