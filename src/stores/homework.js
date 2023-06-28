import {defineStore} from 'pinia';
import { transformWithEsbuild } from 'vite';
import {ref} from 'vue';


export const DohomeworkStore=defineStore('homework',()=>{
    const creatid=ref(3)
    const answer=ref([
        {
            id:1,
            title:' first question',
            isCompleted:false,
        },
        {
            id:2,
            title: 'Second question',
            isCompleted:false,

        }
    ]);
    function toggle(id){
        answer.value=answer.value.map((newasn)=>{
            if(id==newasn.id){
                newasn.isCompleted=!newasn.isCompleted;
            }
            return newasn;
        })
    }    

    function create(title){
       answer.value.push({
        id:creatid.value++,
        title:title,
        isCompleted:false,
       })
    }
    function remove(title,id){
        answer.value.pop({
            id,
            title,
            isCompleted:false
        })
    }
    function update(title){
        answer.value.push({
            id:this.id,
            title,
            isCompleted:false
        })
    }  
    return{answer,create,toggle,remove,update}
})