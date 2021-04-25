class User{
	constructor(ID, first_name, last_name, email, address1, address2, city, state, zip, country){
		this.ID=ID;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.address1 = address1;
		this.address2 = address1;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.country = country;
	}
	setID(id){
		this.id=id;
	}
	setFirstName(first_name){
		this.first_name = first_name;
	}
	setEmail(email){
		this.emial=email;
	}
	setAddress1(address1){
		this.address1 = address1;
	}
	setAddress2(address2){
		this.address2=address2;
	}
	setCity(city){
		this.city = city;
	}
	setState(state){
		this.state=state;
	}
	setZip(zip){
		this.zip = zip;
	}
	setCountry(coutnry){
		this.coutnry=country;
	}

	getID(){
		return this.ID;
	}
	getFirstName(){
		return this.first_name;
	}
	getLastName(){
		return this.last_name;
	}
	getEmail(){
		return this.email;
	}
	getAddress1(){
		reutrn this.address1;
	}
	getAddress2(){
		reutrn this.address2;
	}
	getCity(){
		reutrn this.city;
	}
	getState(){
		reutrn this.state;
	}
	getZip(){
		reutrn this.zip;
	}
	getCountry(){
		return this.country;
	}

	getUserDetails(){
		return{
			ID: this.ID,
			first_name: this.first_name,
			last_name: this.last_name,
			email: this.email,
			address1: this.address1,
			address2: this.address2,
			city: this.city,
			state: this.state,
			zip: this.zip,
			country: this.coutnry
		};
	}
}

module.exports = User;