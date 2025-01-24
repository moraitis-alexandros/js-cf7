const user = {
    firstname: "George",
    lastname: "Koukos",
    getFirstname: function(){
        return this.firstname
    },

    getFullname: function() {
        return `${this.firstname}, ${this.lastname}`
    }
}

console.log(user.getFirstname())
console.log(user.getFullname())