import { ref } from "vue";

const isAuthed = ref(false);

export function useAuth() {

    const onLogin = (email, password) => {
        if (email == 'admin@domain.com' && password == 'pass') {
            isAuthed.value = true;
        } else {
            alert('parol yoki login xato!');
        }
    }

    const onLogout = () => {
        isAuthed.value = false;
    }
    return { isAuthed, onLogin, onLogout };
}