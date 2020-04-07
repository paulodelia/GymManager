module.exports = {
    age(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);
        
        let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
        const month = today.getUTCMonth() - birthDate.getUTCMonth();
        const day = today.getUTCDay() - birthDate.getUTCDay();

        return month < 0 || (month == 0 && day < 0) ?  age - 1 : age;
    },

    date(timestamp) {
        const date = new Date(timestamp);
        
        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);  
        const day = `0${date.getUTCDate()}`.slice(-2);  

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
        
    }
}