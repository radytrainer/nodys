let app = new Vue({
    el: '#app-add',
    data: {
        isUserExist: true,
        users: [],
        first_name: "",
        last_name: "",
        age: 0,
        province: ""
    },

    methods: {
        addUser: function () {
            let url = "http://localhost:3000/users";
            let user = {
                first_name: this.first_name,
                last_name: this.last_name,
                age: this.age,
                province: this.province
            }
            axios.post(url, user).then(res => {
                console.log(res.data)
                location.href = "http://localhost:3000"
            })
        },


    },
})