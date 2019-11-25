export default {
    state: {
        drawer: false,
        notification: {
            display: false,
            text: "Natification placeholder text ",
            timeout: 3000,
            class: "success",
        },
        displaySearchList: false,
        newListForm: false,
    },
    mutations: {
        SET_DRAWER: (state, payload) => {
            state.drawer = payload;
        },
        SET_NOTIFICATION: (state, { display, text, alertClass }) => {
            state.notification.display = display;
            state.notification.text = text;
            state.notification.class = alertClass;
        },
        SET_DISPLAY_SEARCH_LIST: (state, payload) => {
            state.displaySearchList = payload;
        },
        SET_NEW_LIST_FORM: (state, payload) => {
            state.newListForm = payload;
        }
    },
    getters: {
        DRAWER: state => {
            return state.drawer;
        },
        NOTIFICATION: state => {
            return state.notification;
        },
        DISPLAY_SEARCH_LIST: state => {
            return state.displaySearchList;
        },
        NEW_LIST_FORM: state => {
            return state.newListForm;
        }
    },
    actions: {

    }
};