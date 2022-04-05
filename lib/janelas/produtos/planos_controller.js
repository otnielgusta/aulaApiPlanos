

module.exports = {
    async getPlanos(setPlanos, setIsLoading) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let config = {
            method: 'GET',
            headers: headers
        }

        setTimeout(() => {
            fetch('http://localhost/api_planos/planos.php', config)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPlanos(data);
                    setIsLoading(false)

                });
        }, 2000)

    }
}