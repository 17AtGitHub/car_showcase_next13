
export async fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '2f27a19188msh38800e62bdd4622p17a8e5jsn421b98719d5f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}