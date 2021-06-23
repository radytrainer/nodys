
let app = new Vue({
    el: '#app',
    data: {
       isUserExist: true,
       users: [],
       user_id: 0
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers: function() {
            let url = "http://localhost:3000/users";
            axios.get(url).then( res => {
                this.users = res.data;
            })
        },

        getSingleUser: function () {
        
            let url = "http://localhost:3000/users/" + this.user_id;
            axios.get(url).then( res => {
                if(res.data.length > 0) {
                    this.users = res.data;
                    this.isUserExist = true;
                }else {
                    this.isUserExist = false;
                }
            })

        },

        deleteUser: function(event) {
            let user_id = 0;
            if(event.target.id === "delete") {
                user_id = parseInt(event.target.previousElementSibling.textContent)
            }

            let url = "http://localhost:3000/users/" + user_id;
            axios.delete(url).then( res => {
               console.log(res.data)
               location.href="http://localhost:3000/";
            })
        }
    },
})

